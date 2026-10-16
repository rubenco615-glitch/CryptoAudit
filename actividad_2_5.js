// Lote de transacciones que llega de la API (mezcla tipos de datos de forma incorrecta)
let transacciones = ["100.50", "200.00", "ERROR_RECHAZADO", "50.25", "9999.99", "10.00"];
let saldoTotal = 0;

console.log("Iniciando auditoría de transacciones...");

for (let i = 0; i < transacciones.length; i++) {
    let transaccion = transacciones[i];

    // Bug 1: Saltar valores corruptos
    if (transaccion === "ERROR_RECHAZADO") {
        console.log("Transacción corrupta saltada.");
        continue;
    }
    //Se convierte a numero para que funcione el bucle
    let cantidad = parseFloat(transaccion);

    // Bug 2: Detener operaciones sospechosas
    if (cantidad > 5000) {
        console.log("¡Alerta de Fraude detectada! Cancelando proceso.");
        break;
    }

    // Bug 3: Coerción de tipos oculta
    saldoTotal += cantidad;
}

console.log("Saldo total auditado: " + saldoTotal);
