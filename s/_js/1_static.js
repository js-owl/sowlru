var p, L, ms, w, h, L;
var area, areaSI, Ix, IxSI, Wx, WxSI;

//-------------------------------------- Input --------------------------------------------------
function fn_input(){
  document.getElementById("mm_in2").innerHTML = " ="+  mi(document.getElementById("mm_in1").value)+" in  |";
document.getElementById("mpa_ksi2").innerHTML = " ="+mk(document.getElementById("mpa_ksi1").value)+" ksi |";
document.getElementById("kgm_lbi2").innerHTML = " ="+kl(document.getElementById("kgm_lbi1").value)+" lbs/in3 |";
document.getElementById("nw_lb2").innerHTML = " ="+nl(document.getElementById("nw_lb1").value)+" lbs |";

p=document.getElementById("p").value;
L=document.getElementById("L").value;
ms=document.getElementById("ms").value;
document.getElementById("input").innerHTML = "P="+p+" kips ("+ln(p)+"kN) | L="+L+" in | MS = "+ms;
}
window.addEventListener("load", fn_input, false);

  document.getElementById("mm_in1").addEventListener("change", fn_input, false);
document.getElementById("mpa_ksi1").addEventListener("change", fn_input, false);
document.getElementById("kgm_lbi1").addEventListener("change", fn_input, false);
  document.getElementById("nw_lb1").addEventListener("change", fn_input, false);

       document.getElementById("p").addEventListener("change", fn_input, false);
       document.getElementById("L").addEventListener("change", fn_input, false);
      document.getElementById("ms").addEventListener("change", fn_input, false);

