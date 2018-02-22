﻿module.exports =
    {
        doConvert: function(data)
        {
            return convert(data);
        }
    };

function convert(data)
{
    const json         = JSON.parse(data);
    var converted      = {};

    converted.type     = "FeatureCollection";
    converted.features = [];

    var featuresJSON = json["features"];

    for(var i = 0; i < featuresJSON.length; i++)
    {
        const featureJSON = featuresJSON[i];
        var feature       = {};
        var properties    = {};

        feature.type       = "Feature";
        feature.geometry   = featureJSON.geometry;
        feature.properties = properties;
        properties.name    = featureJSON.properties.Name;

        if(featureJSON.properties.Descriptn !== null)
        {
            properties.description  = featureJSON.properties.Descriptn;
        }

        if(featureJSON.properties.website !== "")
        {
            properties.website = featuresJSON[i].properties.website;
        }

        if(featureJSON.properties.Address !== "")
        {
            properties.address = featureJSON.properties.Address;
        }

        converted.features.push(feature)
    }

    return JSON.stringify(converted, null, 4);
}
