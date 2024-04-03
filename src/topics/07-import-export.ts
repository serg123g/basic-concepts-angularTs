import { Product, taxCalculation } from "./06-function-destructuring";


const shoppingCart: Product[] = [
    {
        description: 'Nuevo',
        price: 20
    },
    {
        description: 'Viejo',
        price: 15
    }
]

const taxEc = 0.15

const [total, tax] = taxCalculation({ products: shoppingCart, tax: taxEc})

console.log('Total', total)
console.log('Tax', tax)

