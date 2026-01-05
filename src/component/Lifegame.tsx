import { useEffect, useState } from "react";

function Lifegame({ className }: { className?: string }) {
  const rows = 250;
  const cols = 250;
  const [cellData, setCellData] = useState<Uint8Array>(
    new Uint8Array(rows * cols)
      .fill(0)
      .map((_) => (Math.random() < 0.2 ? 1 : 0)),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCellData((prev) => {
        const newCellData: Uint8Array = new Uint8Array(rows * cols);
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            let neighborCount = 0;
            if (prev[(r - 1) * cols + (c - 1)]) neighborCount++;
            if (prev[(r - 1) * cols + c]) neighborCount++;
            if (prev[(r - 1) * cols + (c + 1)]) neighborCount++;
            if (prev[r * cols + (c - 1)]) neighborCount++;
            if (prev[r * cols + (c + 1)]) neighborCount++;
            if (prev[(r + 1) * cols + (c - 1)]) neighborCount++;
            if (prev[(r + 1) * cols + c]) neighborCount++;
            if (prev[(r + 1) * cols + (c + 1)]) neighborCount++;
            if (prev[r * cols + c]) {
              newCellData[r * cols + c] =
                neighborCount === 2 || neighborCount === 3 ? 1 : 0;
            } else {
              newCellData[r * cols + c] = neighborCount === 3 ? 1 : 0;
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
      {Array(rows)
        .fill(null)
        .map((_, rIdx) => (
          <div key={rIdx} className="flex bg-gray-100">
            {Array(cols)
              .fill(null)
              .map((_, cIdx) => (
                <div
                  key={cIdx}
                  className={`h-4 w-4 ${cellData[rIdx * cols + cIdx] ? "bg-gray-100" : "bg-white"} mr-px mb-px`}
                />
              ))}
          </div>
        ))}
    </div>
  );
}

export default Lifegame;
