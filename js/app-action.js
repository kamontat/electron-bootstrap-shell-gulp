import $ from 'jquery';

$(document).ready(function() {
    function addOutput(msg) {
        $('#output').val($('#output').val() + msg + "\n").change();
    };

    function setStatus(msg) {
        $('#status').html(msg).change();
    };

    const process = require('child_process'); // The power of Node.JS

    // var ls = process.spawn('ls', ['-l']);
    var ls = process.spawn('./scripts/test.sh');

    ls.stdout.on('data', function(data) {
        addOutput('stdout: <' + data + '>');
    });

    ls.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
    });

    ls.on('close', function(code) {
        // console.log('child process exited with code ' + code);
        if (code == 0)
            setStatus('child process complete.');
        else
            setStatus('child process exited with code ' + code);
    });
});