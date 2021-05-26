var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PartidosBsAsSur_2 = new ol.format.GeoJSON();
var features_PartidosBsAsSur_2 = format_PartidosBsAsSur_2.readFeatures(json_PartidosBsAsSur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartidosBsAsSur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartidosBsAsSur_2.addFeatures(features_PartidosBsAsSur_2);
var lyr_PartidosBsAsSur_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PartidosBsAsSur_2, 
                style: style_PartidosBsAsSur_2,
                interactive: true,
                title: '<img src="styles/legend/PartidosBsAsSur_2.png" /> Partidos Bs As Sur'
            });
var format_PoblacinpordeptoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordeptoINDEC_3 = format_PoblacinpordeptoINDEC_3.readFeatures(json_PoblacinpordeptoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordeptoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordeptoINDEC_3.addFeatures(features_PoblacinpordeptoINDEC_3);
var lyr_PoblacinpordeptoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordeptoINDEC_3, 
                style: style_PoblacinpordeptoINDEC_3,
                interactive: true,
    title: 'Población por depto (INDEC)<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_0.png" /> 1.750 - 31.750<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_1.png" /> 31.751 - 69.650<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_2.png" /> 69.651 - 301.575<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_3.png" /> 301.576 - 619.000<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 1.000 - 7.500<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 7.501 - 50.000<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 50.001 - 200.000<br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> 200.001 - 400.000<br />'
        });
var format_ViviendasruralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasruralesINDEC_5 = format_ViviendasruralesINDEC_5.readFeatures(json_ViviendasruralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasruralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasruralesINDEC_5.addFeatures(features_ViviendasruralesINDEC_5);
var lyr_ViviendasruralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasruralesINDEC_5, 
                style: style_ViviendasruralesINDEC_5,
                interactive: true,
    title: 'Viviendas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_0.png" /> 200 - 1.700<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_1.png" /> 1.701 - 3.000<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_2.png" /> 3.001 - 4.500<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_3.png" /> 4.501 - 6.000<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 45 - 7.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 7.001 - 15.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 15.001 - 30.000<br />'
        });
var format_CabezasdecaprinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_7 = format_CabezasdecaprinosMAGyP_7.readFeatures(json_CabezasdecaprinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_7.addFeatures(features_CabezasdecaprinosMAGyP_7);
var lyr_CabezasdecaprinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_7, 
                style: style_CabezasdecaprinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_1.png" /> 1 - 500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_2.png" /> 501 - 2.500<br />'
        });
var format_CabezasdeovinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_8 = format_CabezasdeovinosMAGyP_8.readFeatures(json_CabezasdeovinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_8.addFeatures(features_CabezasdeovinosMAGyP_8);
var lyr_CabezasdeovinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_8, 
                style: style_CabezasdeovinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_8_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_8_1.png" /> 5.000 - 10.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_8_2.png" /> 10.001 - 45.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_8_3.png" /> 45.001 - 120.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_8_4.png" /> 120.001 - 300.000<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 50.000 - 75.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 75.001 - 180.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 180.001 - 315.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 315.001 - 485.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_4.png" /> 485.001 - 850.000<br />'
        });
var format_HectreasdehortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_10 = format_HectreasdehortalizasINDEC_10.readFeatures(json_HectreasdehortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_10.addFeatures(features_HectreasdehortalizasINDEC_10);
var lyr_HectreasdehortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_10, 
                style: style_HectreasdehortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_1.png" /> 1 - 160<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_2.png" /> 161 - 1.000<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_3.png" /> 1.001 - 3.200<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_4.png" /> 3.201 - 4.500<br />'
        });
var format_HectreasdelegumbresINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdelegumbresINDEC_11 = format_HectreasdelegumbresINDEC_11.readFeatures(json_HectreasdelegumbresINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdelegumbresINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdelegumbresINDEC_11.addFeatures(features_HectreasdelegumbresINDEC_11);
var lyr_HectreasdelegumbresINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdelegumbresINDEC_11, 
                style: style_HectreasdelegumbresINDEC_11,
                interactive: true,
    title: 'Hectáreas de legumbres (INDEC)<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_1.png" /> 1 - 55<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_2.png" /> 56 - 265<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_3.png" /> 266 - 665<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_4.png" /> 666 o más<br />'
        });
var format_HectreasdemaizMAGyP_12 = new ol.format.GeoJSON();
var features_HectreasdemaizMAGyP_12 = format_HectreasdemaizMAGyP_12.readFeatures(json_HectreasdemaizMAGyP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemaizMAGyP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemaizMAGyP_12.addFeatures(features_HectreasdemaizMAGyP_12);
var lyr_HectreasdemaizMAGyP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemaizMAGyP_12, 
                style: style_HectreasdemaizMAGyP_12,
                interactive: true,
    title: 'Hectáreas de maiz (MAGyP)<br />\
    <img src="styles/legend/HectreasdemaizMAGyP_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdemaizMAGyP_12_1.png" /> 1 - 15.000<br />\
    <img src="styles/legend/HectreasdemaizMAGyP_12_2.png" /> 15.001 - 40.000<br />\
    <img src="styles/legend/HectreasdemaizMAGyP_12_3.png" /> 40.001 - 70.000<br />'
        });
