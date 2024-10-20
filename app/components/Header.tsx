import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-orange-600 text-primary-foreground px-4 flex justify-between items-center py-2">
      <div className="flex items-center">
        <Button
          variant="ghost"
          className="mr-2 md:hidden"
          onClick={toggleSidebar}
        >
          <Menu />
        </Button>
        <Image
          src="/logoipsum-332.svg"
          alt="Logo"
          className="mr-2 ml-4"
          width={25}
          height={25}
        />
        <h1 className="text-2xl font-bold">Remote DevJobs</h1>
      </div>
      <nav>
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Contact</Button>
      </nav>
    </header>
  );
}
