import { twMerge } from "tailwind-merge";

interface GridContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode[];
  row?: number;
}

function GridContainer({
  children,
  className,
  row = 4,
  ...props
}: GridContainerProps) {
  const filledChildren = [...children];
  while (filledChildren.length % row !== 0) filledChildren.push(null);
  const resizedChildren: React.ReactNode[][] = [];
  for (let i = 0; i < filledChildren.length; i += row) {
    resizedChildren.push(filledChildren.slice(i, i + row));
  }

  return (
    <div className={twMerge(className, "flex flex-col gap-4")} {...props}>
      {resizedChildren.map((rowElements, rowIndex) => (
        <div key={`grid-row-${rowIndex}`} className="flex flex-1">
          {rowElements.map((child, CellIndex) => (
            <div
              key={`grid-Cell-${rowIndex * row + CellIndex}`}
              className="flex-1"
            >
              {child}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GridContainer;
