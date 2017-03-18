var size = 0;
var ranges_costwise3 = [[0.000000, 286.470000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(254,240,217,1.0)'})
    })]],
[286.470000, 572.940000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(253,204,138,1.0)'})
    })]],
[572.940000, 859.410000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,141,89,1.0)'})
    })]],
[859.410000, 1145.880000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,74,51,1.0)'})
    })]],
[1145.880000, 1432.350000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(179,0,0,1.0)'})
    })]]];
var styleCache_costwise3={}
var style_costwise3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Cost");
    var style = ranges_costwise3[0][2];
    for (i = 0; i < ranges_costwise3.length; i++){
        var range = ranges_costwise3[i];
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

    if (!styleCache_costwise3[key]){
        var text = new ol.style.Text({
              font: '18.2px \'Helvetica Neue\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(31, 120, 180, 255)'
              }),
            });
        styleCache_costwise3[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_costwise3[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};