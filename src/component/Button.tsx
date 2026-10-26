import { twMerge } from "tailwind-merge";

function Button({ ...props }: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={twMerge(
        "cursor-pointer rounded-lg border bg-black px-4 py-2 text-white shadow transition-opacity hover:opacity-50 disabled:opacity-30",
        props.className,
      )}
    />
  );
}

export default Button;
