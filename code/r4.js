function CallPageMethod(query) {
    var loc = "http://api.openweathermap.org/data/2.5";
    $.ajax({
        type: "GET",
        url: loc + "/" + "weather",
        cache: false,
        data: {
           q: query,
           appid: '902f718fe489465ff24fc7dc39cabc82'
        },
        dataType: "json",
    })

    .done(function(data) {
        console.log(data);
        var tag = "#" + data.name;
        resultado = document.querySelector(tag);
        resultado.innerHTML = data.main.temp;
        return(data.main.temp);

    })

    .fail(function(){
        alert("error");
    });
}

function CallPageMethods() {
	var cities = ["Rome", "London", "Madrid", "Mumbai", "Milan", "Toronto"];
	for (var i = cities.length - 1; i >= 0; i--) {
		CallPageMethod(cities[i]);
	}

}