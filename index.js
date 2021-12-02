document.getElementById("botonsuma1").onclick=suma

 document.getElementById("botonmulti1").onclick=multiplicacion
 document.getElementById("botondivision1").onclick=division


function suma(){
    var numero1 = document.getElementById("numero1s").value;
    var numero2 = document.getElementById("numero2s").value;
    if(isNaN(numero1) || isNaN(numero2)) {
           alert("No se permiten letras");
    } else if (numero1<0 || numero2<0 ) {
           alert("No son permitidos numeros menores a 0")
           
    }else if (numero1>100 || numero2>100 )  {
        alert("No son permitidos numeros mayores a 100")
    } else{
        var resultado=parseInt(numero1)+parseInt(numero2)
        document.getElementById("resultado1").innerHTML=resultado
    }

    

    

}






function multiplicacion(){
    var numero1 = document.getElementById("numero1m").value;
    var numero2 = document.getElementById("numero2m").value;
    if(isNaN(numero1) || isNaN(numero2)) {
           alert("No se permiten letras");
    } else if (numero1<0 || numero2<0 ) {
           alert("No son permitidos numeros menores a 0")
           
    }else if (numero1>100 || numero2>100 )  {
        alert("No son permitidos numeros mayores a 100")
    } else{
        var resultado=parseInt(numero1)*parseInt(numero2)
        document.getElementById("resultado3").innerHTML=resultado;
    }

    

    

}





function division(){
    var numero1 = document.getElementById("numero1d").value;
    var numero2 = document.getElementById("numero2d").value;
    if(isNaN(numero1) || isNaN(numero2)) {
           alert("No se permiten letras");
    } else if (numero1<0 || numero2<0 ) {
           alert("No son permitidos numeros menores a 0")
           
    }else if (numero1>100 || numero2>100 )  {
        alert("No son permitidos numeros mayores a 100")
    } else{
        var resultado=parseInt(numero1)/parseInt(numero2)
        document.getElementById("resultado2").innerHTML=resultado;
    }

    

    

}