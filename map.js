var map = "";

function initialize() {
    
    var myLatlng = new google.maps.LatLng(39.2244, -78.2532);

    var myOptions = {
      zoom: 11,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    gebImageryLayer = new google.maps.visualization.MapDataLayer({
        mapId: '04996796288385000359-08363259842776504974-4',
        layerId:'layer_00005',
        suppressInfoWindows: false,
        oAuthToken: 'DoNotNeedOne'
    });
}

function toggleImage() {
    var CheckLayer = document.myform["Image"];
    if (CheckLayer.checked == true) {
        gebImageryLayer.setMap(map);
    } else {
        gebImageryLayer.setMap(null);
    }
}