//-------------------------------------- 0-10 --------------------------------------------------
var cross_sect = document.getElementsByName('cross_sect');
function fn0_10(){ 
	w = document.getElementById('w').value; h=document.getElementById('h').value;
	for(var i=0; i < cross_sect.length; i++){
		if(cross_sect[i].checked) var cs_name=cross_sect[i].value; cross_sect[i].addEventListener("click", fn0_10, false);
		switch(cs_name){
//-------------------------------------- 0-10 plate
case 'plate': 	
area=w*t; areaSI=im(w)*im(t);
var out="Area= w*t= "+w+"*"+t+"="+(area).toFixed(3)+" in^2<br>"; out += "Area(SI)= "+im(w)+"*"+im(t)+"="+(areaSI).toFixed(1)+" mm^2<br><br>";

Ix=w*t*t*t/12; IxSI=im(w)*im(t)*im(t)*im(t)/12;
out += "Ix= w*t^3/12= "+w+"*"+t+"^3/12 ="+(Ix).toFixed(6)+" in^4<br>"; out += "Ix(SI)=  "+im(w)+"*"+im(t)+"^3/12 ="+(IxSI).toFixed(1)+" mm^4<br><br>";

Wx=2*Ix/t; WxSI=2*IxSI/im(t);
out += "Wx= 2*Ix/t= 2*"+(Ix).toFixed(6)+"/"+t+" = "+(Wx).toFixed(5)+" in^3<br>"; out += "Wx(SI)=2*"+(IxSI).toFixed(1)+"/"+im(t)+" = "+(WxSI).toFixed(1)+" mm^3<br>"; 
break;
//-------------------------------------- 0-10 rect
case 'h_rect': 		
area=w*h-(w-2*t)*(h-2*t); areaSI=im(w)*im(h)-(im(w)-2*im(t))*(im(h)-2*im(t));
var out= "Area= w*h-(w-2t)*(h-2t)="+w+"*"+h+"-("+w+"-2*"+t+")*("+h+"-2*"+t+")="+(area).toFixed(3)+" in^2<br>"; out += "Area(SI)= "+im(w)+"*"+im(h)+"-("+im(w)+"-2*"+im(t)+")*("+im(h)+"-2*"+im(t)+")="+(areaSI).toFixed(1)+" mm^2<br><br>";

Ix=(w*h*h*h-(w-2*t)*(h-2*t)*(h-2*t)*(h-2*t))/12; IxSI=(im(w)*im(h)*im(h)*im(h)-(im(w)-2*im(t))*(im(h)-2*im(t))*(im(h)-2*im(t))*(im(h)-2*im(t)))/12;
out += "Ix= (w*h^3-(w-2t)*(h-2t)^3)/12= ("+w+"*"+h+"^3-("+w+"-2*"+t+")*("+h+"-2*"+t+")^3)/12 ="+(Ix).toFixed(6)+" in^4<br>"; out += "Ix(SI)=("+im(w)+"*"+im(h)+"^3-("+im(w)+"-2*"+im(t)+")*("+im(h)+"-2*"+im(t)+")^3)/12 ="+(IxSI).toFixed(1)+" mm^4<br><br>";

Wx=2*Ix/h; WxSI=2*IxSI/im(h);
out += "Wx= 2*Ix/h= 2*"+(Ix).toFixed(6)+"/"+h+" = "+(Wx).toFixed(5)+" in^3<br>"; out += "Wx(SI)= 2*"+(IxSI).toFixed(1)+"/"+im(h)+" = "+(WxSI).toFixed(1)+" mm^3<br>";
break;
//-------------------------------------- 0-10 circle
case 'circle': 		
area=Math.PI*(w*w)/4; areaSI=Math.PI*(im(w)*im(w))/4;
var out= "Area= PI*D^2/4= "+(Math.PI).toFixed(4)+"*"+w+"^2/4= "+(area).toFixed(3)+" in^2<br>"; out += "Area(SI)="+(Math.PI).toFixed(4)+"*"+im(w)+"^2/4= "+(areaSI).toFixed(1)+" mm^2<br><br>";

Ix=Math.PI*(w*w*w*w)/64; IxSI=Math.PI*(im(w)*im(w)*im(w)*im(w))/64;
out += "Ix= PI*D^4/64= "+(Math.PI).toFixed(4)+"*"+w+"^4/64= "+(Ix).toFixed(6)+" in^4<br>"; out += "Ix(SI)="+(Math.PI).toFixed(4)+"*"+im(w)+"^4/64= "+(IxSI).toFixed(1)+" mm^4<br><br>";

Wx=2*Ix/w; WxSI=2*IxSI/im(w);
out += "Wx= 2*Ix/w= 2*"+(Ix).toFixed(6)+"/"+w+" = "+(Wx).toFixed(5)+" in^3<br>"; out += "Wx(SI)= 2*"+(IxSI).toFixed(1)+"/"+im(w)+" = "+(WxSI).toFixed(1)+" mm^3<br>";
break;
//-------------------------------------- 0-10 hollow circle
case 'h_circle': 	
area=Math.PI/4*((w*w-(w-2*t)*(w-2*t))); areaSI=Math.PI/4*((im(w)*im(w)-(im(w)-2*im(t))*(im(w)-2*im(t))));
var out= "Area= PI/4*(D^2-(D-2*t)^2)= "+(Math.PI).toFixed(4)+"/4*("+w+"^2-("+w+"-2*"+t+")^2)= "+(area).toFixed(3)+" in^2<br>"; out += "Area(SI)="+(Math.PI).toFixed(4)+"/4*("+im(w)+"^2-("+im(w)+"-2*"+im(t)+")^2)= "+(areaSI).toFixed(1)+" mm^2<br><br>";

Ix=Math.PI/64*(w*w*w*w-(w-2*t)*(w-2*t)*(w-2*t)*(w-2*t)); IxSI=Math.PI/64*(im(w)*im(w)*im(w)*im(w)-(im(w)-2*im(t))*(im(w)-2*im(t))*(im(w)-2*im(t))*(im(w)-2*im(t)));
out += "Ix= PI/64*(D^4-(D-2*t)^4)= "+(Math.PI).toFixed(4)+"/64*("+w+"^4-("+w+"-2*"+t+")^4)= "+(Ix).toFixed(6)+" in^4<br>";
out += "Ix(SI)= "+(Math.PI).toFixed(4)+"/64*("+im(w)+"^4-("+im(w)+"-2*"+im(t)+")^4)= "+(IxSI).toFixed(1)+" mm^4<br><br>";

Wx=2*Ix/w; WxSI=2*IxSI/im(w);
out += "Wx= 2*Ix/w= 2*"+(Ix).toFixed(6)+"/"+w+" = "+(Wx).toFixed(5)+" in^3<br>"; out += "Wx(SI)= 2*"+(IxSI).toFixed(1)+"/"+im(w)+" = "+(WxSI).toFixed(1)+" mm^3<br>";
break;
		}
	}
document.getElementById('cross_sect_').innerHTML = out; document.getElementById("genGeom").innerHTML = cs_name+" | A="+(area).toFixed(3)+"in2 (" + (areaSI).toFixed(1)+"mm^2) | Ix="+(Ix).toFixed(4)+"in4 ("+(IxSI).toFixed(1) +"mm^4) |" ;
}
window.addEventListener("load", fn0_10, false); 
m1_thk.addEventListener("change", fn0_10, false);
document.getElementById('w').addEventListener("change", fn0_10, false);
document.getElementById('h').addEventListener("blur", fn0_10, false);


