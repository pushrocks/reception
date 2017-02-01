/// <reference types="express" />
import * as plugins from './reception.plugins';
import { Express as IExpress } from 'express';
import { Deferred as ICDeferred } from 'smartq';
export declare class Reception {
    expressApp: IExpress;
    expressPort: number;
    ppStrategyFacebook: plugins.passportFacebook.Strategy;
    ppStategyTwitter: plugins.passportTwitter.Strategy;
    ppStrategyGoogle: plugins.passportGoogle.OAuth2Strategy;
    protected runningDeferred: ICDeferred<number>;
    running: Promise<number>;
    constructor();
}
