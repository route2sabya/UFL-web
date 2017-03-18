var size = 0;

var styleCache_UnitechCyberHub1={}
var style_UnitechCyberHub1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    
        function rules_UnitechCyberHub1(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (UnitechCyberHub1rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(253,255,235,0.5)'})
    })];
                    }
                    else if (UnitechCyberHub1rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,251,185,0.5)'})
    })];
                    }
                    else if (UnitechCyberHub1rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,217,140,0.5)'})
    })];
                    }
                    else if (UnitechCyberHub1rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,131,23,0.5)'})
    })];
                    }
                    else if (UnitechCyberHub1rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,0.5)'})
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_UnitechCyberHub1(feature, value);
        ;
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_UnitechCyberHub1[key]){
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
        styleCache_UnitechCyberHub1[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_UnitechCyberHub1[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};