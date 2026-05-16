function Fast(cl, dia, mat, head){this.cl=cl; this.dia=dia; this.mat=mat; this.head=head;}

var bacb30nx_ky_5 = new Fast("hi-lok", 0.190, "titanium", "universal");   
var bacb30nx_ky_6 = new Fast("hi-lok", 0.219, "titanium", "universal");   
var bacb30nx_ky_8 = new Fast("hi-lok", 0.281, "titanium", "universal");   
var bacb30nx_ky_10 = new Fast("hi-lok", 0.344, "titanium", "universal");   
var bacb30nx_ky_12 = new Fast("hi-lok", 0.406, "titanium", "universal");

var bacb30vt_k_5 =  new Fast("hi-lok", 0.164, "titanium", "universal");   var bacb30vt_k_6 =  new Fast("hi-lok", 0.190, "titanium", "universal");   var bacb30vt_k_8 =  new Fast("hi-lok", 0.250, "titanium", "universal");   var bacb30vt_k_10 =  new Fast("hi-lok", 0.313, "titanium", "universal");   var bacb30vt_k_12 =  new Fast("hi-lok", 0.375, "titanium", "universal");
var bacb30nw_ky_5 = new Fast("hi-lok", 0.190, "titanium", "countersink"); var bacb30nw_ky_6 = new Fast("hi-lok", 0.219, "titanium", "countersink"); var bacb30nw_ky_8 = new Fast("hi-lok", 0.281, "titanium", "countersink"); var bacb30nw_ky_10 = new Fast("hi-lok", 0.344, "titanium", "countersink"); var bacb30nw_ky_12 = new Fast("hi-lok", 0.406, "titanium", "countersink");
var bacb30yp_k_5 =  new Fast("hi-lok", 0.164, "titanium", "countersink"); var bacb30yp_k_6 =  new Fast("hi-lok", 0.190, "titanium", "countersink"); var bacb30yp_k_8 =  new Fast("hi-lok", 0.250, "titanium", "countersink"); var bacb30yp_k_10 =  new Fast("hi-lok", 0.313, "titanium", "countersink"); var bacb30yp_k_12 =  new Fast("hi-lok", 0.375, "titanium", "countersink");
var bacb30vh5cd_s =  new Fast("blind bolt", 0.183, "cres", "universal");  var bacb30vh6cd_s =  new Fast("blind bolt", 0.218, "cres", "universal");  var bacb30vh8cd_s =  new Fast("blind bolt", 0.279, "cres", "universal");; var bacb30vh10cd_s =  new Fast("blind bolt", 0.331, "cres", "universal"); var bacb30vh12cd_s =  new Fast("blind bolt", 0.393, "cres", "universal");
var bacr15bb_d_5 =  new Fast("non fluid rivet", 0.165, "2017", "universal"); var bacr15bb_d_6 =  new Fast("non fluid rivet", 0.196, "2017", "universal"); var bacr15bb_d_8 =  new Fast("non fluid rivet", 0.259, "2017", "universal"); var bacr15bb_d_10 =  new Fast("non fluid rivet", 0.322, "2017", "universal"); var bacr15bb_d_12 =  new Fast("non fluid rivet", 0.385, "2017", "universal");
var bacr15ce_d_5 =  new Fast("non fluid rivet", 0.165, "2017", "countersink"); var bacr15ce_d_6 =  new Fast("non fluid rivet", 0.196, "2017", "countersink"); var bacr15ce_d_8 =  new Fast("non fluid rivet", 0.259, "2017", "countersink"); var bacr15ce_d_10 =  new Fast("non fluid rivet", 0.322, "2017", "countersink"); var bacr15ce_d_12 =  new Fast("non fluid rivet", 0.385, "2017", "countersink");
var bacr15ds_d_7 =  new Fast("non fluid rivet", 0.231, "2017", "countersink"); var bacr15ds_d_9 =  new Fast("non fluid rivet", 0.292, "2017", "countersink"); 

