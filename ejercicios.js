function ejercicios () {
    fizzBuzzClasico ();
    fizzBuzzOptimizado ();
    calculadorNotasParciales ();
};

function fizzBuzzClasico () {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else { console.log(i); }
}
};

function fizzBuzzOptimizado () {
    for (let i = 1; i <= 50; i++) {
        let texto = "";
        if (i % 3 === 0) {
            texto = "Fizz";
        } 
        if (i % 5 === 0) {
            texto += "Buzz";
        } 
     
    console.log (texto || i);
    }
};

function calculadorNotasParciales () {
    const NotasParciales = [10,8,2,7];
let totalNotas = 0; 

function calcularPromedio (notasParciales) {
for (let i=0; i < NotasParciales.length; i++) {
    totalNotas = totalNotas + NotasParciales[i];
} 
console.log (`Rendiste ${NotasParciales.length} exámenes, la suma total es ${totalNotas}, y el promedio es ` + (totalNotas / NotasParciales.length));
}

calcularPromedio();
};

ejercicios ();
