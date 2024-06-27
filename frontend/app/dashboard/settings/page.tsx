import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
    return (
        <div className="flex h-screen w-full">
            <main className="flex-1 p-6 md:p-10">
                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Settings</CardTitle>
                            <CardDescription>Manage your account settings here.</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </main>
        </div>
      );
  }