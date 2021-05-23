function CallPageMethod(methodName, query) {
    var loc = "http://api.weatherstack.com";
    loc = (loc.substr(loc.length - 1, 1) == "/") ? loc + "default.aspx" : loc;
    $.ajax({
        type: "GET",
        url: loc + "/" + methodName,
        data: {
            access_key: '347ecee25ef29efa0cd06cd0da0d32dd',
            query: query
        },
        dataType: "json",
    })

    .done(function(data) {
        console.log(data);
        resultado = document.querySelector('#demo');
        resultado.innerHTML = data.current.temperature;
        return(data.current.temperature);

    })

    .fail(function(){
        alert("error");
    });
}
