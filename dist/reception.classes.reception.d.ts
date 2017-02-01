/// <reference types="express" />
import * as plugins from './reception.plugins';
import { Express as IExpress } from 'express';
import { Deferred as ICDeferred } from 'smartq';
export declare type TStrategy = 'Google' | 'Facebook' | 'Twitter';
export interface IStrategyData {
    Twitter?: {
        consumerKey: string;
        consumerSecret: string;
    };
    Facebook?: {
        clientID: string;
        clientSecret: string;
    };
    Google?: {
        clientID: string;
        clientSecret: string;
    };
}
export interface IReceptionConstructorOptions {
    strategyData: IStrategyData;
}
export declare class Reception {
    expressApp: IExpress;
    expressPort: number;
    ppStrategyFacebook: plugins.passportFacebook.Strategy;
    ppStategyTwitter: plugins.passportTwitter.Strategy;
    ppStrategyGoogle: plugins.passportGoogle.OAuth2Strategy;
    running: Promise<number>;
    protected runningDeferred: ICDeferred<number>;
    constructor(optionsArg: IReceptionConstructorOptions);
}
