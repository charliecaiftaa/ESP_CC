/*
 * Copyright 2003-2006, 2009, 2017, United States Government, as represented by the Administrator of the
 * National Aeronautics and Space Administration. All rights reserved.
 *
 * The NASAWorldWind/WebWorldWind platform is licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @exports BingWMSLayer
 */
define([
        '../WWConf',
        '../geom/Location',
        '../geom/Sector',
        '../layer/TiledImageLayer',
        '../util/WmsUrlBuilder'
    ],
    function (
        WWConf,
        Location,
        Sector,
        TiledImageLayer,
        WmsUrlBuilder) {
        "use strict";

        // Intentionally not documented. For diagnostic use only.
        var BingWMSLayer = function () {
            TiledImageLayer.call(this,
                Sector.FULL_SPHERE, new Location(45, 45), 16, "image/png", "BingWMS", 256, 256);

            this.displayName = "Bing WMS";
            this.pickEnabled = false;
            this.maxActiveAltitude = 10e3;
            this.urlBuilder = new WmsUrlBuilder(WWConf.Virtual_Earth, "ve", "", "1.3.0");
            // this.urlBuilder = new WmsUrlBuilder("https://worldwind27.arc.nasa.gov/wms/virtualearth", "ve", "", "1.3.0");
        };

        BingWMSLayer.prototype = Object.create(TiledImageLayer.prototype);

        return BingWMSLayer;
    });