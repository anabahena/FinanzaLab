const buttonRegistro = document.getElementById('btnRegistro');
const sectionWelcome = document.getElementById ('sectionWelcome');
const secondSection = document.getElementById ('secondSection');
const modalSesion = document.getElementById('modalSesion');
const buttonAceptar = document.getElementById ('btnAceptar');
const sectionPerfil = document.getElementById ('sectionPerfil');
const sectionRegistrer = document.getElementById ('sectionRegistrer');
const modalSesion = document.getElementById('openModal');
const buttonModal = document.getElementById('ingresarModal');

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
    sectionPerfil.classList.remove("perfil");
  }

  const getSectionPerfil2 = () => {
    

  }




buttonAceptar.addEventListener('click', getSectionPerfil)
modalSesion.addEventListener ('click', showModal);
modalSesion.addEventListener ('click', CloseModal);
buttonRegistro.addEventListener("click" ,getSectionRegistro);



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

