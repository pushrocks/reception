import 'typings-test'
import * as smartchai from 'smartchai'

import * as reception from '../dist/index'

let open = require('open')

let testReception: reception.Reception

describe('reception', function () {
  it('should start an instance of reception', function () {
    testReception = new reception.Reception({
      strategyData: {

      }
    })
  })

  it('should start a server when calling .start()', function (done) {
    testReception.start()
    testReception.running.then(portNumberArg => {
      // open(`http://localhost:${portNumberArg}`)
      done()
    })
  })

  it('should stop the server when calling .stop()', function (done) {
    this.timeout(10000)
    setTimeout(
      () => {
        testReception.stop()
        done()
      },
      5000)
  })
})
