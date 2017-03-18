var size = 0;

var styleCache_BaaniSquare23={}
var style_BaaniSquare23 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    
        function rules_BaaniSquare23(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (BaaniSquare23rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,236,0.5)'})
    })];
                    }
                    else if (BaaniSquare23rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(254,255,178,0.5)'})
    })];
                    }
                    else if (BaaniSquare23rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,221,98,0.5)'})
    })];
                    }
                    else if (BaaniSquare23rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,132,24,0.5)'})
    })];
                    }
                    else if (BaaniSquare23rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,0.5)'})
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_BaaniSquare23(feature, value);
        ;
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_BaaniSquare23[key]){
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
        styleCache_BaaniSquare23[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_BaaniSquare23[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};