function MatProperty(mCode, thk){
	switch(mCode){
// --------------------------------------------------------------------- al 2000
		case 'm2024c01': if (thk <= 0.062) {cl="2024-T3";  fty= 45; fsu=38; f15= 89; f17= 98;  E=9500; d=0.101; nti=50; mc=29.2; p=3.9; pic="2024_T3_CladSheet_t021_062";} 
					else if (thk <= 0.128) {cl="2024-T3";  fty= 47; fsu=39; f15= 92; f17=101; E=10000; d=0.101; nti=50; mc=29.2; p=3.9; pic="2024_T3_CladSheet_t063_128";} 
					else                   {cl="2024-T3";  fty= 47; fsu=40; f15= 94; f17=103; E=10000; d=0.101; nti=50; mc=27.3; p=3.9; pic="2024_T3_CladSheet_t129_249";} break;
		case 'm2024e01':                    cl="2024-T3";  fty= 47; fsu=31; f15= 81; f17= 90; E=10800; d=0.101; nti=50; mc=31.3; p=3.9; pic="2024_T3510_Extruded_t0_249"; break;
		case 'm2024e02':                    cl="2024-T42"; fty= 38; fsu=29; f15= 73; f17= 79; E=10800; d=0.101; nti=34; mc=28.5; p=3.9; pic="2024_T42_Extruded_t0_249"; break;
// --------------------------------------------------------------------- al 7000
		case 'm7075b01': if (thk <= 0.039) {cl="7075-T6";  fty= 72; fsu=47; f15=109; f17=121; E=10300; d=0.101; nti=13; mc=24.3; p=3.5; pic="7075_T62_BareSheet_t012_039";}
					else if (thk <= 0.125) {cl="7075-T6";  fty= 72; fsu=48; f15=112; f17=125; E=10300; d=0.101; nti=13; mc=24.3; p=3.5; pic="7075_T62_BareSheet_t040_125";}
					else                   {cl="7075-T6";  fty= 73; fsu=48; f15=112; f17=125; E=10300; d=0.101; nti=13; mc=24.3; p=3.5; pic="7075_T62_BareSheet_t126_249";} break;
		case 'm7075c01': if (thk <= 0.039) {cl="7075-T6";  fty= 65; fsu=44; f15=103; f17=115; E= 9500; d=0.101; nti=17; mc=22.9; p=3.5; pic="7075_T62_CladSheet_t012_039";}
					else if (thk <= 0.062) {cl="7075-T6";  fty= 66; fsu=45; f15=104; f17=116; E= 9500; d=0.101; nti=17; mc=22.9; p=3.5; pic="7075_T62_CladSheet_t040_062";}
					else                   {cl="7075-T6";  fty= 69; fsu=46; f15=107; f17=120; E= 9800; d=0.101; nti=17; mc=22.9; p=3.5; pic="7075_T62_CladSheet_t063_187";} break;
		case 'm7075e01':                    cl="7075-T6";  fty= 74; fsu=44; f15=105; f17=116; E=10400; d=0.101; nti=50; mc=23.5; p=3.5; pic="7075_T6_ExtrudedSh_t0_249"; break;
		case 'm7075f01':                    cl="7075-T6";  fty= 53; fsu=37; f15= 81; f17= 91; E=10000; d=0.101; nti=48; mc=26.1; p=3.5; pic="7075_T73_DieForge_t4_5"; break;
// --------------------------------------------------------------------- steel
		case 'm177cs01':                    cl="steel";    fty=110; fsu=95; f15=258; f17=258; E=29000; d=0.000; nti= 0; mc=58.0; p=2.7; pic="17_7PH_Sheet_t020_187"; break;
		case 'steel03':                     cl="steel";    fty= 34; fsu= 0; f15=  0; f17=  0; E=29011; d=0.284; nti= 0; mc=   0; p=  0; pic="s_steel3"; break;
	}
	return {cl: cl, fty: fty, fsu: fsu, fbru15: f15, fbru17: f17, E: E, density: d, nti: nti, mc: mc, p: p, pic: pic};
}
// Material 1 -----------------------------------------------------------------------------------
var m1_code  = document.getElementById('m1_code'); var m1_thk = document.getElementById('m1_thk');
var m1, t;
function fn_Mat1(){
	var matName=m1_code.options[m1_code.selectedIndex].text;
	var matCode=m1_code.value; 
	t=m1_thk.value;
	m1 = MatProperty(matCode, t);

	document.getElementById('m1_img').src = "_img/mat/"+pic+".jpg";

	document.getElementById('m1_out').innerHTML =
	"Name: "+matName+"; <br>"+"Class: "+m1.cl+";<br>"+
	"Fty: "+m1.fty+" ksi ("+km(m1.fty)+" MPa) - yield tension stress |<br>"+
	"Fsu: "+m1.fsu+" ksi ("+km(m1.fsu)+" MPa) - ultimate shear stress |<br>"+
	"Fbru15: "+m1.fbru15+" ksi ("+km(m1.fbru15)+" MPa) - bearing stress at 1.5 EM |<br>"+
	"Fbru17: "+m1.fbru17+" ksi ("+km(m1.fbru17)+" MPa) - bearing stress at 1.7 EM |<br>"+
	"E: "+m1.E+" ksi ("+km(m1.E)+" MPa) - Young modulus |<br>"+
	"density: "+m1.density+" lbs/in3 ("+lk(m1.density)+" kg/m3) |<br>";
	
	document.getElementById("m1_gen").innerHTML = matName+" | t="+t+" in ("+im(t)+"mm) |";
}
 window.addEventListener("load", fn_Mat1, false);
 m1_code.addEventListener("change", fn_Mat1, false);
m1_thk.addEventListener("change", fn_Mat1, false);

// Material 2 -----------------------------------------------------------------------------------
var m2_code  = document.getElementById('m2_code'); var m2_thk = document.getElementById('m2_thk');
var m2, m2t;
function fn_Mat2(){
	var matName=m2_code.options[m2_code.selectedIndex].text;
	var matCode=m2_code.value; 
	m2t=m2_thk.value;
	m2 = MatProperty(matCode, m2t);

	document.getElementById('m2_img').src = "_img/mat/"+m2.pic+".jpg";
	
	document.getElementById('m2_out').innerHTML =
	"Name: "+matName+"; <br>"+"Class: "+m2.cl+";<br>"+m2.pic+
	"Fty: "+m2.fty+" ksi ("+km(m2.fty)+" MPa) - yield tension stress |<br>"+
	"Fsu: "+m2.fsu+" ksi ("+km(m2.fsu)+" MPa) - ultimate shear stress |<br>"+
	"Fbru15: "+m2.fbru15+" ksi ("+km(m2.fbru15)+" MPa) - bearing stress at 1.5 EM |<br>"+
	"Fbru17: "+m2.fbru17+" ksi ("+km(m2.fbru17)+" MPa) - bearing stress at 1.7 EM |<br>"+
	"E: "+m2.E+" ksi ("+km(m2.E)+" MPa) - Young modulus |<br>"+
	"density: "+m2.density+" lbs/in3 ("+lk(m2.density)+" kg/m3) |<br>";
	
	document.getElementById("m2_gen").innerHTML = matName+" | t="+m2t+" in ("+im(m2t)+"mm) |";
}
window.addEventListener("load", fn_Mat2, false);
m2_code.addEventListener("change", fn_Mat2, false);
m2_thk.addEventListener("change", fn_Mat2, false);