//-------------------------------------- 0-20 --------------------------------------------------
function fn0_20(){ 
  var f=p/area;                               document.getElementById('0_20_01').innerHTML = "stress f=P/A="+p+"/"+(area).toFixed(3)+"="+(f).toFixed(2)+" ksi";
  var e_elast=f/m1.E;                         document.getElementById('0_20_02').innerHTML = "e_elast=f/E="+(f).toFixed(2)+"/"+m1.E+"="+(e_elast).toFixed(5)+" in";
  var e_plast=nti*0.002*Math.pow(f/fty, nti); document.getElementById('0_20_03').innerHTML = "e_plast=nti*0.002*(f/Fty)^nti="+nti+"*0.002*("+(f).toFixed(2)+"/"+fty+")^"+nti+"="+(e_plast).toFixed(5)+" in";
  var e_total=e_elast+e_plast;                document.getElementById('0_20_04').innerHTML = "e_total=e_elast\+e_plast="+(e_total).toFixed(5)+" in";
  var Et=f/e_total;                           document.getElementById('0_20_05').innerHTML = "Et=f/e_total="+(Et).toFixed(0)+" ksi";
  var Pcr=9.87*Et*Ix/(L*L);                   document.getElementById('0_20_06').innerHTML = "Pcr=9.87*Et*Ix/(L^2)=9.87*"+(Et).toFixed(0)+"*"+(Ix).toFixed(4)+"/"+L+"^2="+(Pcr).toFixed(2)+" kips";
}
window.addEventListener("load", fn0_20, false);
document.getElementById('p').addEventListener("change", fn0_20, false);
document.getElementById('w').addEventListener("change", fn0_20, false);
document.getElementById('h').addEventListener("change", fn0_20, false);

//-------------------------------------- 1-10 --------------------------------------------------
var bending = document.getElementsByName('bending');
function fn_bending(){ 
	w = document.getElementById('w').value; h=document.getElementById('h').value;
	for(var i=0; i < bending.length; i++){
		if(bending[i].checked) var bend_name=bending[i].value; bending[i].addEventListener("click", fn_bending, false);
		switch(bend_name){
//-------------------------------------- 1-10 cantilever beam
case 'case01':
Pmax=fty*Wx/(L*ms); PmaxSI=km(fty)*WxSI/(im(L)*ms);
var out = "Pmax=Fty*Wx/(L*MS) = "+fty+"*"+(Wx).toFixed(6)+"/("+L+"*"+ms+") = "+(Pmax).toFixed(3)+" kips<br>";
out += "Pmax(SI)= "+km(fty)+"*"+(WxSI).toFixed(1)+"/("+im(L)+"*"+ms+") = "+(PmaxSI).toFixed(0)+" N<br><br>";

defl=Pmax*L*L*L/(3*E*Ix); deflSI=PmaxSI*im(L)*im(L)*im(L)/(3*km(E)*IxSI);
out += "defl_max=P*L^3/(3*E*Ix) = "+(Pmax).toFixed(3)+"*"+L+"^3/(3*"+E+"*"+(Ix).toFixed(6)+") = "+(defl).toFixed(3)+" in<br>";
out += "defl_max(SI)= "+(PmaxSI).toFixed(0)+"*"+im(L)+"^3/(3*"+km(E)+"*"+(IxSI).toFixed(0)+") = "+(deflSI).toFixed(1)+" mm";
break;

//-------------------------------------- 1-10 2-support beam
			case 'case02': 		
Pmax=4*fty*Wx/(L*ms); PmaxSI=4*km(fty)*WxSI/(im(L)*ms);
var out = "Pmax=4*Fty*Wx/(L*MS) = "+fty+"*"+(Wx).toFixed(6)+"/("+L+"*"+ms+") = "+(Pmax).toFixed(3)+" kips<br>";
out += "Pmax(SI)= 4*"+km(fty)+"*"+(WxSI).toFixed(1)+"/("+im(L)+"*"+ms+") = "+(PmaxSI).toFixed(0)+" N<br><br>";

defl=Pmax*L*L*L/(48*E*Ix); deflSI=PmaxSI*im(L)*im(L)*im(L)/(48*km(E)*IxSI);
out += "defl_max=Pmax*L^3/(48*E*Ix) = "+(Pmax).toFixed(3)+"*"+L+"^3/(3*"+E+"*"+(Ix).toFixed(6)+") = "+(defl).toFixed(3)+" in<br>";
out += "defl_max(SI)= "+(PmaxSI).toFixed(0)+"*"+im(L)+"^3/(48*"+km(E)+"*"+(IxSI).toFixed(0)+") = "+(deflSI).toFixed(1)+" mm";
		}
	}
	document.getElementById('bending_').innerHTML = out; document.getElementById("1_10_out").innerHTML = "Pmax="+(Pmax).toFixed(3)+" kips ("+(PmaxSI).toFixed(0)+" N) | defl_max="+(defl).toFixed(3)+" in ("+(deflSI).toFixed(1)+" mm) |"; 
}
window.addEventListener("load", fn_bending, false); m1_thk.addEventListener("change", fn_bending, false);
document.getElementById('w').addEventListener("change", fn_bending, false); document.getElementById('h').addEventListener("blur", fn_bending, false);

