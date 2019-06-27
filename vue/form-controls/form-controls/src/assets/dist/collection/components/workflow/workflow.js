// import { format } from '../../utils/utils';
export class Workflow {
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
    static get style() { return "/**style-placeholder:cx-workflow:**/"; }
}
