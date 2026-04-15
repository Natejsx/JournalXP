import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck } from "lucide-react";

export const DailyTasksCard = () => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 20px 40px -8px rgba(99, 102, 241, 0.25)",
      }}
      transition={{ duration: 0.2 }}
    >
      <Link to="/tasks" className="block h-full">
        <Card className="overflow-hidden h-full bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-md shadow-slate-200/60 hover:bg-white/90 hover:border-slate-300/80 transition-all duration-300">
          <CardContent className="p-6 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
              <CalendarCheck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Daily Tasks
            </h3>
            <p className="text-gray-500 text-sm">
              Stay organized, productive, reflect daily, and level up your mental wellness.
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
