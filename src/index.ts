export interface MyInterface {
    doSomething():string;
}

export class ClassFromPackage1 implements MyInterface {
    doSomething():string {
        return "hello from package1!";
    }
}
