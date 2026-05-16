var t, sr, li;

//========================================================== Input =========================================================
function fn_input(){
  sr=document.getElementById("sr_in").value; document.getElementById("sr_out").innerHTML = " ="+  km(sr)+" MPa - stress rating |";
  li=document.getElementById("li_in").value; document.getElementById("li_out").innerHTML = " ="+  im(li)+" mm - initial crack size |";
  lf=document.getElementById("lf_in").value; document.getElementById("lf_out").innerHTML = " ="+  im(lf)+" mm - final crack size |";
  document.getElementById("input_gen").innerHTML = "Sr="+sr+" ksi | Li="+li+" in | Lf="+lf+" in ";
}
window.addEventListener("load", fn_input, false);
 document.getElementById("sr_in").addEventListener("change", fn_input, false);

//=========================================================== Yfactor ===========================================================
function fn_Yfactor(){
	for(var i=0; i < Yfactor_radio.length; i++){
		if(Yfactor_radio[i].checked) var Yfactor_case=Yfactor_radio[i].value; Yfactor_radio[i].addEventListener("click", fn_Yfactor, false);
		var lid = li/d;
		var j12=J12(lid);
		var y10=j12*1;
		var out = "<br>";
		switch(Yfactor_case){
//--- case 01
case 'y10_2': 
out += "Y10 = J12*J13*J14*J15 = "+(y10).toFixed(2)+" - single hole |<br>"+
"J12=fn(Li/d) = fn("+(lid).toFixed(2)+") = "+(j12).toFixed(2)+" - through crack at a hole |<br>";
break;
//--- case 02
case 'case02':
out += " case2 |<br>";
break;
		}
	} 
	document.getElementById('Yfactor_out').innerHTML = out; 
	document.getElementById("Yfactor_gen").innerHTML = (y10).toFixed(2)+ " |";
}
window.addEventListener("load", fn_Yfactor, false); 
//--------------------------------------
function J12(x_find){
	var x=[0.085, 0.10, 0.15, 0.20, 0.30, 0.40, 0.50, 0.75, 1.00, 1.50, 2.00, 2.50, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.0, 12.0, 14.0, 16.0, 18.0];
	var y=[2.300, 2.21, 2.01, 1.86, 1.62, 1.44, 1.34, 1.15, 1.07, 0.94, 0.90, 0.87, 0.84, 0.81, 0.79, 0.77, 0.76, 0.76, 0.75, 0.75, 0.74, 0.74, 0.73, 0.73];
	return fn_linearApprox(x, y, x_find);
}
//=========================================================== Ncycles ===========================================================
function fn_Ncycles(){
	for(var i=0; i < Ncycles_radio.length; i++){
		if(Ncycles_radio[i].checked) var Ncycles_case=Ncycles_radio[i].value; Ncycles_radio[i].addEventListener("click", fn_Ncycles, false);
		var out = "<br>";
		switch(Ncycles_case){
//--- case 01
case '3':
		var l1=li*1; delta3 = (lf-li)/2; var l2=l1+delta3; var l3=l2+delta3; Nfl=fn_9(l3);
out += "| "+(l1).toFixed(2)+" | 1 | "+(J12(l1/d)).toFixed(2)+" | "+fn_4(l1)+" |<br>"+
	   "| "+(l2).toFixed(2)+" | 1 | "+(J12(l2/d)).toFixed(2)+" | "+fn_4(l2)+" | "+fn_5(l2)+" | "+(delta3).toFixed(2)+" | "+fn_7(l2)+" | "+fn_8(l2)+" | "+fn_8(l2)+" |<br>"+
	   "| "+(l3).toFixed(2)+" | 1 | "+(J12(l3/d)).toFixed(2)+" | "+fn_4(l3)+" | "+fn_5(l3)+" | "+(delta3).toFixed(2)+" | "+fn_7(l3)+" | "+fn_8(l3)+" | "+fn_9(l3)+" |<br>";
break;
//--- case 02
case '5':
out += " case2 |<br>";
break;
		}
	} 
	document.getElementById('Ncycles_out').innerHTML = out; 
	document.getElementById("Ncycles_gen").innerHTML = "M="+mc+" | p="+p+ " | Nflight="+Nfl+" |";
	return [0, fn_8(l2), fn_9(l3)];
}
window.addEventListener("load", fn_Ncycles, false); 
//--------------------------------------
function fn_4(l){ return (Math.pow((J12(l/d)*1*(Math.sqrt(Math.PI*l))),(-1*p))).toFixed(2); }
function fn_5(l){ return ((fn_4(l)*1+fn_4(l-delta3)*1)/2).toFixed(2); }
function fn_7(l){ return (fn_5(l)*delta3*1).toFixed(2); }
function fn_8(l){ return (fn_7(l)*1*(10000/1)*Math.pow((mc/sr),p)).toFixed(0); }
function fn_9(l){ return (fn_8(l)*1+fn_8(l-delta3)*1).toFixed(0); }

