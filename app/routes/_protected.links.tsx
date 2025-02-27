import { Button } from "@/components/ui/button";
import { Github, Link, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Links() {
  return (
    <div className="relative">
      <div className="bg-white h-9 sticky top-0 z-10 w-full" />
      <div className="pt-1 px-6">
        <h1 className="font-bold text-3xl">Customize your links</h1>
        <p className="text-sm text-gray-500 mt-2">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <Button
        size="lg"
          variant="outline"
          className="w-full mt-6 mb-4 text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-white"
        >
          <Plus /> Add new link
        </Button>

        <div className="bg-gray-100 rounded-xl p-4 pb-6 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Link #1</span>
            <span className="text-gray-500 text-sm">Remove</span>
          </div>
          <p className="text-sm text-gray-600 mt-4">Platform</p>
          <Select>
            <SelectTrigger className="w-full bg-white [&>svg]:text-indigo-700">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <div className="flex items-center gap-4">
                  <Github size={18} />
                  <span>Light</span>
                </div>
              </SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-gray-600 mt-4">Link</p>
          <div className="relative w-full">
            <Link
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
            <Input className="bg-white pl-12" />
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 pb-6 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Link #2</span>
            <span className="text-gray-500 text-sm">Remove</span>
          </div>
          <p className="text-sm text-gray-600 mt-4">Platform</p>
          <Select>
            <SelectTrigger className="w-full bg-white [&>svg]:text-indigo-700">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <div className="flex items-center gap-4">
                  <Github size={18} />
                  <span>Light</span>
                </div>
              </SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-gray-600 mt-4">Link</p>
          <div className="relative w-full">
            <Link
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
            <Input className="bg-white pl-12" />
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 pb-6 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Link #2</span>
            <span className="text-gray-500 text-sm">Remove</span>
          </div>
          <p className="text-sm text-gray-600 mt-4">Platform</p>
          <Select>
            <SelectTrigger className="w-full bg-white [&>svg]:text-indigo-700">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <div className="flex items-center gap-4">
                  <Github size={18} />
                  <span>Light</span>
                </div>
              </SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-gray-600 mt-4">Link</p>
          <div className="relative w-full">
            <Link
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
            <Input className="bg-white pl-12" />
          </div>
        </div>
      </div>
      <div className="bg-white flex items-center justify-end h-20 px-6 sticky bottom-0 w-full">
        <Button size="lg" className="bg-indigo-700 hover:bg-indigo-700/90">Save</Button>
      </div>
    </div>
  );
}
