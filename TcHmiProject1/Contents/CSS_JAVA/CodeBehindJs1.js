// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.762.54/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    // If you want to unregister an event outside the event code you need to use the return value of the method register()
    let destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', (e, data) => {
        // This event will be raised only once, so we can free resources. 
        // It's best practice to use destroy function of the event object within the callback function to avoid conflicts.
        e.destroy();
        // ----------------------
        TcHmi.Functions.Report.GeneratePdf = function () {
            const { jsPDF } = window.jspdf;

            // Crear un documento nuevo
            const pdf = new jsPDF();

            // Texto simple
            pdf.text("Reporte diario generado desde TwinCAT HMI", 10, 10);

            // Ejemplo: leer una variable del PLC
            TcHmi.Symbol.readEx2("PLC1.Main.Temperatura", (data) => {
                if (data.error === TcHmi.Errors.NONE) {
                    const valor = data.value;

                    pdf.text("Temperatura: " + valor + " °C", 10, 20);

                    // Guardar el archivo
                    pdf.save("reporte_diario.pdf");
                } else {
                    pdf.text("Error leyendo variable del PLC", 10, 20);
                    pdf.save("reporte_error.pdf");
                }
            });
        };
        // ----------------------
    });
})(TcHmi);