var format_HectreasdetrigoMAGyP_13 = new ol.format.GeoJSON();
var features_HectreasdetrigoMAGyP_13 = format_HectreasdetrigoMAGyP_13.readFeatures(json_HectreasdetrigoMAGyP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetrigoMAGyP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetrigoMAGyP_13.addFeatures(features_HectreasdetrigoMAGyP_13);
var lyr_HectreasdetrigoMAGyP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetrigoMAGyP_13, 
                style: style_HectreasdetrigoMAGyP_13,
                interactive: true,
    title: 'Hectáreas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_1.png" /> 1 - 7.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_2.png" /> 7.001 - 20.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_3.png" /> 20.001 - 40.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_4.png" /> 40.001 - 70.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_5.png" /> 70.001 - 100.000<br />'
        });
var format_HectreasdegirasolMAGyP_14 = new ol.format.GeoJSON();
var features_HectreasdegirasolMAGyP_14 = format_HectreasdegirasolMAGyP_14.readFeatures(json_HectreasdegirasolMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdegirasolMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdegirasolMAGyP_14.addFeatures(features_HectreasdegirasolMAGyP_14);
var lyr_HectreasdegirasolMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdegirasolMAGyP_14, 
                style: style_HectreasdegirasolMAGyP_14,
                interactive: true,
    title: 'Hectáreas de girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_14_1.png" /> 1 - 3.500<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_14_2.png" /> 3.501 - 10.000<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_14_3.png" /> 10.001 - 20.000<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_14_4.png" /> 20.001 - 35.000<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_14_5.png" /> 35.001 - 55.000<br />'
        });
var format_HectreasdesojaMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasdesojaMAGyP_15 = format_HectreasdesojaMAGyP_15.readFeatures(json_HectreasdesojaMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdesojaMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdesojaMAGyP_15.addFeatures(features_HectreasdesojaMAGyP_15);
var lyr_HectreasdesojaMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdesojaMAGyP_15, 
                style: style_HectreasdesojaMAGyP_15,
                interactive: true,
    title: 'Hectáreas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_1.png" /> 800 - 25.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_2.png" /> 25.001 - 65.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_3.png" /> 65.001 - 110.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_4.png" /> 110.001 - 175.000<br />'
        });
var format_Localidades_16 = new ol.format.GeoJSON();
var features_Localidades_16 = format_Localidades_16.readFeatures(json_Localidades_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_16.addFeatures(features_Localidades_16);
var lyr_Localidades_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_16, 
                style: style_Localidades_16,
                interactive: true,
                title: '<img src="styles/legend/Localidades_16.png" /> Localidades'
            });
var format_BERBsAsSur_17 = new ol.format.GeoJSON();
var features_BERBsAsSur_17 = format_BERBsAsSur_17.readFeatures(json_BERBsAsSur_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERBsAsSur_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERBsAsSur_17.addFeatures(features_BERBsAsSur_17);
var lyr_BERBsAsSur_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERBsAsSur_17, 
                style: style_BERBsAsSur_17,
                interactive: true,
                title: '<img src="styles/legend/BERBsAsSur_17.png" /> BER Bs As Sur'
            });
var format_BERBsAsSur_18 = new ol.format.GeoJSON();
var features_BERBsAsSur_18 = format_BERBsAsSur_18.readFeatures(json_BERBsAsSur_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERBsAsSur_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERBsAsSur_18.addFeatures(features_BERBsAsSur_18);
var lyr_BERBsAsSur_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERBsAsSur_18, 
                style: style_BERBsAsSur_18,
                interactive: true,
                title: '<img src="styles/legend/BERBsAsSur_18.png" /> BER Bs As Sur'
            });
var format_CAIR_19 = new ol.format.GeoJSON();
var features_CAIR_19 = format_CAIR_19.readFeatures(json_CAIR_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAIR_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAIR_19.addFeatures(features_CAIR_19);
var lyr_CAIR_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAIR_19, 
                style: style_CAIR_19,
                interactive: true,
                title: '<img src="styles/legend/CAIR_19.png" /> CAIR'
            });
