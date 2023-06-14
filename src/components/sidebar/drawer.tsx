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
      {menuItems && (
        <ul>
          {menuItems.map((menuItem: string) => (
            <li key={menuItem} className="transition">
              {menuItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const drawerMenuContent: { [key: string]: string[] } = {
  Develop: ["Develop Overview", "Android", "Flutter", "Web"],
  Foundations: ["Foundation Overview", "Accessibility", "Content Design"],
  Styles: ["Styles Overview", "Color", "Elevation"],
};
