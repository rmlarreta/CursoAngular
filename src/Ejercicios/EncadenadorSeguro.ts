interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: "Fernando"
}

const pasajero2: Pasajero = {
    nombre: "Gabriela",
    hijos: ["Ricardo", "Lucia"]
}

function imprimeHijos(pasajero: Pasajero): void {

    const hijos = pasajero.hijos?.length || 0;

    console.log(hijos);
    
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);