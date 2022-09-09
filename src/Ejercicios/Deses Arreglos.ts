
 interface Reproductor{
    volumen: number;
    segundo: number;
    cancion:string;
    detalles: Detalles;
 }

 interface Detalles{
    autor:string;
    anio: number;
 }

 const reproductor : Reproductor = {
     volumen: 90,
     segundo: 54,
     cancion: "Cancion 1",
     detalles: {
        autor:"Yo",
        anio:2015
     }
 }

 const {volumen, segundo, cancion, detalles } = reproductor;
 const { anio } = detalles;

 console.log("El volumen actual es " , volumen);
 console.log("El segundo actual es " , segundo);
 console.log("la cancion actual es " , cancion);
 console.log("detalles " , anio);

 const dbz: string[] = ['goku','vegeta','trunks'];
 const [,,p3 ] = dbz;
 console.log("Personaje ",dbz[0]);
 console.log("Personaje ",dbz[1]);
 console.log("Personaje ",p3); 