/*
CUIL: Son 11 números en total:
XY – 12345678 – Z
XY: Indican el tipo (Masculino o Femenino)
12345678: Número de DNI
Z: Código Verificador

Algoritmo:
Se determina XY con las siguientes reglas
Masculino:20
Femenio:27


Se multiplica XY 12345678 por un número de forma separada:

X * 5
Y * 4
1 * 3
2 * 2
3 * 7
4 * 6
5 * 5
6 * 4
7 * 3
8 * 2


Se suman dichos resultados. El resultado obtenido se divide por 11. De esa división se obtiene un Resto que determina Z
Si el resto es 0= Entoces Z=0 Si el resto es 1= Entonces se aplica la siguiente regla:
*Si es hombre: Z=9 y XY pasa a ser 23
*Si es mujer: Z=4 y XY pasa a ser 23
Caso contrario XY pasa a ser (11- Resto).
*/



let tipoPersona = "";
let DNI = "";

function calculoCUIL(tipoPersona, DNI){
    let coef = 2;
    let acum = 0;
    let resto = 0;
    let DNIaux = DNI;
    do{
        resto = DNIaux % 10;
        console.log(resto + " * " + coef);
        acum += (coef * resto);
        coef += 1;
        if (coef === 8) coef=2;
        DNIaux = Math.floor(DNIaux/10);
    }while(DNIaux > 9);
    console.log(DNIaux + " * " + coef);
    acum += (coef * DNIaux);
    if (tipoPersona === "M"){
        acum += 10;
        tipoPersona = "20";
    }else{
        acum += 38;
        tipoPersona = "27";
    }
resto = acum % 11;
    if (resto == 1){
        console.log(resto);
        if (tipoPersona == "20")
            return "23-" + DNI + "-9";
        else
            return "23-" + DNI + "-4";
    }else{
        resto = 11 - resto;
        console.log(resto);
        return tipoPersona + "-" + DNI + "-" + resto;
    }
}

tipoPersona = prompt("Ingrese sexo indicando M para masculino y F para femenino");
tipoPersona = tipoPersona.toUpperCase();
if ((tipoPersona === "M") || (tipoPersona === "F")){
    DNI = prompt("Ingrese DNI");
    if ((DNI > 0) && (DNI < 100000000)){
        alert("Su CUIL es " + calculoCUIL(tipoPersona, DNI));
    }else
        alert("El valor ingresado es inválido");
}else{
    alert("El valor ingresado es inválido");
}