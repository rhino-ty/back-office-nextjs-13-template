import { MouseEventHandler } from "react";

interface DrawerProps {
  isDrawerOpen: boolean;
  handleDrawerMenuHover: MouseEventHandler<HTMLDivElement>;
  handleDrawerMenuClose: MouseEventHandler<HTMLDivElement>;
  drawerMenuSetting: string;
}

export default function Drawer({
  isDrawerOpen,
  handleDrawerMenuHover,
  handleDrawerMenuClose,
  drawerMenuSetting,
}: DrawerProps) {
  const menuItems = drawerMenuContent[drawerMenuSetting];

  return (
    <div
      className={`drawer-menu 
    ${isDrawerOpen ? "animation-slide-in" : "animation-slide-out"}`}
      onMouseEnter={handleDrawerMenuHover}
      onMouseLeave={handleDrawerMenuClose}
    >
      <nav className="pb-6 pt-2">
        {menuItems?.map((menuItem: string) => (
          <div key={menuItem} className="transition pt-[2px] mx-2">
            <button className="text-sm px-4 w-full h-11 p-[2px] rounded-3xl hover:bg-[#E6E8ED] dark:hover:bg-[#393B3D] text-left">
              {menuItem}
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
}

const drawerMenuContent: { [key: string]: string[] } = {
  Develop: ["Develop overview", "Android", "Flutter", "Web"],
  Foundations: ["Foundation overview", "Accessibility", "Content Design"],
  Styles: ["Styles overview", "Color", "Elevation"],
};
