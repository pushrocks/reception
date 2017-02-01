import 'typings-test'
import * as smartchai from 'smartchai'

import * as reception from '../dist/index'

let open = require('open')

let testReception: reception.Reception

describe('reception', function() {
    it('should start an instance of reception', function() {
        testReception = new reception.Reception()
        testReception.running.then(portNumberArg => {
            open(`http://localhost:${portNumberArg}`)
        })
    })
})