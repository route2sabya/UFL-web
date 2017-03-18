var size = 0;

var styleCache_HongKongBazaar13={}
var style_HongKongBazaar13 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    
        function rules_HongKongBazaar13(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (HongKongBazaar13rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(253,255,235,0.5)'})
    })];
                    }
                    else if (HongKongBazaar13rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,251,185,0.5)'})
    })];
                    }
                    else if (HongKongBazaar13rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,217,140,0.5)'})
    })];
                    }
                    else if (HongKongBazaar13rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,131,23,0.5)'})
    })];
                    }
                    else if (HongKongBazaar13rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,0.5)'})
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_HongKongBazaar13(feature, value);
        ;
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_HongKongBazaar13[key]){
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
        styleCache_HongKongBazaar13[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_HongKongBazaar13[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};