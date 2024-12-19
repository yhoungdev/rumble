import { ArrowLeftIcon, ArrowRightIcon } from "../icons";

export default function CarouselPagination({
  total = 5,
  current = 2,
  onNext = () => {},
  onPrevious = () => {},
}: {
  total?: number;
  current?: number;
  onNext?: () => void;
  onPrevious?: () => void;
  imageLength?: number;
}) {
  return (
    <div className="flex items-center justify-center gap-4  p-8">
      <ArrowLeftIcon onClick={onPrevious} />

      <div className="flex gap-3">
        {Array.from({ length: total })
          .slice(
            window.innerWidth <= 640 && total > 4 ? 2 : 0,
            window.innerWidth <= 640 && total > 4 ? 4 : total,
          )
          .map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 md:h-4 md:w-4 rounded-full ${
                index === current - 1 ? "bg-[#E84B29]" : "bg-white"
              }`}
              aria-current={index === current - 1 ? "page" : undefined}
            />
          ))}
      </div>

      <ArrowRightIcon onClick={onNext} />
    </div>
  );
}
