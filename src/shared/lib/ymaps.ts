import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@yandex/ymaps3-default-ui-theme';

export const loadYmaps = async () => {
    const [{ reactify }] = await Promise.all([
        ymaps3.import('@yandex/ymaps3-reactify'),
        ymaps3.ready,
    ]);

    return reactify.bindTo(React, ReactDOM).module(ymaps3);
};


