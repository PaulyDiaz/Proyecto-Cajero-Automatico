console.log('hola home');

let cuentas = [
    { id : 1, usuario: "Paulina", saldo: 500, password: '11111111', cuenta: 18262208 },
    { id : 2,usuario: "Damian", saldo: 290, password: '22222222', cuenta: 22170818 },
    { id : 3,usuario: "Byron", saldo: 267, password: '33333333', cuenta: 08222326}
    ];

    // document.write("<h2> Hola " + cuentas[0].usuario + " buen día, escribe tu mensaje :</h2>")

    let cuentaUser = cuentas.usuario;
  
    console.log(cuentaUser)

    // if (cuentaUser === cuentas[0].usuario  || cuentaUser === cuentas[1].usuario || cuentaUser === cuentas[2].usuario) {
    //     document.write("<h2> Hola " + cuentaUser + " buen día, escribe tu mensaje :</h2>")
        
    // }else{
    //     console.log("error en nombrar usuario")
    //  } 


    function btnSaldo(){
        let consultaSaldo = document.getElementById("saldo").value;
    
        console.log("consulta saldo", consultaSaldo)
    }

    function btnIngresar(){
        let ingrearMonto = document.getElementById("ingresar").value;
    
        console.log("Ingresar Monto", ingrearMonto)
    }

    function btnRetirar(){
        let retirarMonto = document.getElementById("retirar").value;
    
        console.log("Retirar Monto", retirarMonto)
    }