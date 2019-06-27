import { h } from '../mncomponent.core.js';
function format(first, middle, last) {
    return ((first || '') +
        (middle ? " " + middle : '') +
        (last ? " " + last : ''));
}
var MyComponent = /** @class */ (function () {
    function MyComponent() {
    }
    MyComponent.prototype.getText = function () {
        return format(this.first, this.middle, this.last);
    };
    MyComponent.prototype.render = function () {
        return h("div", null, "Hello, World! I'm ", this.getText());
    };
    Object.defineProperty(MyComponent, "is", {
        get: function () { return "my-component"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "properties", {
        get: function () {
            return {
                "first": {
                    "type": String,
                    "attr": "first"
                },
                "last": {
                    "type": String,
                    "attr": "last"
                },
                "middle": {
                    "type": String,
                    "attr": "middle"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
export { MyComponent };
