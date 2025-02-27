import { Link } from "@remix-run/react";
import { Link as LinkIcon, Link2, UserCircle, Eye } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="bg-white rounded-xl p-4">
      <div className="flex items-center justify-between">
        
          <Link to="/" className="font-bold text-2xl flex items-center gap-1">
            <Link2 size={28} className="bg-indigo-700 rounded-xl text-white block w-10 h-10 py-3" /> <span className="hidden md:block">devlinks</span>
          </Link>
        <div className="flex gap-10 items-center justify-between">
          <Button size="lg" asChild className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100/90">
            <Link to="/links" className=" flex items-center gap-1">
              <LinkIcon /> <span className="hidden md:block">Links</span>
            </Link>
          </Button>
          <Button size="lg" asChild className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100/90">
            <Link to="/details" className=" flex items-center gap-1">
              <UserCircle />
              <span className="hidden md:block">Profile details</span>
            </Link>
          </Button>
        </div>
        <div>
          <Button size="lg"
            asChild
            variant="outline"
            className="text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-white"
          >
            <Link to="/preview">
              <Eye className="md:hidden"/> <span className="hidden md:block">Preview</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
