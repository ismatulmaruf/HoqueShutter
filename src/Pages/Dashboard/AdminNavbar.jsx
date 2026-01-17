import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
// Using a slightly refined close icon for the sidebar
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import {
  FaHome,
  FaInfoCircle,
  FaList,
  FaUserCircle,
  FaTag,
  FaPhone,
  FaUsers, // Changed to FaUsers for 'Specialist' to imply a team
  FaImage,
  FaTachometerAlt,
  FaQuestionCircle, // Changed to FaImage for 'Media'
} from "react-icons/fa";

// --- Configuration and Helper Components ---
const logo = "/logo.png";

const ICON_SIZE = 18;
const SUB_ICON_SIZE = 16;
// Standardized Tailwind classes for menu items
const INACTIVE_CLASS =
  "text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-800 hover:text-teal-600 transition-colors duration-200";

// Helper for main menu items
const MainMenuItem = ({ to, icon: Icon, label, hideDrawer }) => (
  <li>
    <Link
      to={to}
      onClick={hideDrawer}
      className={`flex gap-4 items-center p-3 rounded-lg font-semibold ${INACTIVE_CLASS}`}
    >
      {/* Consistent icon styling */}
      <Icon size={ICON_SIZE} className="text-teal-600 dark:text-teal-400" />
      {label}
    </Link>
  </li>
);

// Helper for submenu items
const SubMenuItem = ({ to, icon: Icon, label, hideDrawer }) => (
  <li>
    <Link
      to={to}
      onClick={hideDrawer}
      className={`flex gap-3 items-center py-2 px-3 text-sm rounded-lg ${INACTIVE_CLASS.replace(
        "hover:bg-teal-50",
        "hover:bg-teal-100"
      )}`}
    >
      <Icon size={SUB_ICON_SIZE} className="text-gray-500 dark:text-gray-400" />
      {label}
    </Link>
  </li>
);

// --- Main Component ---

