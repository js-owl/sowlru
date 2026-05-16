var fast = document.getElementById('fast'); var fast_ = document.getElementById('fast_'); var d32, d;
function fnFast(){
var selFast = fast.selectedIndex; var optFast = fast.options; var fname= optFast[selFast].text;
var seld = fast_.selectedIndex; var opt = fast_.options; d32= opt[seld].value;
switch(fast.value){
  case 'bacb30nx_ky': fcl="hi-lok";          fmat="titanium"; fhead="universal";   fpic="bacb30nx"; switch(d32){case '5': d=0.190; break; case '6': d=0.219; break; case '7': d=0;     break; case '8': d=0.281; break; case '9': d=0;     break; case '10': d=0.344; break; case '12': d=0.406; break;} break;
  case 'bacb30vt_k' : fcl="hi-lok";          fmat="titanium"; fhead="universal";   fpic="bacb30vt"; switch(d32){case '5': d=0.164; break; case '6': d=0.190; break; case '7': d=0;     break; case '8': d=0.250; break; case '9': d=0;     break; case '10': d=0.313; break; case '12': d=0.375; break;} break;
  case 'bacb30nw_ky': fcl="hi-lok";          fmat="titanium"; fhead="countersink"; fpic="bacb30nw"; switch(d32){case '5': d=0.190; break; case '6': d=0.219; break; case '7': d=0;     break; case '8': d=0.281; break; case '9': d=0;     break; case '10': d=0.344; break; case '12': d=0.406; break;} break;
  case 'bacb30yp_k' : fcl="hi-lok";          fmat="titanium"; fhead="countersink"; fpic="bacb30yp"; switch(d32){case '5': d=0.164; break; case '6': d=0.190; break; case '7': d=0;     break; case '8': d=0.250; break; case '9': d=0;     break; case '10': d=0.313; break; case '12': d=0.375; break;} break;
case 'bacb30vh_cd_s': fcl="blind bolt";      fmat="cres";     fhead="universal";   fpic="bacb30vh"; switch(d32){case '5': d=0.183; break; case '6': d=0.218; break; case '7': d=0;     break; case '8': d=0.279; break; case '9': d=0;     break; case '10': d=0.331; break; case '12': d=0.393; break;} break;
   case 'bacr15bb_d': fcl="non fluid rivet"; fmat="2017";     fhead="universal";   fpic="bacr15bb"; switch(d32){case '5': d=0.165; break; case '6': d=0.196; break; case '7': d=0;     break; case '8': d=0.259; break; case '9': d=0;     break; case '10': d=0.322; break; case '12': d=0.385; break;} break;
   case 'bacr15ce_d': fcl="non fluid rivet"; fmat="2017";     fhead="countersink"; fpic="bacr15ce"; switch(d32){case '5': d=0.165; break; case '6': d=0.196; break; case '7': d=0;     break; case '8': d=0.259; break; case '9': d=0;     break; case '10': d=0.322; break; case '12': d=0.385; break;} break;
   case 'bacr15ds_d': fcl="non fluid rivet"; fmat="2017";     fhead="countersink"; fpic="bacr15ds"; switch(d32){case '5': d=0;     break; case '6': d=0;     break; case '7': d=0.231; break; case '8': d=0;     break; case '9': d=0.292; break; case '10': d=0;     break; case '12': d=0;     break;} break;
}

var out = "Name: "+fcl+" | "+
	 "class: "+fcl+" | "+
      "material: "+fmat+" | "+
	  "head: "    +fhead+" | "+
      "diameter: "+d+" in | "+
	   "ref: "     +"<a href='../../avk_pdf/aero/fasteners/"+fpic+".pdf' target='_blank'>...</a><br>";

document.getElementById('fast_2').innerHTML = out; document.getElementById("genFast").innerHTML = fname+" "+d+" |";}
window.addEventListener("load", fnFast, false);
document.getElementById("fast").addEventListener("change", fnFast, false);
document.getElementById("fast_").addEventListener("change", fnFast, false);

