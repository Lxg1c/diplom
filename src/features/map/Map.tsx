'use client';

import * as React from 'react';
import {ReactifiedModule} from '@yandex/ymaps3-types/reactify/reactify';
import {YMapLocationRequest} from "ymaps3";
import {loadYmaps} from "@/shared/lib/ymaps";

const fallbackLocation: YMapLocationRequest = {
    center: [37.623082, 55.75254],
    zoom: 9,
};


type ReactifiedApi = ReactifiedModule<typeof ymaps3>;

const Map = () => {
    const [reactifiedApi, setReactifiedApi] = React.useState<ReactifiedApi>();

    React.useEffect(() => {
        loadYmaps().then(setReactifiedApi);
    }, []);

    if (!reactifiedApi) {
        console.log("Error response from api")
        return null;
    }

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer} = reactifiedApi;

    return (
        <YMap location={fallbackLocation} className="rounded-2xl">
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />
        </YMap>
    );
};

export default Map;

