interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: 'Mes',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New Song';

const {song:anotherSong} = audioPlayer; //Se renombra song como anotherSong de AudioPlayer
console.log({song});
console.log('Song: ', anotherSong);

const {song:anotherSong2, songDuration:duration, details} = audioPlayer; //Se renombra song como anotherSong de AudioPlayer

const {author:author, year:year} = details;
// const {author:author, year:year} = audioPlayer.details;

console.log('Song: ', audioPlayer.song);
console.log('Song: ', anotherSong2);
console.log('Song: ', duration);
console.log('Duration: ', audioPlayer.songDuration);
console.log('Author: ', audioPlayer.details.author);

console.log('Author', author);
console.log('Year', year);



const [p1, p2, trunks]: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.error('Personaje 1:', p1);
console.error('Personaje 2:', p2);
console.error('Personaje 3:', trunks);

const [, , trunks2]: string[] = ['Goku', 'Vegeta', 'Trunks']; //Para destructurar se tiene que poner las posiciones aunque no se usen
console.error('Personaje 3:', trunks2);

const [, , trunks3 = 'Not found']: string[] = ['Goku', 'Vegeta']; //Si no existe pondra Not found
console.error(trunks3);
