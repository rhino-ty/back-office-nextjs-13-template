'use client';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import CodeIcon from '@mui/icons-material/Code';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import SwipeVerticalOutlinedIcon from '@mui/icons-material/SwipeVerticalOutlined';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import DarkModeToggleButton from '../../components/darkModeToggleButton';
import Drawer from './drawer';
import './sidebar.css';

export default function Sidebar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerMenuSetting, setDrawerMenuSetting] = useState('Idle');

  const handleDrawerMenuHover = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const handleDrawerMenuClose = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const handleDrawerMenuContent = useCallback((menuContent: string) => {
    setDrawerMenuSetting(menuContent);
  }, []);

  return (
    <>
      <nav className='sidebar-container'>
        <div className='flex flex-col w-full mt-4'>
          <ul>
            <li>
              <div
                className='menu-container'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/' className='sidebar-link group'>
                  <HomeRoundedIcon className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style '>Home</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/get-started' className='sidebar-link group'>
                  <AppsRoundedIcon className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style '>Get started</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={() => {
                  handleDrawerMenuHover();
                  handleDrawerMenuContent('Develop');
                }}
                onMouseLeave={handleDrawerMenuClose}
              >
                <Link href='/develop' className='sidebar-link group'>
                  <CodeIcon className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style '>Develop</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={() => {
                  handleDrawerMenuHover();
                  handleDrawerMenuContent('Foundations');
                }}
                onMouseLeave={handleDrawerMenuClose}
              >
                <Link href='/foundations' className='sidebar-link group'>
                  <BookOutlinedIcon className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>Foundations</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={() => {
                  handleDrawerMenuHover();
                  handleDrawerMenuContent('Styles');
                }}
                onMouseLeave={handleDrawerMenuClose}
              >
                <Link href='/styles' className='sidebar-link group'>
                  <PaletteOutlinedIcon className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>Styles</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/login' className='sidebar-link group'>
                  <LockOpenIcon className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>Login</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/scroll' className='sidebar-link group'>
                  <SwipeVerticalOutlinedIcon className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>Scroll</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/modal' className='sidebar-link group'>
                  <PriorityHighIcon className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>Modal</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/toast' className='sidebar-link group'>
                  <InfoOutlinedIcon className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>toast</label>
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className='mb-4 flex'>
          <DarkModeToggleButton />
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
