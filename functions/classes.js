
function countryNames(countries) {
  return countries.map(country => country.country);
}
console.log(countryNames(data))
#endregion
#region
function countCountryFirstLetter(data) {
    let countryCounts = {};
    for (let country of data) {
        let firstLetter = country.country.charAt(0);
        if (!countryCounts[firstLetter]) {
            countryCounts[firstLetter] = 0;
        }
        countryCounts[firstLetter]++;
    }
    return countryCounts;

}

console.log(countCountryFirstLetter(data))

#endregion
#region
function getMaxCitiesCountryName(data) {
    let maxCitiesCountry = null;
    let maxCitiesCount = 0;

    for (let country of data) {
        if (country.cities.length > maxCitiesCount) {
            maxCitiesCount = country.cities.length;
            maxCitiesCountry = country.country;

        }
    }

    return maxCitiesCountry;
}

console.log(getMaxCitiesCountryName(data));
#endregion
#region
function cityName(data) {
    let longestCountryName = '';
    let citiesOfLongestCountryName = [];

    for (let country of data) {
        if (country.country.length > longestCountryName.length) {
            longestCountryName = country.country;
            citiesOfLongestCountryName = country.cities;
        }
    }
    return citiesOfLongestCountryName;
}
console.log(cityName(data));
#endregio
#region
function cityNumber(data) {
    let cityNumbers = {};

    for (let country of data) {
        cityNumbers[country.country] = country.cities.length;
    }
    return cityNumbers;
}
console.log(cityNumber(data));


