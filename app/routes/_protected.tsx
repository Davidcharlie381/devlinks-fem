import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import type { MetaFunction } from "@remix-run/node";
import { Outlet, useLocation } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const authRoute = [];

export default function Protected() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/preview" && <Navbar />}
      {pathname !== "/preview" ? (
        <div className="m-4 md:m-0 grid grid-cols-10 gap-4 md:mt-4">
          <div className="col-span-10 md:col-span-4 w-full bg-white h-[400px] md:h-[650px] max-h-[650px] overflow-y-auto rounded-xl scrollbar">
            <Sidebar />
          </div>
          <div className="col-span-10 md:col-span-6 w-full bg-white max-h-[650px] overflow-y-auto rounded-xl scrollbar">
            <Outlet />
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}
