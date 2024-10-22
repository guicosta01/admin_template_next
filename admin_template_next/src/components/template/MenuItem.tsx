"use client";

import Link from 'next/link';

interface MenuItemProps {
    url?: string;
    texto: string;
    icone: any;
    className?: string;
    onClick?: () => void;
}

export default function MenuItem(props: MenuItemProps) {

    function renderLink(){
        return(    
            <a onClick={props.onClick} className="flex flex-col justify-center items-center h-auto w-full p-4 flex-grow overflow-visible ${props.className}">
                <span className="text-2xl flex-shrink-0">{props.icone}</span>
                <span className="text-xs font-light text-gray-600 mt-1 flex-shrink-0 whitespace-nowrap">{props.texto}</span>
            </a>
        )
    }

    return (
        <li className="hover:bg-gray-100 cursor-pointer">
            {props.url ? (
                <Link legacyBehavior href={props.url}>
                    {renderLink()}
                </Link>
            ) : (
                renderLink()
            )}
        </li>
    )
}