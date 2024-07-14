"use client"
import { AccordionContent } from "@/components/ui/accordion";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import SubCategoryActionButton from "./SubCategoryActionButton";

type CategoriesCardSubCategoryProps = {
    subCategoryName: string;
}
export default function CategoriesCardSubCategory({subCategoryName}: CategoriesCardSubCategoryProps) {
    return (
        <AccordionContent>
            <div className='flex flex-row justify-between items-center border-b border-slate-200 py-3'>
                    <h4 className="text-md">{subCategoryName}</h4>
                    <div className="flex flex-row gap-2">
                    <SubCategoryActionButton tooltipText="Edit Subcategory" icon={<EditIcon className="h-4 w-4" />} action={() => console.log("Edit Subcategory")} />
                    <SubCategoryActionButton tooltipText="Delete Subcategory" icon={<DeleteIcon className="h-4 w-4" />} action={() => console.log("Delete Subcategory")} />
                    </div>
                </div>
            </AccordionContent>
      );
  }