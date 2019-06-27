const h = window.mncomponent.h;

// import { format } from '../../utils/utils';
class Activity {
    componentWillLoad() {
        console.log('activity componentWillLoad()');
        console.log(this.header);
    }
    componentDidLoad() {
        console.log('activity componentDidLoad()');
    }
    componentWillUpdate() {
        console.log('activity componentWillUpdate()');
    }
    componentDidUpdate() {
        console.log('activity componentDidUpdate()');
    }
    // private getText(): string {
    //   return format(this.first, this.middle, this.last);
    // }
    render() {
        return (h("div", { class: "activity" },
            h("div", { class: "activity-header" },
                h("div", { class: "activity-label" }, this.header),
                h("div", null,
                    "Act Content:",
                    h("slot", null)),
                h("div", null,
                    h("button", { id: 'activity-cancel' }, "Cancel"),
                    h("button", { id: 'activity-continue' }, "Continue")))));
    }
    static get is() { return "cx-activity"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "header": {
            "type": String,
            "attr": "header"
        }
    }; }
    static get style() { return ""; }
}

// import { format } from '../../utils/utils';
class Workflow {
    componentWillLoad() {
        console.log('componentWillLoad()');
        console.log(this.header);
    }
    componentDidLoad() {
        console.log('componentDidLoad()');
    }
    componentWillUpdate() {
        console.log('componentWillUpdate()');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }
    // private getText(): string {
    //   return format(this.first, this.middle, this.last);
    // }
    render() {
        return (h("div", { class: "workflow" },
            h("div", { class: "workflow-header" },
                h("div", { class: "workflow-label" }, this.header))));
    }
    static get is() { return "cx-workflow"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "header": {
            "type": String,
            "attr": "header"
        }
    }; }
    static get style() { return ""; }
}

// import { format } from '../../utils/utils';
class WorkflowTemplate {
    componentWillLoad() {
        console.log('temp componentWillLoad()');
        console.log(this.header);
        console.log(this.activities);
        this._header = this.header;
        this._activities = JSON.parse(this.activities);
    }
    componentDidLoad() {
        console.log('temp componentDidLoad()');
    }
    componentWillUpdate() {
        console.log('temp componentWillUpdate()');
    }
    componentDidUpdate() {
        console.log('temp componentDidUpdate()');
    }
    // private getText(): string {
    //   return format(this.first, this.middle, this.last);
    // }
    render() {
        return (h("div", null,
            h("div", { class: "workflow-template" },
                h("cx-workflow", { header: this._header })),
            h("div", null,
                h("div", null, "Activities:"),
                this._activities.map((activity) => {
                    return (h("div", null,
                        h("cx-activity", { header: activity.header },
                            JSON.stringify(activity.content),
                            h("div", null, "aaa")),
                        h("hr", null)));
                }))));
    }
    static get is() { return "cx-workflow-template"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
    }; }
    static get style() { return ""; }
}

export { Activity as CxActivity, Workflow as CxWorkflow, WorkflowTemplate as CxWorkflowTemplate };
