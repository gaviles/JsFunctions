// initialization
gmathBinds = [];

$("[gmath]").each( function( i, e){
	var gmathBind = $(e);
	var attr = gmathBind.attr("gmath");
	console.log(attr);
	e.gmath = {type:""};
	if( attr.charAt(0) == "=" ){
		e.gmath.type = "function";
		e.gmath.f = attr.slice(1);
	}else{
		gmathBind.on("input", function(){ gmathUpdate(); });
		if( e.value == "" ){
			e.value = 0;
		}
		e.gmath.type = "value";
		e.gmath.index = attr;
	}
	gmathBinds.push(e);
});

function gmathUpdate(){
		
	for( var i in gmathBinds ){
		if( gmathBinds[i].gmath.type == "value" ){
			this[gmathBinds[i].gmath.index] = parseFloat( gmathBinds[i].value );
		}
	}
	
	for( var i in gmathBinds ){
		if( gmathBinds[i].gmath.type == "function" ){
			gmathBinds[i].innerText = eval(gmathBinds[i].gmath.f);
		}
	}
}