"use client";

import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CodeIcon from "@mui/icons-material/Code";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import Link from "next/link";
import { useState } from "react";
import DarkModeToggleButton from "../darkModeToggleButton";
import "./sidebar.css";

export default function Sidebar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerMenuHover = () => {
    setDrawerOpen(true);
  };

  const handleDrawerMenuClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <nav className="flex flex-col justify-between h-screen bg-[#f3f6fc] dark:bg-[#2d2f31] fixed z-[2]">
        <div className="flex flex-col w-[88px] mt-5 ">
          <ul>
            <li>
              <div
                className="flex justify-center"
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href="/" className="sidebar-link group">
                  <HomeRoundedIcon className="icon-style group-hover:bg-opacity-70 group-hover:scale-105" />
                  <label className="label-style ">Home</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className="flex justify-center"
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href="/get-started" className="sidebar-link group">
                  <AppsRoundedIcon className="icon-style group-hover:bg-opacity-70 group-hover:scale-105" />
                  <label className="label-style ">Get Started</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className="flex justify-center"
                onMouseEnter={handleDrawerMenuHover}
                onMouseLeave={handleDrawerMenuClose}
              >
                <Link href="/develop" className="sidebar-link group">
                  <CodeIcon className="icon-style group-hover:bg-opacity-70 group-hover:scale-105" />
                  <label className="label-style ">Develop</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className="flex justify-center"
                onMouseEnter={handleDrawerMenuHover}
                onMouseLeave={handleDrawerMenuClose}
              >
                <Link href="/foundations" className="sidebar-link group">
                  <BookOutlinedIcon className="icon-style group-hover:bg-opacity-70 group-hover:scale-105" />
                  <label className="label-style">Foundations</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className="flex justify-center"
                onMouseEnter={handleDrawerMenuHover}
                onMouseLeave={handleDrawerMenuClose}
              >
                <Link href="/styles" className="sidebar-link group">
                  <PaletteOutlinedIcon className="icon-style group-hover:bg-opacity-70 group-hover:scale-105" />
                  <label className="label-style">Styles</label>
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="mb-4 flex justify-center">
          <DarkModeToggleButton />
        </div>
      </nav>

      <div
        className={`drawer-menu 
          ${isDrawerOpen ? "animation-slide-in" : "animation-slide-out"}`}
        onMouseEnter={handleDrawerMenuHover}
        onMouseLeave={handleDrawerMenuClose}
      ></div>
    </>
  );
}
