mncomponent.loadBundle('cx-activity', ['exports'], function (exports) {
    var h = window.mncomponent.h;
    // import { format } from '../../utils/utils';
    var Activity = /** @class */ (function () {
        function Activity() {
        }
        Activity.prototype.componentWillLoad = function () {
            console.log('activity componentWillLoad()');
            console.log(this.header);
        };
        Activity.prototype.componentDidLoad = function () {
            console.log('activity componentDidLoad()');
        };
        Activity.prototype.componentWillUpdate = function () {
            console.log('activity componentWillUpdate()');
        };
        Activity.prototype.componentDidUpdate = function () {
            console.log('activity componentDidUpdate()');
        };
        // private getText(): string {
        //   return format(this.first, this.middle, this.last);
        // }
        Activity.prototype.render = function () {
            return (h("div", { class: "activity" }, h("div", { class: "activity-header" }, h("div", { class: "activity-label" }, this.header), h("div", null, "Act Content:", h("slot", null)), h("div", null, h("button", { id: 'activity-cancel' }, "Cancel"), h("button", { id: 'activity-continue' }, "Continue")))));
        };
        Object.defineProperty(Activity, "is", {
            get: function () { return "cx-activity"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Activity, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Activity, "properties", {
            get: function () {
                return {
                    "header": {
                        "type": String,
                        "attr": "header"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Activity, "style", {
            get: function () { return ""; },
            enumerable: true,
            configurable: true
        });
        return Activity;
    }());
    // import { format } from '../../utils/utils';
    var Workflow = /** @class */ (function () {
        function Workflow() {
        }
        Workflow.prototype.componentWillLoad = function () {
            console.log('componentWillLoad()');
            console.log(this.header);
        };
        Workflow.prototype.componentDidLoad = function () {
            console.log('componentDidLoad()');
        };
        Workflow.prototype.componentWillUpdate = function () {
            console.log('componentWillUpdate()');
        };
        Workflow.prototype.componentDidUpdate = function () {
            console.log('componentDidUpdate()');
        };
        // private getText(): string {
        //   return format(this.first, this.middle, this.last);
        // }
        Workflow.prototype.render = function () {
            return (h("div", { class: "workflow" }, h("div", { class: "workflow-header" }, h("div", { class: "workflow-label" }, this.header))));
        };
        Object.defineProperty(Workflow, "is", {
            get: function () { return "cx-workflow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Workflow, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Workflow, "properties", {
            get: function () {
                return {
                    "header": {
                        "type": String,
                        "attr": "header"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Workflow, "style", {
            get: function () { return ""; },
            enumerable: true,
            configurable: true
        });
        return Workflow;
    }());
    // import { format } from '../../utils/utils';
    var WorkflowTemplate = /** @class */ (function () {
        function WorkflowTemplate() {
        }
        WorkflowTemplate.prototype.componentWillLoad = function () {
            console.log('temp componentWillLoad()');
            console.log(this.header);
            console.log(this.activities);
            this._header = this.header;
            this._activities = JSON.parse(this.activities);
        };
        WorkflowTemplate.prototype.componentDidLoad = function () {
            console.log('temp componentDidLoad()');
        };
        WorkflowTemplate.prototype.componentWillUpdate = function () {
            console.log('temp componentWillUpdate()');
        };
        WorkflowTemplate.prototype.componentDidUpdate = function () {
            console.log('temp componentDidUpdate()');
        };
        // private getText(): string {
        //   return format(this.first, this.middle, this.last);
        // }
        WorkflowTemplate.prototype.render = function () {
            return (h("div", null, h("div", { class: "workflow-template" }, h("cx-workflow", { header: this._header })), h("div", null, h("div", null, "Activities:"), this._activities.map(function (activity) {
                return (h("div", null, h("cx-activity", { header: activity.header }, JSON.stringify(activity.content), h("div", null, "aaa")), h("hr", null)));
            }))));
        };
        Object.defineProperty(WorkflowTemplate, "is", {
            get: function () { return "cx-workflow-template"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WorkflowTemplate, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WorkflowTemplate, "properties", {
            get: function () {
                return {
                    "_activities": {
                        "state": true
                    },
                    "_header": {
                        "state": true
                    },
                    "activities": {
                        "type": "Any",
                        "attr": "activities"
                    },
                    "header": {
                        "type": String,
                        "attr": "header"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WorkflowTemplate, "style", {
            get: function () { return ""; },
            enumerable: true,
            configurable: true
        });
        return WorkflowTemplate;
    }());
    exports.CxActivity = Activity;
    exports.CxWorkflow = Workflow;
    exports.CxWorkflowTemplate = WorkflowTemplate;
    Object.defineProperty(exports, '__esModule', { value: true });
});
