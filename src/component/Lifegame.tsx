import { useEffect, useRef } from "react";

function Lifegame({ className }: { className?: string }) {
  const rows = 250;
  const cols = 250;
  const cellSize = 8;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellRef = useRef<Uint8Array>(
    new Uint8Array(rows * cols).map((_) => (Math.random() < 0.2 ? 1 : 0)),
  );

  function draw(canvas: CanvasRenderingContext2D, cell: Uint8Array) {
    canvas.clearRect(0, 0, cols * cellSize, rows * cellSize);
    canvas.fillStyle = "#eee";

    for (let i = 0; i < cell.length; i++) {
      const x = i % cols;
      const y = Math.floor(i / cols);
      if (cell[i]) {
        canvas.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      } else {
        canvas.clearRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }

  function step(prev: Uint8Array) {
    const next: Uint8Array = new Uint8Array(rows * cols);
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
          next[r * cols + c] =
            neighborCount === 2 || neighborCount === 3 ? 1 : 0;
        } else {
          next[r * cols + c] = neighborCount === 3 ? 1 : 0;
        }
      }
    }
    return next;
  }

  useEffect(() => {
    const canvas = canvasRef.current!;
    canvas.width = cols * cellSize;
    canvas.height = rows * cellSize;

    const ctx = canvas.getContext("2d")!;
    let grid = cellRef.current;

    const loop = () => {
      grid = step(grid);
      cellRef.current = grid;
      draw(ctx, grid);
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return <canvas ref={canvasRef} className={className}></canvas>;
}

export default Lifegame;
