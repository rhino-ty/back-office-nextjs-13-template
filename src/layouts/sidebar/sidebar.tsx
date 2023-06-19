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
} from '@mui/icons-material';
import Link from 'next/link';
import { useState } from 'react';
import ThemeModeToggleButton from '../../components/theme_mode_toggle_button';
import Drawer from './drawer';
import './sidebar.css';

export default function Sidebar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerMenuSetting, setDrawerMenuSetting] = useState('Idle');

  const handleDrawerMenuHover = () => {
    setDrawerOpen(true);
  };

  const handleDrawerMenuClose = () => {
    setDrawerOpen(false);
  };

  const handleDrawerMenuContent = (menuContent: string) => {
    setDrawerMenuSetting(menuContent);
  };

  return (
    <>
      <nav className='sidebar-container'>
        <div className='flex flex-col w-full mt-4'>
          <ul>
            <li>
              <div className='menu-container'>
                <Link href='/' className='sidebar-link group'>
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <HomeRounded />
                  </div>
                  <label className='label-style '>Home</label>
                </Link>
              </div>
            </li>
            <li>
              <div className='menu-container'>
                <Link href='/get-started' className='sidebar-link group'>
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <AppsRounded />
                  </div>
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
                onMouseLeave={() => {
                  handleDrawerMenuClose();
                }}
              >
                <Link href='/develop' className='sidebar-link group'>
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <Code />
                  </div>
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
                onMouseLeave={() => {
                  handleDrawerMenuClose();
                }}
              >
                <Link href='/foundations' className='sidebar-link group'>
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <BookOutlined />
                  </div>
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
                onMouseLeave={() => {
                  handleDrawerMenuClose();
                }}
              >
                <Link href='/styles' className='sidebar-link group'>
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <PaletteOutlined />
                  </div>
                  <label className='label-style'>Styles</label>
                </Link>
              </div>
            </li>
            <li>
              <div className='menu-container'>
                <Link href='/login' className='sidebar-link group'>
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <LockOpen />
                  </div>
                  <label className='label-style'>Login</label>
                </Link>
              </div>
            </li>
            <li>
              <div className='menu-container'>
                <Link href='/scroll' className='sidebar-link group'>
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <SwipeVerticalOutlined />
                  </div>
                  <label className='label-style'>Scroll</label>
                </Link>
              </div>
            </li>
            <li>
              <div className='menu-container'>
                <Link href='/modal' className='sidebar-link group'>
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <PriorityHigh />
                  </div>
                  <label className='label-style'>Modal</label>
                </Link>
              </div>
            </li>
            <li>
              <div className='menu-container'>
                <Link href='/toast' className='sidebar-link group'>
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <InfoOutlined />
                  </div>
                  <label className='label-style'>toast</label>
                </Link>
              </div>
            </li>
            <li>
              <div className='menu-container'>
                <Link href='/toast' className='sidebar-link group'>
                  <div className='icon-style group-hover:bg-opacity-70 group-hover:scale-105'>
                    <InfoOutlined />
                  </div>
                  <label className='label-style'>toast</label>
                </Link>
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
