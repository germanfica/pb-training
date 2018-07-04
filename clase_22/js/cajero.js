class Cajero {
  constructor() {
    this.billetes = [
      [50, 3],
      [20, 2],
      [10, 2]
    ];
  }

  /**
    * Dar al cliente el dinero solicitado
    */
  darBilletes(billetes) {
    for (var i = 0; i <= billetes.length-1; i++) {
      this.billetes[i][1] = (this.billetes[i][1]) - (billetes[i]);
    }
  }

  hayBilletes() {

  }

  retirar(monto) {
    // Declaración de variables
    var i, billete, cantBilletes, cantBilletesReq, dineroRestante, todoOK;
    var billetes = [];

    // Inicialización de variables
    i=0;
    dineroRestante = monto;
    todoOK = false;

    while (i<=this.billetes.length-1 && !todoOK) {
      billete = this.billetes[i][0]; // Billete del cajero
      cantBilletes = this.billetes[i][1]; // Cantidad de billetes del cajero
      cantBilletesReq = (dineroRestante-(dineroRestante%billete))/billete; // Catidad de billetes requeridos

      // Si hay billetes en el cajero entonces
      if(cantBilletes>0) {
        billetes.push(cantBilletesReq); // Cantidad de billetes usados para concretar la operación
        dineroRestante = dineroRestante%billete; // Dinero restante para completar el monto que solicitó el cliente
        // Si todo salió bien entonces el usuario puede retirar dinero
        if (dineroRestante == 0) {
          todoOK = true;
          this.darBilletes(billetes);
        }
      }
      i++;
    }
    // Cuando da todo OK AHí TENGO QUE CAMBIAR LA CANTIDAD DE BILLETES.
    this.mostrarMsj(todoOK);
  }

  mostrarMsj(todoOK) {
    if(todoOK) {
      console.log("EXCELENTE :D tenga su dinero.");
    }else {
      console.log("No puedo darte la cantidad que me estas pidiendo.");
    }
  }
}
