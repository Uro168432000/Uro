ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32648").setExtent([253310.625087, 1811053.890115, 287534.310737, 1827903.095447]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Bulid_1 = new ol.format.GeoJSON();
var features_Bulid_1 = format_Bulid_1.readFeatures(json_Bulid_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource_Bulid_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bulid_1.addFeatures(features_Bulid_1);
var lyr_Bulid_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bulid_1, 
                style: style_Bulid_1,
                popuplayertitle: "Bulid",
                interactive: true,
                title: '<img src="styles/legend/Bulid_1.png" /> Bulid'
            });
var format_4_2 = new ol.format.GeoJSON();
var features_4_2 = format_4_2.readFeatures(json_4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource_4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_2.addFeatures(features_4_2);
var lyr_4_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4_2, 
                style: style_4_2,
                popuplayertitle: "แบบแบ่งเขต4เขต",
                interactive: true,
                title: '<img src="styles/legend/4_2.png" /> แบบแบ่งเขต4เขต'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "ถนนแบบแบ่งเขต",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> ถนนแบบแบ่งเขต'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "แหล่งน้ำในเทศบาลนครขอนแก่น",
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> แหล่งน้ำในเทศบาลนครขอนแก่น'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: "สวน",
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> สวน'
            });
var format_UTM_6 = new ol.format.GeoJSON();
var features_UTM_6 = format_UTM_6.readFeatures(json_UTM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource_UTM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTM_6.addFeatures(features_UTM_6);
var lyr_UTM_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UTM_6, 
                style: style_UTM_6,
                popuplayertitle: "โรงพยาบาลนครขอนแก่น-UTM",
                interactive: true,
                title: '<img src="styles/legend/UTM_6.png" /> โรงพยาบาลนครขอนแก่น-UTM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Bulid_1.setVisible(true);lyr_4_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr_UTM_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Bulid_1,lyr_4_2,lyr__3,lyr__4,lyr__5,lyr_UTM_6];
lyr_Bulid_1.set('fieldAliases', {'Id': 'Id', });
lyr_4_2.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr__3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr__4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__5.set('fieldAliases', {'Id': 'Id', });
lyr_UTM_6.set('fieldAliases', {'ลำดับที่': 'ลำดับที่', 'สถานพยาบาล': 'สถานพยาบาล', 'ตำบล': 'ตำบล', 'X': 'X', 'Y': 'Y', 'field_6': 'field_6', });
lyr_Bulid_1.set('fieldImages', {'Id': 'Range', });
lyr_4_2.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr__3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr__4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__5.set('fieldImages', {'Id': 'Range', });
lyr_UTM_6.set('fieldImages', {'ลำดับที่': 'Range', 'สถานพยาบาล': 'TextEdit', 'ตำบล': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'field_6': 'TextEdit', });
lyr_Bulid_1.set('fieldLabels', {'Id': 'inline label - always visible', });
lyr_4_2.set('fieldLabels', {'Id': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr__3.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', 'ref': 'inline label - always visible', 'oneway': 'inline label - always visible', 'maxspeed': 'inline label - always visible', 'layer': 'inline label - always visible', 'bridge': 'inline label - always visible', 'tunnel': 'inline label - always visible', });
lyr__4.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'begin': 'inline label - always visible', 'end': 'inline label - always visible', 'altitudeMo': 'inline label - always visible', 'tessellate': 'inline label - always visible', 'extrude': 'inline label - always visible', 'visibility': 'inline label - always visible', 'drawOrder': 'inline label - always visible', 'icon': 'inline label - always visible', });
lyr__5.set('fieldLabels', {'Id': 'inline label - always visible', });
lyr_UTM_6.set('fieldLabels', {'ลำดับที่': 'inline label - always visible', 'สถานพยาบาล': 'inline label - always visible', 'ตำบล': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'field_6': 'inline label - always visible', });
lyr_UTM_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});