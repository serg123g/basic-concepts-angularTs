export class Person {
    // public name ?: string
    // private address ?: string
    constructor(
        public name ?: string,
        private address : string = 'No defined'
    ) {
       
    }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age : number,
//         public realName : string
//     ) {
//         super(realName, 'New York')
//     }
// }

export class Hero  {
    // public person: Person


    constructor(
        public alterEgo: string,
        public age : number,
        public realName : string,
        public person: Person

    ) {
        // this.person = new Person(realName)
    }
}


const tony = new Person('Tony', 'New')
const ironman = new Hero('Ironman',10,'', tony)


console.log(ironman)