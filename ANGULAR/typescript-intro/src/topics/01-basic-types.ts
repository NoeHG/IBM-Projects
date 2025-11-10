const name:string = 'Strider';

let hpPonits:number | string = 95; //hpPonits puede ser de dos tipos numbre o string
hpPonits = 76;
hpPonits = 'Hola';

let hpPonits2:number | 'FULL' = 95; //hpPonits puede ser de dos tipos numbre o FULL
hpPonits2 = 76;
//Error ---> hpPonits2 = 'Hola';
hpPonits2 = 'FULL';

const isAlive:boolean = true;

console.log({
    name, hpPonits, hpPonits2, isAlive
});

export{};