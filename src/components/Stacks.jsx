import { stackItem } from "../constant";
import StackCard from "./StackCard";

function Stacks() {
  return (
    <div id="stack" className="mx-auto mb-16">
      <div className="px-5">
        <h3 className="text-3xl sm:text-4xl font-medium">Tech Stacks</h3>
        <div className="h-1 w-32 bg-orange rounded-lg mt-2"></div>
      </div>
      {/* stack container */}
      <div className="flex flex-wrap px-5 mt-5 justify-start gap-5">
        {stackItem.map((stack, index) => (
          <div key={index}>
            <StackCard image={stack.image} />
            <p className="mx-auto text-center">{stack.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stacks;
