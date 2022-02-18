// Trip Planner
// functions for stop search
// Need to put this one on hold because it's returning 500
//function loadCUMTDStops() {
    
//}
function loadCUMTDRoutes() {
    var request = new XMLHttpRequest();
    var routesArray = new Array();
    var url = "https://developer.cumtd.com/api/v2.2/json/getroutes?key=3dc733f835924ef58aba4003302c18c5";

    request.open("GET", url, true);

    request.onload = function() {
    var data = JSON.parse(this.response);
    console.log('route data', data.routes);
    routesArray = data.routes;
    }
    request.send();
    return routesArray;
}
//function planCUTMDTrip() {
    //var request = new XMLHttpRequest();
    
    var routes = new Array(loadCUMTDRoutes());
    console.log('routes', routes);
    //var stops[] = loadCUMTDStops;
    //var url = "https://developer.cumtd.com/api/v2.2/json/getroutes?key=3dc733f835924ef58aba4003302c18c5";

    //request.open("GET", url, true);

    //request.onload = function() {
    //var data = JSON.parse(this.response);
    //console.log('data', data);}
    //request.send();
    //return data;
//}