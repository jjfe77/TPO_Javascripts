function total_a_pagar(){
    let tickets = parseInt(document.getElementById("form-cantidad").value);
    let entrada = parseInt(document.getElementById("tipoentrada").value); 
    let corresponde_pagar  =2*tickets*entrada;
    /*
    console.log(tickets);
    console.log(entrada*2);
    console.log(corresponde_pagar);
    */
    document.getElementById("costo_total").innerHTML= "Total a Pagar $: " + corresponde_pagar;
}

