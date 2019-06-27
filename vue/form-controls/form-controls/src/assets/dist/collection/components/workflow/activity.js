// import { format } from '../../utils/utils';
export class Activity {
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
    static get style() { return "/**style-placeholder:cx-activity:**/"; }
}
