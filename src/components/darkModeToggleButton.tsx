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
    <div className='inline-flex items-center w-12 h-12 focus:outline-none rounded text-base my-4'>
      <button
        className='rounded-full border-[1px] border-solid border-gray-800 p-3 border-opacity-60 
        dark:border-gray-200 dark:border-opacity-50'
        type='button'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 라이트모드 */}
        {hovered ? (
          <LightModeIcon
            className={`${color} visible dark:invisible dark:w-0 dark:h-0 ease-in-out duration-100`}
          />
        ) : (
          <LightModeOutlinedIcon
            className={`${color} visible dark:invisible dark:w-0 dark:h-0 ease-in-out duration-100`}
          />
        )}
        {/* 다크모드 */}
        {hovered ? (
          <DarkModeIcon
            className={`${color} invisible dark:visible dark:w-6 dark:h-6 w-0 h-0 ease-in-out duration-100`}
          />
        ) : (
          <DarkModeOutlinedIcon
            className={`${color} invisible dark:visible dark:w-6 dark:h-6 w-0 h-0 ease-in-out duration-100`}
          />
        )}
      </button>
    </div>
  );
}
