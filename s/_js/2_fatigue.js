var t, t2, fmin, fmax, R, gagdr, pitch, Ks, Kp, Fe, R1P, LTF, DFRbase, Afactor;

//========================================================== Input =========================================================
function fn_input(){
  fmin=document.getElementById("fmin1").value; document.getElementById("fmin2").innerHTML = " ="+  km(fmin)+" MPa  |";
  fmax=document.getElementById("fmax1").value; document.getElementById("fmax2").innerHTML = " ="+  km(fmax)+" MPa  |";
  R=fmin/fmax;
  gagdr=document.getElementById("gagdr1").value;
  frf=document.getElementById("frf1").value;
  pitch=document.getElementById("pitch1").value; document.getElementById("pitch2").innerHTML = " ="+  im(pitch)+" mm  |";

  document.getElementById("input").innerHTML = "fmin="+fmin+" ksi | fmax="+fmax+" ksi | GAG_DR="+gagdr+ " | FRF="+frf;
}
window.addEventListener("load", fn_input, false);
 document.getElementById("fmin1").addEventListener("change", fn_input, false);
 document.getElementById("fmax1").addEventListener("change", fn_input, false);
document.getElementById("gagdr1").addEventListener("change", fn_input, false);
  document.getElementById("frf1").addEventListener("change", fn_input, false);
document.getElementById("pitch1").addEventListener("change", fn_input, false);
//=========================================================== R1P ===========================================================
var r1p = document.getElementsByName('r1p');
function fn_r1p(){
	t = Number(document.getElementById('m1_thk').value);
	t2= Number(document.getElementById('m2_thk').value);
	var t1t2=t/t2;
	for(var i=0; i < r1p.length; i++){
		if(r1p[i].checked) var r1p_case=r1p[i].value; r1p[i].addEventListener("click", fn_r1p, false);
		var he=fn_he(d32, t1t2)*1;
		Fe=(he/(t2*E))*Math.pow(((t+t2)/(2*d32/32)),0.4);
		Ks=pitch/(1*t*E);
		Kp=pitch/(1*t2*m2.E);
		var out = "<br>t1="+t+" | t2="+t2+" | t1/t2="+t1t2+" | he = "+he+" | <br>"+
"Fe=(he/(t2*E))*(((t+t2)/(2*d))^0.4 = "+(Fe).toFixed(3)+" - flexibility constant |<br>"+
"Ks= Pitch/(w*t*E) = "+pitch+"/(1*"+t+"*"+m1.E+")="+(Ks).toFixed(3)+" - plate 1 flexibility parameter |<br>"+
"Kp= Pitch/(w*t2*E2) = "+pitch+"/(1*"+t2+"*"+m2.E+")="+(Kp).toFixed(3)+" - plate 2 flexibility parameter |<br>";
		switch(r1p_case){
//--- case 01
case 'case01': 
out += "Ks/Kp="+(Ks/Kp).toFixed(3)+" & "+"Kp/Fe="+(Kp/Fe).toFixed(3)+" => R1P= "+(R1P_2f_single(Ks/Kp, Kp/Fe)).toFixed(2)+" |<br>";
break;
//--- case 02
case 'case02':
out += "Ks/Kp="+(Ks/Kp).toFixed(3)+" & "+"Kp/Fe="+(Kp/Fe).toFixed(3)+" => R1P= "+(R1P_3f_single(Ks/Kp, Kp/Fe)).toFixed(2)+" |<br>";
break;
		}
	} 
	document.getElementById('r1p_out').innerHTML = out; 
	document.getElementById("r1p_gen").innerHTML = (R1P).toFixed(2)+" | <br>";
}
window.addEventListener("load", fn_r1p, false); 
document.getElementById('m1_thk').addEventListener("change", fn_r1p, false); 
document.getElementById('m2_thk').addEventListener("change", fn_r1p, false);
//--------------------------------------
function fn_he(d32, t1t2){ var he;
	switch(d32){
case '6':  he=fn_directLine(0.1, 32, 1,  11, t1t2); break;
case '8':  he=fn_directLine(0.1, 26, 1,   9, t1t2); break;
case '10': he=fn_directLine(0.1, 23, 1, 9.5, t1t2); break;
case '12': he=fn_directLine(0.1, 20, 1,   7, t1t2); break;
		}
	return (he).toFixed(2);
}
//--------------------------------------
function R1P_2f_single(KsKp, KpFe){ var y;
			     var x=[0.05, 0.10, 0.20, 0.50, 1.00];
				 
	 if(KsKp<=0.10){ y=[0.50, 0.48, 0.46, 0.42, 0.35]; }
else if(KsKp<=0.25){ y=[0.50, 0.50, 0.49, 0.43, 0.39]; }
else if(KsKp<=0.50){ y=[0.50, 0.50, 0.49, 0.45, 0.44]; }
else if(KsKp<=1.00){ y=[0.50, 0.50, 0.50, 0.50, 0.50]; }
else if(KsKp<=1.50){ y=[0.50, 0.51, 0.52, 0.54, 0.55]; }
else if(KsKp<=2.00){ y=[0.51, 0.52, 0.54, 0.57, 0.60]; }
else if(KsKp<=3.00){ y=[0.52, 0.54, 0.57, 0.63, 0.66]; }
else if(KsKp<=4.00){ y=[0.53, 0.56, 0.60, 0.67, 0.71]; }

var last = x.length;
for (var i=0; i<last; i++){ if(KpFe<x[i+1]){R1P=y[i]+(KpFe-x[i])*(y[i+1]-y[i])/(x[i+1]-x[i]); break}}
return R1P;
}
//--------------------------------------
function R1P_3f_single(KsKp, KpFe){ var y;
			     var x=[0.05, 0.10, 0.20, 0.50, 1.00];
	 if(KsKp<=0.10){ y=[0.31, 0.30, 0.27, 0.20, 0.16]; }
else if(KsKp<=0.25){ y=[0.31, 0.30, 0.29, 0.24, 0.21]; }
else if(KsKp<=0.50){ y=[0.31, 0.31, 0.30, 0.29, 0.29]; }
else if(KsKp<=1.00){ y=[0.34, 0.35, 0.35, 0.37, 0.40]; }
else if(KsKp<=1.50){ y=[0.35, 0.36, 0.39, 0.44, 0.48]; }
else if(KsKp<=2.00){ y=[0.36, 0.39, 0.43, 0.49, 0.54]; }
else if(KsKp<=3.00){ y=[0.39, 0.43, 0.48, 0.57, 0.63]; }
else if(KsKp<=4.00){ y=[0.41, 0.45, 0.53, 0.62, 0.69]; }

var last = x.length;
for (var i=0; i<last; i++){ if(KpFe<x[i+1]){R1P=y[i]+(KpFe-x[i])*(y[i+1]-y[i])/(x[i+1]-x[i]); break}}
return R1P;
}

