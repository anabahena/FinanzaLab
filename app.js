const buttonRegistro = document.getElementById('btnRegistro');
const sectionWelcome = document.getElementById ('sectionWelcome');
const secondSection = document.getElementById ('secondSection');
const modalSesion = document.getElementById('modalSesion');
const sectionPerfil = document.getElementById ('sectionPerfil');
const sectionRegistrer = document.getElementById ('sectionRegistrer');
const buttonModal = document.getElementById('ingresarModal');
const container = document.getElementById('container');
const btnCancelar = document.getElementById('btnCancelar');
const buttonAceptar = document.getElementById ('btnAceptar');
const buttonIngresos = document.getElementById('buttonIngresos');
const buttonGastos = document.getElementById('buttonGastos');
const income = document.getElementById ('income');
const expenses = document.getElementById ('expenses')

const getSectionRegistro = ()=> {
    sectionWelcome.classList.add ("disappear");
    sectionRegistrer.classList.remove("appear");
    };

const showModal =() => {
    document.getElementById('openModal').style.display = 'block';
  }
  
const CloseModal =() => {
    document.getElementById('openModal').style.display = 'none';

  }

  const getSectionPerfil = () =>{
    sectionRegistrer.classList.add("appear");
    container.classList.add('disappear')
    sectionPerfil.classList.remove("perfil");
  }

  const getSectionPerfil2 = () =>{
    container.classList.add('disappear');
    sectionPerfil.classList.remove("perfil");
  }

  const getSectionIngresos = () =>{
    sectionPerfil.classList.add('perfil');
    income.classList.remove('sub-section');
  }

  const getSectionGastos = () =>{
    sectionPerfil.classList.add('perfil');
    expenses.classList.remove('sub-section');
  }



// Menú hamburguesa
  const myFunction = () => {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  

buttonGastos.addEventListener ('click', getSectionGastos)
buttonIngresos.addEventListener('click', getSectionIngresos)
buttonModal.addEventListener('click', getSectionPerfil2);
buttonAceptar.addEventListener('click', getSectionPerfil);
modalSesion.addEventListener ('click', showModal);
buttonRegistro.addEventListener("click" ,getSectionRegistro);
buttonModal.addEventListener('click', CloseModal)


const destinatario= document.getElementById("destinatario").value;
const monto=document.getElementById("monto").value;
const modalConfirm=document.getElementById("modal-yes");
let destinity = document.getElementById("destinity");
let montoConfirm = document.getElementById("monto-a");
const btnAcept=document.getElementById('btn-yes');
const btnConfirm=document.getElementById('btn-modal');

const showDate = () =>{
   modalConfirm.style.display="flex";
   modalConfirm.style.visibility="visible";
   modalConfirm.style.left="10px";
   modalConfirm.style.top="130px";
   destinity.innerHTML=destinatario;
   montoConfirm.innerHTML= "$" + " " + monto +".00";
   destinity.style.fontWeight="bold";
   montoConfirm.style.fontWeight="bold";
}
const occult = () =>{
   modalConfirm.style.display="none";
   modalConfirm.style.display="collapse";
}
btnAcept.addEventListener("click", showDate);
btnConfirm.addEventListener("click", occult);



// Funciones para LocalStorage
let aName = [];
let aAge =[];
let aMail =[];
let aPassword =[];



let saveUser =() =>{
    name = document.getElementById('nombre').value,
    age = document.getElementById('age').value,
    mail = document.getElementById('mail').value,
    password = document.getElementById('password').value;

    aName.push(name);
    aAge.push(age);
    aMail.push(mail);
    aPassword.push(password);

    localStorage.setItem("Nombre", JSON.stringify(aName));
    localStorage.setItem("Edad", JSON.stringify(aAge));
    localStorage.setItem("Correo", JSON.stringify(aMail));
    localStorage.setItem("Contraseña", JSON.stringify(aPassword));
}





buttonAceptar.addEventListener('click', saveUser);



    const showData = () =>{
    nombre.value = localStorage.getItem("Nombre");
    age.value = localStorage.getItem("Edad");
    mail.value = localStorage.getItem("Correo");
    password.value = localStorage.getItem("Contraseña");
    }


btnCancelar.addEventListener ('click',  showData);








// const createArray = () =>{

//     let prueba = document.getElementById ('prueba');
//     // prueba.innerHTML="";
//     let aName = JSON.parse(localStorage.getItem('Nombre'));
//     let aAge = JSON.parse(localStorage.getItem('Edad'));
//     let aMail = JSON.parse(localStorage.getItem('Correo'));
//      let aPassword = JSON.parse(localStorage.getItem('Contraseña'));


//     for (let i=0; 1<saveUser.length; i++){

//     fila =document.createElement('tr')

//     celdaName = document.createElement ('td');
//     celdaEdad = document.createElement ('td');
//     celdaCorreo = document.createElement ('td')
//     celdaContraseña = document.createElement ('td')

//     nodeName =document.createTextNode(aName[i]);
//     nodeAge =document.createTextNode(aAge[i]);
//     nodeMail =document.createTextNode(aMail[i]);
//     nodePassword = document.createTextNode (aPassword[i]);

//     fila.appendChild(celdaName.appendChild(nodeName));
//     fila.appendChild(celdaEdad.appendChild(nodeAge));
//     fila.appendChild(celdaCorreo.appendChild(nodeMail));
//     fila.appendChild(celdaContraseña.appendChild(nodePassword));

//     prueba.appendChild(fila); 

//     saveUser()
// }
// }