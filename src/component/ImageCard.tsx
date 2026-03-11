import { useEffect, useRef } from "react";

interface ImageCardProps {
  src: string;
  title?: string;
  subtitle?: string;
  text?: string;
}
function ImageCard({ src, title, subtitle, text }: ImageCardProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent) {
    const el = imageRef.current;
    if (!el) return;
    const rotateX =
      (e.clientY - el.getBoundingClientRect().top) / el.offsetHeight - 0.5;
    const rotateY =
      (e.clientX - el.getBoundingClientRect().left) / el.offsetWidth - 0.5;
    el.style.transform = `
      perspective(600px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  }

  function handleClickOpenModal() {
    const modal = modalRef.current;
    if (!modal) return;
    modal.dataset.visible = "true";
  }

  function handleClickCloseModal() {
    const modal = modalRef.current;
    if (!modal) return;
    modal.dataset.visible = "false";
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="m-4 rounded-xl shadow-lg"
        ref={imageRef}
        onClick={handleClickOpenModal}
      >
        <img src={src} className="rounded-xl" />
      </div>
      <div
        data-visible="false"
        className="inset-0 z-50 h-screen w-screen bg-black/70 data-[visible=false]:hidden data-[visible=true]:fixed"
        ref={modalRef}
      >
        <div className="absolute top-1/2 right-1/2 flex h-full -translate-y-1/2 items-center justify-end p-6">
          <img
            src={src}
            alt={title}
            className="h-full rounded-xl object-contain"
          />
          <div
            className="absolute inset-0 -z-10"
            onClick={handleClickCloseModal}
          ></div>
        </div>
        <div className="absolute top-1/2 left-1/2 w-full -translate-y-1/2 p-4 text-gray-200">
          <h2 className="mb-4 text-2xl font-bold">
            {title}
            {subtitle && <span className="text-xs"> - {subtitle}</span>}
          </h2>
          <p>{text}</p>
        </div>
        <div
          className="absolute inset-0 -z-10"
          onClick={handleClickCloseModal}
        ></div>
      </div>
    </>
  );
}

export default ImageCard;
