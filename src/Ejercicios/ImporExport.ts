import { Producto,  calculaPrecio} from "./Deses Function";

const carritoCompras : Producto[]=[
    {
        desc:"Telefono",
        precio:251
    },
    {
        desc:"Tele",
        precio:520.36
    }
];

const [ total, ipv ] = calculaPrecio(carritoCompras);
 
console.log(total);
console.log(ipv);

