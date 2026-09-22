ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([92.963823, -9.057435, 132.527324, 5.416310]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_JalurlautPerdaganganDunia_1 = new ol.format.GeoJSON();
var features_JalurlautPerdaganganDunia_1 = format_JalurlautPerdaganganDunia_1.readFeatures(json_JalurlautPerdaganganDunia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JalurlautPerdaganganDunia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurlautPerdaganganDunia_1.addFeatures(features_JalurlautPerdaganganDunia_1);
var lyr_JalurlautPerdaganganDunia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurlautPerdaganganDunia_1, 
                style: style_JalurlautPerdaganganDunia_1,
                popuplayertitle: 'Jalur laut Perdagangan Dunia',
                interactive: true,
    title: 'Jalur laut Perdagangan Dunia<br />\
    <img src="styles/legend/JalurlautPerdaganganDunia_1_0.png" /> Major<br />\
    <img src="styles/legend/JalurlautPerdaganganDunia_1_1.png" /> Middle<br />\
    <img src="styles/legend/JalurlautPerdaganganDunia_1_2.png" /> Minor<br />' });
var format_Chokepoint_2 = new ol.format.GeoJSON();
var features_Chokepoint_2 = format_Chokepoint_2.readFeatures(json_Chokepoint_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Chokepoint_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chokepoint_2.addFeatures(features_Chokepoint_2);
var lyr_Chokepoint_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chokepoint_2, 
                style: style_Chokepoint_2,
                popuplayertitle: 'Chokepoint',
                interactive: true,
    title: 'Chokepoint<br />\
    <img src="styles/legend/Chokepoint_2_0.png" /> Primary Chokepoint<br />\
    <img src="styles/legend/Chokepoint_2_1.png" /> Secondary Chokepoint<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_JalurlautPerdaganganDunia_1.setVisible(true);lyr_Chokepoint_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_JalurlautPerdaganganDunia_1,lyr_Chokepoint_2];
lyr_JalurlautPerdaganganDunia_1.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'Type': 'Type', });
lyr_Chokepoint_2.set('fieldAliases', {'nama': 'nama', 'tipe': 'tipe', });
lyr_JalurlautPerdaganganDunia_1.set('fieldImages', {'FID': 'TextEdit', 'OBJECTID': 'TextEdit', 'Type': 'TextEdit', });
lyr_Chokepoint_2.set('fieldImages', {'nama': 'TextEdit', 'tipe': 'TextEdit', });
lyr_JalurlautPerdaganganDunia_1.set('fieldLabels', {'FID': 'hidden field', 'OBJECTID': 'hidden field', 'Type': 'inline label - visible with data', });
lyr_Chokepoint_2.set('fieldLabels', {'nama': 'inline label - visible with data', 'tipe': 'inline label - visible with data', });
lyr_Chokepoint_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});