
function queTipoSoy<T>(argumento : T) {
    return typeof(argumento) + ' '+ argumento;
}

console.log(queTipoSoy("cadena"));
console.log(queTipoSoy(1));
console.log(queTipoSoy([1,2,3,4]))