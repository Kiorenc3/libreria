const bestsellers = 1;
const literatura = 2;
const academicos = 3;

const tarifa_bestsellers = 500
const tarifa_literatura = 100
const tarifa_academico = 0

let opciones_categoria;
do{
 opciones_categoria = parseInt(prompt("seleccione_categoria: 1 bestsellers 2 literatura 3 academico" ));
}while (opciones_categoria !== bestsellers && opciones_categoria !== literatura && opciones_categoria !== academicos)

let dias_de_prestamo = parseInt(prompt("¿cuantos dias va a prestar el libro?"))
    console.log(`el libro sera prestado por ${dias_de_prestamo} dias`)

let acumulado = tarifa_bestsellers*dias_de_prestamo
let acumulado2 =tarifa_literatura*dias_de_prestamo    

if (opciones_categoria === bestsellers) {
    console.log(`total a pagar ${acumulado}`)
    
}else if (opciones_categoria === literatura){
    console.log(`total a pagar ${acumulado2}`)

}else if (opciones_categoria === academicos){
    console.log("tu prestamo es gratis")
}else{
    console.log("opcion no valida")
}


