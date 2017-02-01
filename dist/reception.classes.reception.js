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
        this.running = this.runningDeferred.promise;
        this.runningDeferred = plugins.smartq.defer();
        this.expressApp.get('/', (req, res) => {
            res.send('Hello World!');
        });
        this.expressApp.listen(this.expressPort, () => {
            console.log(`Reception listening on port ${this.expressPort}`);
            this.runningDeferred.resolve(this.expressPort);
        });
    }
}
exports.Reception = Reception;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZXB0aW9uLmNsYXNzZXMucmVjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcmVjZXB0aW9uLmNsYXNzZXMucmVjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBOEM7QUE2QjlDO0lBYUksWUFBWSxVQUF3QztRQVpwRCxrQkFBa0I7UUFDbEIsZUFBVSxHQUFhLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN4QyxnQkFBVyxHQUFXLElBQUksQ0FBQTtRQUMxQixhQUFhO1FBQ2IsdUJBQWtCLEdBQXNDLElBQUksQ0FBQTtRQUM1RCxxQkFBZ0IsR0FBcUMsSUFBSSxDQUFBO1FBQ3pELHFCQUFnQixHQUEwQyxJQUFJLENBQUE7UUFFOUQsU0FBUztRQUNULFlBQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQTtRQUM1QixvQkFBZSxHQUF1QixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBR2xFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHO1lBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO1lBQzlELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNsRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQXZCRCw4QkF1QkMifQ==