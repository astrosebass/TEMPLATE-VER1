// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.762.46/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function RowClassesProvider(RowData, RowIndex, RowNumber) {
                var cssStyles = []; // Collected CSS styles which will be returned at the end

                    
                if (RowData.sType == "Immediate Fault" || RowData.sType == "Cycle Stop Fault") {
                    // If the first column (Test1) is empty
                    cssStyles.push("Alarm"); // add the missing-input style to the array
                }
                if (RowData.sType == "Cycle Stop Request") {
                    // If the first column (Test1) is empty
                    cssStyles.push("Alert"); // add the missing-input style to the array
                }
                if (RowData.sType == "Message") {
                    // If the first column (Test1) is empty
                    cssStyles.push("Message"); // add the missing-input style to the array
                }

            

                return cssStyles;
            }
            TcHmiProject1.RowClassesProvider = RowClassesProvider;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('RowClassesProvider', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.RowClassesProvider);
