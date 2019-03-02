/**
 * Run-only from a Node.JS environment!
 */

const path = require('path');
const fs = require('fs');

var data = {};
data.input_directory = path.resolve(__dirname, '../js/src');
data.output_directory = path.resolve(__dirname, '../js/dist');
data.output_name = 'daidalos.js';
data.main_file = 'main.js';

(function() {
    console.log('Combining js files...');

    var test = fs.readdirSync(data.input_directory);
    
    var tot_length = test.length;
    var progress = 0;

    var output = "";

    test.forEach(element => {
        
        if(element != data.main_file) { output += readFile(element, output, progress, tot_length) }
        progress++;
        console.log(`File ${progress}/${tot_length} added`);

    });

    output += readFile(data.main_file, output, progress, tot_length);
    progress++;
    console.log(`File ${progress}/${tot_length} added`);

    fs.writeFileSync(data.output_directory + '/' + data.output_name, output);
    console.log('Finished! File ' + data.output_name + ' created.');

})();

function readFile(name, output)
{
    var file = fs.readFileSync(data.input_directory + '/' + name, 'utf8');
    file += '\n';
    return file;
}

