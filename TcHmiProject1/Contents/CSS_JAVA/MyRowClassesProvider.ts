module TcHmi {
	export module Functions {
		export module LeakTestersHMI {
			export function MyRowClassesProvider(
			rowValue: {
        sHeightHMI: string; 
        sLeakHMI  : string;
        sPieceHMI : string;
		sTime	  : string;
		sDate	  : string;
    },
    dataIndex: number,
    rowNumber: number
){
   const classes: string[] = [];


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
		}
	}
}
TcHmi.Functions.registerFunctionEx('MyRowClassesProvider', 'TcHmi.Functions.LeakTestersHMI', TcHmi.Functions.LeakTestersHMI.MyRowClassesProvider);
