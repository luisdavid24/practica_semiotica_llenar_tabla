$(function(){
    var condicion=0;
    
    $("#boton1").click(function (e) { 
        e.preventDefault();
        condicion=0;
        var nombre=$("#nombre").val();
        var cedula=$("#cedula").val();
        var fecha=$("#fecha").val();
        var nota1=$("#nota1").val();
        var nota2=$("#nota2").val();
        var nota3=$("#nota3").val();
        
        let warnings="";
        if(nombre.length===0){
            warnings+="El nombre esta vacio  <br>"
            condicion=4;
        }else if(!isNaN(nombre)){
            warnings+="El nombre debe ser texto  <br>"
            condicion=4;
        }
    
        if(cedula===''||cedula===null){
            warnings+="La cedula debe ser ocupada  <br>"
            condicion=4;
        } else if(isNaN(cedula)){
            warnings+="La cedula debe tener numeros  <br>"
            condicion=4;
        }else if(cedula.length<8 || cedula.length>12){
            warnings+="La cedula no tiene la cantidad de digitos necesarios <br>"
            condicion=4;
        }

        if(nota1===''||nota1===null){
            warnings+="La nota1 esta vacia <br>"
            condicion=4;
        } else if(isNaN(nota1)){
            warnings+="La nota1 esta no es un numero<br>"
            condicion=4;
        }else if(Number(nota1)<0 || Number(nota1)>5){
            warnings+="La nota1 debe ser entre 0.0 y 5.0<br>"
            condicion=4;
        }
        if(nota2===''||nota2===null){
            warnings+="La nota2 esta vacia <br>"
            condicion=4;
        } else if(isNaN(nota2)){
            warnings+="La nota2 esta no es un numero<br>"
            condicion=4;
        }else if(Number(nota2)<0 || Number(nota2)>5){
            warnings+="La nota2 debe ser entre 0.0 y 5.0<br>"
            condicion=4;
        }
        if(nota3===''||nota3===null){
            warnings+="La nota3 esta vacia <br>"
            condicion=4;
        } else if(isNaN(nota3)){
            warnings+="La nota3 esta no es un numero<br>"
            condicion=4;
        }else if(Number(nota3)<0 || Number(nota3)>5){
            warnings+="La nota3 debe ser entre 0.0 y 5.0<br>"
            condicion=4;
        }
        
        let fechaNacimiento=new Date(fecha);
        let ahora=new Date();
        var agnios=ahora.getFullYear()-fechaNacimiento.getFullYear();
        if(agnios<18){
            alert("Eres menor de edad");
            condicion=4;
        }
        $("#warning").html(warnings);
        
    });
    var cont=0; 
    $("#boton3").click(function (e) { 
        e.preventDefault();
        console.log("Condicion: "+condicion);
        if(condicion==0){
            agregar()
        }else{
            alert("No se puede agregar no llenaste correctamente la informacion o eres menor de edad");
        }

        
    });
    function agregar(){
        cont++;
        var nombre=$("#nombre").val();
        var cedula=$("#cedula").val();
        var nota1=$("#nota1").val();
        var nota2=$("#nota2").val();
        var nota3=$("#nota3").val();
        var promedio=parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3);
        promedio=promedio/3;
        console.log("Promedio: "+promedio);
        let filaNueva='<tr  scope="row" id="'+cont+'"><td>'+cont+'</td><td>'+cedula+'</td><td >'+nombre+'</td><td>'+nota1+'</td><td>'+nota2+'</td><td>'+nota3+'</td><td>'+promedio+'</td></tr>';
        $("#tabla").append(filaNueva);
    }
    
    $("#btnRecorrer").click(function () {
        $("#tabla tr").each(function (index) {
            var nombre=($(this).find('td:eq(2)').html());
            var valor1=parseFloat($(this).find('td:eq(3)').html());
            var valor2=parseFloat($(this).find('td:eq(4)').html());
            var valor3=parseFloat($(this).find('td:eq(5)').html());
            var id= $(this).attr('id');
            let promedio=valor1+valor2+valor3;
            promedio=promedio/3;
            let idbusca="#"
            idbusca+=id;
            if(promedio<3){
                $(idbusca).css({"background":"red"})
            }else if(promedio>=3.5){
                $(idbusca).css({"background":"green"})
            
            }
            
        })
       
    });

});

