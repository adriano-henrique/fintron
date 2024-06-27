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
          <NavBarTab tab={NavBarTabsEnum.Dashboard} activeTab={activeTab} setActiveTab={setActiveTab} icon={<LayoutGridIcon className="h-5 w-5" />} />
          <NavBarTab tab={NavBarTabsEnum.Expenses} activeTab={activeTab} setActiveTab={setActiveTab} icon={<DollarSignIcon className="h-5 w-5" />} />
          <NavBarTab tab={NavBarTabsEnum.Categories} activeTab={activeTab} setActiveTab={setActiveTab} icon={<FolderIcon className="h-5 w-5" />} />
          <NavBarTab tab={NavBarTabsEnum.Family} activeTab={activeTab} setActiveTab={setActiveTab} icon={<UsersIcon className="h-5 w-5" />} />
          <NavBarTab tab={NavBarTabsEnum.Settings} activeTab={activeTab} setActiveTab={setActiveTab} icon={<SettingsIcon className="h-5 w-5" />} />
        </div>
      </nav>
    )
}

enum NavBarTabsEnum {
    Dashboard = "Dashboard",
    Expenses = "Expenses",
    Categories = "Categories",
    Family = "Family",
    Settings = "Settings"
}

type NavBarTabProps = {
    tab: NavBarTabsEnum
    activeTab: string
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
    icon: React.ReactNode
}

function NavBarTab(props: NavBarTabProps) {
    const { tab, activeTab, setActiveTab, icon } = props;
    const redirectionUrl = tab != NavBarTabsEnum.Dashboard ? `/dashboard/${tab.toLowerCase()}` : `/dashboard`
    return (
        <Link
            href={redirectionUrl}
            className={`flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
                activeTab === tab.toLowerCase()
                  ? "bg-gray-900 text-gray-50 dark:bg-gray-800 dark:text-gray-50"
                  : "hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              }`}
            prefetch={false}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {icon}
            <span className="text-sm font-medium">{tab}</span>
          </Link>
    )
}