import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`bg-muted w-64 p-4 ${isOpen ? "block" : "hidden"} md:block`}
    >
      <nav className="space-y-4">
        {/* Remote Source Menu */}
        <div>
          <h2 className="text-xl font-bold mb-2">Remote Source</h2>
          <Button variant="ghost" className="w-full justify-start">
            <Briefcase className="h-5 w-5 mr-2" /> UN Jobs
          </Button>
        </div>
      </nav>
    </aside>
  );
}
