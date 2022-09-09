
export interface Producto {
    precio: number;
    desc: string;
}

const telefono: Producto = {
    precio: 250,
    desc: "nokia"
}
const tableta: Producto = {
    precio: 350,
    desc: "lg"
}
const tv: Producto = {
    precio: 300.25,
    desc: "samsung"
}

export function calculaPrecio(productos: Producto[]):[number,number] {

    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    }
    )
    return [total += 0.15, total * 0.15];
} 

const articulos =[tv,tableta,telefono];

const [total, iva] = calculaPrecio(articulos);

console.log(total);
console.log(iva);