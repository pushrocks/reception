"use strict";
require("typings-test");
const reception = require("../dist/index");
let open = require('open');
let testReception;
describe('reception', function () {
    it('should start an instance of reception', function () {
        testReception = new reception.Reception();
        testReception.running.then(portNumberArg => {
            open(`http://localhost:${portNumberArg}`);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUdyQiwyQ0FBMEM7QUFFMUMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRTFCLElBQUksYUFBa0MsQ0FBQTtBQUV0QyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ2xCLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTtRQUN4QyxhQUFhLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDekMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUNwQyxJQUFJLENBQUMsb0JBQW9CLGFBQWEsRUFBRSxDQUFDLENBQUE7UUFDN0MsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=