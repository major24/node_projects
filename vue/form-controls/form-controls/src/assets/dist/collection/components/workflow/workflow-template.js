// import { format } from '../../utils/utils';
export class WorkflowTemplate {
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
    static get style() { return "/**style-placeholder:cx-workflow-template:**/"; }
}
