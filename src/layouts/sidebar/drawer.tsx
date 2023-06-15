import { MouseEventHandler } from 'react';

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
  console.log(menuItems);

  return (
    <div
      className={`drawer-menu 
    ${isDrawerOpen ? 'animation-slide-in' : 'animation-slide-out'}`}
      onMouseEnter={handleDrawerMenuHover}
      onMouseLeave={handleDrawerMenuClose}
    >
      <nav className='pb-6 pt-2'>
        {menuItems?.map((menuItem: any) => (
          <div key={...menuItem} className='transition mx-2'>
            <button className='text-[13px] px-[17px] w-full h-12 p-[2px] rounded-3xl hover:bg-[#E6E8ED] dark:hover:bg-[#393B3D] text-left'>
              {menuItem}
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
}

const drawerMenuContent: { [key: string]: string[] } = {
  Develop: ['Develop overview', 'Android', 'Flutter', 'Web'],
  Foundations: ['Foundation overview', 'Accessibility', 'Content Design'],
  Styles: ['Styles overview', 'Color', 'Elevation'],
};

// 추후 적용 가능
// interface drawerMenuContentItem {
//   [key: string]:
//     | string
//     | { url: string }
//     | Array<{ [key: string]: { url: string, dropdownMenu? } }>;
// }

// const drawerMenuContent: drawerMenuContentItem = {
//   Develop: [
//     {
//       'Develop overview': { url: 'https://m3.material.io/develop/' },
//       Android: {
//         url: 'https://m3.material.io/develop/android/',
//         dropdownMenu: [
//           {
//             'MDC-Android': {
//               url: 'https://m3.material.io/develop/android/mdc-android',
//             },
//           },
//           {
//             'Jetpack Compose': {
//               url: 'https://m3.material.io/develop/android/jetpack-compose',
//             },
//           },
//         ],
//       },
//       Flutter: { url: 'https://m3.material.io/develop/flutter' },
//       Web: { url: 'https://m3.material.io/develop/web' },
//     },
//   ],
//   Foundations: [
//     {
//       'Foundation overview': { url: 'https://m3.material.io/develop/' },
//       Accessibility: { url: 'https://m3.material.io/develop/' },
//       'Content Design': { url: 'https://m3.material.io/develop/' },
//     },
//   ],
//   Styles: [
//     {
//       'Styles overview': { url: 'https://m3.material.io/develop/' },
//       Color: { url: 'https://m3.material.io/develop/' },
//       Elevation: { url: 'https://m3.material.io/develop/' },
//     },
//   ],
// };
