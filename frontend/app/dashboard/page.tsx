"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { DollarSign } from "lucide-react"
import DollarSignIcon from "./icons/DollarSignIcon"
import LayoutGridIcon from "./icons/LayoutGridIcon"
import FolderIcon from "./icons/FolderIcon"
import UsersIcon from "./icons/UsersIcon"
import MenuIcon from "./icons/MenuIcon"
import MountainIcon from "./icons/MountainIcon"
import SettingsIcon from "./icons/SettingsIcon"

export default function Component() {
  const [activeTab, setActiveTab] = useState("dashboard")
  return (
    <div className="flex h-screen w-full">
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
      <main className="flex-1 p-6 md:p-10">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">{activeTab === "dashboard" ? "Dashboard" : "Expenses"}</h1>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
        {activeTab === "dashboard" ? (
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Expenses</CardTitle>
                <CardDescription>View and manage your expenses across all categories.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">$12,345.67</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>Organize your expenses into different categories.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-sm font-medium">Groceries</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">$2,345.67</div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-sm font-medium">Utilities</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">$1,234.56</div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-sm font-medium">Transportation</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">$987.65</div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-sm font-medium">Entertainment</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">$654.32</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Family Expenses</CardTitle>
                <CardDescription>Track expenses for your family members.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-sm font-medium">John</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">$1,234.56</div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-sm font-medium">Jane</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">$987.65</div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-sm font-medium">Samantha</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">$654.32</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="border rounded-lg w-full">
            <div className="relative w-full overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Date</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-04-01</TableCell>
                    <TableCell>Groceries</TableCell>
                    <TableCell>Grocery shopping at Walmart</TableCell>
                    <TableCell className="text-right">$125.42</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-05</TableCell>
                    <TableCell>Utilities</TableCell>
                    <TableCell>Electricity bill for March</TableCell>
                    <TableCell className="text-right">$87.65</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-10</TableCell>
                    <TableCell>Transportation</TableCell>
                    <TableCell>Gas for car</TableCell>
                    <TableCell className="text-right">$45.23</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-15</TableCell>
                    <TableCell>Entertainment</TableCell>
                    <TableCell>Movie tickets</TableCell>
                    <TableCell className="text-right">$32.50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-20</TableCell>
                    <TableCell>Groceries</TableCell>
                    <TableCell>Grocery shopping at Costco</TableCell>
                    <TableCell className="text-right">$175.89</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}