var format_Delegacin_20 = new ol.format.GeoJSON();
var features_Delegacin_20 = format_Delegacin_20.readFeatures(json_Delegacin_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_20.addFeatures(features_Delegacin_20);
var lyr_Delegacin_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_20, 
                style: style_Delegacin_20,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_20.png" /> Delegación'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_PartidosBsAsSur_2.setVisible(true);lyr_PoblacinpordeptoINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_ViviendasruralesINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdecaprinosMAGyP_7.setVisible(true);lyr_CabezasdeovinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdehortalizasINDEC_10.setVisible(true);lyr_HectreasdelegumbresINDEC_11.setVisible(true);lyr_HectreasdemaizMAGyP_12.setVisible(true);lyr_HectreasdetrigoMAGyP_13.setVisible(true);lyr_HectreasdegirasolMAGyP_14.setVisible(true);lyr_HectreasdesojaMAGyP_15.setVisible(true);lyr_Localidades_16.setVisible(true);lyr_BERBsAsSur_17.setVisible(true);lyr_BERBsAsSur_18.setVisible(true);lyr_CAIR_19.setVisible(true);lyr_Delegacin_20.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_PartidosBsAsSur_2,lyr_PoblacinpordeptoINDEC_3,lyr_PEAINDEC_4,lyr_ViviendasruralesINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdecaprinosMAGyP_7,lyr_CabezasdeovinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdehortalizasINDEC_10,lyr_HectreasdelegumbresINDEC_11,lyr_HectreasdemaizMAGyP_12,lyr_HectreasdetrigoMAGyP_13,lyr_HectreasdegirasolMAGyP_14,lyr_HectreasdesojaMAGyP_15,lyr_Localidades_16,lyr_BERBsAsSur_17,lyr_BERBsAsSur_18,lyr_CAIR_19,lyr_Delegacin_20];
lyr_PartidosBsAsSur_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PoblacinpordeptoINDEC_3.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_PEAINDEC_4.set('fieldAliases', {'PEA': 'PEA', });
lyr_ViviendasruralesINDEC_5.set('fieldAliases', {'Viv. rur': 'Viv. rur', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasdecaprinosMAGyP_7.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasdeovinosMAGyP_8.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreasdehortalizasINDEC_10.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdelegumbresINDEC_11.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreasdemaizMAGyP_12.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreasdetrigoMAGyP_13.set('fieldAliases', {'Trigo': 'Trigo', });
lyr_HectreasdegirasolMAGyP_14.set('fieldAliases', {'Girasol': 'Girasol', });
lyr_HectreasdesojaMAGyP_15.set('fieldAliases', {'Soja': 'Soja', });
lyr_Localidades_16.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BERBsAsSur_17.set('fieldAliases', {'Nº': 'Nº', 'Delegacion': 'Delegacion', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_BERBsAsSur_18.set('fieldAliases', {'Nº': 'Nº', 'Delegacion': 'Delegacion', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_CAIR_19.set('fieldAliases', {'Nº': 'Nº', 'Delegacion': 'Delegacion', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_Delegacin_20.set('fieldAliases', {'localidad': 'localidad', 'direccion': 'direccion', 'prest 2016': 'prest 2016', 'prest 2017': 'prest 2017', 'prest 2018': 'prest 2018', 'prest 2019': 'prest 2019', 'prest 2020': 'prest 2020', });
lyr_PartidosBsAsSur_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PoblacinpordeptoINDEC_3.set('fieldImages', {'Poblacion': 'TextEdit', });
lyr_PEAINDEC_4.set('fieldImages', {'PEA': 'TextEdit', });
lyr_ViviendasruralesINDEC_5.set('fieldImages', {'Viv. rur': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_7.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_8.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_10.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdelegumbresINDEC_11.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreasdemaizMAGyP_12.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreasdetrigoMAGyP_13.set('fieldImages', {'Trigo': 'TextEdit', });
lyr_HectreasdegirasolMAGyP_14.set('fieldImages', {'Girasol': 'TextEdit', });
lyr_HectreasdesojaMAGyP_15.set('fieldImages', {'Soja': 'TextEdit', });
lyr_Localidades_16.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BERBsAsSur_17.set('fieldImages', {'Nº': 'TextEdit', 'Delegacion': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_BERBsAsSur_18.set('fieldImages', {'Nº': 'TextEdit', 'Delegacion': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_CAIR_19.set('fieldImages', {'Nº': 'TextEdit', 'Delegacion': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_Delegacin_20.set('fieldImages', {'localidad': 'TextEdit', 'direccion': '', 'prest 2016': '', 'prest 2017': '', 'prest 2018': '', 'prest 2019': '', 'prest 2020': '', });
lyr_PartidosBsAsSur_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PoblacinpordeptoINDEC_3.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'PEA': 'inline label', });
lyr_ViviendasruralesINDEC_5.set('fieldLabels', {'Viv. rur': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_7.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_8.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreasdehortalizasINDEC_10.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasdelegumbresINDEC_11.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreasdemaizMAGyP_12.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreasdetrigoMAGyP_13.set('fieldLabels', {'Trigo': 'inline label', });
lyr_HectreasdegirasolMAGyP_14.set('fieldLabels', {'Girasol': 'inline label', });
lyr_HectreasdesojaMAGyP_15.set('fieldLabels', {'Soja': 'inline label', });
lyr_Localidades_16.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BERBsAsSur_17.set('fieldLabels', {'Nº': 'inline label', 'Delegacion': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_BERBsAsSur_18.set('fieldLabels', {'Nº': 'inline label', 'Delegacion': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_CAIR_19.set('fieldLabels', {'Nº': 'inline label', 'Delegacion': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_Delegacin_20.set('fieldLabels', {'localidad': 'inline label', 'direccion': 'inline label', 'prest 2016': 'inline label', 'prest 2017': 'inline label', 'prest 2018': 'inline label', 'prest 2019': 'inline label', 'prest 2020': 'inline label', });
lyr_Delegacin_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});