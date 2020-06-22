export interface MyInterface {
    name: string;
    doSomething():string;
}

export class ClassFromPackage1 implements MyInterface {
    name = "package1";
    doSomething():string {
        return `hello from ${this.name}!`;
    }
}
