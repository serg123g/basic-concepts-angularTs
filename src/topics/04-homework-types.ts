
/*
    ===== Código de TypeScript =====
*/
interface SuperHero {
    name: string;
    age: number;
    street: Address
    showAddress: () => string;
}

interface Address {
    calle: string;
    country: string;
    city: string;
};

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    street: {
        calle: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.street.city + ', ' + this.street.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};