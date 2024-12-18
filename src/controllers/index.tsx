import { useEffect, useState } from "react";


export const useCounters = (targets: { [key: string]: number }) => {
  const [counts, setCounts] = useState<{ [key: string]: number }>(() => {
    const initialCounts: { [key: string]: number } = {};
    Object.keys(targets).forEach((key) => {
      initialCounts[key] = 0;
    });
    return initialCounts;
  });

  useEffect(() => {
    const intervals: ReturnType<typeof setInterval>[] = [];

    Object.entries(targets).forEach(([key, target]) => {
      const increment = Math.max(1, Math.ceil(target / 100));
      const interval = setInterval(() => {
        setCounts((prev) => {
          const current = prev[key] + increment;

          // If the current count exceeds or equals the target, stop the interval
          if (current >= target) {
            clearInterval(interval);
            return { ...prev, [key]: target };
          }

          return { ...prev, [key]: current };
        });
      }, 20); // Animation speed
      intervals.push(interval);
    });

    // Cleanup intervals when the component unmounts
    return () => {
      intervals.forEach(clearInterval);
    };
  }, [targets]);

  return counts;
};
