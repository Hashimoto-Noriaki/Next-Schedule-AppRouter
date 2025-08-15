import Link from 'next/link';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
    href: string;
    onClick?: () => void;
}>;

export default function LoginButton({ href, onClick, children }: Props) {
    return (
        <Link
            href={href}
            className="bg-emerald-600 px-12 py-5 rounded-full text-white w-[400px] shadow-lg hover:bg-emerald-400 transition"
            onClick={onClick}
        >
            {children}
        </Link>
    );
}
