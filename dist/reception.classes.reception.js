"use strict";
const plugins = require("./reception.plugins");
class Reception {
    constructor() {
        // the express app
        this.expressApp = plugins.express();
        this.expressPort = 3000;
        //status
        this.runningDeferred = plugins.smartq.defer();
        this.running = this.runningDeferred.promise;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZXB0aW9uLmNsYXNzZXMucmVjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcmVjZXB0aW9uLmNsYXNzZXMucmVjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBOEM7QUFPOUM7SUFhSTtRQVpBLGtCQUFrQjtRQUNsQixlQUFVLEdBQVksT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ3ZDLGdCQUFXLEdBQVcsSUFBSSxDQUFBO1FBTTFCLFFBQVE7UUFDRSxvQkFBZSxHQUF1QixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3RFLFlBQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQTtRQUdsQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRztZQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtZQUM5RCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDbEQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0o7QUF2QkQsOEJBdUJDIn0=