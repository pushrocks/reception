import * as plugins from './reception.plugins'
import * as login from './reception.login'

// imports for the sake of typings
import { Express as IExpress } from 'express'
import { Deferred as ICDeferred } from 'smartq'

// types
export type TStrategy = 'Google' | 'Facebook' | 'Twitter'

export interface IStrategyData {
    Twitter?: {
        consumerKey: string
        consumerSecret: string
    }
    Facebook?: {
        clientID: string
        clientSecret: string
    }
    Google?: {
        clientID: string
        clientSecret: string
    }
}

export interface IReceptionConstructorOptions {
    strategyData: IStrategyData
}

export class Reception {
    // the express app
    expressApp: IExpress = plugins.express()
    expressPort: number = 3000
    // strategies
    ppStrategyFacebook: plugins.passportFacebook.Strategy = null
    ppStategyTwitter: plugins.passportTwitter.Strategy = null
    ppStrategyGoogle: plugins.passportGoogle.OAuth2Strategy = null

    // status
    running = this.runningDeferred.promise
    protected runningDeferred: ICDeferred<number> = plugins.smartq.defer()

    constructor(optionsArg: IReceptionConstructorOptions) {
        this.expressApp.get('/', (req, res) => {
            res.send('Hello World!')
        })

        this.expressApp.listen(this.expressPort, () => {
            console.log(`Reception listening on port ${this.expressPort}`)
            this.runningDeferred.resolve(this.expressPort)
        })
    }
}