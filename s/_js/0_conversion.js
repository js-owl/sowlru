function mi(a){return (a/25.400).toFixed(3);} // transfer mm to inch 
function im(a){return (a*25.400).toFixed(1);} // transfer inch to mm

function mk(a){return (a/6.8947572).toFixed(3);} // transfer MPa to ksi
function km(a){return (a*6.8947572).toFixed(1);} // transfer ksi to MPa

function kl(a){return (a/27680).toFixed(3);}  // transfer kg/m3 to lbs/in3 (density)
function lk(a){return (a*27680).toFixed(0);}  // transfer lbs/in3 to kg/m3 (density)

function nl(a){return (a/4.4482216).toFixed(3);} // transfer Newton to lbs (force)
function ln(a){return (a*4.4482216).toFixed(2);} // transfer lbs to Newton (force)

//--------------------------------------
function fn_directLine(x1,y1, x2, y2, x_find){
	var k=(y1-y2)/(x1-x2); 
	var b=y1-k*x1; 
return k*x_find+b; 
}

//--------------------------------------
function fn_linearApprox(x, y, x_find){
	var last = x.length;
	for (var i=0; i<last; i++){
		if(x_find<x[i+1]){
			var k=(y[i]-y[i+1])/(x[i]-x[i+1]); 
			var b=y[i]-k*x[i]; 
			var y_find=k*x_find+b; break 
		}
	}
return y_find;
}