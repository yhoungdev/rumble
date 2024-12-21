const RoadmapItem = ({
  phase,
  date,
  description,
  items,
  avatar,
  isLeft,
  isLastItem,
}) => {
  const isNotLeft = !isLeft;
  return (
    <div
      className={`flex flex-col ${isNotLeft && "items-end"} ${isLastItem && "items-center"}
      `}
    >
      <div
        className={
          !isLastItem
            ? ` 
          flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
            md:items-start md:gap-8 gap-4 mb-24`
            : "flex flex-col items-center justify-center"
        }
      >
        <div
          className="   w-24 h-24 rounded-full bg-white
          flex-shrink-0 overflow-hidden"
        >
          <img
            src={avatar}
            alt="Phase Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className={`flex-1  pt-12 `}>
          <div className={`flex ${isLastItem && "justify-center"}`}>
            <div
              className="bg-primary-500 w-fit rounded-xl px-2 py-3 text-black inline-flex items-center
            justify-center gap-2"
            >
              <span className="font-medium">{phase}</span>
              <span
                className="bg-white relative
              rounded-full px-1 py-1 text-sm -right-6 w-8 h-8 flex items-center justify-center"
              >
                {date}
              </span>
            </div>
          </div>

          <div className={"w-full xl:w-[400px] "}>
            <ul
              className={`mt-4 space-y-3 text-gray-200 ${isLeft ? "md:pl-4" : "md:pr-4"} pl-2 pr-2`}
            >
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-2 w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapItem;
