import React from 'react';
import { useSelector } from 'react-redux';
import { noop } from 'lodash';

import { Error, Loader } from 'clientSrc/components';
import {
    isErrorResource,
    isLoadingResource,
    isUndefinedResource, useAction,
} from 'clientSrc/utils';

import { Content } from './Content';
import { ohlcModel } from './model';
import { IRange } from './model/types';


export const OHLCPage: React.FC = () => {
    const getReducedCandlesByYear = useAction(ohlcModel.action.getReducedCandlesByYear);
    const candlesRange = useSelector(ohlcModel.selector.candlesRange);
    const onRequest = (formValues: IRange) => getReducedCandlesByYear(formValues);

    if (isLoadingResource(candlesRange)) {
        return <Loader />;
    }

    if (isErrorResource(candlesRange)) {
        return <Error.SomethingWrong onRouteToHome={noop} onRefresh={noop} />;
    }

    if (isUndefinedResource(candlesRange)) {
        return <Content onRequest={onRequest} />;
    }


    const { year, value } = candlesRange.content;
    return (
        <Content
            onRequest={onRequest}
            minYear={year.min}
            maxYear={year.max}
            minValue={value.min}
            maxValue={value.max}
        />
    );
};
