import { Button } from "@/components/ui/button";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

type SubCategoryActionButtonProps = {
    tooltipText: string;
    icon: React.ReactNode;
    action: () => void;
}

export default function ActionButton({
    tooltipText,
    icon,
    action,
}: SubCategoryActionButtonProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button variant="ghost" size="icon" onClick={action}>
                        {icon}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltipText}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}