import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { categories } from "@/app/lib/mocks/categories";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import CategoriesCardContent from "./components/CategoriesCardContent";

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
                        <CardContent>
                            <Button variant="default" size="sm">
                                Manage Categories
                            </Button>
                            <CategoriesCardContent categories={categories} />
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
      );
  }