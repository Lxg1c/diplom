import Link from "next/link";


const FooterNav = () => {
    return (
        <nav className="footer__middle-nav">
            <ul className='flex justify-center gap-8 align-items-center'>
                <li>
                    <Link href="/report" className='text-white'>
                        Отчеты
                    </Link>
                </li>
                <li>
                    <Link href="/rating" className='text-white'>
                        Рейтинг
                    </Link>
                </li>
                <li>
                    <Link href="/profile" className='text-white'>
                       Профиль
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default FooterNav;