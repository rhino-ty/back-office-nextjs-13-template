import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState(
    "dark" ? "text-gray-300" : "text-gray-800"
  );

  useEffect(() => {
    setColor(theme === "dark" ? "text-gray-300" : "text-gray-800");
  }, [theme]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <button
      type="button"
      className="w-12 h-12"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 라이트모드 */}
      {theme === "light" &&
        (hovered ? (
          <LightModeIcon className={color} />
        ) : (
          <LightModeOutlinedIcon className={color} />
        ))}

      {/* 다크모드 */}
      {theme === "dark" &&
        (hovered ? (
          <DarkModeIcon className={color} />
        ) : (
          <DarkModeOutlinedIcon className={color} />
        ))}
    </button>
  );
}
