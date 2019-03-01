/**
 * Run-only from a Node.JS environment!
 */

const path = require('path');
const fs = require('fs');

var data = {};
data.input_directory = path.resolve(__dirname, '../js/src');
data.output_directory = path.resolve(__dirname, '../js/dist');
data.output_name = 'daidalos.js';

(function() {
    console.log('Combining js files...');

    var test = fs.readdirSync(data.input_directory);
    
    var tot_length = test.length;
    var progress = 0;

    var output = "";

    test.forEach(element => {
        
        var file = fs.readFileSync(data.input_directory + '/' + element, 'utf8');
        output += file;
        output += '\n';
        progress++;
        console.log(`File ${progress}/${tot_length} added`);

    });

    fs.writeFileSync(data.output_directory + '/' + data.output_name, output);
    console.log('Finished! File ' + data.output_name + ' created.');

})();

