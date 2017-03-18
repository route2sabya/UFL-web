var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM HOT',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'})]
    })
}),
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
})
]
});
var format_UnitechInfospace0 = new ol.format.GeoJSON();
var features_UnitechInfospace0 = format_UnitechInfospace0.readFeatures(geojson_UnitechInfospace0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnitechInfospace0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UnitechInfospace0.addFeatures(features_UnitechInfospace0);var lyr_UnitechInfospace0 = new ol.layer.Vector({
                source:jsonSource_UnitechInfospace0, 
                style: style_UnitechInfospace0,
                title: "Unitech Infospace"
            });var format_UnitechCyberHub1 = new ol.format.GeoJSON();
var features_UnitechCyberHub1 = format_UnitechCyberHub1.readFeatures(geojson_UnitechCyberHub1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnitechCyberHub1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UnitechCyberHub1.addFeatures(features_UnitechCyberHub1);var lyr_UnitechCyberHub1 = new ol.layer.Vector({
                source:jsonSource_UnitechCyberHub1, 
                style: style_UnitechCyberHub1,
                title: "Unitech Cyber Hub"
            });var format_SouthPointMall2 = new ol.format.GeoJSON();
var features_SouthPointMall2 = format_SouthPointMall2.readFeatures(geojson_SouthPointMall2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthPointMall2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthPointMall2.addFeatures(features_SouthPointMall2);var lyr_SouthPointMall2 = new ol.layer.Vector({
                source:jsonSource_SouthPointMall2, 
                style: style_SouthPointMall2,
                title: "South Point Mall"
            });var format_Sector313 = new ol.format.GeoJSON();
var features_Sector313 = format_Sector313.readFeatures(geojson_Sector313, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector313 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Sector313.addFeatures(features_Sector313);var lyr_Sector313 = new ol.layer.Vector({
                source:jsonSource_Sector313, 
                style: style_Sector313,
                title: "Sector-31"
            });var format_Sector294 = new ol.format.GeoJSON();
var features_Sector294 = format_Sector294.readFeatures(geojson_Sector294, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector294 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Sector294.addFeatures(features_Sector294);var lyr_Sector294 = new ol.layer.Vector({
                source:jsonSource_Sector294, 
                style: style_Sector294,
                title: "Sector-29"
            });var format_Sector155 = new ol.format.GeoJSON();
var features_Sector155 = format_Sector155.readFeatures(geojson_Sector155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector155 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Sector155.addFeatures(features_Sector155);var lyr_Sector155 = new ol.layer.Vector({
                source:jsonSource_Sector155, 
                style: style_Sector155,
                title: "Sector-15"
            });var format_SaharaMall6 = new ol.format.GeoJSON();
var features_SaharaMall6 = format_SaharaMall6.readFeatures(geojson_SaharaMall6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaharaMall6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SaharaMall6.addFeatures(features_SaharaMall6);var lyr_SaharaMall6 = new ol.layer.Vector({
                source:jsonSource_SaharaMall6, 
                style: style_SaharaMall6,
                title: "Sahara Mall"
            });var format_RahejaMall7 = new ol.format.GeoJSON();
var features_RahejaMall7 = format_RahejaMall7.readFeatures(geojson_RahejaMall7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RahejaMall7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RahejaMall7.addFeatures(features_RahejaMall7);var lyr_RahejaMall7 = new ol.layer.Vector({
                source:jsonSource_RahejaMall7, 
                style: style_RahejaMall7,
                title: "Raheja Mall"
            });var format_QutubPlaza8 = new ol.format.GeoJSON();
var features_QutubPlaza8 = format_QutubPlaza8.readFeatures(geojson_QutubPlaza8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QutubPlaza8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_QutubPlaza8.addFeatures(features_QutubPlaza8);var lyr_QutubPlaza8 = new ol.layer.Vector({
                source:jsonSource_QutubPlaza8, 
                style: style_QutubPlaza8,
                title: "Qutub Plaza"
            });var format_OmaxeCityMall9 = new ol.format.GeoJSON();
var features_OmaxeCityMall9 = format_OmaxeCityMall9.readFeatures(geojson_OmaxeCityMall9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OmaxeCityMall9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OmaxeCityMall9.addFeatures(features_OmaxeCityMall9);var lyr_OmaxeCityMall9 = new ol.layer.Vector({
                source:jsonSource_OmaxeCityMall9, 
                style: style_OmaxeCityMall9,
                title: "Omaxe City Mall"
            });var format_Ninex10 = new ol.format.GeoJSON();
var features_Ninex10 = format_Ninex10.readFeatures(geojson_Ninex10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ninex10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ninex10.addFeatures(features_Ninex10);var lyr_Ninex10 = new ol.layer.Vector({
                source:jsonSource_Ninex10, 
                style: style_Ninex10,
                title: "Ninex"
            });var format_MGFMegaCity11 = new ol.format.GeoJSON();
var features_MGFMegaCity11 = format_MGFMegaCity11.readFeatures(geojson_MGFMegaCity11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MGFMegaCity11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MGFMegaCity11.addFeatures(features_MGFMegaCity11);var lyr_MGFMegaCity11 = new ol.layer.Vector({
                source:jsonSource_MGFMegaCity11, 
                style: style_MGFMegaCity11,
                title: "MGF Mega City"
            });var format_Metropolitan12 = new ol.format.GeoJSON();
var features_Metropolitan12 = format_Metropolitan12.readFeatures(geojson_Metropolitan12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Metropolitan12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Metropolitan12.addFeatures(features_Metropolitan12);var lyr_Metropolitan12 = new ol.layer.Vector({
                source:jsonSource_Metropolitan12, 
                style: style_Metropolitan12,
                title: "Metropolitan"
            });var format_HongKongBazaar13 = new ol.format.GeoJSON();
var features_HongKongBazaar13 = format_HongKongBazaar13.readFeatures(geojson_HongKongBazaar13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HongKongBazaar13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_HongKongBazaar13.addFeatures(features_HongKongBazaar13);var lyr_HongKongBazaar13 = new ol.layer.Vector({
                source:jsonSource_HongKongBazaar13, 
                style: style_HongKongBazaar13,
                title: "Hong Kong Bazaar"
            });var format_GoodEarth14 = new ol.format.GeoJSON();
var features_GoodEarth14 = format_GoodEarth14.readFeatures(geojson_GoodEarth14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GoodEarth14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GoodEarth14.addFeatures(features_GoodEarth14);var lyr_GoodEarth14 = new ol.layer.Vector({
                source:jsonSource_GoodEarth14, 
                style: style_GoodEarth14,
                title: "Good Earth"
            });var format_GlobalFoyer15 = new ol.format.GeoJSON();
var features_GlobalFoyer15 = format_GlobalFoyer15.readFeatures(geojson_GlobalFoyer15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlobalFoyer15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GlobalFoyer15.addFeatures(features_GlobalFoyer15);var lyr_GlobalFoyer15 = new ol.layer.Vector({
                source:jsonSource_GlobalFoyer15, 
                style: style_GlobalFoyer15,
                title: "Global Foyer"
            });var format_GalleriaMarket16 = new ol.format.GeoJSON();
var features_GalleriaMarket16 = format_GalleriaMarket16.readFeatures(geojson_GalleriaMarket16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GalleriaMarket16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GalleriaMarket16.addFeatures(features_GalleriaMarket16);var lyr_GalleriaMarket16 = new ol.layer.Vector({
                source:jsonSource_GalleriaMarket16, 
                style: style_GalleriaMarket16,
                title: "Galleria Market"
            });var format_ErosCity17 = new ol.format.GeoJSON();
var features_ErosCity17 = format_ErosCity17.readFeatures(geojson_ErosCity17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ErosCity17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ErosCity17.addFeatures(features_ErosCity17);var lyr_ErosCity17 = new ol.layer.Vector({
                source:jsonSource_ErosCity17, 
                style: style_ErosCity17,
                title: "Eros City"
            });var format_DLFStarMall18 = new ol.format.GeoJSON();
var features_DLFStarMall18 = format_DLFStarMall18.readFeatures(geojson_DLFStarMall18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DLFStarMall18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DLFStarMall18.addFeatures(features_DLFStarMall18);var lyr_DLFStarMall18 = new ol.layer.Vector({
                source:jsonSource_DLFStarMall18, 
                style: style_DLFStarMall18,
                title: "DLF Star Mall"
            });var format_DLFMegaMall19 = new ol.format.GeoJSON();
var features_DLFMegaMall19 = format_DLFMegaMall19.readFeatures(geojson_DLFMegaMall19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DLFMegaMall19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DLFMegaMall19.addFeatures(features_DLFMegaMall19);var lyr_DLFMegaMall19 = new ol.layer.Vector({
                source:jsonSource_DLFMegaMall19, 
                style: style_DLFMegaMall19,
                title: "DLF Mega Mall"
            });var format_DLFCyberHub20 = new ol.format.GeoJSON();
var features_DLFCyberHub20 = format_DLFCyberHub20.readFeatures(geojson_DLFCyberHub20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DLFCyberHub20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DLFCyberHub20.addFeatures(features_DLFCyberHub20);var lyr_DLFCyberHub20 = new ol.layer.Vector({
                source:jsonSource_DLFCyberHub20, 
                style: style_DLFCyberHub20,
                title: "DLF Cyber Hub"
            });var format_CentralPlaza21 = new ol.format.GeoJSON();
var features_CentralPlaza21 = format_CentralPlaza21.readFeatures(geojson_CentralPlaza21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentralPlaza21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CentralPlaza21.addFeatures(features_CentralPlaza21);var lyr_CentralPlaza21 = new ol.layer.Vector({
                source:jsonSource_CentralPlaza21, 
                style: style_CentralPlaza21,
                title: "Central Plaza"
            });var format_CelebrationMall22 = new ol.format.GeoJSON();
var features_CelebrationMall22 = format_CelebrationMall22.readFeatures(geojson_CelebrationMall22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CelebrationMall22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CelebrationMall22.addFeatures(features_CelebrationMall22);var lyr_CelebrationMall22 = new ol.layer.Vector({
                source:jsonSource_CelebrationMall22, 
                style: style_CelebrationMall22,
                title: "Celebration Mall"
            });var format_BaaniSquare23 = new ol.format.GeoJSON();
var features_BaaniSquare23 = format_BaaniSquare23.readFeatures(geojson_BaaniSquare23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaaniSquare23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BaaniSquare23.addFeatures(features_BaaniSquare23);var lyr_BaaniSquare23 = new ol.layer.Vector({
                source:jsonSource_BaaniSquare23, 
                style: style_BaaniSquare23,
                title: "Baani Square"
            });var format_AnsalPlaza24 = new ol.format.GeoJSON();
var features_AnsalPlaza24 = format_AnsalPlaza24.readFeatures(geojson_AnsalPlaza24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnsalPlaza24 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AnsalPlaza24.addFeatures(features_AnsalPlaza24);var lyr_AnsalPlaza24 = new ol.layer.Vector({
                source:jsonSource_AnsalPlaza24, 
                style: style_AnsalPlaza24,
                title: "Ansal Plaza"
            });var format_Ambiencemall25 = new ol.format.GeoJSON();
var features_Ambiencemall25 = format_Ambiencemall25.readFeatures(geojson_Ambiencemall25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ambiencemall25 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ambiencemall25.addFeatures(features_Ambiencemall25);var lyr_Ambiencemall25 = new ol.layer.Vector({
                source:jsonSource_Ambiencemall25, 
                style: style_Ambiencemall25,
                title: "Ambience mall"
            });

lyr_UnitechInfospace0.setVisible(true);lyr_UnitechCyberHub1.setVisible(true);lyr_SouthPointMall2.setVisible(true);lyr_Sector313.setVisible(true);lyr_Sector294.setVisible(true);lyr_Sector155.setVisible(true);lyr_SaharaMall6.setVisible(true);lyr_RahejaMall7.setVisible(true);lyr_QutubPlaza8.setVisible(true);lyr_OmaxeCityMall9.setVisible(true);lyr_Ninex10.setVisible(true);lyr_MGFMegaCity11.setVisible(true);lyr_Metropolitan12.setVisible(true);lyr_HongKongBazaar13.setVisible(true);lyr_GoodEarth14.setVisible(true);lyr_GlobalFoyer15.setVisible(true);lyr_GalleriaMarket16.setVisible(true);lyr_ErosCity17.setVisible(true);lyr_DLFStarMall18.setVisible(true);lyr_DLFMegaMall19.setVisible(true);lyr_DLFCyberHub20.setVisible(true);lyr_CentralPlaza21.setVisible(true);lyr_CelebrationMall22.setVisible(true);lyr_BaaniSquare23.setVisible(true);lyr_AnsalPlaza24.setVisible(true);lyr_Ambiencemall25.setVisible(true);
var layersList = [baseLayer,lyr_UnitechInfospace0,lyr_UnitechCyberHub1,lyr_SouthPointMall2,lyr_Sector313,lyr_Sector294,lyr_Sector155,lyr_SaharaMall6,lyr_RahejaMall7,lyr_QutubPlaza8,lyr_OmaxeCityMall9,lyr_Ninex10,lyr_MGFMegaCity11,lyr_Metropolitan12,lyr_HongKongBazaar13,lyr_GoodEarth14,lyr_GlobalFoyer15,lyr_GalleriaMarket16,lyr_ErosCity17,lyr_DLFStarMall18,lyr_DLFMegaMall19,lyr_DLFCyberHub20,lyr_CentralPlaza21,lyr_CelebrationMall22,lyr_BaaniSquare23,lyr_AnsalPlaza24,lyr_Ambiencemall25];
lyr_UnitechInfospace0.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_UnitechCyberHub1.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_SouthPointMall2.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_Sector313.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_Sector294.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_Sector155.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_SaharaMall6.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_RahejaMall7.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_QutubPlaza8.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_OmaxeCityMall9.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_Ninex10.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_MGFMegaCity11.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_Metropolitan12.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_HongKongBazaar13.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_GoodEarth14.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_GlobalFoyer15.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_GalleriaMarket16.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_ErosCity17.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_DLFStarMall18.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_DLFMegaMall19.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_DLFCyberHub20.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_CentralPlaza21.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_CelebrationMall22.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_BaaniSquare23.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_AnsalPlaza24.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_Ambiencemall25.set('fieldAliases', {'Ward_No': 'Ward_No', 'Employed': 'Employed', 'Population': 'Population', 'T Employed': 'T Employed', 'T Populati': 'T Populati', 'Name': 'Name', 'Property V': 'Property V', 'PurchaseP': 'PurchaseP', 'Value': 'Value', 'M Value': 'M Value', 'F Value': 'F Value', 'T Potentia': 'T Potentia', 'T Purchase': 'T Purchase', 'Pur.Pow.': 'Pur.Pow.', 'P_Footfall': 'P_Footfall', 'Mall Name': 'Mall Name', });
lyr_UnitechInfospace0.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_UnitechCyberHub1.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_SouthPointMall2.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_Sector313.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_Sector294.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_Sector155.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_SaharaMall6.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_RahejaMall7.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_QutubPlaza8.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_OmaxeCityMall9.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_Ninex10.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_MGFMegaCity11.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_Metropolitan12.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_HongKongBazaar13.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_GoodEarth14.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_GlobalFoyer15.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_GalleriaMarket16.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_ErosCity17.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_DLFStarMall18.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_DLFMegaMall19.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_DLFCyberHub20.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_CentralPlaza21.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_CelebrationMall22.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_BaaniSquare23.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_AnsalPlaza24.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_Ambiencemall25.set('fieldImages', {'Ward_No': 'TextEdit', 'Employed': 'TextEdit', 'Population': 'TextEdit', 'T Employed': 'TextEdit', 'T Populati': 'TextEdit', 'Name': 'TextEdit', 'Property V': 'TextEdit', 'PurchaseP': 'TextEdit', 'Value': 'TextEdit', 'M Value': 'TextEdit', 'F Value': 'TextEdit', 'T Potentia': 'TextEdit', 'T Purchase': 'TextEdit', 'Pur.Pow.': 'TextEdit', 'P_Footfall': 'TextEdit', 'Mall Name': 'TextEdit', });
lyr_UnitechInfospace0.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_UnitechCyberHub1.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_SouthPointMall2.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_Sector313.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_Sector294.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_Sector155.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_SaharaMall6.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_RahejaMall7.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_QutubPlaza8.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_OmaxeCityMall9.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_Ninex10.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_MGFMegaCity11.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_Metropolitan12.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_HongKongBazaar13.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_GoodEarth14.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_GlobalFoyer15.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_GalleriaMarket16.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_ErosCity17.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_DLFStarMall18.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_DLFMegaMall19.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_DLFCyberHub20.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_CentralPlaza21.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_CelebrationMall22.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_BaaniSquare23.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_AnsalPlaza24.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_Ambiencemall25.set('fieldLabels', {'Ward_No': 'inline label', 'Employed': 'inline label', 'Population': 'inline label', 'T Employed': 'inline label', 'T Populati': 'inline label', 'Name': 'inline label', 'Property V': 'inline label', 'PurchaseP': 'inline label', 'Value': 'inline label', 'M Value': 'inline label', 'F Value': 'inline label', 'T Potentia': 'inline label', 'T Purchase': 'inline label', 'Pur.Pow.': 'inline label', 'P_Footfall': 'inline label', 'Mall Name': 'inline label', });
lyr_Ambiencemall25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});