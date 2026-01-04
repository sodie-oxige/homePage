function HiddenLabelButton({
  onClick,
  children,
  label,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-square cursor-pointer"
    >
      <div className="transition group-hover:opacity-30">{children}</div>
      {label && (
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 transition group-hover:opacity-100">
          <span className="text-xs font-bold">{label}</span>
        </div>
      )}
    </div>
  );
}

export default HiddenLabelButton;
