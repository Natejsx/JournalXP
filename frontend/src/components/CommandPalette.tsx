import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Book,
  Lock,
  Archive,
  Compass,
  MessageCircle,
  CalendarCheck,
  ListChecks,
  Sparkles,
  Timer,
  ShoppingBag,
  BarChart3,
  Trophy,
  User,
  Info,
  Users,
  Code,
  Heart,
  Bell,
  FileText,
  Target,
  Home,
  Icon
} from "lucide-react";

const PAGES = [
  { name: "Home", path: "/", Icon: Home},
  { name: "Journal", path: "/journal", Icon: Book },
  { name: "Vault", path: "/vault", Icon: Lock },
  { name: "Reflection Archive", path: "/reflection-archive", Icon: Archive },
  { name: "Guided Reflection", path: "/guided-reflection", Icon: Compass },
  { name: "Chat with Sunday", path: "/sunday", Icon: MessageCircle },
  { name: "Daily Tasks", path: "/tasks", Icon: CalendarCheck },
  { name: "Habit Builder", path: "/habits", Icon: ListChecks },
  { name: "Meditation Room", path: "/meditation", Icon: Sparkles },
  { name: "Pomodoro Timer", path: "/pomo", Icon: Timer },
  { name: "Rewards Shop", path: "/store", Icon: ShoppingBag },
  { name: "Insights", path: "/insights", Icon: BarChart3 },
  { name: "Achievements", path: "/achievements", Icon: Trophy },
  { name: "Profile", path: "/profile", Icon: User },
  { name: "About JournalXP", path: "/about", Icon: Info },
  { name: "Community Reflections", path: "/community", Icon: Users },
  { name: "Meet the Team", path: "/team", Icon: Code },
  { name: "Support Us", path: "/donate", Icon: Heart },
  { name: "Notifications", path: "/notifications", Icon: Bell },
  { name: "Notebook", path: "/notebook", Icon: FileText },
] as const;

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleSelect(path: string) {
    navigate(path);
    setOpen(false);
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Go to page..." />
      <CommandList>
        <CommandEmpty>No pages found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {PAGES.map(({ name, path, Icon }) => (
            <CommandItem
              key={path}
              value={name}
              onSelect={() => handleSelect(path)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