var fast = document.getElementById('fast'); var fast_ = document.getElementById('fast_');
function fnFast(){ fast_.innerHTML="";
switch(fast.value){
	case 'bacb30nx_ky': var oAr=["|...","bacb30nx_ky_5|5","bacb30nx_ky_6|6", "bacb30nx_ky_8|8", "bacb30nx_ky_10|10", "bacb30nx_ky_12|12"]; break;
	case 'bacb30vt_k':  var oAr=["|...","bacb30vt_k_5|5","bacb30vt_k_6|6", "bacb30vt_k_8|8", "bacb30vt_k_10|10", "bacb30vt_k_12|12"]; break;
	case 'bacb30nw_ky': var oAr=["|...","bacb30nw_ky_5|5","bacb30nw_ky_6|6", "bacb30nw_ky_8|8", "bacb30nw_ky_10|10", "bacb30nw_ky_12|12"]; break;
	case 'bacb30yp_k':  var oAr=["|...","bacb30yp_k_5|5","bacb30yp_k_6|6", "bacb30yp_k_8|8", "bacb30yp_k_10|10", "bacb30yp_k_12|12"]; break;
	case 'bacb30vh_cd_s':  var oAr=["|...","bacb30vh5cd_s|5","bacb30vh6cd_s|6", "bacb30vh8cd_s|8", "bacb30vh10cd_s|10", "bacb30vh12cd_s|12"]; break;
	case 'bacr15bb_d': var oAr=["|...","bacr15bb_d_5|5","bacr15bb_d_6|6", "bacr15bb_d_8|8", "bacr15bb_d_10|10", "bacr15bb_d_12|12"]; break;
	case 'bacr15ce_d': var oAr=["|...","bacr15ce_d_5|5","bacr15ce_d_6|6", "bacr15ce_d_8|8", "bacr15ce_d_10|10", "bacr15ce_d_12|12"]; break;
	case 'bacr15ds_d': var oAr=["|...","bacr15ds_d_7|7","bacr15ds_d_9|9"]; break;
}
for(var o in oAr) {var pair=oAr[o].split("|"); var newO=document.createElement("option"); newO.value=pair[0]; newO.innerHTML=pair[1]; fast_.options.add(newO);}
document.getElementById('fast_2').innerHTML = ""; }
fast.addEventListener("change", fnFast, false);

