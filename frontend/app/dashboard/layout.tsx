import DashboardNavbar from "./navbar";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return  (
        <div className="flex h-screen w-full">
            <DashboardNavbar />
            {children}
        </div>
    )
}