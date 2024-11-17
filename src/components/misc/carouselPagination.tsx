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
}) {
  return (
    <div className="flex items-center justify-center gap-4  p-8">
      <button
        onClick={onPrevious}
        className="rounded-lg bg-[#E84B29] p-3 text-white transition-opacity hover:opacity-90"
        aria-label="Previous"
      >
        <svg
          className="h-6 w-6 rotate-180 transform"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

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

      <button
        onClick={onNext}
        className="rounded-lg bg-[#E84B29] p-3 text-white transition-opacity hover:opacity-90"
        aria-label="Next"
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
