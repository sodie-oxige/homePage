import { useEffect, useState } from "react";

function Lifegame({ className }: { className?: string }) {
  const rows = 250;
  const cols = 250;
  const [cellData, setCellData] = useState<boolean[][]>(
    Array(rows)
      .fill(null)
      .map(() =>
        Array(cols)
          .fill(null)
          .map(() => Math.random() < 0.3),
      ),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCellData((prev) => {
        const newCellData: boolean[][] = [];
        for (let r = 0; r < rows; r++) {
          newCellData[r] = [];
          for (let c = 0; c < cols; c++) {
            const neighbors = [
              prev[r - 1]?.[c - 1],
              prev[r - 1]?.[c],
              prev[r - 1]?.[c + 1],
              prev[r][c - 1],
              prev[r][c + 1],
              prev[r + 1]?.[c - 1],
              prev[r + 1]?.[c],
              prev[r + 1]?.[c + 1],
            ];
            const neighborCount = neighbors.filter(Boolean).length;
            if (prev[r][c]) {
              newCellData[r][c] = neighborCount === 2 || neighborCount === 3;
            } else {
              newCellData[r][c] = neighborCount === 3;
            }
          }
        }
        return newCellData;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      {cellData.map((row, rIdx) => (
        <div key={rIdx} className="flex bg-gray-100">
          {row.map((cell, cIdx) => (
            <div
              key={cIdx}
              className={`h-4 w-4 ${cell ? "bg-gray-50" : "bg-white"} mr-px mb-px`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Lifegame;
