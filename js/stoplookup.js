// functions for stop search
// Need to put this one on hold because it's returning 500
function getCUMTDStop(searchTerm) {
    var request = new XMLHttpRequest();
    
    var search = searchTerm;
    var url = "https://developer.cumtd.com/api/v2.2/json/getstopsbysearch?key=3dc733f835924ef58aba4003302c18c5&query=" + search;

    request.open("GET", url, true);

    request.onload = function() {
    var data = JSON.parse(this.response);
    console.log('data', data);
    request.send();
    }
}