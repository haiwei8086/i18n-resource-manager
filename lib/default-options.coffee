
DefaultOptions =
{
    key: { platform: "_null", subPlatform: "_null", country: "US"},
    phyPath: process.cwd(),
    rules: [
       '_default/country/_default',
       '_default/country/{country}',
       '_default/{subPlatform}/country/_default',
       '_default/{subPlatform}/country/{country}',
       '{platform}/country/_default',
       '{platform}/country/{country}',
       '{platform}/{subPlatform}/country/_default',
       '{platform}/{subPlatform}/country/{country}'
    ],
    isOnlyLeafFiles: true,
    isMultifile: false,
    isProperties: false
}

module.exports = DefaultOptions