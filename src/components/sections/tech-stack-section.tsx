// import { Card, CardContent } from "@/components/ui/card";
import { stackItem } from "@/common/constants";
// import Image from "next/image";
import StackCard from "../StackCard";

export function TechStackSection() {
  return (
    <section id="stack" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-balance">
            Technology Stack
          </h2>
          {/* Divider */}
          <div className="w-32 md:w-1/4 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-pretty">
            I work with modern technologies and frameworks to build robust,
            scalable solutions that meet today&apos;s demanding
            requirements.
          </p>
        </div>

        <div className="px-5 mt-5 grid grid-cols-3 md:grid-cols-8 gap-3">
          {stackItem.map((stack, index) => (
            <div className="mx-auto" key={index}>
              <StackCard image={stack.image} />
              <p className="text-center">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
