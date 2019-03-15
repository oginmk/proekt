for (i = 1; i <= 7; i++) {
    var gradovi = [" 0 ", "41.9960,21.4316", "50.1109,8.6821", "52.2297,21.0122", "44.7866,20.4489", "59.3293,18.0686", "55.7558,37.6173", "51.2277,6.7735",];
    var gradoviIminja = ["prazno", "Skopje", "Frankfurt", "Warsaw", "Belgrade", "Stockholm", "Moscow", "Dusseldorf"];
    $.ajax(
        {
            ajaxI: i,
            type: 'GET',
            url: 'https://api.darksky.net/forecast/81174eafc49a6afc4b8773f1ebff8451/' + gradovi[i] + '?units=si',
            success: function (rak) {
                i = this.ajaxI;
                var BaraniVrednosti = rak.timezone;
                var temp1 = "#ImeGrad" + i;
                $(temp1).text(gradoviIminja[i]);
                var temperatura = rak.currently.temperature;
                var temp2 = "#TextStepeni" + i;
                $(temp2).text(temperatura + ' C');
                var tumor2 = rak.hourly.summary;
                var tumor = rak.currently.summary;
                var temp3 = "#eden" + i;
                $(temp3).text(tumor + ', and it will be ' + tumor2);
                var sida = rak.currently.humidity;
                var temp4 = "#dva" + i;
                $(temp4).text('Humidity is : ' + sida * 100 + '%');
                var ebola = rak.currently.windSpeed;
                var temp5 = "#tri" + i;
                $(temp5).text('Wind Speed is : ' + ebola + ' km/h');
            }
        });
}