$(document).ready(function () {
    console.log("ready")
    // saveBtn click listener 
    $(".loadbutton").on("click", function () {
        // Get nearby values of the description in JQuery
        console.log ("Loading Previous Search")

        var text = $(this).siblings("#event").val();
        var time = $(this).parent().parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
})

fetch("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+apikey+"&units=imperial")
    .then(response => response.json())
    .then(data =>{
    
    location = data["name"];
    temp = "Temp: "(data["temp"])+"°F";
    wind = "Wind Speed: "(data["wind"]["speed"])+"MPH";
    humidity = "Humidity: "(data ["humidity"])+"%";

    console.log(location)
    console.log(temp)
    console.log(wind)
    console.log(humidity)

    console.log(longitude)
    console.log(latitude)

    $(" .CityDisplay > .Location").val(location);
    $(" .CityDisplay > .Temp").val(temp);
    $(" .CityDisplay > .Wind").val(wind);
    $(" .CityDisplay > .Humidity").val(humidity);

    })
    

    