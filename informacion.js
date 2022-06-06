//ALTOS DE DIVS
	const alt1 = document.getElementById("op1");
	const alt2 = document.getElementById("op2");
	const alt3 = document.getElementById("op3");
	const alt4 = document.getElementById("op4");
	const alt5 = document.getElementById("op5");
//DIVS CLICKS:
	const click1 = document.querySelector(".cont1__opciones__desplegar1");
	const click2 = document.querySelector(".cont1__opciones__desplegar2");
	const click3 = document.querySelector(".cont1__opciones__desplegar3");
	const click4 = document.querySelector(".cont1__opciones__desplegar4");
	const click5 = document.querySelector(".cont1__opciones__desplegar5");
//EVENTOS:
	click1.addEventListener("click",()=>{
		if (alt1.clientHeight==80) {	
			document.getElementById("op1").style.height = "400px";
			document.getElementById("op5").style.height = "86px";
			document.getElementById("op4").style.height = "86px";
			document.getElementById("op3").style.height = "86px";
			document.getElementById("op2").style.height = "86px";
		}
		else{
			document.getElementById("op2").style.height = "86px";
			document.getElementById("op5").style.height = "86px";
			document.getElementById("op4").style.height = "86px";
			document.getElementById("op3").style.height = "86px";
			document.getElementById("op1").style.height = "86px";	
		}
	});
	click2.addEventListener("click",(e)=>{
		if (alt2.clientHeight==80) {
			document.getElementById("op2").style.height = "400px";
			document.getElementById("op5").style.height = "86px";
			document.getElementById("op4").style.height = "86px";
			document.getElementById("op3").style.height = "86px";
			document.getElementById("op1").style.height = "86px";
		}
		else{
			document.getElementById("op2").style.height = "86px";
			document.getElementById("op5").style.height = "86px";
			document.getElementById("op4").style.height = "86px";
			document.getElementById("op3").style.height = "86px";
			document.getElementById("op1").style.height = "86px";	
		}
	});
	click3.addEventListener("click",(e)=>{
		if (alt3.clientHeight==80) {
			document.getElementById("op3").style.height = "400px";
			document.getElementById("op5").style.height = "86px";
			document.getElementById("op4").style.height = "86px";
			document.getElementById("op1").style.height = "86px";
			document.getElementById("op2").style.height = "86px";
		}
		else{
			document.getElementById("op2").style.height = "86px";
			document.getElementById("op5").style.height = "86px";
			document.getElementById("op4").style.height = "86px";
			document.getElementById("op3").style.height = "86px";
			document.getElementById("op1").style.height = "86px";	
		}
	});
	click4.addEventListener("click",(e)=>{
		if (alt4.clientHeight==80) {
			document.getElementById("op2").style.height = "86px";
			document.getElementById("op5").style.height = "86px";
			document.getElementById("op4").style.height = "400px";
			document.getElementById("op3").style.height = "86px";
			document.getElementById("op1").style.height = "86px";
		}
		else{
			document.getElementById("op2").style.height = "86px";
			document.getElementById("op5").style.height = "86px";
			document.getElementById("op4").style.height = "86px";
			document.getElementById("op3").style.height = "86px";
			document.getElementById("op1").style.height = "86px";	
		}
	});
	click5.addEventListener("click",(e)=>{
		if (alt5.clientHeight==80) {
			document.getElementById("op5").style.height = "400px";
			document.getElementById("op1").style.height = "86px";
			document.getElementById("op4").style.height = "86px";
			document.getElementById("op3").style.height = "86px";
			document.getElementById("op2").style.height = "86px";
		}
		else{
			document.getElementById("op2").style.height = "86px";
			document.getElementById("op5").style.height = "86px";
			document.getElementById("op4").style.height = "86px";
			document.getElementById("op3").style.height = "86px";
			document.getElementById("op1").style.height = "86px";	
		}	
	});