"use strict";
require("typings-test");
const reception = require("../dist/index");
let open = require('open');
let testReception;
describe('reception', function () {
    it('should start an instance of reception', function () {
        testReception = new reception.Reception({
            strategyData: {}
        });
    });
    it('should start a server when calling .start()', function (done) {
        testReception.start();
        testReception.running.then(portNumberArg => {
            // open(`http://localhost:${portNumberArg}`)
            done();
        });
    });
    it('should stop the server when calling .stop()', function (done) {
        this.timeout(10000);
        setTimeout(() => {
            testReception.stop();
            done();
        }, 5000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUdyQiwyQ0FBMEM7QUFFMUMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRTFCLElBQUksYUFBa0MsQ0FBQTtBQUV0QyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ3BCLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTtRQUMxQyxhQUFhLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQ3RDLFlBQVksRUFBRSxFQUViO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsNkNBQTZDLEVBQUUsVUFBVSxJQUFJO1FBQzlELGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNyQixhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQ3RDLDRDQUE0QztZQUM1QyxJQUFJLEVBQUUsQ0FBQTtRQUNSLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsNkNBQTZDLEVBQUUsVUFBVSxJQUFJO1FBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkIsVUFBVSxDQUNSO1lBQ0UsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ3BCLElBQUksRUFBRSxDQUFBO1FBQ1IsQ0FBQyxFQUNELElBQUksQ0FBQyxDQUFBO0lBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9