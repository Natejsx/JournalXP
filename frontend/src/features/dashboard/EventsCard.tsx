import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

export const EventsCard = () => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)",
      }}
      transition={{ duration: 0.2 }}
    >
      <Link to="/events" className="block h-full">
        <Card className="overflow-hidden h-full bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 border-violet-100 hover:border-violet-300 transition-colors">
          <CardContent className="p-6 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
              <CalendarDays className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Events
            </h3>
            <p className="text-gray-600 text-sm">
              IRL experiences and community meetups powered by JournalXP
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
