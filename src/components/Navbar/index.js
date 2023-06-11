import React from "react";
import { useState } from "react";
import MENU_ITEMS from "data/constants/navLinks";
import Link from "next/link";
import {
  Dashboard,
  Kana,
  Profile,
  Products,
  SignIn,
  SignUp,
  Inbox,
} from "components/svg";
export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <div>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                  {item.badge && (
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {item.badge}{" "}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="fixed bottom-0 left-0 z-50 w-full px-6 py-3 text-gray-800 bg-white shadow-sm lg:hidden rounded-xl">
        <div className="flex items-center justify-between px-4">
          <Link href="#">
            <Inbox className="w-6 h-6" />
          </Link>
          <Link href="#">
            <Inbox className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="p-2 -mx-3 -mt-12 text-white bg-blue-800 rounded-full"
          >
            <Inbox className="w-6 h-6" />
          </Link>
          <Link href="#">
            <Inbox className="w-6 h-6" />
          </Link>
          <Link href="#">
            <Inbox className="w-6 h-6 text-blue-800" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
