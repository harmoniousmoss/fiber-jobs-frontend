import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`bg-muted w-64 p-4 ${isOpen ? "block" : "hidden"} md:block`}
    >
      <nav>
        <Button
          variant="ghost"
          className="w-full justify-start font-bold text-2xl"
        >
          UN Job
        </Button>
      </nav>
    </aside>
  );
}
