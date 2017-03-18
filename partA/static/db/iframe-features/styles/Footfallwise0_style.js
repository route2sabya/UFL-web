var size = 0;
var ranges_Footfallwise0 = [[0.000000, 790.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,178,1.0)'})
    })]],
[790.000000, 1580.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(254,204,92,1.0)'})
    })]],
[1580.000000, 2370.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(253,141,60,1.0)'})
    })]],
[2370.000000, 3160.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(240,59,32,1.0)'})
    })]],
[3160.000000, 3950.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(189,0,38,1.0)'})
    })]]];
var styleCache_Footfallwise0={}
var style_Footfallwise0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Footfall");
    var style = ranges_Footfallwise0[0][2];
    for (i = 0; i < ranges_Footfallwise0.length; i++){
        var range = ranges_Footfallwise0[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if (feature.get("Name") !== null) {
        var labelText = String(feature.get("Name"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Footfallwise0[key]){
        var text = new ol.style.Text({
              font: '13.0px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(31, 120, 180, 255)'
              }),
            });
        styleCache_Footfallwise0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Footfallwise0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};