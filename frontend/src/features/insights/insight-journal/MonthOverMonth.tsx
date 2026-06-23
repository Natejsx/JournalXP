import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export const MonthOverMonth = ({ monthComparison }: MonthOverMonthProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Month-Over-Month Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-indigo-50 rounded-lg">
            <p className="text-2xl font-bold text-indigo-900">
              {monthComparison.thisMonth.count}
            </p>
            <p className="text-xs text-gray-600 mb-1">Entries</p>
            {monthComparison.changes.countChange !== 0 && (
              <Badge
                className={
                  monthComparison.changes.countChange > 0
                    ? "bg-green-500"
                    : "bg-red-500"
                }
              >
                {monthComparison.changes.countChange > 0 ? "+" : ""}
                {monthComparison.changes.countChange}%
              </Badge>
            )}
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-900">
              {monthComparison.thisMonth.totalWords.toLocaleString()}
            </p>
            <p className="text-xs text-gray-600 mb-1">Total Words</p>
            {monthComparison.changes.wordsChange !== 0 && (
              <Badge
                className={
                  monthComparison.changes.wordsChange > 0
                    ? "bg-green-500"
                    : "bg-red-500"
                }
              >
                {monthComparison.changes.wordsChange > 0 ? "+" : ""}
                {monthComparison.changes.wordsChange}%
              </Badge>
            )}
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-900">
              {monthComparison.thisMonth.avgWords}
            </p>
            <p className="text-xs text-gray-600 mb-1">Avg Words</p>
            {monthComparison.changes.avgWordsChange !== 0 && (
              <Badge
                className={
                  monthComparison.changes.avgWordsChange > 0
                    ? "bg-green-500"
                    : "bg-red-500"
                }
              >
                {monthComparison.changes.avgWordsChange > 0 ? "+" : ""}
                {monthComparison.changes.avgWordsChange}%
              </Badge>
            )}
          </div>
          <div className="text-center p-4 bg-teal-50 rounded-lg">
            <p className="text-2xl font-bold text-teal-900">
              {monthComparison.thisMonth.uniqueMoods}
            </p>
            <p className="text-xs text-gray-600 mb-1">Unique Moods</p>
            {monthComparison.changes.moodsChange !== 0 && (
              <Badge
                className={
                  monthComparison.changes.moodsChange > 0
                    ? "bg-green-500"
                    : "bg-red-500"
                }
              >
                {monthComparison.changes.moodsChange > 0 ? "+" : ""}
                {monthComparison.changes.moodsChange}
              </Badge>
            )}
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <p className="text-2xl font-bold text-orange-900">
              {monthComparison.thisMonth.streak}
            </p>
            <p className="text-xs text-gray-600 mb-1">Best Streak</p>
            {monthComparison.changes.streakChange !== 0 && (
              <Badge
                className={
                  monthComparison.changes.streakChange > 0
                    ? "bg-green-500"
                    : "bg-red-500"
                }
              >
                {monthComparison.changes.streakChange > 0 ? "+" : ""}
                {monthComparison.changes.streakChange}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
