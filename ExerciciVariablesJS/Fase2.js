  var fechaNacimiento = function(anyoNacimiento){
      return {
        getAnyo: function() {
            return anyoNacimiento;
        },
        setAnyo: function(newAnyo){
            anyoNacimiento=newAnyo;
        }
      }
  };
  
  const getAnioBisiesto = (function() {
    const ANIO_BISIESTO_1948 = 1948; 
    
    return function() {
      return ANIO_BISIESTO_1948;
    };
  })();

  const getDistanciaEntreBisiestos = (function() {
    let distanciaEntreBisiestos=4; 
    
    return function() {
      return distanciaEntreBisiestos;
    };
  })();

  function cuentaAniosBisiestos(anioNacimiento) {
    let distanciaEntreBisiestos=getDistanciaEntreBisiestos(); 
    let totalAnyos= Number.parseInt(Math.abs((anioNacimiento-getAnioBisiesto())/distanciaEntreBisiestos)+1);
    return totalAnyos;
 }
  
//UI
  function UIShowInfo(anioBisiesto,anioNacimiento,totalAnyosBisietos){
    const div = document.createElement('div');
    const fase2=document.querySelector('#fase-2');
    div.className='alert alert-primary mt-2 text text-center text-capitalize border border-success';
    div.innerHTML = `
    <div> 
        año bisiesto de referencia: ${anioBisiesto}
        </br>
        año de nacimiento: ${anioNacimiento}
    </div>  
    `;

    const divTotalAnyos = document.createElement('div');
    divTotalAnyos.className='alert alert-primary mt-2 text text-center text-capitalize border border-success';
    divTotalAnyos.appendChild(document.createTextNode('total años bisiestos entre: '+anioBisiesto+'-'+anioNacimiento));  

    const labelTotalAnyos = document.createElement('label');
    labelTotalAnyos.className='alert alert-info mt-2 text text-center text-capitalize border border-info';
    labelTotalAnyos.appendChild(document.createTextNode(totalAnyosBisietos)); 
    divTotalAnyos.appendChild(labelTotalAnyos) ;

    fase2.appendChild(div);
    fase2.appendChild(divTotalAnyos);
  }

//EVENTOS DEL DOM
var anyoNacimiento = fechaNacimiento(1979);
//anyoNacimiento.setAnyo(1940);
var totalAnyos=cuentaAniosBisiestos(anyoNacimiento.getAnyo());
window.addEventListener("load",UIShowInfo(getAnioBisiesto(),anyoNacimiento.getAnyo(),totalAnyos));
