import { twMerge } from "tailwind-merge";

interface GridContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode[];
  row?: number;
  sp_row?: number;
}

function GridContainer({
  children,
  className,
  row = 4,
  sp_row = 2,
  ...props
}: GridContainerProps) {
  return (
    <div className={twMerge(className, "flex flex-wrap")} {...props}>
      {children.map((child, index) => (
        <div
          key={`grid-cell-${index}`}
          className="w-(--sp-row) md:w-(--pc-row)"
          style={
            {
              "--pc-row": `calc(100%/${row})`,
              "--sp-row": `calc(100%/${sp_row})`,
            } as React.CSSProperties
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export default GridContainer;
