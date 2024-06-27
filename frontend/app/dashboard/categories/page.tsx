import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
    return (
        <div className="flex h-screen w-full">
            <main className="flex-1 p-6 md:p-10">
                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Manage Categories</CardTitle>
                            <CardDescription>Create, update, and delete categories and subcategories.</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </main>
        </div>
      );
  }