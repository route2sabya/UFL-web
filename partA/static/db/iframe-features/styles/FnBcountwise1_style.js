var size = 0;
var ranges_FnBcountwise1 = [[13.000000, 28.400000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,178,1.0)'})
    })]],
[28.400000, 43.800000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(254,204,92,1.0)'})
    })]],
[43.800000, 59.200000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(253,141,60,1.0)'})
    })]],
[59.200000, 74.600000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(240,59,32,1.0)'})
    })]],
[74.600000, 90.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(189,0,38,1.0)'})
    })]]];
var styleCache_FnBcountwise1={}
var style_FnBcountwise1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("FnB-count");
    var style = ranges_FnBcountwise1[0][2];
    for (i = 0; i < ranges_FnBcountwise1.length; i++){
        var range = ranges_FnBcountwise1[i];
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

    if (!styleCache_FnBcountwise1[key]){
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
        styleCache_FnBcountwise1[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_FnBcountwise1[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};