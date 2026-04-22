import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, X, RotateCcw, Save, ArrowLeft, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/Nav";
import { useUserData } from "@/context/UserDataContext";
import { useTheme } from "@/context/ThemeContext";
import { useToast } from "@/hooks/useToast";
import { authFetch } from "@/lib/authFetch";
import { welcomeQuotes } from "@/data/welcomeQuotes";

const MIN = 3;
const MAX = 8;

const AffirmationsPage = () => {
  const { userData, refreshUserData } = useUserData();
  const { theme } = useTheme();
  const { showToast } = useToast();
  const navigate = useNavigate();

  // Each item: { text, isCustom }
  const [customPool, setCustomPool] = useState<{ text: string; isCustom: boolean }[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [inputValue, setInputValue] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Initialise from saved preferences
  useEffect(() => {
    const saved = userData?.preferences?.customAffirmations;
    if (saved && saved.length >= MIN) {
      // Mark items that aren't in the default pool as custom
      const extras = saved.filter((q) => !welcomeQuotes.includes(q));
      const pool = extras.map((t) => ({ text: t, isCustom: true }));
      setCustomPool(pool);
      setSelected(new Set(saved));
    }
  }, [userData]);

  const allItems = [
    ...welcomeQuotes.map((q) => ({ text: q, isCustom: false })),
    ...customPool,
  ];

  const toggle = (text: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(text)) {
        next.delete(text);
      } else {
        if (next.size >= MAX) {
          showToast({
            title: "Limit reached",
            description: `You can select up to ${MAX} affirmations`,
            variant: "destructive",
          });
          return prev;
        }
        next.add(text);
      }
      return next;
    });
  };

  const addCustom = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    if (trimmed.length > 200) {
      showToast({
        title: "Too long",
        description: "Keep it under 200 characters",
        variant: "destructive",
      });
      return;
    }
    if (allItems.some((i) => i.text === trimmed)) {
      showToast({
        title: "Already exists",
        description: "That affirmation is already in the list",
        variant: "destructive",
      });
      return;
    }
    setCustomPool((prev) => [...prev, { text: trimmed, isCustom: true }]);
    setSelected((prev) => {
      if (prev.size < MAX) return new Set([...prev, trimmed]);
      return prev;
    });
    setInputValue("");
  };

  const removeCustom = (text: string) => {
    setCustomPool((prev) => prev.filter((i) => i.text !== text));
    setSelected((prev) => {
      const next = new Set(prev);
      next.delete(text);
      return next;
    });
  };

  const handleReset = () => {
    setSelected(new Set());
    setCustomPool([]);
    setInputValue("");
  };

  const handleSave = async () => {
    const count = selected.size;
    if (count !== 0 && count < MIN) {
      showToast({
        title: "Too few selected",
        description: `Choose at least ${MIN} affirmations, or reset to use the defaults`,
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    try {
      // Empty array = use defaults (backend/banner will fall back)
      const payload = selected.size >= MIN ? Array.from(selected) : [];
      await authFetch("/profile/preferences", {
        method: "PATCH",
        body: JSON.stringify({ customAffirmations: payload }),
      });
      await refreshUserData();
      showToast({
        title: "Saved!",
        description:
          payload.length === 0
            ? "Reverted to default affirmations"
            : "Your affirmations have been updated",
      });
      navigate("/home");
    } catch (error: any) {
      showToast({
        title: "Error",
        description: error.message || "Failed to save",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const count = selected.size;
  const canSave = count === 0 || (count >= MIN && count <= MAX);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/home"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <div
              className="p-2 rounded-xl"
              style={{ background: theme.colors.gradient }}
            >
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold">My Affirmations</h1>
          </div>
          <p className="text-muted-foreground text-sm">
            Pick {MIN}-{MAX} affirmations to rotate on your welcome banner, or write your own.
            Leave none selected to use the defaults.
          </p>
        </motion.div>

        {/* Counter + actions */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm font-medium">
            <span
              style={{ color: count > MAX || (count > 0 && count < MIN) ? "var(--destructive)" : theme.colors.primary }}
            >
              {count}
            </span>
            <span className="text-muted-foreground"> / {MAX} selected</span>
          </span>
          <Button variant="ghost" size="sm" onClick={handleReset} className="gap-2 text-muted-foreground">
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </Button>
        </div>

        {/* Add custom input */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg p-4"
          style={{ borderColor: `${theme.colors.primary}30` }}
        >
          <textarea
            placeholder="Write your own affirmation..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                addCustom();
              }
            }}
            maxLength={200}
            rows={3}
            className="w-full resize-none bg-transparent text-sm placeholder:text-muted-foreground/60 focus:outline-none leading-relaxed"
          />
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
            <span className="text-xs text-muted-foreground/60">
              {inputValue.length} / 200
            </span>
            <Button
              onClick={addCustom}
              disabled={!inputValue.trim()}
              size="sm"
              style={{ background: theme.colors.primary }}
              className="text-white hover:opacity-90 gap-1.5"
            >
              <Plus className="h-3.5 w-3.5" />
              Add
            </Button>
          </div>
        </motion.div>

        {/* Affirmation cards */}
        <div className="h-[400px] overflow-y-auto pr-1 space-y-3 mb-8">
          <AnimatePresence initial={false}>
            {allItems.map(({ text, isCustom }) => {
              const isSelected = selected.has(text);
              return (
                <motion.div
                  key={text}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => toggle(text)}
                  className={`relative flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all select-none ${
                    isSelected
                      ? "border-transparent shadow-sm"
                      : "border-border hover:border-muted-foreground/40 bg-card"
                  }`}
                  style={
                    isSelected
                      ? { background: `${theme.colors.primary}18`, borderColor: theme.colors.primary }
                      : undefined
                  }
                >
                  {/* Checkbox */}
                  <div
                    className={`mt-0.5 shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                      isSelected ? "border-transparent" : "border-muted-foreground/40"
                    }`}
                    style={isSelected ? { background: theme.colors.primary, borderColor: theme.colors.primary } : undefined}
                  >
                    {isSelected && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                  </div>

                  <p className={`text-sm leading-relaxed flex-1 ${isSelected ? "font-medium" : "text-muted-foreground"}`}>
                    {text}
                  </p>

                  {/* Remove button for custom entries */}
                  {isCustom && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeCustom(text);
                      }}
                      className="shrink-0 text-muted-foreground hover:text-destructive transition-colors p-0.5"
                      aria-label="Remove custom affirmation"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Save bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="sticky bottom-6 flex gap-3 justify-end"
        >
          <Button variant="outline" asChild>
            <Link to="/home">Cancel</Link>
          </Button>
          <Button
            onClick={handleSave}
            disabled={isSaving || !canSave}
            className="gap-2 text-white"
            style={{ background: theme.colors.primary }}
          >
            <Save className="h-4 w-4" />
            {isSaving ? "Saving..." : count === 0 ? "Use Defaults" : "Save Affirmations"}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AffirmationsPage;
