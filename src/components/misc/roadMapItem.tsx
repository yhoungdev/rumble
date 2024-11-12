const RoadmapItem = ({ phase, date, description, items, avatar, isLeft }) => {
  return (
    <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 mb-24`}>
      <div className="w-24 h-24 rounded-full bg-white flex-shrink-0 overflow-hidden">
        <img src={avatar} alt="Phase Avatar" className="w-full h-full object-cover" />
      </div>

      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <div className="inline-block">
          <div className="bg-amber-400 rounded-full px-6 py-2 inline-flex items-center gap-2">
            <span className="font-medium">{phase}</span>
            <span className="bg-white rounded-full px-2 py-1 text-sm">{date}</span>
          </div>
        </div>

        <ul className={`mt-4 space-y-3 text-gray-200 ${isLeft ? 'pl-4' : 'pr-4'}`}>
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-2 w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default RoadmapItem;
