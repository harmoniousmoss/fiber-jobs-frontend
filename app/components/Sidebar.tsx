import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`bg-muted w-64 p-4 ${isOpen ? "block" : "hidden"} md:block`}
    >
      <nav className="space-y-4">
        {/* Home Menu */}
        <div>
          <h2 className="text-xl font-bold mb-2">Home</h2>
          <Button variant="ghost" className="w-full justify-start">
            About
          </Button>
        </div>

        {/* Remote Source Menu */}
        <div>
          <h2 className="text-xl font-bold mb-2">Remote Source</h2>
          <Button variant="ghost" className="w-full justify-start">
            UN Jobs
          </Button>
        </div>
      </nav>
    </aside>
  );
}
