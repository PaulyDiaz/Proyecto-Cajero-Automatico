console.log('hola');

const cuentas = [
    { id : 1, usuario: "Paulina", saldo: 500, password: '11111111', cuenta: 18262208 },
    { id : 2,usuario: "Damian", saldo: 290, password: '22222222', cuenta: 22170818 },
    { id : 3,usuario: "Byron", saldo: 267, password: '33333333', cuenta: 08222326}
    ];

   

function validar(){
    let cuentaUser = document.getElementById("user").value;
    let cuentaPass = document.getElementById("pass").value;

     if (cuentaUser === cuentas[0].usuario && cuentaPass === cuentas[0].password || cuentaUser === cuentas[1].usuario && cuentaPass === cuentas[1].password || cuentaUser === cuentas[2].usuario && cuentaPass === cuentas[2].password  ) {
        
        location.href = "home.html"
     }else{
        alert("verifique sus datos") 
    }
    }
   
    
    