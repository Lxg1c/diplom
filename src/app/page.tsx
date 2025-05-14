'use client'

import Link from "next/link";
import Input from "@/shared/ui/input/Input";
import "./home.css"
import Image from "next/dist/client/legacy/image";
import userIcon from "../../public/user.svg"
import Checkbox from "@/shared/ui/checkbox/Checkbox";
import {useState} from "react";


export default function Page() {
    const [active, setActive] = useState(false);

    return (
        <section className="home h-screen mt-26 relative overflow-hidden">
            <div className="home__container container relative z-10">
                <div className="home__container-top max-w-180">
                    <h1 className="title-1 text-center">Выбери свое лучшее место для жизни</h1>
                    <Link href="/" className="text-center block w-full title-7 mt-4">
                        Где бы вы хотели жить?
                    </Link>
                </div>

                <div className="flex items-center max-w-150 mt-10 gap-4">
                    <Input placeholder="Введите имя пользователя"/>
                    <button className='search-btn bg-green-500 text-white cursor-pointer rounded-xl'>
                        Мои отчеты
                    </button>
                </div>

                <form
                    className="mt-10 form p-10 bg-white/30 backdrop-blur-sm rounded-xl shadow-md flex items-center justify-between">
                    <div className='user__info'>
                        <div className='user__profile flex items-end gap-5'>
                            <Image src={userIcon} width='80' height='80' alt="User icon"/>
                            <div className='user__name'>
                                <h2 className='title-2'>Никита</h2>
                                <p className='title-7 mt-1.5'>Имя пользователя</p>
                            </div>
                        </div>

                        <div className="user__phone mt-5">
                            <h2 className='title-5'>+79281484862</h2>
                            <p className='title-7 mt-1.5'>Номер телефона</p>
                        </div>

                        <h2 className='title-2 mt-10 mb-10'>Предпочтения</h2>
                        <ul className='max-w-75 mt-4 flex flex-col gap-4'>
                            <li className='flex justify-between items-center'>
                                <p className='title-4'>Больница</p>
                                <Checkbox checked={active} onChange={() => setActive(!active)}/>
                            </li>
                        </ul>
                    </div>

                </form>
            </div>
        </section>
    )
}