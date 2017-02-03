"use strict";
const plugins = require("./reception.plugins");
class Reception {
    constructor(optionsArg) {
        // the express app
        this.expressApp = plugins.express();
        this.expressPort = 3000;
        // strategies
        this.ppStrategyFacebook = null;
        this.ppStategyTwitter = null;
        this.ppStrategyGoogle = null;
        // status
        this.runningDeferred = plugins.smartq.defer();
        this.running = this.runningDeferred.promise;
        this.expressApp.get('/', (req, res) => {
            res.send('Hello World!');
        });
    }
    start() {
        this.expressServer = this.expressApp.listen(this.expressPort, () => {
            console.log(`Reception listening on port ${this.expressPort}`);
            this.runningDeferred.resolve(this.expressPort);
        });
    }
    stop() {
        this.expressServer.close();
    }
}
exports.Reception = Reception;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZXB0aW9uLmNsYXNzZXMucmVjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcmVjZXB0aW9uLmNsYXNzZXMucmVjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBOEM7QUE2QjlDO0lBY0UsWUFBWSxVQUF3QztRQWJwRCxrQkFBa0I7UUFDbEIsZUFBVSxHQUFhLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUV4QyxnQkFBVyxHQUFXLElBQUksQ0FBQTtRQUMxQixhQUFhO1FBQ2IsdUJBQWtCLEdBQXNDLElBQUksQ0FBQTtRQUM1RCxxQkFBZ0IsR0FBcUMsSUFBSSxDQUFBO1FBQ3pELHFCQUFnQixHQUEwQyxJQUFJLENBQUE7UUFFOUQsU0FBUztRQUNULG9CQUFlLEdBQXVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDNUQsWUFBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFBO1FBR3BDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ2hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDMUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtZQUM5RCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDaEQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUIsQ0FBQztDQUNGO0FBOUJELDhCQThCQyJ9