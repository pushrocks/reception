/// <reference types="express" />
/// <reference types="node" />
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
    expressServer: plugins.http.Server;
    expressPort: number;
    ppStrategyFacebook: plugins.passportFacebook.Strategy;
    ppStategyTwitter: plugins.passportTwitter.Strategy;
    ppStrategyGoogle: plugins.passportGoogle.OAuth2Strategy;
    runningDeferred: ICDeferred<number>;
    running: Promise<number>;
    constructor(optionsArg: IReceptionConstructorOptions);
    start(): void;
    stop(): void;
}
