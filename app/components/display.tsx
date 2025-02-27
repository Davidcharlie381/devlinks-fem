import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export default function Display() {
  return (
    <div className="">
      <div className="border-gray-300 border rounded-[40px] w-[300px] h-[580px] relative">
        <div className="border-gray-300 border rounded-[32px] w-[280px] h-[560px] absolute left-[10px] top-[10px] flex flex-col items-center">
          <div className="bg-black h-28 w-28 border-indigo-700 border-[4px] rounded-full mt-10"></div>
          <h4 className="mt-6 font-semibold text-lg">Ben Wright</h4>
          <p className="text-sm text-gray-500">ben@example.com</p>
          <div className="mt-10 flex flex-col gap-4">
            <Button size="lg" className="w-[240px] bg-black hover:bg-black/90">
              <div className="flex items-center gap-[120px]">
                <div className="flex items-center gap-2">
                  <Github /> <span>Github</span>
                </div>
                <ArrowRight />
              </div>
            </Button>
            <Button size="lg" className="w-[240px] bg-blue-700 hover:bg-blue-700/90">
              <div className="flex items-center gap-[120px]">
                <div className="flex items-center gap-2">
                  <Linkedin /> <span>LinkedIn</span>
                  
                </div>
                <ArrowRight />
              </div>
            </Button>
          </div>
        </div>
        <div className="border-gray-300 border rounded-[32px] w-[140px] h-[25px] absolute left-1/2 -translate-x-1/2 top-[9px] bg-white border-t-0" />
      </div>
    </div>
  );
}
