// import RoadmapItem from "../misc/roadMapItem.tsx";
// import Typography from "../misc/typography.tsx";
// import TopHeader from "../misc/topHeader.tsx";
// import { roadmapData} from "../../data/roadmap.ts";
//
// const Roadmap = () => {
//
//   return (
//     <div
//       className="min-h-screen p-8 bg-gray-900 roadmap_gradient"
//       id={"roadmap"}
//     >
//       <div className={"container"}>
//         <TopHeader title={"The Adventure Ahead"} />
//       </div>
//
//       <Typography>ROADMAP</Typography>
//
//       <div
//         className="relative max-w-3xl  mx-auto
//           lg:bg-[url(/bg/line.png)] bg-no-repeat bg-contain bg-center "
//       >
//         {roadmapData.map((item, index, array) => {
//           const isLastItem = index === array.length - 1;
//           return (
//             <RoadmapItem
//               key={index}
//               phase={item.phase}
//               date={item.date}
//               items={item.items}
//               avatar={item.avatar}
//               isLeft={index % 2 === 0}
//               isLastItem={isLastItem}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };
//
// export default Roadmap;

import RoadmapItem from "../misc/roadMapItem.tsx";
import Typography from "../misc/typography.tsx";
import TopHeader from "../misc/topHeader.tsx";
import { roadmapData } from "../../data/roadmap.ts";

const Roadmap = () => {
  return (
    <div
      className="relative min-h-screen p-8 bg-gray-900 roadmap_gradient"
      id="roadmap"
    >
      <div className="container">
        <TopHeader title="The Adventure Ahead" />
      </div>

      <Typography>ROADMAP</Typography>

      {/* Dotted Line Image */}
      <div className="absolute top-[20em] inset-0 flex justify-center z-0">
        <img
          src="/bg/line.png"
          alt="Dotted Line"
          className="w-full  max-w-[750px]  h-[70%] mt-14 mr-6 "
        />
      </div>

      <div className="relative max-w-3xl mx-auto z-10">
        {roadmapData.map((item, index, array) => {
          const isLastItem = index === array.length - 1;
          return (
            <RoadmapItem
              key={index}
              phase={item.phase}
              date={item.date}
              items={item.items}
              avatar={item.avatar}
              isLeft={index % 2 === 0}
              isLastItem={isLastItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;

