"use client";
import { useRouter } from "next/navigation";
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
    const router = useRouter()
    const handleClick=()=>{
        router.push("/auth/login")
        
        console.log("Button clicked for login")
    }
    if(mode==="modal"){
        return(
            <span>TODO implement modal like this</span>
        )
    }
    return (
        <span onClick={handleClick} className="cursor-pointer">
            {children}
        </span>
    )
};