// 1.Tension -------------------------------------------------------------------------------------------------------------------------------------------------------
//var s101p, L, s101dl, s101dr; 
//function fn_s101(){
//	s101p = document.getElementById('s101p').value; L = document.getElementById('L').value; s101dl = document.getElementById('s101dl').value;
//	s101dr = document.getElementById('s101dr').value;
//	var ex = (s101dl/L).toFixed(5); s101o.innerHTML = ex; var ey = (s101dr/w).toFixed(5); s101o2.innerHTML = ey; var mu = (ey/ex).toFixed(2); s101o3.innerHTML = mu;
//	s101o4.innerHTML = area; var f = (s101p/(1000*area)).toFixed(2); s101o5.innerHTML = f; var E= (f/ex).toFixed(0); s101o6.innerHTML = E;
// }
//document.getElementById('s101x').addEventListener("click", fn_s101, false); document.getElementById('s101p').addEventListener("blur", fn_s101, false); 
//document.getElementById('s101dl').addEventListener("blur", fn_s101, false); document.getElementById('L').addEventListener("blur", fn_s101, false);
//document.getElementById('s101dr').addEventListener("blur", fn_s101, false);

// Joints -------------------------------------------------------
//function fn601(){var sem=document.getElementById("sem").value; document.getElementById("semSI").innerHTML = " ("+im(sem)+" mm.)";}
//window.addEventListener("load", fn601, false); document.getElementById("sem").addEventListener("change", fn601, false);

//function fn602(){
// Shear-out -------------------------------------------------------
//var sem=document.getElementById("sem").value; var ed=sem/dia; 
//var shearOut = (fsu*t*2*(sem-dia/2*Math.cos(40*3.1415/180))*1000).toFixed();
//var shearOutSI = (km(fsu)*im(t)*2*(im(sem)-im(dia)/2*Math.cos(40*3.1415/180))).toFixed();

//document.getElementById("shearOut").innerHTML = "Shear-out ("+ed.toFixed(2)+"D) = Fsu*t*2*(ED-D/2*cs40) = "+fsu+"*"+t+"*2*("+sem+"-"+dia+"/2*0.766) = "+shearOut+" lbs.";
//document.getElementById("shearOutSI").innerHTML = "Shear-out (SI) = Fsu*t*2*(ED-D/2*cs40) = "+km(fsu)+"MPa*"+im(t)+"mm*2*("+im(sem)+"mm-"+im(dia)+"mm/2*0.766) = "+shearOutSI+" N.";
// Bearing -------------------------------------------------------
//var bearing15 = (fbru15*t*dia*1000).toFixed();
//var bearing15SI = (km(fbru15)*im(t)*im(dia)).toFixed();

//document.getElementById("bear15").innerHTML = "Bearing load(1.5D) = Fbru15*t*Dmax = "+fbru15+"*"+t+"*"+dia+" = "+bearing15+" lbs.";
//document.getElementById("bear15SI").innerHTML = "Bearing load(1.5D) = Fbru15*t*Dmax = "+km(fbru15)+"MPa*"+im(t)+"mm*"+im(dia)+"mm = "+bearing15SI+" N.";
//}