export default function Sidebar({ hideBar = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  // Destructure relevant state from Redux
  const { isLoggedIn } = useSelector((state) => state.auth);

  // Use a unique ID for the drawer toggle
  const DRAWER_ID = "admin-drawer-toggle";

  // Function to toggle the drawer state (recommended for DaisyUI)
  const toggleDrawer = () => {
    const drawerToggle = document.getElementById(DRAWER_ID);
    if (drawerToggle) {
      drawerToggle.checked = !drawerToggle.checked;
    }
  };

  // Function to close the drawer
  const hideDrawer = () => {
    const drawerToggle = document.getElementById(DRAWER_ID);
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

  const onLogout = async function () {
    setIsLoading(true);
    hideDrawer(); // Close drawer on logout
    await dispatch(logout());
    setIsLoading(false);
    navigate("/");
  };

  if (hideBar) {
    return null;
  }

  return (
    <div className="drawer z-50 w-full sticky top-0">
      {/* 1. Toggle Input */}
      <input className="drawer-toggle" id={DRAWER_ID} type="checkbox" />

      {/* 2. Drawer Content (Header/Navbar) */}
      <div className="drawer-content bg-white dark:bg-gray-900 shadow-lg border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between py-2">
            <h1 className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 tracking-tight flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                />
              </Link>
              Admin{" "}
              <span className="font-light text-yellow-400 dark:text-yellow-300">
                Panel
              </span>
            </h1>

            {/* Menu button */}
            <label htmlFor={DRAWER_ID} className="cursor-pointer">
              <FiMenu
                size={28}
                className="text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
              />
            </label>
          </div>
        </div>
      </div>

      {/* 3. Drawer Side Panel */}
      <div className="drawer-side">
        <label htmlFor={DRAWER_ID} className="drawer-overlay"></label>

        {/* Panel Content: Fixed width and blurred background */}
        <ul className="menu p-4 w-72 min-h-full bg-white dark:bg-[#1f2937e0] backdrop-blur-sm text-base font-semibold text-gray-700 dark:text-slate-200 relative shadow-2xl">
          {/* ❌ Close Button */}
          <li className="absolute top-4 right-4 z-50">
            <button
              onClick={hideDrawer}
              className="p-1 rounded-full text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600 transition-colors"
            >
              <AiOutlineCloseCircle size={26} />
            </button>
          </li>
          <span className=" mt-4"></span>

          <MainMenuItem
            to="/"
            icon={FaHome}
            label="Home"
            hideDrawer={hideDrawer}
          />

          {/* Dashboard & Submenu */}
          <li className="w-full mb-2">
            <Link
              to="/admin/dashboard"
              onClick={hideDrawer}
              className={`flex justify-between items-center p-3 rounded-lg font-bold text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-gray-800 transition-colors duration-200`}
            >
              <div className="flex gap-4 items-center">
                <FaTachometerAlt size={ICON_SIZE} />
                Dashboard
              </div>
            </Link>

            {/* Submenu */}
            <ul className="ml-6 mt-3 space-y-1 border-l-2 pl-3 border-gray-100 dark:border-gray-700">
              <SubMenuItem
                to="/admin/dashboard/slide"
                icon={FaImage}
                label="Slide Management"
                hideDrawer={hideDrawer}
              />
              <SubMenuItem
                to="/admin/dashboard/info"
                icon={FaInfoCircle}
                label="General Info"
                hideDrawer={hideDrawer}
              />
              <SubMenuItem
                to="/admin/dashboard/methods"
                icon={FaList}
                label="Method List"
                hideDrawer={hideDrawer}
              />
              <SubMenuItem
                to="/admin/dashboard/specialist"
                icon={FaUsers}
                label="Specialists"
                hideDrawer={hideDrawer}
              />
            </ul>
          </li>

          <div className="divider my-2 dark:divider-neutral-800"></div>

          {/* Main Navigation Items */}
          <MainMenuItem
            to="/admin/pricing"
            icon={FaTag}
            label="Pricing & Plans"
            hideDrawer={hideDrawer}
          />
          <MainMenuItem
            to="/admin/contact"
            icon={FaPhone}
            label="Contact Settings"
            hideDrawer={hideDrawer}
          />
          <MainMenuItem
            to="/admin/service"
            icon={FaList}
            label="Services"
            hideDrawer={hideDrawer}
          />
          <MainMenuItem
            to="/admin/about"
            icon={FaInfoCircle}
            label="About Page"
            hideDrawer={hideDrawer}
          />
          <MainMenuItem
            to="/admin/media"
            icon={FaImage}
            label="Media Library"
            hideDrawer={hideDrawer}
          />
          <MainMenuItem
            to="/admin/faq"
            icon={FaQuestionCircle} // You can import this from react-icons/fa
            label="FAQ"
            hideDrawer={hideDrawer}
          />

          {/* 🔑 Auth Section (Fixed to Bottom) */}
          <li className="absolute bottom-4 w-[calc(100%-2rem)] p-2">
            {isLoggedIn ? (
              // Logged In State: Logout Button
              <button
                className={` w-full py-2.5 font-bold rounded-lg transition-colors duration-200 shadow-md text-center d-block ${
                  isLoading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
                onClick={onLogout}
                disabled={isLoading}
              >
                {isLoading ? "Logging Out..." : "Logout"}
              </button>
            ) : (
              // Not Logged In State: Login/Signup Buttons
              <div className="w-full flex gap-3">
                <Link
                  to="/login"
                  onClick={hideDrawer}
                  className="flex-1 text-center py-2.5 font-bold rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200 shadow-md"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={hideDrawer}
                  className="flex-1 text-center py-2.5 font-bold rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors duration-200 dark:bg-gray-700 dark:text-slate-200 dark:hover:bg-gray-600 shadow-md"
                >
                  Signup
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
