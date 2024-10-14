import Link from 'next/link';

interface MenuItemProps {
    url: string;
    texto: string;
    icone: any;
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <li className="hover:bg-gray-100">
            <Link legacyBehavior href={props.url}>
                <a className="flex flex-col justify-center items-center h-20 w-full">
                    <span className="text-2xl">{props.icone}</span>
                    <span className="text-xs font-light text-gray-600 mt-1">{props.texto}</span>
                </a>
            </Link>
        </li>
    );
}