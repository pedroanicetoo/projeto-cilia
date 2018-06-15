// funções jQuery para barra lateral eestilização da vizualização
$(document).ready(function () {
  $("#sidebar").click(function () {
    document.getElementById("mySidenav").style.width = "250px";
    //escurecer o fundo quando o foco é o sidebar
    $('#conteudo').css({
      "opacity": ".45",
      "transition": "opacity .8s ease-in-out"
    });
  });

  $("#conteudo").click(function () {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("conteudo").style.opacity = "1";
  });

  //charts
  (function () {
    var files = ["https://code.highcharts.com/stock/highstock.js", "https://code.highcharts.com/highcharts-more.js", "https://code.highcharts.com/highcharts-3d.js", "https://code.highcharts.com/modules/data.js", "https://code.highcharts.com/modules/exporting.js", "https://code.highcharts.com/modules/funnel.js", "https://code.highcharts.com/modules/annotations.js", "https://code.highcharts.com/modules/solid-gauge.js"], loaded = 0; if (typeof window["HighchartsEditor"] === "undefined") { window.HighchartsEditor = { ondone: [cl], hasWrapped: false, hasLoaded: false }; include(files[0]); } else { if (window.HighchartsEditor.hasLoaded) { cl(); } else { window.HighchartsEditor.ondone.push(cl); } } function isScriptAlreadyIncluded(src) { var scripts = document.getElementsByTagName("script"); for (var i = 0; i < scripts.length; i++) { if (scripts[i].hasAttribute("src")) { if ((scripts[i].getAttribute("src") || "").indexOf(src) >= 0 || (scripts[i].getAttribute("src") === "http://code.highcharts.com/highcharts.js" && src === "https://code.highcharts.com/stock/highstock.js")) { return true; } } } return false; } function check() { if (loaded === files.length) { for (var i = 0; i < window.HighchartsEditor.ondone.length; i++) { try { window.HighchartsEditor.ondone[i](); } catch (e) { console.error(e); } } window.HighchartsEditor.hasLoaded = true; } } function include(script) { function next() { ++loaded; if (loaded < files.length) { include(files[loaded]); } check(); } if (isScriptAlreadyIncluded(script)) { return next(); } var sc = document.createElement("script"); sc.src = script; sc.type = "text/javascript"; sc.onload = function () { next(); }; document.head.appendChild(sc); } function each(a, fn) { if (typeof a.forEach !== "undefined") { a.forEach(fn); } else { for (var i = 0; i < a.length; i++) { if (fn) { fn(a[i]); } } } } var inc = {}, incl = []; each(document.querySelectorAll("script"), function (t) { inc[t.src.substr(0, t.src.indexOf("?"))] = 1; }); function cl() {
      if (typeof window["Highcharts"] !== "undefined") {
        var options = { "chart": { "type": "area", "polar": false, "width": null }, "title": { "text": "" }, "subtitle": { "text": "" }, "legend": { "layout": "vertical", "align": "right", "verticalAlign": "middle", "enabled": false }, "plotOptions": { "series": { "label": { "connectorAllowed": false }, "pointStart": 2010 } }, "series": [{ "name": "Manufacturing", "turboThreshold": 0, "fillColor": "#ffebee" }], "responsive": { "rules": [{ "condition": { "maxWidth": 500 }, "chartOptions": { "legend": { "layout": "horizontal", "align": "center", "verticalAlign": "bottom" } }, "_id": "highcharts-yyqhhvw-4" }] }, "data": { "csv": "\"Category\";\"Manufacturing\"\n\"BMW\";4\n\"Chevrolet\";7\n\"Citroen\";20\n\"Fiat\";28\n\"Ford\";8\n\"Honda\";19\n\"Hyundai\";14\n\"Iveco\";15\n\"Jeep\";13\n\"Renaut\";9", "googleSpreadsheetKey": false, "googleSpreadsheetWorksheet": false }, "yAxis": [{ "title": { "text": "" }, "labels": {} }], "colors": ["#ef5350"], "pane": { "background": [] }, "xAxis": [{ "title": {}, "labels": {}, "type": "category" }] };/*
*/new Highcharts.Chart("highcharts-5dcd4c53-2084-4633-bfa6-442ff2537f56", options);
      }
    }
  })();

});


/* quando a pessoa clica, 
aparece um togle entre a div content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// fecha o dropdown se o usuário clicar novamente
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//GoogleMaps API
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}