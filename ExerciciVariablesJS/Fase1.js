const me = function(name,surname1,surname2){
    const getMe = function () {
        return surname1 + " " + surname2 + ", " + name;
    }
    return getMe;
  };
  

const fechaActual = function(){
    let today = new Date();
    const getFechaHoy = function(today){
      let dia=today.getDate();
      let mes = today.getMonth()+1;
      let anio=today.getFullYear();
    
      return "dia " + dia+ "/" + mes  + "/" + anio;
    }
    return getFechaHoy(today);
  };

//UI
function UIShowInfo(info){
  const div = document.createElement('div');
  const fase1=document.querySelector('#fase-1');
  div.className='alert alert-primary mt-2 text text-center text-capitalize border border-success';
  div.appendChild(document.createTextNode(info));
  fase1.appendChild(div);
}

//EVENTOS DEL DOM
let name='nuria';
let surname1='santos';
let surname2='sánchez';
myName = me(name,surname1,surname2);
window.addEventListener("load",UIShowInfo(myName()));
window.addEventListener("load",UIShowInfo(fechaActual()));