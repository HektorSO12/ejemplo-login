let emailValido="root@cbtis258.edu.mx";
let passsValido="admin123";

const chequelogin=(event)=>{
    event.preventDefault();

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const mensaje=document.getElementById("LoginMensaje").value;

    if(email === emailValido && password){
        mensaje.textContent="Inicio de Sesion Correcto";
        mensaje.style.color="green";

        setTimeout(() => {
            window.location.href="otrohtml.html";
            
        }, 1);
    }
    else{
        mensaje.textContent="Email o password incorrecta";
        mensaje.style.color="red";
    }
};
