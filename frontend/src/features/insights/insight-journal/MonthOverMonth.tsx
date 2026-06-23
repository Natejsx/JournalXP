import { TrendingUp } from "lucide-react";

interface MonthComparison {
  thisMonth: {
    count: number;
    totalWords: number;
    avgWords: number;
    uniqueMoods: number;
    streak: number;
  };
  lastMonth: {
    count: number;
    totalWords: number;
    avgWords: number;
    uniqueMoods: number;
    streak: number;
  };
  changes: {
    countChange: number;
    wordsChange: number;
    avgWordsChange: number;
    moodsChange: number;
    streakChange: number;
  };
}

interface MonthOverMonthProps {
  monthComparison: MonthComparison;
}

const glassCard =
  "rounded-2xl border border-indigo-200/60 bg-white/50 backdrop-blur-xl shadow-lg shadow-indigo-500/5 ring-1 ring-indigo-100/80";
const glassTile = "rounded-xl border backdrop-blur-sm p-4 text-center";

function ChangeBadge({ value, suffix = "%" }: { value: number; suffix?: string }) {
  if (value === 0) return null;
  const positive = value > 0;
  return (
    <span
      className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
        positive
          ? "bg-emerald-100/80 text-emerald-700 border border-emerald-200/60"
          : "bg-red-100/80 text-red-600 border border-red-200/60"
      }`}
    >
      {positive ? "+" : ""}
      {value}
      {suffix}
    </span>
  );
}

export const MonthOverMonth = ({ monthComparison }: MonthOverMonthProps) => {
  const { thisMonth, changes } = monthComparison;

  return (
    <div className={`${glassCard} p-5 sm:p-6`}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md shadow-indigo-500/30">
          <TrendingUp className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-base font-semibold text-gray-800">
          Month-Over-Month Progress
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className={`${glassTile} bg-indigo-100/70 border-indigo-200/60`}>
          <p className="text-2xl font-bold text-indigo-700">{thisMonth.count}</p>
          <p className="text-xs text-indigo-500 mt-0.5">Entries</p>
          <ChangeBadge value={changes.countChange} />
        </div>

        <div className={`${glassTile} bg-purple-100/70 border-purple-200/60`}>
          <p className="text-2xl font-bold text-purple-700">
            {thisMonth.totalWords.toLocaleString()}
          </p>
          <p className="text-xs text-purple-500 mt-0.5">Total Words</p>
          <ChangeBadge value={changes.wordsChange} />
        </div>

        <div className={`${glassTile} bg-blue-100/70 border-blue-200/60`}>
          <p className="text-2xl font-bold text-blue-700">{thisMonth.avgWords}</p>
          <p className="text-xs text-blue-500 mt-0.5">Avg Words</p>
          <ChangeBadge value={changes.avgWordsChange} />
        </div>

        <div className={`${glassTile} bg-teal-100/70 border-teal-200/60`}>
          <p className="text-2xl font-bold text-teal-700">{thisMonth.uniqueMoods}</p>
          <p className="text-xs text-teal-500 mt-0.5">Unique Moods</p>
          <ChangeBadge value={changes.moodsChange} suffix="" />
        </div>

        <div className={`${glassTile} bg-orange-100/70 border-orange-200/60`}>
          <p className="text-2xl font-bold text-orange-600">{thisMonth.streak}</p>
          <p className="text-xs text-orange-500 mt-0.5">Best Streak</p>
          <ChangeBadge value={changes.streakChange} suffix="" />
        </div>
      </div>
    </div>
  );
};
