'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import UserInfo from "@/features/userForm/UserInfo";
import useUserStore from "@/shared/store/store";

// 💡 Динамически импортируем компонент с отключением SSR
const Map = dynamic(() => import('@/features/map/Map'), {
    ssr: false,
    loading: () => <p>Загрузка карты...</p>,
});

export default function Page() {
    const username = useUserStore(state => state.username);
    const city = useUserStore(state => state.city);
    const district = useUserStore(state => state.district);
    const rating = useUserStore(state => state.rating);
    const paramsList = useUserStore(state => state.params);
    const flawsList = useUserStore(state => state.flaws);

    return (
        <section className='rating mt-5 relative z-10'>
            <div className='rating__container container flex items-center justify-between'>
                <UserInfo
                    username={username}
                    city={city}
                    district={district}
                    rating={rating}
                    paramsList={paramsList}
                    flawsList={flawsList}
                />

                <div className="w-187.5 h-150 rounded-2xl">
                    <Map />
                </div>
            </div>
        </section>
    );
}
