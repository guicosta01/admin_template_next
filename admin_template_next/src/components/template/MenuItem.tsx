import Link from 'next/link';

interface MenuItemProps {
    url?: string;
    texto: string;
    icone: any;
    onClick?: () => void;

}

function renderLink(){
    return(    
        <a className="flex flex-col justify-center items-center h-auto w-full p-4 flex-grow overflow-visible">
            <span className="text-2xl flex-shrink-0">{props.icone}</span>
            <span className="text-xs font-light text-gray-600 mt-1 flex-shrink-0 whitespace-nowrap">{props.texto}</span>
        </a>
    )
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <li onClick={props.onClick} className="hover:bg-gray-100">
            {props.url ? (
                <Link legacyBehavior href={props.url}>
                    renderLink()
                </Link>
            ) : (
                renderLink()
            )}
        </li>
    );
}