var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.in')
});

var data_length = 0;
var data_input = [];
var a;
var b;
var k;

lineReader.on('line', function (line) {
    data_input.push(line);
});

lineReader.on('close', function(){
    data_length = data_input.shift();
    
    for( var i = 0; i < data_length; i++) {
        
        //data_a.push(data_input[3 * i]);
        //data_b.push(data_input[3 * i + 1]);
        //data_k.push(data_input[3 * i + 2]);

        var a = data_input[3 * i];
        var b = data_input[3 * i+1];
        var k = data_input[3 * i+2];

        var output = parseInt(b/k)-parseInt((a-1)/k);
        console.log("Case " + (i+1) + ": " + output);
    }
});

