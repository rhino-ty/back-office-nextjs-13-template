'use client';
import {
  AppsRounded,
  BookOutlined,
  Code,
  HomeRounded,
  InfoOutlined,
  LockOpen,
  PaletteOutlined,
  PriorityHigh,
  SwipeVerticalOutlined,
  AutoStoriesOutlined,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import ThemeModeToggleButton from '../../components/theme_mode_toggle_button';
import Drawer from './drawer';
import './sidebar.css';
// App Directory에서는 next/router와 'use client'를 쓰면 에러 : "NextRouter was not mounted."
// 그래서 next/navigation을 사용해야함,,
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerMenuSetting, setDrawerMenuSetting] = useState('Idle');
  const router = useRouter();

  // TODO: useRouter 써서 초기로딩 개선화하기: admin에 있대

  const handleDrawerMenuHover = () => {
    setDrawerOpen(true);
  };

  const handleDrawerMenuClose = () => {
    setDrawerOpen(false);
  };

  const handleDrawerMenuContent = (menuContent: string) => {
    setDrawerMenuSetting(menuContent);
  };

  // prefetch 사용방법 : SSR할 필요가 없는 사이트거나 이벤트 중 페이지가 넘어가는 이벤트가 있다면 그 페이지에 prefetch를 걸면 된다.
  // https://nextjs.org/docs/pages/api-reference/functions/use-router#routerprefetch : Pages Routre지만 App Router와 사용방법은 같다.
  // useEffect(() => {
  //   router.prefetch('/');
  //   router.prefetch('/login');
  //   router.prefetch('/modal');
  //   router.prefetch('/toast');
  // }, [router]);

  return (
    <>
      <nav className='sidebar-container'>
        <div className='flex flex-col w-full mt-4'>
          <ul>
            <li>
              <div className='menu-container'>
                <a
                  href='/'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/');
                  }}
                  className='sidebar-link group'
                >
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <HomeRounded />
                  </div>
                  <label className='label-style '>Home</label>
                </a>
              </div>
            </li>
            <li>
              <div className='menu-container'>
                <a
                  href='/get-started'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/get-started');
                  }}
                  className='sidebar-link group'
                >
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <AppsRounded />
                  </div>
                  <label className='label-style '>Get started</label>
                </a>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={() => {
                  handleDrawerMenuHover();
                  handleDrawerMenuContent('Develop');
                }}
                onMouseLeave={() => {
                  handleDrawerMenuClose();
                }}
              >
                <a
                  href='/develop'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/develop');
                  }}
                  className='sidebar-link group'
                >
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <Code />
                  </div>
                  <label className='label-style '>Develop</label>
                </a>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={() => {
                  handleDrawerMenuHover();
                  handleDrawerMenuContent('Foundations');
                }}
                onMouseLeave={() => {
                  handleDrawerMenuClose();
                }}
              >
                <a
                  href='/foundations'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/foundations');
                  }}
                  className='sidebar-link group'
                >
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <BookOutlined />
                  </div>
                  <label className='label-style'>Foundations</label>
                </a>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={() => {
                  handleDrawerMenuHover();
                  handleDrawerMenuContent('Styles');
                }}
                onMouseLeave={() => {
                  handleDrawerMenuClose();
                }}
              >
                <a
                  href='/styles'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/styles');
                  }}
                  className='sidebar-link group'
                >
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <PaletteOutlined />
                  </div>
                  <label className='label-style'>Styles</label>
                </a>
              </div>
            </li>
            <li>
              <div className='menu-container'>
                <a
                  href='/login'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/login');
                  }}
                  className='sidebar-link group'
                >
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <LockOpen />
                  </div>
                  <label className='label-style'>Login</label>
                </a>
              </div>
            </li>
            <li>
              <div className='menu-container'>
                <a
                  href='/scroll'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/scroll');
                  }}
                  className='sidebar-link group'
                >
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <SwipeVerticalOutlined />
                  </div>
                  <label className='label-style'>Scroll</label>
                </a>
              </div>
            </li>
            <li>
              <div className='menu-container'>
                <a
                  href='/modal'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/modal');
                  }}
                  className='sidebar-link group'
                >
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <PriorityHigh />
                  </div>
                  <label className='label-style'>Modal</label>
                </a>
              </div>
            </li>
            <li>
              <div className='menu-container'>
                <a
                  href='/toast'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/toast');
                  }}
                  className='sidebar-link group'
                >
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <InfoOutlined />
                  </div>
                  <label className='label-style'>Toast</label>
                </a>
              </div>
            </li>
            <li>
              <div className='menu-container'>
                <a
                  href='/pagination'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/pagination');
                  }}
                  className='sidebar-link group'
                >
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <AutoStoriesOutlined />
                  </div>
                  <label className='label-style'>Pagination</label>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className='mb-4 flex'>
          <ThemeModeToggleButton />
        </div>
      </nav>

      <Drawer
        isDrawerOpen={isDrawerOpen}
        handleDrawerMenuHover={handleDrawerMenuHover}
        handleDrawerMenuClose={handleDrawerMenuClose}
        drawerMenuSetting={drawerMenuSetting}
      />
    </>
  );
}
