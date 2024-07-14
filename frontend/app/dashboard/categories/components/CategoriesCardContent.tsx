import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CategoriesCardSubCategory from "./CategoriesCardSubCategory";

type CategoriesCardContentProps = {
  categories: Category[];
};

type Category = {
  id: number;
  name: string;
  subcategories: Subcategory[];
};

type Subcategory = {
  id: number;
  name: string;
};

export default function CategoriesCardContent(
  props: CategoriesCardContentProps
) {
  const { categories } = props;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <Accordion type="single" collapsible className="w-full">
        {categories.map((category) => (
          <AccordionItem key={category.id} value={`category-${category.id}`}>
            <AccordionTrigger>{category.name}</AccordionTrigger>
            {category.subcategories.map((subcategory, index) => {
              let itemValue = `subcategory-${category.id}-${index}`;
              return (
                <CategoriesCardSubCategory
                  key={itemValue}
                  subCategoryName={subcategory.name}
                />
              );
            })}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
