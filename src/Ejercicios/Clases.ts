
class PersonaNormal {
    constructor(
        public nombre :string,
        public direccion : string
    ){}
}

class Heroe extends PersonaNormal {

    constructor(
        public alterEgo : string,
        public edad : number,
        public nombreReal : string
        ) 
    {
        super(nombreReal,'holliwood')
    } 
}

const ironman = new Heroe('ironman',45,'jhon');

console.log(ironman);