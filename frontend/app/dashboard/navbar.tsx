"use client"
import MountainIcon from "./icons/MountainIcon";
import LayoutGridIcon from "./icons/LayoutGridIcon";
import DollarSignIcon from "./icons/DollarSignIcon";
import UsersIcon from "./icons/UsersIcon";
import Link from "next/link";
import FolderIcon from "./icons/FolderIcon";
import SettingsIcon from "./icons/SettingsIcon";
import { useState } from "react";

export default function DashboardNavbar() {
    const [activeTab, setActiveTab] = useState("dashboard")
    return (
        <nav className="flex flex-col bg-gray-950 p-4 text-gray-400 dark:bg-gray-950 dark:text-gray-400 md:w-64 md:p-6">
        <div className="mb-8 flex items-center gap-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold text-gray-50 dark:text-gray-50">Acme Inc</span>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
              activeTab === "dashboard"
                ? "bg-gray-900 text-gray-50 dark:bg-gray-800 dark:text-gray-50"
                : "hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            }`}
          >
            <LayoutGridIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab("expenses")}
            className={`flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
              activeTab === "expenses"
                ? "bg-gray-900 text-gray-50 dark:bg-gray-800 dark:text-gray-50"
                : "hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            }`}
          >
            <DollarSignIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Expenses</span>
          </button>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            prefetch={false}
          >
            <FolderIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Categories</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            prefetch={false}
          >
            <UsersIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Family</span>
          </Link>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
              activeTab === "settings"
                ? "bg-gray-900 text-gray-50 dark:bg-gray-800 dark:text-gray-50"
                : "hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            }`}
          >
            <SettingsIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </nav>
    )
}