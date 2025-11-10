export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia','Elizabeth']
}

const returnChildrenNumber = ( passenger: Passenger ): number => {

    const howManyChildren = passenger.children?.length || 0; //Si el valor que children es undefine regresa un 0
    // const howManyChildren = passenger.children!.length; //Siempre va a confiar que siempre va a traer el un valor number y no un nullo

    console.log( passenger.name, howManyChildren);

    return howManyChildren;
}


returnChildrenNumber( passenger1 );

returnChildrenNumber( passenger2 );