interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 10,
    song: "hola",
    details: {
        author: "Sheran",
        year: 2015
    }
}
//si se tiene dos variables con el mismo nombre, en la desestructuracion se le puede cambiar
const song = 'New Song'

//destructuracion de objetos
// const {song:anotherSong, details, songDuration:duration} = audioPlayer
// const {author} = details
// console.log('Song: ' + anotherSong)
// console.log('Duration: ' + duration)
// console.log('Author: ' + author)

//destructuracion de arreglos
// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
// const [, , trunks] : string[] = ['Goku', 'Vegeta', 'Trunks']
const [, , trunks = 'Not found'] : string[] = ['Goku', 'Vegeta'] // en caso de no existir
console.error('Personaje 3 ' + trunks)


export{}