// script.js
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

//Podpięcie żądania pod przycisk id search
$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val(); //Pobieranie wartości wpisanej przez usera i przypisanie do zmiennej
if(!countryName.length) countryName = 'Poland'; //warunek sprawdzający, czy pole tekstowe nie jest przypadkiem puste, jeśli tak, ustawmiamy jego wartość na "Poland".
$.ajax({
        url: url + countryName, //Metoda
        method: 'GET', // wyszukiwania
        success: showCountriesList // napisana za pomocą jQuery'owego ajaxa
    });
}
//Pobieranie wyników
function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<li>').text(item.name).appendTo(countriesList);
    });
}