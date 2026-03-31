import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  onOpenSidebar: () => void;
}

const MobileNav = ({ onOpenSidebar }: MobileNavProps) => {
  return (
    <div className="lg:hidden flex items-center justify-between p-4 bg-[#1E3A8A] text-white">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30">
          <span className="text-white font-black text-sm">S</span>
        </div>
        <h1 className="font-heading font-black text-white text-lg tracking-tight">SHAVI Admin</h1>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onOpenSidebar}
        className="text-white hover:bg-white/10 h-10 w-10 rounded-xl"
      >
        <Menu className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default MobileNav;
