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
  imageLength?: number
}) {
  return (
    <div className="flex items-center justify-center gap-4  p-8">

      <ArrowLeftIcon
        onClick={onNext}/>

      <div className="flex gap-3">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full ${
              index === current - 1 ? "bg-[#E84B29]" : "bg-white"
            }`}
            aria-current={index === current - 1 ? "page" : undefined}
          />
        ))}
      </div>

      <ArrowRightIcon onClick={onPrevious}/>
    </div>
  );
}
