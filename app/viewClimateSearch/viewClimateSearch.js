'use strict';
angular.module('myApp.viewClimateSearch', ['ngRoute', 'am.multiselect', 'trNgGrid', 'myApp.RestClientService', 'chart.js'])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/viewClimateSearch', {
                    templateUrl: 'viewClimateSearch/viewClimateSearch.html',
                    controller: 'ViewClimateSearchCtrl'
                });
            }])
        .controller('ViewClimateSearchCtrl', ['$scope', 'RestClientService', function ($scope, RestClientService) {
                $scope.fromYears = [
                    {id: 1920, name: '1920'},
                    {id: 1940, name: '1940'},
                    {id: 1960, name: '1960'},
                    {id: 1980, name: '1980'},
                    {id: 2020, name: '2020'},
                    {id: 2040, name: '2040'},
                    {id: 2060, name: '2060'},
                    {id: 2080, name: '2080'}
                ];
                $scope.toYears = [
                    {id: 1939, name: '1939'},
                    {id: 1959, name: '1959'},
                    {id: 1979, name: '1979'},
                    {id: 1999, name: '1999'},
                    {id: 2039, name: '2039'},
                    {id: 2059, name: '2059'},
                    {id: 2079, name: '2079'},
                    {id: 2099, name: '2099'}
                ];
                $scope.types = [
                    {id: 'mavg', name: 'Monthly average'},
                    {id: 'annualavg', name: 'Annual average'},
                    {id: 'manom', name: 'Average monthly change (anomaly)'},
                    {id: 'annualanom', name: 'Average annual change (anomaly)'}
                ];
                $scope.countries = [
                    {id: 'AFG_Asia', name: 'Afghanistan'},
                    {id: 'ALB_Europe', name: 'Albania'},
                    {id: 'DZA_Africa', name: 'Algeria'},
                    {id: 'ASM_Australia/Oceania', name: 'American Samoa'},
                    {id: 'AND_Europe', name: 'Andorra'},
                    {id: 'AGO_Africa', name: 'Angola'},
                    {id: 'AIA_North America', name: 'Anguilla'},
                    {id: 'ATG_North America', name: 'Antigua & Barbuda'},
                    {id: 'ARG_South America', name: 'Argentina'},
                    {id: 'ARM_Asia', name: 'Armenia'},
                    {id: 'ABW_North America', name: 'Aruba'},
                    {id: 'AUS_Australia/Oceania', name: 'Australia'},
                    {id: 'AUT_Europe', name: 'Austria'},
                    {id: 'AZE_Asia', name: 'Azerbaijan'},
                    {id: 'BHR_Asia', name: 'Bahrain'},
                    {id: 'BGD_Asia', name: 'Bangladesh'},
                    {id: 'BRB_North America', name: 'Barbados'},
                    {id: 'BLR_Europe', name: 'Belarus'},
                    {id: 'BEL_Europe', name: 'Belgium'},
                    {id: 'BLZ_North America', name: 'Belize'},
                    {id: 'BEN_Africa', name: 'Benin'},
                    {id: 'BMU_North America', name: 'Bermuda'},
                    {id: 'BTN_Asia', name: 'Bhutan'},
                    {id: 'BOL_South America', name: 'Bolivia'},
                    {id: 'BIH_Europe', name: 'Bosnia & Herzegovina'},
                    {id: 'BWA_Africa', name: 'Botswana'},
                    {id: 'BRA_South America', name: 'Brazil'},
                    {id: 'IOT_Asia', name: 'British Indian Ocean Territory'},
                    {id: 'VGB_North America', name: 'British Virgin Is.'},
                    {id: 'BRN_Asia', name: 'Brunei'},
                    {id: 'BGR_Europe', name: 'Bulgaria'},
                    {id: 'BFA_Africa', name: 'Burkina Faso'},
                    {id: 'BDI_Africa', name: 'Burundi'},
                    {id: 'KHM_Asia', name: 'Cambodia'},
                    {id: 'CMR_Africa', name: 'Cameroon'},
                    {id: 'CAN_North America', name: 'Canada'},
                    {id: 'CPV_Africa', name: 'Cape Verde'},
                    {id: 'CYM_North America', name: 'Cayman Is.'},
                    {id: 'CAF_Africa', name: 'Central African Republic'},
                    {id: 'TCD_Africa', name: 'Chad'},
                    {id: 'CHL_South America', name: 'Chile'},
                    {id: 'CHN_Asia', name: 'China'},
                    {id: 'CXR_Australia/Oceania', name: 'Christmas I.'},
                    {id: 'CCK_Australia/Oceania', name: 'Cocos Is.'},
                    {id: 'COL_South America', name: 'Colombia'},
                    {id: 'COM_Africa', name: 'Comoros'},
                    {id: 'COG_Africa', name: 'Congo'},
                    {id: 'COD_Africa', name: 'Congo, DRC'},
                    {id: 'COK_Australia/Oceania', name: 'Cook Is.'},
                    {id: 'CRI_North America', name: 'Costa Rica'},
                    {id: 'CIV_Africa', name: 'Cote d\'Ivoire'},
                    {id: 'HRV_Europe', name: 'Croatia'},
                    {id: 'CUB_North America', name: 'Cuba'},
                    {id: 'CYP_Asia', name: 'Cyprus'},
                    {id: 'CZE_Europe', name: 'Czech Republic'},
                    {id: 'DNK_Europe', name: 'Denmark'},
                    {id: 'DJI_Africa', name: 'Djibouti'},
                    {id: 'DMA_North America', name: 'Dominica'},
                    {id: 'DOM_North America', name: 'Dominican Republic'},
                    {id: 'ECU_South America', name: 'Ecuador'},
                    {id: 'EGY_Africa', name: 'Egypt'},
                    {id: 'SLV_North America', name: 'El Salvador'},
                    {id: 'GNQ_Africa', name: 'Equatorial Guinea'},
                    {id: 'ERI_Africa', name: 'Eritrea'},
                    {id: 'EST_Europe', name: 'Estonia'},
                    {id: 'ETH_Africa', name: 'Ethiopia'},
                    {id: 'FLK_South America', name: 'Falkland Is.'},
                    {id: 'FRO_Europe', name: 'Faroe Is.'},
                    {id: 'FJI_Australia/Oceania', name: 'Fiji'},
                    {id: 'FIN_Europe', name: 'Finland'},
                    {id: 'FRA_Europe', name: 'France'},
                    {id: 'GUF_South America', name: 'French Guiana'},
                    {id: 'PYF_Australia/Oceania', name: 'French Polynesia'},
                    {id: 'GAB_Africa', name: 'Gabon'},
                    {id: 'PSE_Asia', name: 'Gaza Strip'},
                    {id: 'GEO_Asia', name: 'Georgia'},
                    {id: 'DEU_Europe', name: 'Germany'},
                    {id: 'GHA_Africa', name: 'Ghana'},
                    {id: 'GIB_Europe', name: 'Gibraltar'},
                    {id: 'GRC_Europe', name: 'Greece'},
                    {id: 'GRL_North America', name: 'Greenland'},
                    {id: 'GRD_North America', name: 'Grenada'},
                    {id: 'GLP_North America', name: 'Guadeloupe'},
                    {id: 'GUM_Australia/Oceania', name: 'Guam'},
                    {id: 'GTM_North America', name: 'Guatemala'},
                    {id: 'GIN_Africa', name: 'Guinea'},
                    {id: 'GNB_Africa', name: 'Guinea-Bissau'},
                    {id: 'GUY_South America', name: 'Guyana'},
                    {id: 'HTI_North America', name: 'Haiti'},
                    {id: 'HND_North America', name: 'Honduras'},
                    {id: 'HUN_Europe', name: 'Hungary'},
                    {id: 'ISL_Europe', name: 'Iceland'},
                    {id: 'IND_Asia', name: 'India'},
                    {id: 'IDN_Asia', name: 'Indonesia'},
                    {id: 'IRN_Asia', name: 'Iran'},
                    {id: 'IRQ_Asia', name: 'Iraq'},
                    {id: 'IRL_Europe', name: 'Ireland'},
                    {id: 'ISR_Asia', name: 'Israel'},
                    {id: 'ITA_Europe', name: 'Italy'},
                    {id: 'JAM_North America', name: 'Jamaica'},
                    {id: 'JPN_Asia', name: 'Japan'},
                    {id: 'JOR_Asia', name: 'Jordan'},
                    {id: 'KAZ_Asia', name: 'Kazakhstan'},
                    {id: 'KEN_Africa', name: 'Kenya'},
                    {id: 'KIR_Australia/Oceania', name: 'Kiribati'},
                    {id: 'XRK_Europe', name: 'Kosovo'},
                    {id: 'KWT_Asia', name: 'Kuwait'},
                    {id: 'KGZ_Asia', name: 'Kyrgyzstan'},
                    {id: 'LAO_Asia', name: 'Laos'},
                    {id: 'LVA_Europe', name: 'Latvia'},
                    {id: 'LBN_Asia', name: 'Lebanon'},
                    {id: 'LSO_Africa', name: 'Lesotho'},
                    {id: 'LBR_Africa', name: 'Liberia'},
                    {id: 'LBY_Africa', name: 'Libya'},
                    {id: 'LIE_Europe', name: 'Liechtenstein'},
                    {id: 'LTU_Europe', name: 'Lithuania'},
                    {id: 'LUX_Europe', name: 'Luxembourg'},
                    {id: 'MAC_Asia', name: 'Macao SAR, China'},
                    {id: 'MKD_Europe', name: 'Macedonia'},
                    {id: 'MDG_Africa', name: 'Madagascar'},
                    {id: 'MWI_Africa', name: 'Malawi'},
                    {id: 'MYS_Asia', name: 'Malaysia'},
                    {id: 'MDV_Asia', name: 'Maldives'},
                    {id: 'MLI_Africa', name: 'Mali'},
                    {id: 'MLT_Europe', name: 'Malta'},
                    {id: 'MHL_Australia/Oceania', name: 'Marshall Is.'},
                    {id: 'MTQ_North America', name: 'Martinique'},
                    {id: 'MRT_Africa', name: 'Mauritania'},
                    {id: 'MUS_Africa', name: 'Mauritius'},
                    {id: 'MYT_Africa', name: 'Mayotte'},
                    {id: 'MEX_North America', name: 'Mexico'},
                    {id: 'FSM_Australia/Oceania', name: 'Micronesia'},
                    {id: 'MDA_Europe', name: 'Moldova'},
                    {id: 'MCO_Europe', name: 'Monaco'},
                    {id: 'MNG_Asia', name: 'Mongolia'},
                    {id: 'MNE_Europe', name: 'Montenegro'},
                    {id: 'MSR_North America', name: 'Montserrat'},
                    {id: 'MAR_Africa', name: 'Morocco'},
                    {id: 'MOZ_Africa', name: 'Mozambique'},
                    {id: 'MMR_Asia', name: 'Myanmar'},
                    {id: 'NAM_Africa', name: 'Namibia'},
                    {id: 'NRU_Australia/Oceania', name: 'Nauru'},
                    {id: 'NPL_Asia', name: 'Nepal'},
                    {id: 'NLD_Europe', name: 'Netherlands'},
                    {id: 'ANT_North America', name: 'Netherlands Antilles'},
                    {id: 'NCL_Australia/Oceania', name: 'New Caledonia'},
                    {id: 'NZL_Australia/Oceania', name: 'New Zealand'},
                    {id: 'NIC_North America', name: 'Nicaragua'},
                    {id: 'NER_Africa', name: 'Niger'},
                    {id: 'NGA_Africa', name: 'Nigeria'},
                    {id: 'NIU_Australia/Oceania', name: 'Niue'},
                    {id: 'NFK_Australia/Oceania', name: 'Norfolk I.'},
                    {id: 'PRK_Asia', name: 'North Korea'},
                    {id: 'MNP_Australia/Oceania', name: 'Northern Mariana Is.'},
                    {id: 'NOR_Europe', name: 'Norway'},
                    {id: 'OMN_Asia', name: 'Oman'},
                    {id: 'PAK_Asia', name: 'Pakistan'},
                    {id: 'PLW_Australia/Oceania', name: 'Palau'},
                    {id: 'PAN_North America', name: 'Panama'},
                    {id: 'PNG_Australia/Oceania', name: 'Papua New Guinea'},
                    {id: 'PRY_South America', name: 'Paraguay'},
                    {id: 'PER_South America', name: 'Peru'},
                    {id: 'PHL_Asia', name: 'Philippines'},
                    {id: 'PCN_Australia/Oceania', name: 'Pitcairn Is.'},
                    {id: 'POL_Europe', name: 'Poland'},
                    {id: 'PRT_Europe', name: 'Portugal'},
                    {id: 'PRI_North America', name: 'Puerto Rico'},
                    {id: 'QAT_Asia', name: 'Qatar'},
                    {id: 'REU_Africa', name: 'Reunion'},
                    {id: 'ROU_Europe', name: 'Romania'},
                    {id: 'RUS_Asia', name: 'Russia'},
                    {id: 'RWA_Africa', name: 'Rwanda'},
                    {id: 'WSM_Australia/Oceania', name: 'Samoa'},
                    {id: 'SMR_Europe', name: 'San Marino'},
                    {id: 'STP_Africa', name: 'Sao Tome & Principe'},
                    {id: 'SAU_Asia', name: 'Saudi Arabia'},
                    {id: 'SEN_Africa', name: 'Senegal'},
                    {id: 'SRB_Europe', name: 'Serbia'},
                    {id: 'SYC_Africa', name: 'Seychelles'},
                    {id: 'SLE_Africa', name: 'Sierra Leone'},
                    {id: 'SGP_Asia', name: 'Singapore'},
                    {id: 'SVK_Europe', name: 'Slovakia'},
                    {id: 'SVN_Europe', name: 'Slovenia'},
                    {id: 'SLB_Australia/Oceania', name: 'Solomon Is.'},
                    {id: 'SOM_Africa', name: 'Somalia'},
                    {id: 'ZAF_Africa', name: 'South Africa'},
                    {id: 'KOR_Asia', name: 'South Korea'},
                    {id: 'SSD_Africa', name: 'South Sudan'},
                    {id: 'ESP_Europe', name: 'Spain'},
                    {id: 'LKA_Asia', name: 'Sri Lanka'},
                    {id: 'SHN_Africa', name: 'St. Helena'},
                    {id: 'KNA_North America', name: 'St. Kitts & Nevis'},
                    {id: 'LCA_North America', name: 'St. Lucia'},
                    {id: 'VCT_North America', name: 'St. Vincent & the Grenadines'},
                    {id: 'SDN_Africa', name: 'Sudan'},
                    {id: 'SUR_South America', name: 'Suriname'},
                    {id: 'SJM_Europe', name: 'Svalbard'},
                    {id: 'SWZ_Africa', name: 'Swaziland'},
                    {id: 'SWE_Europe', name: 'Sweden'},
                    {id: 'CHE_Europe', name: 'Switzerland'},
                    {id: 'SYR_Asia', name: 'Syria'},
                    {id: 'TJK_Asia', name: 'Tajikistan'},
                    {id: 'TZA_Africa', name: 'Tanzania'},
                    {id: 'THA_Asia', name: 'Thailand'},
                    {id: 'BHS_North America', name: 'The Bahamas'},
                    {id: 'GMB_Africa', name: 'The Gambia'},
                    {id: 'TLS_Australia/Oceania', name: 'Timor Leste'},
                    {id: 'TGO_Africa', name: 'Togo'},
                    {id: 'TKL_Australia/Oceania', name: 'Tokelau'},
                    {id: 'TON_Australia/Oceania', name: 'Tonga'},
                    {id: 'TTO_South America', name: 'Trinidad & Tobago'},
                    {id: 'TUN_Africa', name: 'Tunisia'},
                    {id: 'TUR_Asia', name: 'Turkey'},
                    {id: 'TKM_Asia', name: 'Turkmenistan'},
                    {id: 'TCA_North America', name: 'Turks & Caicos Is.'},
                    {id: 'TUV_Australia/Oceania', name: 'Tuvalu'},
                    {id: 'UGA_Africa', name: 'Uganda'},
                    {id: 'UKR_Europe', name: 'Ukraine'},
                    {id: 'ARE_Asia', name: 'United Arab Emirates'},
                    {id: 'GBR_Europe', name: 'United Kingdom'},
                    {id: 'USA_North America', name: 'United States'},
                    {id: 'URY_South America', name: 'Uruguay'},
                    {id: 'UZB_Asia', name: 'Uzbekistan'},
                    {id: 'VUT_Australia/Oceania', name: 'Vanuatu'},
                    {id: 'VEN_South America', name: 'Venezuela'},
                    {id: 'VNM_Asia', name: 'Vietnam'},
                    {id: 'VIR_North America', name: 'Virgin Is.'},
                    {id: 'WLF_Australia/Oceania', name: 'Wallis & Futuna'},
                    {id: 'ESH_Africa', name: 'Western Sahara'},
                    {id: 'YEM_Asia', name: 'Yemen'},
                    {id: 'ZMB_Africa', name: 'Zambia'},
                    {id: 'ZWE_Africa', name: 'Zimbabwe'}
                ];

                var reset = function () {
                    $scope.selectedItemsTasMonthly = [];
                    $scope.selectedItemsPrMonthly = [];

                    $scope.chartTasLabels = [];
                    $scope.chartTasSeries = [];
                    $scope.chartTasData = [];
                    $scope.chartPrLabels = [];
                    $scope.chartPrSeries = [];
                    $scope.chartPrData = [];

                    $scope.showData = false;
                    $scope.showTas = false;
                    $scope.showPr = false;
                    $scope.showCharts = false;

                };
                reset();
                $scope.selected = function () {
                    reset();
                }
                $scope.selectedFromYear = function () {
                    $scope.toYear = (parseInt($scope.fromYear) + 19).toString();
                    reset();
                }
                $scope.selectedToYear = function () {
                    $scope.fromYear = (parseInt($scope.toYear) - 19).toString();
                    reset();
                }

                $scope.submitForBoth = function () {
                    var e_arr = validateParams();
                    if (e_arr.length > 0) {
                        var e_str = e_arr.toString();
                        confirm("All search params required. Missing params " + e_str + ".");
                        return;
                    }                    
                    var bToContinue = {};
                    if ($scope.selectedCountry.length > 50) {
                        bToContinue = confirm("Are you sure you want to continue?\nYou have selected over 50 countries. Obtaining data might take a long time.");
                    }
                    if (!bToContinue) {
                        return;
                    }
                    reset();

                    getTempData();
                    getPrecipData();
                };
                $scope.submitForTemperature = function () {
                    var e_arr = validateParams();
                    if (e_arr.length > 0) {
                        var e_str = e_arr.toString();
                        confirm("All search params required. Missing params " + e_str + ".");
                        return;
                    }
                    var bToContinue = {};
                    if ($scope.selectedCountry.length > 50) {
                        bToContinue = confirm("Are you sure you want to continue?\nYou have selected over 50 countries. Obtaining data might take a long time.");
                    }
                    if (!bToContinue) {
                        return;
                    }                    
                    reset();
                    getTempData();
                };
                var getTempData = function () {
                    for (var i = 0; i < $scope.selectedCountry.length; i++) {
                        var countryCode = $scope.selectedCountry[i].substr(0, 3);
                        var params = {
                            var : "tas",
                            type: $scope.selectedType,
                            start: $scope.fromYear,
                            end: $scope.toYear,
                            ISO3: countryCode
                        };
                        RestClientService.query(params).then(function (response) {
                            if (typeof response == "undefined" || response.length < 1) {
                                /*
                                 $scope.modalHeaderText = "Warning";
                                 $scope.modalBodyText = "No data returned. Check your search parameters and try again.";
                                 var modalInstance = $modal.open({
                                 templateUrl: '/ClimateDataProto/components/gui/modal.tmpl.html',
                                 controller: 'ModalInstanceCtrl'
                                 });
                                 */
                                confirm("No data returned. Check your search parameters and try again.");
                            }
                            else {
                                popupWindow(response);
                            }
                        });
                    }
                    ;
                };
                $scope.submitForPrecipitation = function () {
                    var e_arr = validateParams();
                    if (e_arr.length > 0) {
                        var e_str = e_arr.toString();
                        confirm("All search params required. Missing params " + e_str + ".");
                        return;
                    }
                    var bToContinue = {};
                    if ($scope.selectedCountry.length > 50) {
                        bToContinue = confirm("Are you sure you want to continue?\nYou have selected over 50 countries. Obtaining data might take a long time.");
                    }
                    if (!bToContinue) {
                        return;
                    }                    
                    reset();
                    getPrecipData();
                };
                var validateParams = function () {
                    var missing = [];
                    if (typeof $scope.selectedType === "undefined")
                        missing.push("type");
                    if (typeof $scope.fromYear === "undefined")
                        missing.push("fromYear");
                    if (typeof $scope.toYear === "undefined")
                        missing.push("toYear");
                    if (typeof $scope.selectedCountry === "undefined")
                        missing.push("Country");
                    return missing;
                }
                var getPrecipData = function () {
                    for (var i = 0; i < $scope.selectedCountry.length; i++) {
                        var countryCode = $scope.selectedCountry[i].substr(0, 3);
                        var params = {
                            var : "pr",
                            type: $scope.selectedType,
                            start: $scope.fromYear,
                            end: $scope.toYear,
                            ISO3: countryCode
                        };
                        RestClientService.query(params).then(function (response) {
                            if (typeof response == "undefined" || response.length < 1) {
                                /*
                                 $scope.modalHeaderText = "Warning";
                                 $scope.modalBodyText = "No data returned. Check your search parameters and try again.";
                                 var modalInstance = $modal.open({
                                 templateUrl: '/ClimateDataProto/components/gui/modal.tmpl.html',
                                 controller: 'ModalInstanceCtrl'
                                 });
                                 */
                                confirm("No data returned. Check your search parameters and try again.");
                            }
                            else {
                                $scope.dataItems = [];
                                popupWindow(response);
                            }
                        });
                    }
                    ;
                };
                var parseData = function (data) {
                    var refinedData = new Array();
                    var params = data.params;
                    if (params.var !== 'tas'
                            && params.var !== 'pr') {
                        //should never happen
                        return;
                    }
                    switch (params.type) {
                        case 'mavg':
                            for (var i = data.length - 1; i >= 0; i--) {
                                var item = {};
                                item.Country = params.ISO3;
                                item.Year = parseInt(params.end) - i;

                                item.Jan = data[i].monthVals[0];
                                item.Feb = data[i].monthVals[1];
                                item.Mar = data[i].monthVals[2];
                                item.Apr = data[i].monthVals[3];
                                item.May = data[i].monthVals[4];
                                item.Jun = data[i].monthVals[5];
                                item.Jul = data[i].monthVals[6];
                                item.Aug = data[i].monthVals[7];
                                item.Sep = data[i].monthVals[8];
                                item.Oct = data[i].monthVals[9];
                                item.Nov = data[i].monthVals[10];
                                item.Dec = data[i].monthVals[11];
                                refinedData.push(item);
                            }
                            break;
                        case 'annualavg':
                            for (var i = data.length - 1; i >= 0; i--) {
                                var item = {};
                                item.Country = params.ISO3;
                                item.Year = parseInt(params.end) - i;
                                if (params.var === 'pr')
                                    item.PrecipitationAvg = data[i].annualData[0];
                                else if (params.var === 'tas')
                                    item.TemperatureAvg = data[i].annualData[0];
                                refinedData.push(item);
                            }
                            break;
                        case 'manom':
                            for (var i = 0; i < data.length; i++) {
                                var item = {};
                                item.Country = params.ISO3;
                                item.Year = parseInt(params.start) + i;

                                item.Jan = data[i].monthVals[0];
                                item.Feb = data[i].monthVals[1];
                                item.Mar = data[i].monthVals[2];
                                item.Apr = data[i].monthVals[3];
                                item.May = data[i].monthVals[4];
                                item.Jun = data[i].monthVals[5];
                                item.Jul = data[i].monthVals[6];
                                item.Aug = data[i].monthVals[7];
                                item.Sep = data[i].monthVals[8];
                                item.Oct = data[i].monthVals[9];
                                item.Nov = data[i].monthVals[10];
                                item.Dec = data[i].monthVals[11];
                                refinedData.push(item);
                            }
                            break;
                        case 'annualanom':
                            for (var i = 0; i < data.length; i++) {
                                var item = {};
                                item.Country = params.ISO3;
                                item.Year = parseInt(params.start) + i;
                                if (params.var === 'tas') {
                                    item.AnnualTempAnom = data[i].annualData[0];
                                } else if (params.var === 'pr') {
                                    item.AnnualPrecipitationAnom = data[i].annualData[0];
                                }
                                refinedData.push(item);
                            }
                            break;
                    }

                    return refinedData;
                }
                var popupWindow = function (data) {
                    $scope.showData = true;
                    $("#collapseSearchParams").collapse('hide');
                    if (data.params.type === 'mavg' || data.params.type === 'manom')
                        popupMonthly(data);
                    if (data.params.type === 'annualavg' || data.params.type === 'annaulanom')
                        popupAnnual(data);
                }
                var popupMonthly = function (data) {
                    var refinedData = parseData(data);
                    if (data.params.var === 'tas') {
                        $scope.showTas = true;
                        $("#collapseTas").collapse('show');
                        if (typeof $scope.dataItemsMonthlyTas === "undefined" || $scope.dataItemsMonthlyTas.length < 1) {
                            $scope.dataItemsMonthlyTas = refinedData;
                        }
                        else {
                            for (var i = 0; i < refinedData.length; i++) {
                                $scope.dataItemsMonthlyTas.push(refinedData[i]);
                            }
                        }
                    }
                    if (data.params.var === 'pr') {
                        $scope.showPr = true;
                        $("#collapsePr").collapse('show');
                        if (typeof $scope.dataItemsMonthlyPr === "undefined" || $scope.dataItemsMonthlyPr.length < 1) {
                            $scope.dataItemsMonthlyPr = refinedData;
                        }
                        else {
                            for (var i = 0; i < refinedData.length; i++) {
                                $scope.dataItemsMonthlyPr.push(refinedData[i]);
                            }
                        }
                    }
                };
                var popupAnnual = function (data) {
                    var refinedData = parseData(data);
                    if (data.params.var === 'tas') {
                        $scope.showTas = true;
                        if (typeof $scope.dataItemsAnnualTas === "undefined" || $scope.dataItemsAnnualTas.length < 1) {
                            $scope.dataItemsAnnualTas = refinedData;
                        } else {
                            for (var i = 0; i < refinedData.length; i++) {
                                $scope.dataItemsAnnualTas.push(refinedData[i]);
                            }
                        }
                    }
                    if (data.params.var === 'pr') {
                        $scope.showPr = true;
                        if (typeof $scope.dataItemsAnnualPr === "undefined" || $scope.dataItemsAnnualPr.length < 1) {
                            $scope.dataItemsAnnualPr = refinedData;
                        } else {
                            for (var i = 0; i < refinedData.length; i++) {
                                $scope.dataItemsAnnualPr.push(refinedData[i]);
                            }
                        }
                    }
                };
                $scope.onClickCompareTas = function () {
                    $scope.showCharts = true;
                    $scope.chartTasLabels = [];
                    $scope.chartTasSeries = [];
                    $scope.chartTasData = [];

                    if (typeof $scope.selectedItemsTasMonthly !== "undefined" &&
                            $scope.selectedItemsTasMonthly.length > 1)
                        fillTasMonthly();
                    else if (typeof $scope.dataItemsAnnualTas !== "undefined")
                        fillTasAnnual();
                    else {
                        confirm("Select some data rows to compare");
                        return;
                    }
                    window.scrollTo(0, document.body.scrollHeight);
                    $scope.onChartTasClick = function (points, evt) {
                        console.log(points, evt);
                    };
                };
                $scope.onClickComparePr = function () {
                    $scope.showCharts = true;
                    $scope.chartPrLabels = [];
                    $scope.chartPrSeries = [];
                    $scope.chartPrData = [];

                    if (typeof $scope.selectedItemsPrMonthly !== "undefined" &&
                            $scope.selectedItemsPrMonthly.length > 1)
                        fillPrMonthly();
                    else if (typeof $scope.dataItemsAnnualPr !== "undefined")
                        fillPrAnnual();
                    else {
                        confirm("Select some data rows to compare");
                        return;
                    }

                    window.scrollTo(0, document.body.scrollHeight);
                    $scope.onChartPrClick = function (points, evt) {
                        console.log(points, evt);
                    };
                };

                var fillTasMonthly = function () {
                    $scope.chartTasLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    for (var i = 0; i < $scope.selectedItemsTasMonthly.length; i++) {
                        var country = $scope.selectedItemsTasMonthly[i]["Country"];
                        var year = $scope.selectedItemsTasMonthly[i]["Year"];
                        $scope.chartTasSeries.push(country + "-" + year);
                        var data = [];
                        for (var j = 0; j < 12; j++) {
                            data[j] = $scope.selectedItemsTasMonthly[i][$scope.chartTasLabels[j]];
                        }
                        $scope.chartTasData.push(data);
                    }
                };
                var fillTasAnnual = function () {
                    $scope.chartTasLabels = [];

                    for (var i = 0; i < $scope.dataItemsAnnualTas.length; i++) {
                        var country = $scope.dataItemsAnnualTas[i]["Country"];
                        checkAndAddCountry($scope.chartTasSeries, country);
                        var year = $scope.dataItemsAnnualTas[i]["Year"];
                        checkAndAddCountry($scope.chartTasLabels, year);
                    }

                    for (var i = 0; i < $scope.chartTasSeries.length; i++) {
                        var data = [];
                        for (var j = 0; j < $scope.chartTasLabels.length; j++)
                        {
                            for (var n = 0; n < $scope.dataItemsAnnualTas.length; n++) {
                                if ($scope.dataItemsAnnualTas[n]["Country"] === $scope.chartTasSeries[i] &&
                                        $scope.dataItemsAnnualTas[n]["Year"] === $scope.chartTasLabels[j]) {
                                    data[j] = $scope.dataItemsAnnualTas[n]["TemperatureAvg"];
                                }
                            }
                        }
                        $scope.chartTasData.push(data);
                    }
                };
                var fillPrMonthly = function () {
                    $scope.chartPrLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    for (var i = 0; i < $scope.selectedItemsPrMonthly.length; i++) {
                        var country = $scope.selectedItemsPrMonthly[i]["Country"];
                        var year = $scope.selectedItemsPrMonthly[i]["Year"];
                        $scope.chartPrSeries.push(country + "-" + year);
                        var data = [];
                        for (var j = 0; j < 12; j++) {
                            data[j] = $scope.selectedItemsPrMonthly[i][$scope.chartPrLabels[j]];
                        }
                        $scope.chartPrData.push(data);
                    }
                };
                var fillPrAnnual = function () {
                    $scope.chartPrLabels = [];

                    for (var i = 0; i < $scope.dataItemsAnnualPr.length; i++) {
                        var country = $scope.dataItemsAnnualPr[i]["Country"];
                        checkAndAddCountry($scope.chartPrSeries, country);
                        var year = $scope.dataItemsAnnualPr[i]["Year"];
                        checkAndAddCountry($scope.chartPrLabels, year);
                    }

                    for (var i = 0; i < $scope.chartPrSeries.length; i++) {
                        var data = [];
                        for (var j = 0; j < $scope.chartPrLabels.length; j++)
                        {
                            for (var n = 0; n < $scope.dataItemsAnnualPr.length; n++) {
                                if ($scope.dataItemsAnnualPr[n]["Country"] === $scope.chartPrSeries[i] &&
                                        $scope.dataItemsAnnualPr[n]["Year"] === $scope.chartPrLabels[j]) {
                                    data[j] = $scope.dataItemsAnnualPr[n]["PrecipitationAvg"];
                                }
                            }
                        }
                        $scope.chartPrData.push(data);
                    }
                };

                function checkAndAddCountry(arr, country) {
                    var found = arr.some(function (el) {
                        return el === country;
                    });
                    if (!found) {
                        arr.push(country);
                    }
                }
                ;

            }]);



                        