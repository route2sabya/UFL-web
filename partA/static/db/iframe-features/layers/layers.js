var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
}),
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
}),
new ol.layer.Tile({
    'title': 'OSM HOT',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'})]
    })
})
]
});
var format_Footfallwise0 = new ol.format.GeoJSON();
var features_Footfallwise0 = format_Footfallwise0.readFeatures(geojson_Footfallwise0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Footfallwise0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Footfallwise0.addFeatures(features_Footfallwise0);var lyr_Footfallwise0 = new ol.layer.Vector({
                source:jsonSource_Footfallwise0, 
                style: style_Footfallwise0,
                title: "Footfall-wise"
            });var format_FnBcountwise1 = new ol.format.GeoJSON();
var features_FnBcountwise1 = format_FnBcountwise1.readFeatures(geojson_FnBcountwise1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FnBcountwise1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FnBcountwise1.addFeatures(features_FnBcountwise1);var lyr_FnBcountwise1 = new ol.layer.Vector({
                source:jsonSource_FnBcountwise1, 
                style: style_FnBcountwise1,
                title: "FnB-count-wise"
            });var format_ratingwise2 = new ol.format.GeoJSON();
var features_ratingwise2 = format_ratingwise2.readFeatures(geojson_ratingwise2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ratingwise2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ratingwise2.addFeatures(features_ratingwise2);var lyr_ratingwise2 = new ol.layer.Vector({
                source:jsonSource_ratingwise2, 
                style: style_ratingwise2,
                title: "rating-wise"
            });var format_costwise3 = new ol.format.GeoJSON();
var features_costwise3 = format_costwise3.readFeatures(geojson_costwise3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_costwise3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_costwise3.addFeatures(features_costwise3);var lyr_costwise3 = new ol.layer.Vector({
                source:jsonSource_costwise3, 
                style: style_costwise3,
                title: "cost-wise"
            });

lyr_Footfallwise0.setVisible(true);lyr_FnBcountwise1.setVisible(true);lyr_ratingwise2.setVisible(true);lyr_costwise3.setVisible(true);
var layersList = [baseLayer,lyr_Footfallwise0,lyr_FnBcountwise1,lyr_ratingwise2,lyr_costwise3];
lyr_Footfallwise0.set('fieldAliases', {'Name': 'Name', 'Rating': 'Rating', 'Cost': 'Cost', 'Area_Mall': 'Area_Mall', 'Footfall': 'Footfall', 'FnB-count': 'FnB-count', });
lyr_FnBcountwise1.set('fieldAliases', {'Name': 'Name', 'Rating': 'Rating', 'Cost': 'Cost', 'Area_Mall': 'Area_Mall', 'Footfall': 'Footfall', 'FnB-count': 'FnB-count', });
lyr_ratingwise2.set('fieldAliases', {'Name': 'Name', 'Rating': 'Rating', 'Cost': 'Cost', 'Area_Mall': 'Area_Mall', 'Footfall': 'Footfall', 'FnB-count': 'FnB-count', });
lyr_costwise3.set('fieldAliases', {'Name': 'Name', 'Rating': 'Rating', 'Cost': 'Cost', 'Area_Mall': 'Area_Mall', 'Footfall': 'Footfall', 'FnB-count': 'FnB-count', });
lyr_Footfallwise0.set('fieldImages', {'Name': 'TextEdit', 'Rating': 'TextEdit', 'Cost': 'TextEdit', 'Area_Mall': 'TextEdit', 'Footfall': 'TextEdit', 'FnB-count': 'TextEdit', });
lyr_FnBcountwise1.set('fieldImages', {'Name': 'TextEdit', 'Rating': 'TextEdit', 'Cost': 'TextEdit', 'Area_Mall': 'TextEdit', 'Footfall': 'TextEdit', 'FnB-count': 'TextEdit', });
lyr_ratingwise2.set('fieldImages', {'Name': 'TextEdit', 'Rating': 'TextEdit', 'Cost': 'TextEdit', 'Area_Mall': 'TextEdit', 'Footfall': 'TextEdit', 'FnB-count': 'TextEdit', });
lyr_costwise3.set('fieldImages', {'Name': 'TextEdit', 'Rating': 'TextEdit', 'Cost': 'TextEdit', 'Area_Mall': 'TextEdit', 'Footfall': 'TextEdit', 'FnB-count': 'TextEdit', });
lyr_Footfallwise0.set('fieldLabels', {'Name': 'inline label', 'Rating': 'inline label', 'Cost': 'inline label', 'Area_Mall': 'inline label', 'Footfall': 'inline label', 'FnB-count': 'inline label', });
lyr_FnBcountwise1.set('fieldLabels', {'Name': 'inline label', 'Rating': 'inline label', 'Cost': 'inline label', 'Area_Mall': 'inline label', 'Footfall': 'inline label', 'FnB-count': 'inline label', });
lyr_ratingwise2.set('fieldLabels', {'Name': 'inline label', 'Rating': 'inline label', 'Cost': 'inline label', 'Area_Mall': 'inline label', 'Footfall': 'inline label', 'FnB-count': 'inline label', });
lyr_costwise3.set('fieldLabels', {'Name': 'inline label', 'Rating': 'inline label', 'Cost': 'inline label', 'Area_Mall': 'inline label', 'Footfall': 'inline label', 'FnB-count': 'inline label', });
lyr_costwise3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});