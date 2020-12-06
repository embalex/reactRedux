import React from 'react';
import { useSelector } from 'react-redux';
import { noop } from 'lodash';

import { Error, Loader } from 'clientSrc/components';
import {
    isContentResource,
    isErrorResource,
    isLoadingResource,
    isUndefinedResource,
} from 'clientSrc/utils';

import { Content } from './Content';
import { ohlcModel } from './model';


export const OHLCPage: React.FC = () => {
    const candlesRange = useSelector(ohlcModel.selector.candlesRange);

    if (isLoadingResource(candlesRange)) {
        return <Loader />;
    }

    if (isErrorResource(candlesRange)) {
        return <Error.SomethingWrong onRouteToHome={noop} onRefresh={noop} />;
    }

    if (isUndefinedResource(candlesRange)) {
        return <Content onRequest={(value) => console.log(value)} />;
    }

    const { year, value } = candlesRange.content;
    return (
        <Content
            onRequest={(formValue) => console.log(formValue)}
            minYear={year.min}
            maxYear={year.max}
            minValue={value.min}
            maxValue={value.max}
        />
    );
};
