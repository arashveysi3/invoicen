import { DollarSign, Euro, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CurrencyContext } from "@/components/layout/Client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext } from "react";

export function CurrencyToggleButton() {
    const [activeCurrency, setActiveCurrency] = useContext<any>(CurrencyContext);   

    function getCurrencyLogo() {
        switch (activeCurrency) {
            case "USD":
                return <DollarSign className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"/>;
            case "Euro":
                return  <Euro className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"/>;
            case "Rupee":
                return  <IndianRupee className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"/>
            default: <DollarSign className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"/>;
                break;
        }
    }    
    return (
        <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} className="mx-2">
                    {getCurrencyLogo()}
                    <span className="sr-only">Currency</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={()=>setActiveCurrency("USD")}>
                    US Dollar
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>setActiveCurrency("Euro")}>
                    Euro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>setActiveCurrency("Rupee")}>
                    Indian Rupee
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </>
    )

}