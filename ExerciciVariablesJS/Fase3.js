var utilsAnyosBisiestos = function(anioReferenciaInicio,anioFin){
    return {
        dameRangoBisiestos: function(anioReferenciaInicio,anioFin) {
            var rangoBisiestos = new Array();
            var checkedAnio=this.validaDatosEntrada(anioReferenciaInicio,anioFin);
            if (checkedAnio!=0) {
                anioFin=anioReferenciaInicio;
                anioReferenciaInicio = checkedAnio;
            }
            
            for (let i = anioReferenciaInicio; i <= anioFin; i+=getDistanciaEntreBisiestos()) {
                rangoBisiestos.push(i);
            }
            return rangoBisiestos;
      },
      validaDatosEntrada: function(anioReferenciaInicio,anioReferenciaInicio){
        let checkedAnio = 0;
        let anioMayor = this.dameAnioMayorEnRango(anioReferenciaInicio, anioFin);
        if (anioMayor != anioFin) {
            if (!esBisiesto(anioFin)) {
                checkedAnio=this.dameBisietoMasCercano(anioFin);
            }
            else {
                checkedAnio=anioFin;
            }
        }
        return checkedAnio;
      },
      dameAnioMayorEnRango: function(anioReferenciaInicio,anioReferenciaInicio){
        let varTemp=anioFin;
        if(anioFin < anioReferenciaInicio) {
            varTemp=Math.max(anioReferenciaInicio,anioFin);
        }
        return varTemp;
      },
      dameBisietoMasCercano: function(anio){
        for (let i=1; i<=getDistanciaEntreBisiestos();i++) {
            if (!this.esBisiesto(anio)) {
                anio = anio+i;
            }
            else {
                break;
            }
        }
        return anio;
      },
      esBisiesto: function(anio){
        let esBisiesto = true;
        let divisiblePor4=anio%getDistanciaEntreBisiestos();
        if (divisiblePor4 != 0) {
            esBisiesto = false;
        }
        return esBisiesto;
      },
      dameTextoAnyoBisiesto: function(anio){
        if (this.esBisiesto(anio)) {
            var bisiesto_ok = 'Mi año de nacimiento si es bisiesto';
            return bisiesto_ok;
        }else{
            var bisiesto_ko = 'Mi año de nacimiento no es bisiesto';
            return bisiesto_ko;
        }
      }
    }
};


//UI
function UIShowRangoAnyosBisiestos (anyoReferenciaInicio,anyoFin,rangoBisiestos) {
    const fase3=document.getElementById('fase-3');
    const div=document.createElement('div');
    div.className='alert alert-primary mt-2 text text-center text-capitalize border border-success';
    div.innerHTML = `
    <div> 
           Años bisiestos entre: ${anyoReferenciaInicio} - ${anyoFin} 
           </br>
                               
    </div>  
    `;

    for(let i=0;i<rangoBisiestos.length;i++){
        const label=document.createElement('label');
        label.className='alert alert-info mt-2 border border-info';
        label.innerHTML= `
            ${rangoBisiestos[i]}
        `;
     
        div.appendChild(label)
    }

    fase3.appendChild(div);
}

function UIShowInfoAnyoNacimientoBisiesto (info) {
    const fase3=document.getElementById('fase-3');
    const div=document.createElement('div');
    div.className='alert alert-warning mt-2 text text-center text-capitalize border border-info';
    div.appendChild(document.createTextNode(info));
    fase3.appendChild(div);
}



//EVENTOS DEL DOM
var anyoBisiesto=getAnioBisiesto();
var utils=utilsAnyosBisiestos(anyoBisiesto,anyoNacimiento.getAnyo());
var arrayRangoBisiestos=utils.dameRangoBisiestos(anyoBisiesto,anyoNacimiento.getAnyo());
var infoAnyoBisiesto = utils.dameTextoAnyoBisiesto(anyoNacimiento.getAnyo());

window.addEventListener("load",UIShowRangoAnyosBisiestos(anyoBisiesto,anyoNacimiento.getAnyo(),arrayRangoBisiestos));
window.addEventListener("load",UIShowInfoAnyoNacimientoBisiesto(infoAnyoBisiesto));

