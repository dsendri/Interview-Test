var data_input = [];
var data_length = 0;

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input2.in')
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

        var puzzle = [];
        var n = parseInt(data_input[skip]);
        var m = parseInt(data_input[skip + 1]);
        var word = data_input [skip + n + 2];
        var wordArray = [];
        for (var x = 0; x < word.length; x++) {
            wordArray.push(word.charAt(x));
        }
        
        
        
        for (var k = 0; k < n; k++) {
            puzzle[k] = [];
            for (var j = 0; j < m; j++){
                //console.log("save: " + data_input[skip + 2 + k].charAt(j));
                puzzle[k][j] = data_input [ skip + 2 + k].charAt(j);
                //console.log(puzzle[k][j])
            }
        }
        //console.log(wordArray);
        var count = 0;

        for (var a = 0; a < n; a++) {
            for (var b = 0; b < m; b ++) {
                if (puzzle[a][b] == wordArray[0]) {
                    var directions = [[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]];

                    for ( var direct = 0; direct < directions.length; direct++) {

                        var check = 1;
                        //console.log("direct x: " + a + directions[direct][0]);
                        //console.log("direct y: " + b + directions[direct][1]);

                        for ( var move = 1; move < wordArray.length; move++) {

                             if ((a + directions[direct][0] * move) >= 0 && (b + directions[direct][1] * move) >= 0 && (a + directions[direct][0] * move) < n && (b + directions[direct][1] * move) < m) {
                                 
                                var cursorCol = b + directions[direct][1] * move;
                                var cursorRow = (a + directions[direct][0] * move);
                                //console.log("array loc: " + puzzle[cursorRow][cursorCol]);
                                //console.log("word loc: " + wordArray[move]);
                                
                                if (puzzle[a + directions[direct][0] * move][b + directions[direct][1] * move] == wordArray[move]) {
                                    check++;
                                }
                             }
                        }

                        if (check == wordArray.length) count++;
                    }
                }
            }
        }
        skip = skip + n + 3;
        console.log("Case "+ (i+1)+" : " + count);
        //console.log("skip: " + skip);
    }

});

