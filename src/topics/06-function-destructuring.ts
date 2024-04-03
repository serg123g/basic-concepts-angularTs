export interface Product {
    description: string,
    price: number
}

const phone: Product = {
    description: "Nokia",
    price: 100
}

const tablet: Product = {
    description: "iPad Air",
    price: 400
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[]
}

export function taxCalculation(options:TaxCalculationOptions): [number, number] {
    let total = 0
    const {products, tax} = options 

     products.forEach(element => {
        total += element.price
    });
    return [total, total * tax]
}

const shoppingCart = [phone, tablet]
const tax = 0.15

const result = taxCalculation({
    tax: tax,
    products: shoppingCart
})

const [p1, p2] : number[] = [result[0], result[1]]

// console.log('Total ' + p1)
// console.log('Total tax ' + p2)