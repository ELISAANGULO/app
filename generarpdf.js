$(document).ready(function(){

	var specialElementHandler = {
		"#editor":function(element,renderer){
			return true;
		}
	};
	
	

	$("#PDF").click(function(){
	
		var pdf = new jsPDF('p', 'pt', 'letter');
		
		{pdf.setFontSize(20)
			pdf.setTextColor(255,0,0)
			pdf.text(20, 60, 'Planeación de yacimientos no convencionales-ENERGY APP')
		}


		pdf.fromHTML($("#resultados_perforacion").html(),15,100,{
			"width":170,
			"elementHandlers" : specialElementHandler
		});
		pdf.fromHTML($("#resultados_completamiento").html(),15,380,{
			"width":170,
			"elementHandlers" : specialElementHandler
		});
		
		
		
		pdf.addPage()


		pdf.fromHTML($("#resultados_fracturamiento").html(),15,30,{
			"width":170,
			"elementHandlers" : specialElementHandler
		});
		pdf.fromHTML($("#resultados_locacion").html(),15,380,{
			"width":170,
			"elementHandlers" : specialElementHandler
		});

		pdf.addPage()
		pdf.fromHTML($("#resultados_logistica").html(),15,30,{
			"width":170,
			"elementHandlers" : specialElementHandler
		});


		


		pdf.save("Planeación de yacimientos no convencionales-Energy APP.pdf");
	});
});