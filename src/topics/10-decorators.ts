function ClassDecorator<T extends {new(...args:any[]): {}}>(
   constructor: any
    ) {
        return class extends constructor {
            newProperty = 'New Property';
            hello = 'override'
        }    
}
@ClassDecorator
export class SuperClass {
    public myProperty: string = 'Abc123'

    print(){
        console.log('hola mundo')
    }

    constructor() {
        
    }
}

console.log(SuperClass)

const myClass = new SuperClass()
console.log(myClass)