var fastName, dia, fty;
function fnFast_(){fastName=fast.options[fast.selectedIndex].text; dia=fast_.options[fast_.selectedIndex].text*1;
var cl=""; 
switch(fast_.options[fast_.selectedIndex].value){
	case 	'bacb30nx_ky_5':  cl=bacb30nx_ky_5.cl; 	dia=bacb30nx_ky_5.dia; 	mat=bacb30nx_ky_5.mat; 	head=bacb30nx_ky_5.head; pic="bacb30nx"; break; 
	case 	'bacb30nx_ky_6':  cl=bacb30nx_ky_6.cl; 	dia=bacb30nx_ky_6.dia; 	mat=bacb30nx_ky_6.mat; 	head=bacb30nx_ky_6.head; pic="bacb30nx"; break;
	case 	'bacb30nx_ky_8':  cl=bacb30nx_ky_8.cl; 	dia=bacb30nx_ky_8.dia; 	mat=bacb30nx_ky_8.mat; 	head=bacb30nx_ky_8.head; pic="bacb30nx"; break; 
	case 'bacb30nx_ky_10': cl=bacb30nx_ky_10.cl; dia=bacb30nx_ky_10.dia; mat=bacb30nx_ky_10.mat; head=bacb30nx_ky_10.head; pic="bacb30nx"; break;
	case 'bacb30nx_ky_12': cl=bacb30nx_ky_12.cl; dia=bacb30nx_ky_12.dia; mat=bacb30nx_ky_12.mat; head=bacb30nx_ky_12.head; pic="bacb30nx"; break;

	case 	'bacb30vt_k_5':  cl=bacb30vt_k_5.cl; 	dia=bacb30vt_k_5.dia; 	mat=bacb30vt_k_5.mat; 	head=bacb30vt_k_5.head; pic="bacb30vt"; break; 
	case 	'bacb30vt_k_6':  cl=bacb30vt_k_6.cl; 	dia=bacb30vt_k_6.dia; 	mat=bacb30vt_k_6.mat; 	head=bacb30vt_k_6.head; pic="bacb30vt"; break;
	case 	'bacb30vt_k_8':  cl=bacb30vt_k_8.cl; 	dia=bacb30vt_k_8.dia; 	mat=bacb30vt_k_8.mat; 	head=bacb30vt_k_8.head; pic="bacb30vt"; break; 
	case 'bacb30vt_k_10': cl=bacb30vt_k_10.cl; dia=bacb30vt_k_10.dia; mat=bacb30vt_k_10.mat; head=bacb30vt_k_10.head; pic="bacb30vt"; break;
	case 'bacb30vt_k_12': cl=bacb30vt_k_12.cl; dia=bacb30vt_k_12.dia; mat=bacb30vt_k_12.mat; head=bacb30vt_k_12.head; pic="bacb30vt"; break;

	case 	'bacb30nw_ky_5':  cl=bacb30nw_ky_5.cl; 	dia=bacb30nw_ky_5.dia; 	mat=bacb30nw_ky_5.mat; 	head=bacb30nw_ky_5.head; pic="bacb30nw"; break; 
	case 	'bacb30nw_ky_6':  cl=bacb30nw_ky_6.cl; 	dia=bacb30nw_ky_6.dia; 	mat=bacb30nw_ky_6.mat; 	head=bacb30nw_ky_6.head; pic="bacb30nw"; break;
	case 	'bacb30nw_ky_8':  cl=bacb30nw_ky_8.cl; 	dia=bacb30nw_ky_8.dia; 	mat=bacb30nw_ky_8.mat; 	head=bacb30nw_ky_8.head; pic="bacb30nw"; break; 
	case 'bacb30nw_ky_10': cl=bacb30nw_ky_10.cl; dia=bacb30nw_ky_10.dia; mat=bacb30nw_ky_10.mat; head=bacb30nw_ky_10.head; pic="bacb30nw"; break;
	case 'bacb30nw_ky_12': cl=bacb30nw_ky_12.cl; dia=bacb30nw_ky_12.dia; mat=bacb30nw_ky_12.mat; head=bacb30nw_ky_12.head; pic="bacb30nw"; break;

	case 	'bacb30yp_k_5':  cl=bacb30yp_k_5.cl; 	dia=bacb30yp_k_5.dia; 	mat=bacb30yp_k_5.mat; 	head=bacb30yp_k_5.head; pic="bacb30yp"; break; 
	case 	'bacb30yp_k_6':  cl=bacb30yp_k_6.cl; 	dia=bacb30yp_k_6.dia; 	mat=bacb30yp_k_6.mat; 	head=bacb30yp_k_6.head; pic="bacb30yp"; break;
	case 	'bacb30yp_k_8':  cl=bacb30yp_k_8.cl; 	dia=bacb30yp_k_8.dia; 	mat=bacb30yp_k_8.mat; 	head=bacb30yp_k_8.head; pic="bacb30yp"; break; 
	case 'bacb30yp_k_10': cl=bacb30yp_k_10.cl; dia=bacb30yp_k_10.dia; mat=bacb30yp_k_10.mat; head=bacb30yp_k_10.head; pic="bacb30yp"; break;
	case 'bacb30yp_k_12': cl=bacb30yp_k_12.cl; dia=bacb30yp_k_12.dia; mat=bacb30yp_k_12.mat; head=bacb30yp_k_12.head; pic="bacb30yp"; break;

	case 	'bacb30vh5cd_s':  cl=bacb30vh5cd_s.cl; 	dia=bacb30vh5cd_s.dia; 	mat=bacb30vh5cd_s.mat; 	head=bacb30vh5cd_s.head; pic="bacb30vh"; break; 
	case 	'bacb30vh6cd_s':  cl=bacb30vh6cd_s.cl; 	dia=bacb30vh6cd_s.dia; 	mat=bacb30vh6cd_s.mat; 	head=bacb30vh6cd_s.head; pic="bacb30vh"; break;
	case 	'bacb30vh8cd_s':  cl=bacb30vh8cd_s.cl; 	dia=bacb30vh8cd_s.dia; 	mat=bacb30vh8cd_s.mat; 	head=bacb30vh8cd_s.head; pic="bacb30vh"; break; 
	case 'bacb30vh10cd_s': cl=bacb30vh10cd_s.cl; dia=bacb30vh10cd_s.dia; mat=bacb30vh10cd_s.mat; head=bacb30vh10cd_s.head; pic="bacb30vh"; break;
	case 'bacb30vh12cd_s': cl=bacb30vh12cd_s.cl; dia=bacb30vh12cd_s.dia; mat=bacb30vh12cd_s.mat; head=bacb30vh12cd_s.head; pic="bacb30vh"; break;

	case 	'bacr15bb_d_5':  cl=bacr15bb_d_5.cl; 	dia=bacr15bb_d_5.dia; 	mat=bacr15bb_d_5.mat; 	head=bacr15bb_d_5.head; pic="bacr15bb"; break; 
	case 	'bacr15bb_d_6':  cl=bacr15bb_d_6.cl; 	dia=bacr15bb_d_6.dia; 	mat=bacr15bb_d_6.mat; 	head=bacr15bb_d_6.head; pic="bacr15bb"; break;
	case 	'bacr15bb_d_8':  cl=bacr15bb_d_8.cl; 	dia=bacr15bb_d_8.dia; 	mat=bacr15bb_d_8.mat; 	head=bacr15bb_d_8.head; pic="bacr15bb"; break; 
	case 'bacr15bb_d_10': cl=bacr15bb_d_10.cl; dia=bacr15bb_d_10.dia;   mat=bacr15bb_d_10.mat; head=bacr15bb_d_10.head; pic="bacr15bb"; break;
	case 'bacr15bb_d_12': cl=bacr15bb_d_12.cl; dia=bacr15bb_d_12.dia;   mat=bacr15bb_d_12.mat; head=bacr15bb_d_12.head; pic="bacr15bb"; break;

	case 	'bacr15ce_d_5':  cl=bacr15ce_d_5.cl; 	dia=bacr15ce_d_5.dia; 	mat=bacr15ce_d_5.mat; 	head=bacr15ce_d_5.head; pic="bacr15ce"; break; 
	case 	'bacr15ce_d_6':  cl=bacr15ce_d_6.cl; 	dia=bacr15ce_d_6.dia; 	mat=bacr15ce_d_6.mat; 	head=bacr15ce_d_6.head; pic="bacr15ce"; break;
	case 	'bacr15ce_d_8':  cl=bacr15ce_d_8.cl; 	dia=bacr15ce_d_8.dia; 	mat=bacr15ce_d_8.mat; 	head=bacr15ce_d_8.head; pic="bacr15ce"; break; 
	case 'bacr15ce_d_10': cl=bacr15ce_d_10.cl; dia=bacr15ce_d_10.dia;   mat=bacr15ce_d_10.mat; head=bacr15ce_d_10.head; pic="bacr15ce"; break;
	case 'bacr15ce_d_12': cl=bacr15ce_d_12.cl; dia=bacr15ce_d_12.dia;   mat=bacr15ce_d_12.mat; head=bacr15ce_d_12.head; pic="bacr15ce"; break;

	case 	'bacr15ds_d_7':  cl=bacr15ds_d_7.cl; 	dia=bacr15ds_d_7.dia; 	mat=bacr15ds_d_7.mat; 	head=bacr15ds_d_7.head; pic="bacr15ds"; break; 
	case 	'bacr15ds_d_9':  cl=bacr15ds_d_9.cl; 	dia=bacr15ds_d_9.dia; 	mat=bacr15ds_d_9.mat; 	head=bacr15ds_d_9.head; pic="bacr15ds"; break;
}
var out = "Name: "+fastName+" | "+
					"class: "+cl+" | "+
					"material: "+mat+" | "+
					"head: "+head+" | "+
					"diameter: "+dia+" in | "+
					"ref: "+"<a href='../../avk_pdf/boeing/fasteners/"+pic+".pdf' target='_blank'>...</a><br>";

document.getElementById('fast_2').innerHTML = out; document.getElementById("genFast").innerHTML = fastName+" | "+dia+" |";}
fast_.addEventListener("change", fnFast_, false);

