'use client';

import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import CodeIcon from '@mui/icons-material/Code';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import SwipeVerticalIcon from '@mui/icons-material/SwipeVertical';
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
        <div className='flex flex-col w-full mt-4 fixed'>
          <ul>
            <li>
              <div
                className='flex justify-center'
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
                className='flex justify-center'
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
                className='flex justify-center'
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
                className='flex justify-center'
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
                className='flex justify-center'
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
                className='flex justify-center'
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
                className='flex justify-center'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/scroll' className='sidebar-link group'>
                  <SwipeVerticalIcon className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>Scroll</label>
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className='mb-4 flex justify-center'>
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