//=========================================================== DFRbase ===========================================================
var dfrbase = document.getElementsByName('dfrbase');
function fn_dfrbase(){ 
	var t1t2=t/t2;
	for(var i=0; i < dfrbase.length; i++){
		if(dfrbase[i].checked) var dfrbase_case=dfrbase[i].value; dfrbase[i].addEventListener("click", fn_dfrbase, false);
		var fbrft=R1P*1/d;
		var out = "<br>fastener type: "+fcl+" |<br>"+
			"material: "+cl+" |<br>"+
			"thickness: "+t+" in |<br>"+
			"fbrft = R1P*spacing/d ="+(R1P).toFixed(2)+"="+(fbrft).toFixed(2)+" |<br>";

		switch(dfrbase_case){
			case 'case01':
				LTF=LTF_single(fcl, fbrft, t, d);
				DFRbase=DFRb(cl, LTF);
				out += "LTF = "+(LTF).toFixed(2)+" |<br>"+
				"DFRbase = "+(DFRbase).toFixed(2)+" ksi ("+km(DFRbase)+" MPa) |";
				break;
			case 'case02':
				LTF=LTF_double(fcl, fbrft, t, d, R);
				DFRbase=DFRb(cl, LTF);
				out += "LTF = "+(LTF).toFixed(2)+" |<br>"+
				"DFRbase = "+(DFRbase).toFixed(2)+" ksi ("+km(DFRbase)+" MPa) |";
				break;
		}
	} 
	document.getElementById('dfrbase_out').innerHTML = out; 
	document.getElementById("dfrbase_gen").innerHTML = (DFRbase).toFixed(2)+" ksi | <br>";
}
window.addEventListener("load", fn_dfrbase, false);
document.getElementById('m1_code').addEventListener("change", fn_dfrbase, false); 
 document.getElementById('m1_thk').addEventListener("change", fn_dfrbase, false); 
 document.getElementById('m2_thk').addEventListener("change", fn_dfrbase, false);
