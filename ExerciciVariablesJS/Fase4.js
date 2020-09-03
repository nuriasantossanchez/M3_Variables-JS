const getFullName = (function() {
    let fullName = 'Nuria Santos Sánchez'; 
    
    return function() {
      return fullName;
    };
  })();

  const getBirthDate = (function() {
    let birthDate = '12/03/1979'; 
    
    return function() {
      return birthDate;
    };
  })();

  function formatBirthDate(birthDate){
    let lastIndex = birthDate.lastIndexOf("/")+1;
    let birthYear = birthDate.substring(lastIndex, birthDate.length);
    return Number.parseInt(birthYear);
  }


//UI
function UIShowPersonalInfo(fullName,birthDate,messageAnyoBisiesto) {
    const fase4=document.getElementById('fase-4');
    const div=document.createElement('div');
    div.className='alert alert-primary mt-2 text text-center text-capitalize border border-success';

    const labelFullName=document.createElement('label');
    labelFullName.className='alert alert-warning mt-2 border border-info';
    labelFullName.appendChild(document.createTextNode('mi nombre es ' + fullName));

    const labelBirthDate=document.createElement('label');
    labelBirthDate.className='alert alert-warning mt-2 border border-info';
    labelBirthDate.appendChild(document.createTextNode('nací el ' + birthDate));

    const labelBirthYear=document.createElement('label');
    labelBirthYear.className='alert alert-warning mt-2 border border-info';
    labelBirthYear.appendChild(document.createTextNode(messageAnyoBisiesto));
    

    div.appendChild(labelFullName);
    div.appendChild(labelBirthDate);
    div.appendChild(labelBirthYear);
    fase4.appendChild(div);
}


 //EVENTOS DEL DOM
 var birthYear = formatBirthDate(getBirthDate());
 var messageAnyoBisiesto = utils.dameTextoAnyoBisiesto(birthYear);
 window.addEventListener("load",UIShowPersonalInfo(getFullName(),getBirthDate(),messageAnyoBisiesto));