//document.getElementById("sem").addEventListener("change", fn602, false);





// function init() {
// 	//select Fastener through radio button
// 	var	fast = document.getElementsByName("fast");
// 	var selFast="";
// 	var maxD=0;
// 	var	lenFast = fast.length;
// 	for (var i=0; i<lenFast; i++){
// 		if (fast[i].checked	){
// 			selFast=fast[i].value;
// 			fName=fastners[i].fName; 
// 			fType=fastners[i].fType; 
// 			fMat=fastners[i].fMat;	
// 			hType=fastners[i].hType;
// 			maxD=fastners[i].maxD;
// 		}
// //============= Shear-out ====================
// var sem=document.getElementById("sem").value;
// document.getElementById("shearOut").innerHTML="Fty*t= "+fty+"*"+t+"= "+(fty*t).toFixed(2)+" lbs";
// }
//m1_thk.addEventListener("change", init, false);

// Lesson 101 -------------------------------------------------------
// var s101o = document.getElementById('s101o'); var s101o2 = document.getElementById('s101o2'); 
//==================== fastener general info ===============================================================
// var genFast = document.getElementById("genFast");
// genFast.innerHTML = fName+" | "+fType+" | "+fMat+" | "+hType+" head | max dia="+maxD;

// var ed=sem/maxD;
// var shearOut1 = Fsu*t*2*(sem-maxD/2*Math.cos(40*3.1415/180))*1000;
// var shearOut = shearOut1.toFixed();
// var shOut = document.getElementById("shearOut");
// shOut.innerHTML = "Shear-out ("+ed.toFixed(2)+"D) = Fsu*t*2*(ED-D/2*cs40) = "+Fsu+"*"+t+"*2*("+sem+"-"+maxD+"/2*0.766) = "+shearOut+" lbs.";
	// var semRu = document.getElementById("semRu");
	// semRu.innerHTML = " ("+i2m(sem)+" mm.)";
//========= Ru =====================
// var shearOut1Ru = k2M(Fsu)*i2m(t)*2*(i2m(sem)-i2m(maxD)/2*Math.cos(40*3.1415/180));
// var shearOutRu = shearOut1Ru.toFixed();
// var shOutRu = document.getElementById("shearOutRu");
// shOutRu.innerHTML = "Shear-out (Ru) = Fsu*t*2*(ED-D/2*cs40) = "+k2M(Fsu)+"MPa*"+i2m(t)+"mm*2*("+i2m(sem)+"mm-"+i2m(maxD)+"mm/2*0.766) = "+shearOutRu+" N.";

// //================================= Bearing15 ====================================================================
// var bearingLoad15 = (Fbru15*t*maxD*1000).toFixed();
// var bear15 = document.getElementById("bear15");
// bear15.innerHTML = "Bearing load(1.5D) = Fbru15*t*Dmax = "+Fbru15+"*"+t+"*"+maxD+" = "+bearingLoad15+" lbs.";

// // //================================= Bearing17 ====================================================================
// var bearingLoad17 = (Fbru17*t*maxD*1000).toFixed();
// var bear17 = document.getElementById("bear17");
// bear17.innerHTML = "Bearing load(1.7D) = Fbru17*t*Dmax = "+Fbru17+"*"+t+"*"+maxD+" = "+bearingLoad17+" lbs.";

// // //================================= BDM-4301 ====================================================================
// var jStr=bdm4301(fName, cMat, t);
// var jointStat = document.getElementById("jointStat");
// jointStat.innerHTML = "Ult joint strength(1.7D) = BDM4301(" + cMat + ", t=" + t + ", "+fName+") = "+jStr;


// //======================================================= DAMAGE TOLERANCE ANALYSIS ==============================================================
// var CGgen_in=": M= "+ Mc + ", p= "+p;
// var CGgen_out = document.getElementById("CGgen");CGgen.innerHTML = CGgen_in;
// var sRat_string=document.getElementById("srat").value; var sRat=parseFloat(sRat_string);
// var L1_string=document.getElementById("Linit").value;var L1=(L1_string*1).toFixed(4);
// var Lfin_string=document.getElementById("Lfin").value; var Lfin=parseFloat(Lfin_string);
// var nTip_string=document.getElementById("ntip").value; var nTip=parseFloat(nTip_string);
// //============================================================== Crack Growth ====================================================================
// var Yfactor = function (val) {this.val = val;}; var Yfactor_Arr = [];
// Yfactor_Arr[0] = new Yfactor("J10"); 
// Yfactor_Arr[1] = new Yfactor("J12"); 

// var	Yf = document.getElementsByName("Y_index");
// var	lYf = Yf.length;
// for (var n=0; n<lYf; n++){
// 	if (Yf[n].checked){
// 		choosen_Yfactor=Yfactor_Arr[n].val;
// 	}
// }
// var Yfactor_sum = document.getElementById("Y_summary_out"); Yfactor_sum.innerHTML = choosen_Yfactor;

// //================================================================== Row 1 =======================================================================

// //var Linit_out = document.getElementById("L1_in");Linit_out.innerHTML = L1;

// var n11_in=L1*1;//Lcrack
// var n11_out = document.getElementById("n11");n11_out.innerHTML = n11_in.toFixed(2);

// var n12_in=1; //C factor
// var n12_out = document.getElementById("n12");n12_out.innerHTML = n12_in;

// switch (choosen_Yfactor) {
// 	case "J10": var LD1=0.9*n11_in/maxD;var n13_in=J12(LD1);break;
// 	case "J12": var LD1=n11_in/maxD;var n13_in=J12(LD1);break;
// }
// var n13_out = document.getElementById("n13");n13_out.innerHTML = n13_in;

// var n14_in=(Math.pow((n12_in*n13_in*(Math.pow((n11_in*3.1415/nTip),(0.5)))),(-1*p))).toFixed(4);
// var n14_out = document.getElementById("n14");n14_out.innerHTML = n14_in;

// var n19_in = 0;
// var n19_out = document.getElementById("n19");n19_out.innerHTML = n19_in;
// //============================================================== Row 2 ====================================================================
// var delta_round = ((Lfin-L1)/6);
// var delta = (Math.round(delta_round*1000)/1000).toFixed(3);

// var n21_in=delta*1+n11_in;//Lcrack
// var n21_out = document.getElementById("n21");n21_out.innerHTML = n21_in.toFixed(2);

// var n22_in=1; //C factor
// var n22_out = document.getElementById("n22");n22_out.innerHTML = n22_in;

// switch (choosen_Yfactor) {
// 	case "J10": var LD2=0.9*n21_in/maxD;var n23_in=J12(LD2);break;
// 	case "J12": var LD2=n21_in/maxD;var n23_in=J12(LD2);break;
// }
// var n23_out = document.getElementById("n23");n23_out.innerHTML = n23_in;

// var n24_in=(Math.pow((n22_in*n23_in*(Math.pow((n21_in*3.1415/nTip),(0.5)))),(-1*p))).toFixed(4);
// var n24_out = document.getElementById("n24");n24_out.innerHTML = n24_in;

// var n25_in = ((n24_in*1+n14_in*1)/2).toFixed(4);
// var n25_out = document.getElementById("n25");n25_out.innerHTML = n25_in;

// var n26_in = delta;
// var n26_out = document.getElementById("n26");n26_out.innerHTML = n26_in ;

// var n27_in = (n25_in*delta).toFixed(3);
// var n27_out = document.getElementById("n27");n27_out.innerHTML = n27_in;

// var n28_in = (n27_in*(10000/nTip)*Math.pow((Mc/sRat),p)).toFixed(0);
// var n28_out = document.getElementById("n28");n28_out.innerHTML = n28_in;

// var n29_in = (n19_in+n28_in*1).toFixed(0);
// var n29_out = document.getElementById("n29");n29_out.innerHTML = n29_in;
// //============================================================== Row 3 ====================================================================
// var n31_in=delta*2+n11_in;//Lcrack
// var n31_out = document.getElementById("n31");n31_out.innerHTML = n31_in.toFixed(2);

// var n32_in=1; //C factor
// var n32_out = document.getElementById("n32");n32_out.innerHTML = n32_in;

// switch (choosen_Yfactor) {
// 	case "J10": var LD3=0.9*n31_in/maxD;var n33_in=J12(LD3);break;
// 	case "J12": var LD3=n31_in/maxD;var n33_in=J12(LD3);break;
// }
// var n33_out = document.getElementById("n33");n33_out.innerHTML = n33_in;

// var n34_in=(Math.pow((n32_in*n33_in*(Math.pow((n31_in*3.1415/nTip),(0.5)))),(-1*p))).toFixed(4);
// var n34_out = document.getElementById("n34");n34_out.innerHTML = n34_in;

