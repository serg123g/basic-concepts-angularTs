const skills : string[] = ['Bash', 'Counter', 'Healing']

interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string
}

const strider: Character = {
    name : 'Strider',
    hp: 100,
    skills: ['bash','strider'],
    // hometown: 'hola'
}

strider.hp = 12

console.table(strider)
export{}