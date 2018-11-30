export class Greeter {
    sal: string = 'Hello ';

    greet(name: string): string {
        return this.sal + name;
    }
}