import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "@remix-run/react";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Preview() {

    
    // console.log(navigator.canShare);

    return (
        <div className="h-screen">
            <div className="bg-indigo-700 h-2/5 p-4 rounded-br-3xl rounded-bl-3xl">
                <nav className="bg-white rounded-xl p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <Button
                                size="lg"
                                asChild
                                variant="outline"
                                className="text-indigo-700 border-indigo-700 hover:text-indigo-700"
                            >
                                <Link to="/details">
                                    <span>Back to Editor</span>
                                </Link>
                            </Button>
                        </div>

                        <div>
                            <Button
                                size="lg"
                                asChild
                                variant="outline"
                                className="text-white border-indigo-700 bg-indigo-700 hover:bg-opacity-90 hover:text-white"
                            >
                                <Link to="/preview">
                                    <span>Share Link</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="text-black grid place-content-center pb-20">
                <div className="bg-white -mt-20  rounded-[40px]">
                    <div className="shadow-xl rounded-[40px] w-[300px] h-[580px] relative flex flex-col items-center">
                        <div className="bg-black h-28 w-28 border-indigo-700 border-[4px] rounded-full mt-14"></div>
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
                        </div></div>
                </div>
            </div>
        </div>
    );
}
