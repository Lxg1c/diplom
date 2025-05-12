"use client"

import Link from "next/link";
import {Button} from "@/shared/ui/button/Button";
import {usePathname} from "next/navigation";


const HeaderNav = () => {
    const pathname = usePathname(); // Получаем текущий путь

    // Определяем активную страницу на основе пути
    const getActivePage = () => {
        if (pathname === "/") return 1;
        if (pathname === "/rating") return 2;
        if (pathname === "/report") return 3;
        if (pathname === "/about") return 4;
        if (pathname === "/profile") return 5;

        return 0;
    };

    return (
        <nav>
            <ul className="flex">
                <li>
                    <Link href="/">
                        <Button text="Создать" active={getActivePage() === 1}/>
                    </Link>
                </li>
                <li>
                    <Link href="/rating">
                        <Button text="Рейтинг" active={getActivePage() === 2}/>
                    </Link>
                </li>
                <li>
                    <Link href="/report">
                        <Button text="Отчеты"  active={getActivePage() === 3}/>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <Button text="О нас"  active={getActivePage() === 4} />
                    </Link>
                </li>
                <li>
                    <Link href="/profile">
                        <Button text="Профиль" active={getActivePage() === 5} />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav;