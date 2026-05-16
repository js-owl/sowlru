var fast = document.getElementById('fast'); var fast_ = document.getElementById('fast_'); var d32, d;
function fnFast(){
var selFast = fast.selectedIndex; var optFast = fast.options; var fname= optFast[selFast].text;
var seld = fast_.selectedIndex; var opt = fast_.options; d32= opt[seld].value;
switch(fast.value){
  case 'bacb30nx_ky': cl="hi-lok";          mat="titanium"; head="universal";   switch(d32){case '5': d=0.190; break; case '6': d=0.219; break; case '7': d=0;     break; case '8': d=0.281; break; case '9': d=0;     break; case '10': d=0.344; break; case '12': d=0.406; break;} break;
  case 'bacb30vt_k' : cl="hi-lok";          mat="titanium"; head="universal";   switch(d32){case '5': d=0.164; break; case '6': d=0.190; break; case '7': d=0;     break; case '8': d=0.250; break; case '9': d=0;     break; case '10': d=0.313; break; case '12': d=0.375; break;} break;
  case 'bacb30nw_ky': cl="hi-lok";          mat="titanium"; head="countersink"; switch(d32){case '5': d=0.190; break; case '6': d=0.219; break; case '7': d=0;     break; case '8': d=0.281; break; case '9': d=0;     break; case '10': d=0.344; break; case '12': d=0.406; break;} break;
  case 'bacb30yp_k' : cl="hi-lok";          mat="titanium"; head="countersink"; switch(d32){case '5': d=0.164; break; case '6': d=0.190; break; case '7': d=0;     break; case '8': d=0.250; break; case '9': d=0;     break; case '10': d=0.313; break; case '12': d=0.375; break;} break;
case 'bacb30vh_cd_s': cl="blind bolt";      mat="cres";     head="universal";   switch(d32){case '5': d=0.183; break; case '6': d=0.218; break; case '7': d=0;     break; case '8': d=0.279; break; case '9': d=0;     break; case '10': d=0.331; break; case '12': d=0.393; break;} break;
   case 'bacr15bb_d': cl="non fluid rivet"; mat="2017";     head="universal";   switch(d32){case '5': d=0.165; break; case '6': d=0.196; break; case '7': d=0;     break; case '8': d=0.259; break; case '9': d=0;     break; case '10': d=0.322; break; case '12': d=0.385; break;} break;
   case 'bacr15ce_d': cl="non fluid rivet"; mat="2017";     head="countersink"; switch(d32){case '5': d=0.165; break; case '6': d=0.196; break; case '7': d=0;     break; case '8': d=0.259; break; case '9': d=0;     break; case '10': d=0.322; break; case '12': d=0.385; break;} break;
   case 'bacr15ds_d': cl="non fluid rivet"; mat="2017";     head="countersink"; switch(d32){case '5': d=0;     break; case '6': d=0;     break; case '7': d=0.231; break; case '8': d=0;     break; case '9': d=0.292; break; case '10': d=0;     break; case '12': d=0;     break;} break;

}

var out = "Name: "+cl+" | "+
	 "class: "+cl+" | "+
      "material: "+mat+" | "+
	  "head: "    +head+" | "+
      "diameter: "+d+" in | "+
	   "ref: "     +"<a href='../../avk_pdf/boeing/fasteners/"+pic+".pdf' target='_blank'>...</a><br>";

document.getElementById('fast_2').innerHTML = out; document.getElementById("genFast").innerHTML = fname+" | "+d+" |";}
window.addEventListener("load", fnFast, false);
document.getElementById("fast").addEventListener("change", fnFast, false);
document.getElementById("fast_").addEventListener("change", fnFast, false);