//=========================================================== DTR ===========================================================
var out;
function fn_DTR(){
	out = ""; var a = fn_Ncycles();
	var x = fn_Ncycles();
	var y=[1,   0.55, 	0.10];
	var dtr = DTR(x, y, x[2]);
	for(var i=0; i < DTR_radio.length; i++){
		if(DTR_radio[i].checked) var DTR_case=DTR_radio[i].value; DTR_radio[i].addEventListener("click", fn_DTR, false);
		switch(DTR_case){
			case 'gen': var out1 = "General Visual Inspections every : "+dtr+" flights | <br>"; break;
			case 'det': var out1 = "DET: "+dtr+" cycles |<br>"; break;
		}
	}
	document.getElementById('DTR_out').innerHTML = out1+"<br>"+out; 
	document.getElementById("DTR_gen").innerHTML = "GEN: "+dtr+ " | ";
}
window.addEventListener("load", fn_DTR, false);
//--------------------------------------
function p3_gen(l){
	var p3; var stepen = -1*Math.pow((l-0.2)/(3-0.2),1.8);
	if (l>0.2){p3=Math.pow(2.7182, stepen);}				// 0.2 - min genaral visual crack
	else {p3=1;}
	return p3.toFixed(3); 
}
//--------------------------------------
function DTR(x,y,Nc){
	var DTR=0;
	var p3=1;
	var n_insp=50; // initial numbers of inspections
	while (DTR<10.01){
		var int_insp=Math.floor(Nc/(n_insp*10))*10; 		out += "Nc = "+Nc+ " | "; out += "Interval = "+int_insp+ " |<br> ";
		for (var n_iter=1; n_insp+1 > n_iter; n_iter++){
			var sum_insp=int_insp/2+int_insp*(n_iter-1);  	out += n_iter+" insp: "+sum_insp+ " cycles | ";
			var int_inspRev=Nc-sum_insp;					out += "Rev: "+int_inspRev+ " | ";
			var Lcr=fn_linearApprox(x, y, int_inspRev);		out += "Lcr: "+(Lcr).toFixed(3)+ " | ";
			var p31=p3_gen(Lcr);							out += "P31 ="+(p31*1).toFixed(2)+ " | ";
			p3 *= p31;										out += "P3 ="+(p3*1).toFixed(2)+ " |<br> ";
		}
		p3=1-p3;											out += "P3 = 1 - P3 = "+(p3*1).toFixed(2)+ " | ";
		DTR=Math.log(1-p3)/Math.log(0.5);					out += "DTR = log(1-P3)/log 0.5 = "+(DTR*1).toFixed(2)+ " |<br> ";
		p3=1;
		n_insp += 50;										out += "----------------------------------------------------------------------------------------------<br> ";// inspections increment
	}														
	return int_insp;
}