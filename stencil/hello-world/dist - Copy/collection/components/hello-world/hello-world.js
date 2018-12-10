export class HelloWorld {
    render() {
        return (h("h1", null, "Hello World!"));
    }
    static get is() { return "hello-world"; }
    static get encapsulation() { return "shadow"; }
}