// var n35_in = ((n34_in*1+n24_in*1)/2).toFixed(4);
// var n35_out = document.getElementById("n35");n35_out.innerHTML = n35_in;

// var n36_in = delta;
// var n36_out = document.getElementById("n36");n36_out.innerHTML = n36_in ;

// var n37_in = (n35_in*delta).toFixed(3);
// var n37_out = document.getElementById("n37");n37_out.innerHTML = n37_in;

// var n38_in = (n37_in*(10000/nTip)*Math.pow((Mc/sRat),p)).toFixed(0);
// var n38_out = document.getElementById("n38");n38_out.innerHTML = n38_in;

// var n39_in = (n29_in*1+n38_in*1).toFixed(0);
// var n39_out = document.getElementById("n39");n39_out.innerHTML = n39_in;
// //============================================================== Row 4 ====================================================================
// var n41_in=delta*3+n11_in;//Lcrack
// var n41_out = document.getElementById("n41");n41_out.innerHTML = n41_in.toFixed(2);

// var n42_in=1; //C factor
// var n42_out = document.getElementById("n42");n42_out.innerHTML = n42_in;

// switch (choosen_Yfactor) {
// 	case "J10": var LD4=0.9*n41_in/maxD;var n43_in=J12(LD4);break;
// 	case "J12": var LD4=n41_in/maxD;var n43_in=J12(LD4);break;
// }
// var n43_out = document.getElementById("n43");n43_out.innerHTML = n43_in;

// var n44_in=(Math.pow((n42_in*n43_in*(Math.pow((n41_in*3.1415/nTip),(0.5)))),(-1*p))).toFixed(4);
// var n44_out = document.getElementById("n44");n44_out.innerHTML = n44_in;

// var n45_in = ((n44_in*1+n34_in*1)/2).toFixed(4);
// var n45_out = document.getElementById("n45");n45_out.innerHTML = n45_in;

// var n46_in = delta;
// var n46_out = document.getElementById("n46");n46_out.innerHTML = n46_in ;

// var n47_in = (n45_in*delta).toFixed(3);
// var n47_out = document.getElementById("n47");n47_out.innerHTML = n47_in;

// var n48_in = (n47_in*(10000/nTip)*Math.pow((Mc/sRat),p)).toFixed(0);
// var n48_out = document.getElementById("n48");n48_out.innerHTML = n48_in;

// var n49_in = (n39_in*1+n48_in*1).toFixed(0);
// var n49_out = document.getElementById("n49");n49_out.innerHTML = n49_in;
// //============================================================== Row 5 ====================================================================
// var n51_in=delta*4+n11_in;//Lcrack
// var n51_out = document.getElementById("n51");n51_out.innerHTML = n51_in.toFixed(2);

// var n52_in=1; //C factor
// var n52_out = document.getElementById("n52");n52_out.innerHTML = n52_in;

// switch (choosen_Yfactor) {
// 	case "J10": var LD5=0.9*n51_in/maxD;var n53_in=J12(LD5);break;
// 	case "J12": var LD5=n51_in/maxD;var n53_in=J12(LD5);break;
// }
// var n53_out = document.getElementById("n53");n53_out.innerHTML = n53_in;

// var n54_in=(Math.pow((n52_in*n53_in*(Math.pow((n51_in*3.1415/nTip),(0.5)))),(-1*p))).toFixed(4);
// var n54_out = document.getElementById("n54");n54_out.innerHTML = n54_in;

// var n55_in = ((n54_in*1+n44_in*1)/2).toFixed(4);
// var n55_out = document.getElementById("n55");n55_out.innerHTML = n55_in;

// var n56_in = delta;
// var n56_out = document.getElementById("n56");n56_out.innerHTML = n56_in ;

// var n57_in = (n55_in*delta).toFixed(3);
// var n57_out = document.getElementById("n57");n57_out.innerHTML = n57_in;

// var n58_in = (n57_in*(10000/nTip)*Math.pow((Mc/sRat),p)).toFixed(0);
// var n58_out = document.getElementById("n58");n58_out.innerHTML = n58_in;

// var n59_in = (n49_in*1+n58_in*1).toFixed(0);
// var n59_out = document.getElementById("n59");n59_out.innerHTML = n59_in;
// //============================================================== Row 6 ====================================================================
// var n61_in=delta*5+n11_in;//Lcrack
// var n61_out = document.getElementById("n61");n61_out.innerHTML = n61_in.toFixed(2);