//--------------------------------------
function LTF_single(ftype, fbrft, thk, dia){
var td=thk/dia;
if (td<0.2){td=0.2;}
switch (ftype) {
	case "non fluid rivet":	LTF = Math.min(-0.615*Math.log(fbrft*td)/Math.log(10)+0.578,1); break;
	case      "blind bolt":
	case          "hi-lok": LTF = Math.min(-0.615*Math.log(fbrft*td)/Math.log(10)+0.694,1); break;
}
return LTF;
}
//--------------------------------------
function LTF_double(ftype, fbrft, thk, dia, R){
var td=thk/dia;
if (td<0.2){td=0.2;}
switch (ftype) {
	case "non fluid rivet":	      LTF = Math.min(-0.524*Math.log(fbrft*td)/Math.log(10)+0.653,1); break;
	case      "blind bolt":
	case          "hi-lok": 
		if ((R<-0.2)&& (c<0.375)){LTF = Math.min(-0.524*Math.log(fbrft*td)/Math.log(10)+0.844,1); break;}
		else 					 {LTF = Math.min(-0.524*Math.log(fbrft*td)/Math.log(10)+0.741,1); break;}
}
return LTF;
}
//--------------------------------------
function DFRb(mat, LTF){
switch (mat) {
	case  "2024-T3":
	case "2024-T42":
	case  "7075-T6":  DFRbase = 17.5*LTF*1.0; break; // 1.0 for aluminum
	case   "17-7PH":  DFRbase = 17.5*LTF*2.2; break; // 2.2 for for low-steel (<240 ksi)
}
return DFRbase;
}
//=========================================================== Afactor ===========================================================
var Afactor_radio = document.getElementsByName('Afactor_radio');
function fn_Afactor(){ 
	for(var i=0; i < Afactor_radio.length; i++){
		if(Afactor_radio[i].checked) var Afactor_case=Afactor_radio[i].value; Afactor_radio[i].addEventListener("click", fn_Afactor, false);
		Afactor = Af(fcl);
		var out = "<br>plate material: "+cl+" |<br>"+
		"standart driven | manufactured head side |<br>"+
		"fastener type: "+fcl +" |<br>"+
		"fastener material: "+fmat +" |<br>";
		switch(Afactor_case){
			case 'case01':
				out += "Afactor_case = "+Afactor+" case 1 |";
				break;
			case 'case02':
				out += "Afactor_case = "+Afactor+" case 2 |";
				break;
		}
	} 
	document.getElementById('Afactor_out').innerHTML = out; 
	document.getElementById("Afactor_gen").innerHTML = " "+Af(fcl)+" ("+fcl+") | <br>";
}
window.addEventListener("load", fn_Afactor, false);
document.getElementById('m1_code').addEventListener("change", fn_Afactor, false); 
 document.getElementById('m1_thk').addEventListener("change", fn_Afactor, false); 
 document.getElementById("fast").addEventListener("click", fn_Afactor, false);
//--------------------------------------
function Af(fcl){
	switch (fcl) {
		case          "hi-lok": Afactor = 0.75; break; //
		case      "blind bolt": Afactor = 0.80; break; //
		case "non fluid rivet": Afactor = 0.90; break; //
	}
return Afactor;
}
//=========================================================== Nflight ===========================================================
function fn_Nflight(){
	var DFR=DFRbase*Afactor;
	var N95=fn_N95(cl,R,DFR,fmax);
	var Nfl=N95*gagdr/frf;	
	var out = "<br>DFR = DFRbase*Afactor = "+(DFR).toFixed(2)+" ksi ("+km(DFR)+" MPa) |<br>"+
	"N95 = 10^(5-logZ/logS) ="+(N95).toFixed(0)+" cycles |<br>"+
	"where Z=(1-R)*(fmo-0.53*DFR)*fmax /(DFR*(0.94*fmo-0.47*(1+R)*fmax)) |<br>"+
	"S=2 for aluminum & titanium, S=1.8 for steel |<br>"+
	"fmo = 45(alum), 90(ti), 135(steel<200ksi), 180(steel>20ksi) |<br>"+
	"N flights = N95*GAG_DR/FRF = "+(Nfl).toFixed(0)+" flights |";
	document.getElementById('Nflight_out').innerHTML = out; 
	document.getElementById("Nflight_gen").innerHTML = (Nfl).toFixed(0)+ " flights | <br>";
}
window.addEventListener("load", fn_Nflight, false);
document.getElementById('m1_code').addEventListener("change", fn_Nflight, false); 
 document.getElementById('m1_thk').addEventListener("change", fn_Nflight, false); 
   document.getElementById("fast").addEventListener("change", fn_Nflight, false);
//--------------------------------------  
function fn_N95(mat,R,DFR,fmax){ var fmo, S;
	switch (mat) {
		 case "2024-T3":
		case "2024-T42":
		 case "7075-T6":  fmo=45; S=2.0; break;
		  case "17-7PH": fmo=135; S=1.8; break;
	}
	var z1=(1-R)*(fmo-0.53*DFR)*fmax;
	var z2=DFR*(0.94*fmo-0.47*(1+R)*fmax);
	var z3=z1/z2;
	var stepen=5-(Math.log(z3)/Math.log(S));
	N95=Math.pow(10,stepen);
	return N95;
}