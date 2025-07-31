import { ReactNode } from 'react'

type PropsType = {
    children:ReactNode;
}

export default function TopPage({children}: PropsType){
    return (
        <button className="bg-emerald-600 px-12 py-5 rounded-full text-white w-[400px] shadow-lg  hover:bg-emerald-400 transition">
            {children}
        </button>
    )
}
