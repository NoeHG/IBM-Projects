function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b:number): string => {
    return `${ a + b }`
}

function multiply(firsNumber: number, second?: number, base: number = 2) {
    if (second == null) {
        second = 0;
    }
    return firsNumber * base;
}

const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const result3: number = multiply(5)

console.log({result, result2, result3}); //Imprime como un objeto

interface Character {
    name: String;
    hp: number;
    showHp: () => void;
}

const healthCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
        
    }
}
healthCharacter(strider, 10);
healthCharacter(strider, 30);

strider.showHp();

export{};