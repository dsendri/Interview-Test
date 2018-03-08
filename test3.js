var data_input = [];
var data_length = 0;

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input3.in')
});

lineReader.on('line', function (line) {
    data_input.push(line);
    //console.log(line);
});

lineReader.on('close', function () {
    data_length = data_input.shift();
    //console.log ("length: " + data_length);

    var skip = 0;
    for (var i = 0; i < data_length; i++) {

        var area = [];
        var n = parseInt(data_input[skip]);
        var m = parseInt(data_input[skip + 1]);
        var result = [];

        for (var k = 0; k < n; k++) {
            area[k] = [];
            for (var j = 0; j < m; j++) {
                //console.log("save: " + data_input[skip + 2 + k].charAt(j));
                area[k][j] = data_input[skip + 2 + k].charAt(j);
                //console.log(area[k][j])
            }
        }

        console.log("Case " + (i+1) + ":");
        for ( var row = 0; row < n; row ++ ) {
            for ( var col = 0; col < m; col++) {
                
                var armyArr = checkArea(area, row, col);
                if (armyArr.length !== 0) {
                    
                    console.log(outputTest(armyArr));
                    result.push(outputTest(armyArr));

                }
            }
        }

        console.log(result.sort())
        printOutput(result.sort());

        
       
        skip = skip + n + 2;
        //console.log("skip: " + skip);
    }

});

function outputTest(armyArr) {
    
    var arrUnique = [];

    if (armyArr.length != 0){

        arrUnique.push(armyArr[0]);

        for (var i = 1; i < armyArr.length; i++) {
            for (var j = 0; j < arrUnique.length; j++) {
                if (armyArr[i] == arrUnique[j]) {
                } else {
                    arrUnique.push(armyArr[i])
                }
            }
        }

    }

    if (arrUnique.length > 1) return "{"
    else if (arrUnique.length == 1) return arrUnique[0];

}


function printOutput(result) {

    var resUnique = [];

    console.log(resUnique);

    // if (result.length != 0) {

    //     resUnique.push({
    //         army: result[0],
    //         count: 1
    //     });

    //     for (var i = 1; i < result.length; i++) {
    //         for (var j = 0; j < resUnique.length; j++) {
    //             if (result[i] == resUnique[j].army) {
    //                 resUnique[j].count++;
    //             } else {
    //                 resUnique.push ({
    //                     army: result[i],
    //                     count: 1
    //                 });
    //             }
    //         }
    //     }

    //     //console.log(resUnique);
    // }
}

function checkArea(data, x, y) {
    // get target value
    var target = ".";
    var border = "#";
    var newValue = "A";

    var army = [];

    function flow(x, y) {
        // bounds check what we were passed
        if (x >= 0 && x < data.length && y >= 0 && y < data[x].length) {
            if (data[x][y] !== border && data[x][y] !== newValue) {

                if (data[x][y] !== target) {
                    army.push(data[x][y]);
                    //console.log(data[x][y]);
                }

                data[x][y] = newValue;
                flow(x - 1, y);    // check up
                flow(x + 1, y);    // check down
                flow(x, y - 1);    // check left
                flow(x, y + 1);    // check right
            }
        }
    }

    flow(x, y);
    return army;
}

