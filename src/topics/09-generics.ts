export function whatsMyType<T>(params:T):T {
    return params
}

const amIString = whatsMyType<string>('hola mundillo')
const amInNumber = whatsMyType<number>(10)
const amIArray = whatsMyType<number[]>([0,1,12,2,3,5])

console.log(amIString.split(' '))
console.log(amInNumber.toFixed())
console.log(amIArray.join('-'))

