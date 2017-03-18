var size = 0;

var styleCache_DLFStarMall18={}
var style_DLFStarMall18 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    
        function rules_DLFStarMall18(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (DLFStarMall18rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(253,255,214,0.5)'})
    })];
                    }
                    else if (DLFStarMall18rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,243,185,0.5)'})
    })];
                    }
                    else if (DLFStarMall18rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,195,131,0.5)'})
    })];
                    }
                    else if (DLFStarMall18rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,125,39,0.5)'})
    })];
                    }
                    else if (DLFStarMall18rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,0.5)'})
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_DLFStarMall18(feature, value);
        ;
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_DLFStarMall18[key]){
        var text = new ol.style.Text({
              font: '9.75px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_DLFStarMall18[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_DLFStarMall18[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};