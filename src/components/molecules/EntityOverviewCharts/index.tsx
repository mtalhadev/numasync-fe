import { EntityGraphCards } from "src/data/dummyData";
import GraphCard from "../GraphCard";

const EntityOverviewChart = () => {
  return (
    <div className="flex flex-wrap gap-5 overflow-hidden">
         {EntityGraphCards.map((item) => {
          return (
            <div key={item.value} className="xl:w-[calc(33%-12px)] md:w-[calc(50%-10px)] w-full h-full">
              <GraphCard {...item} />
            </div>
          );
        })}
    </div>
  )
}

export default EntityOverviewChart