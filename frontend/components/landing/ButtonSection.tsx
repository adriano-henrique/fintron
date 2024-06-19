"use client";
import { useRouter } from "next/navigation"

export default function LandingPageButtonSection() {
    const { push }  = useRouter()
    return (
        <div className="flex flex-col gap-8 sm:flex-row">
          <button onClick={() => push("/sign-in")} className="px-12 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Login
          </button>
          <button onClick={() => push("/sign-up")} className="px-12 py-2 bg-green-600 hover:bg-green-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Sign Up
          </button>
        </div>
      )
    }