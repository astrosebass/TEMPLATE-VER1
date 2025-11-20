var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let LeakTestersHMI;
        (function (LeakTestersHMI) {
            function MyRowClassesProvider(rowValue, dataIndex, rowNumber) {
                const classes = [];
                if (rowValue.sHeightHMI == "Fail") {
                    classes.push('HeightFail');
                }
                if (rowValue.sHeightHMI == "Pass") {
                    classes.push('HeightPass');
                }
                if (rowValue.sLeakHMI == "Fail") {
                    classes.push('LeakFail');
                }
                if (rowValue.sLeakHMI == "Pass") {
                    classes.push('LeakPass');
                }
                if (rowValue.sPieceHMI == "Fail") {
                    classes.push('PieceFail');
                }
                if (rowValue.sPieceHMI == "Pass") {
                    classes.push('PiecePass');
                }
                return classes;
            }
            LeakTestersHMI.MyRowClassesProvider = MyRowClassesProvider;
        })(LeakTestersHMI = Functions.LeakTestersHMI || (Functions.LeakTestersHMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('MyRowClassesProvider', 'TcHmi.Functions.LeakTestersHMI', TcHmi.Functions.LeakTestersHMI.MyRowClassesProvider);
//# sourceMappingURL=MyRowClassesProvider.js.map