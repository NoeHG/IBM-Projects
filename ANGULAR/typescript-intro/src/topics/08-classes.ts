export class Persona {
    public name: string;
    private address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

const ironman = new Persona('Noe', 'Mexico');

console.log(ironman);



export class Person {
    // public name: string;
    // private address: string;

    constructor( 
        public firstName: string, 
        public lastName: string, 
        private address: string = 'No Address'
    ) {}

}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number, 
//         public realName: string,
//     ) {
//         super( realName, 'New York' );
//     }

// }
export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number, 
        public realName: string,
        public person: Person,
    ) {
        
        // this.person = new Person(realName);

    }

}

const tony = new Person('Tony','Stark','New York');

const ironman2 = new Hero('Ironman',45,'Tony',tony);


console.log(ironman2)