// var n62_in=1; //C factor
// var n62_out = document.getElementById("n62");n62_out.innerHTML = n62_in;

// switch (choosen_Yfactor) {
// 	case "J10": var LD6=0.9*n61_in/maxD;var n63_in=J12(LD6);break;
// 	case "J12": var LD6=n61_in/maxD;var n63_in=J12(LD6);break;
// }
// var n63_out = document.getElementById("n63");n63_out.innerHTML = n63_in;

// var n64_in=(Math.pow((n62_in*n63_in*(Math.pow((n61_in*3.1415/nTip),(0.5)))),(-1*p))).toFixed(4);
// var n64_out = document.getElementById("n64");n64_out.innerHTML = n64_in;

// var n65_in = ((n64_in*1+n54_in*1)/2).toFixed(4);
// var n65_out = document.getElementById("n65");n65_out.innerHTML = n65_in;

// var n66_in = delta;
// var n66_out = document.getElementById("n66");n66_out.innerHTML = n66_in ;

// var n67_in = (n65_in*delta).toFixed(3);
// var n67_out = document.getElementById("n67");n67_out.innerHTML = n67_in;

// var n68_in = (n67_in*(10000/nTip)*Math.pow((Mc/sRat),p)).toFixed(0);
// var n68_out = document.getElementById("n68");n68_out.innerHTML = n68_in;

// var n69_in = (n59_in*1+n68_in*1).toFixed(0);
// var n69_out = document.getElementById("n69");n69_out.innerHTML = n69_in;
// //============================================================== Row 7 ====================================================================
// var n71_in=delta*6+n11_in;//Lcrack
// var n71_out = document.getElementById("n71");n71_out.innerHTML = n71_in.toFixed(2);

// var n72_in=1; //C factor
// var n72_out = document.getElementById("n72");n72_out.innerHTML = n72_in;


// switch (choosen_Yfactor) {
// 	case "J10": var LD7=0.9*n71_in/maxD;var n73_in=J12(LD7);break;
// 	case "J12": var LD7=n71_in/maxD;var n73_in=J12(LD7);break;
// }
// var n73_out = document.getElementById("n73");n73_out.innerHTML = n73_in;

// var n74_in=(Math.pow((n72_in*n73_in*(Math.pow((n71_in*3.1415/nTip),(0.5)))),(-1*p))).toFixed(4);
// var n74_out = document.getElementById("n74");n74_out.innerHTML = n74_in;

// var n75_in = ((n74_in*1+n64_in*1)/2).toFixed(4);
// var n75_out = document.getElementById("n75");n75_out.innerHTML = n75_in;

// var n76_in = delta;
// var n76_out = document.getElementById("n76");n76_out.innerHTML = n76_in ;

// var n77_in = (n75_in*delta).toFixed(3);
// var n77_out = document.getElementById("n77");n77_out.innerHTML = n77_in;

// var n78_in = (n77_in*(10000/nTip)*Math.pow((Mc/sRat),p)).toFixed(0);
// var n78_out = document.getElementById("n78");n78_out.innerHTML = n78_in;

// var n79_in = (n69_in*1+n78_in*1).toFixed(0);
// var n79_out = document.getElementById("n79");n79_out.innerHTML = n79_in;
// //========================================================= DTR Calcs ====================================================================
// var n79Rev=n79_in*1-n79_in*1;
// var n69Rev=n79_in-n69_in;
// var n59Rev=n79_in-n59_in;
// var n49Rev=n79_in-n49_in;
// var n39Rev=n79_in-n39_in;
// var n29Rev=n79_in-n29_in;
// var n19Rev=n79_in-n19_in;

// var x=[n79Rev,n69Rev,n59Rev,n49Rev,n39Rev,n29Rev,n19Rev];
// var y=[n71_in,n61_in,n51_in,n41_in,n31_in,n21_in,n11_in];
// var Nc=n79_in; // numbers of cycles when crack reach max size 

// var Insp_gen=DTR(x,y,Nc,3,0.2);
// var DTR_gen_in = Insp_gen;
// var DTR_gen_out = document.getElementById("DTR_gen");DTR_gen_out.innerHTML = DTR_gen_in;

// var Insp_det=DTR(x,y,Nc,2,0.15);
// var DTR_det_in = Insp_det;
// var DTR_det_out = document.getElementById("DTR_det");DTR_det_out.innerHTML = DTR_det_in;
