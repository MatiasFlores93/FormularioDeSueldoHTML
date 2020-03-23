    function validar(){
		//Validar Nombre
		if(document.Sueldo.Nombre.value.length ==0)
		{
		alert("Error, El espacio NOMBRE esta en blanco ")
        document.Sueldo.Nombre.focus()
		return 0;
		}
	

	    //validar Sueldo
		NewSueldo = parseInt(document.Sueldo.SueldoBas.value)
		if(isNaN(NewSueldo))
		{
		alert("Error, Debe Ingresar SUELDO BASE")
		document.Sueldo.SueldoBas.focus()
		return 0;
		}
		
		//Numeros de Hrs Extra
		
		NewHrsextra = parseInt(document.Sueldo.HrsExtra.value)
		if(isNaN(NewHrsextra))
		{ 
		alert("Debe ingresar numero de HORAS EXTRAS ")
		document.Sueldo.HrsExtra.focus()
		return 0;
		}
	
		//Validar Cargas
		if(!document.Sueldo.Cargas[0].checked && !document.Sueldo.Cargas[1].checked)
		{
		alert("Debe seleccionar si posee CARGAS o no  ")
		document.Sueldo.Cargas.focus()
		return 0;
		}
		
		//validar turno
		
		if(document.Sueldo.Turno.value == 1){
		alert("Error, Ingrese el TURNO")
		document.Sueldo.Turno.focus()
		return 0;
		}
		//Validar Cargas 
			var ValorCargas = 0
			if(document.Sueldo.Cargas[0].checked){
			ValorCargas = 10000
			}
			
			//Validar Turno 
			
			
			var TurnoDinero = 0
			
				if(document.Sueldo.Turno.value == 2){
						TurnoDinero = 5000
			
			}else{
			
				if(document.Sueldo.Turno.value == 3){
				
						TurnoDinero = 6000
			
			}else{

			TurnoDinero = 15000
			}
			}
			
	   //Calcular

			
			var MostrarNombre = document.Sueldo.Nombre.value	  //Nombre
			var MostrarSueldoB = parseInt(document.Sueldo.SueldoBas.value) //Sueldo Base
			var Comision = (MostrarSueldoB * 20)/100	//comision
			var Gratificacion = (MostrarSueldoB * 25)/100  //Gratiicacion
			var Hextra = parseInt(document.Sueldo.HrsExtra.value) //Hrs Extra 
			var MostrarHrsExtra = parseInt(MostrarSueldoB * Hextra * 0.0072917) // Calculo de hrs Extra en dinero
			var totalimponible = MostrarSueldoB + MostrarHrsExtra + Comision + Gratificacion + TurnoDinero + ValorCargas
			
			MostrarSueldoB = Math.round(MostrarSueldoB); //#################### eliminar esta linea si no quieres redondear el numero y dejarlo con decimales
			MostrarSueldoB = MostrarSueldoB.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,"$1.");
			MostrarSueldoB = MostrarSueldoB.split("").reverse().join("").replace(/^[\.]/,"");
			
			Comision = Math.round(Comision); //#################### eliminar esta linea si no quieres redondear el numero y dejarlo con decimales
			Comision = Comision.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,"$1.");
			Comision = Comision.split("").reverse().join("").replace(/^[\.]/,"");
			
			Gratificacion = Math.round(Gratificacion); //#################### eliminar esta linea si no quieres redondear el numero y dejarlo con decimales
			Gratificacion = Gratificacion.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,"$1.");
			Gratificacion = Gratificacion.split("").reverse().join("").replace(/^[\.]/,"");
			
			MostrarHrsExtra = Math.round(MostrarHrsExtra); //#################### eliminar esta linea si no quieres redondear el numero y dejarlo con decimales
			MostrarHrsExtra = MostrarHrsExtra.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,"$1.");
			MostrarHrsExtra = MostrarHrsExtra.split("").reverse().join("").replace(/^[\.]/,"");
			
			totalimponible = Math.round(totalimponible); //#################### eliminar esta linea si no quieres redondear el numero y dejarlo con decimales
			totalimponible = totalimponible.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,"$1.");
			totalimponible = totalimponible.split("").reverse().join("").replace(/^[\.]/,"");
		
			document.write("<link href='css/fuentes.css' rel='stylesheet' type='text/css'>")
			document.write("<link href='css/estilo_form.css' type='text/css' rel='stylesheet' />")
			document.write("<style type='text/css' media='screen'>")
			document.write("h1 {")
			document.write("margin-top: 0;")
			document.write("}")
			document.write("label {")
			document.write("font-size: 11px;")
			document.write("font-weight: bold;")
			document.write("text-transform: uppercase;")
			document.write("display: block;")
			document.write("margin-bottom: 3px;")
			document.write("clear: both;")
			document.write("}")
			document.write(".error {")
			document.write("background-color: #FF8080;")
			document.write("}")
			document.write(".hide {")
			document.write("display: none;")
			document.write("}")
			document.write("</style>")
			document.write("<center>")
			document.write("<img src='img/banner.jpg' width='900px' height='100px'><br><br>")
			document.write("<h1 class='title'>Detalles</h1>")
			document.write("<fieldset class='fieldset'>")
			document.write("<legend class='legend'>")
			document.write("<span>Resultado del calculo</span>")
			document.write("</legend>")
			document.write("<form class='styleThese' name='Sueldo' action='' method='post' enctype='multipart/form-data'>")
			document.write("<table>")
			document.write("<tr>")
			document.write("<td><label>Nombre: </td><td>"+ MostrarNombre +"</label></td>")
			document.write("</tr>")
			document.write("<tr>")
			document.write("<td><label>Sueldo base: </td><td>$"+ MostrarSueldoB + "</label></td>")
			document.write("</tr>")
			document.write("<tr>")
			document.write("<td><label>Monto "+ Hextra +" Hrs Extra: </td><td>$"+ MostrarHrsExtra + "</label></td>")
			document.write("</tr>")
			document.write("<tr>")
			document.write("<td><label>Comision: </td><td>$"+ Comision + "</label></td>")
			document.write("</tr>")
			document.write("<tr>")
			document.write("<td><label>Gratificacion: </td><td>$"+ Gratificacion + "</label></td>")
			document.write("</tr>")
			document.write("<tr>")
			document.write("<td><label>Sueldo Imponible: </td><td>$"+ totalimponible + "</label></td>")
			document.write("</tr>")
			document.write("<tr><td colspan='2'>")
			document.write("<a href='index.html' class='volver'>Volver</a>")
			document.write("</td></tr>")
			document.write("</table>")
			document.write("</center>")
			document.write("</form>")
			document.write("</fieldset>")
		}
		
		function mostrar(id){
			document.getElementById(id).style.visibility='visible'; 
		}
		
		function ocultar(id){
			document.getElementById(id).style.visibility='hidden'; 
		}	
		