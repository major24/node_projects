import { h } from '../my-web-components.core.js';

class HelloWorld {
    render() {
        return (h("h1", null, "Hello World!"));
    }
    static get is() { return "hello-world"; }
    static get encapsulation() { return "shadow"; }
}

export { HelloWorld };
