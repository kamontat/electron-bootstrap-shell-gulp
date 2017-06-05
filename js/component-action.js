import $ from 'jquery';
const ipc = require('electron').ipcRenderer

$(document).ready(function() {
    $('#form').submit(function(event) {
        alert("submit form");
    });
    $("select").change(function() {
        var type = $("select option:selected").val();
        if (type.toLowerCase() === "download") {
            $('#download_form').show();
            $('#update_form').hide();
        } else if (type.toLowerCase() === "update") {
            $('#download_form').hide();
            $('#update_form').show();
        }
    }).trigger("change");

    $('textarea').autogrow();
});