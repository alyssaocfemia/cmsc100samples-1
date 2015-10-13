$(document).ready(function(){
	$("#intro").hide();
	
	/*$("p.p1").mouseover(function(){
		$("#show_this").fadeIn();	
	});
	$("p.p1").mouseout(function(){
		$("#show_this").fadeOut();
	});
*/
	$("p.p1").on({
		"mouseover":function(){
				$("#show_this").fadeIn();
			},
		"mouseout":function(){
		$("#show_this").fadeOut();
	}
	});

	$(".textbox").keyup(function(){
		a=Number($("#a").val());
		b=Number($("#b").val());
		sum=a+b;
		$("#sum").val(sum);
	});
//	$("#newContent").load("index.html");
	$("button[name='get_students']").click(function(){
			//callback functions
			/*$.get("http://localhost:5000/degree-programs/1",
					function(resp){
						console.log(resp);
					});*/
			$.post("http://localhost:5000/degree-programs",{
				code:"BSF",
				name:"BS Forestry"
			}, function(resp){
				console.log(resp);
			});
	});
	$("button[name='reverse']").click(function(){
			
			$(".Button").each(function(){
				if (this.checked===true){
					this.checked=false;
				}else{
					this.checked=true;
				}

			});
	});
	$("input[type='reset']").click(function(){
			
			$(".Button").each(function(){
				if (this.checked===true){
					this.checked=false;
				}

			});
	});


});

