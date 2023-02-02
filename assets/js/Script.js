const apikey = "6fb2b354c822933f6fd35ad30af473fe"


let order = 1

onload = function LoadForecast() {

    let lon = "39.9527237";

    let lat = "-75.1635262"; 

fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+apikey+"&units=imperial&cnt=5&exclude=hourly,minutelyalerts")
.then(response => response.json())
    .then(data => {

        console.log(data)
    })
};

onload = function LoadCities() {

};


function CitySearch(cityinput)
{
    console.log("Hi")

    fetch("https://api.openweathermap.org/geo/1.0/direct?q="+cityinput+"&limit=5&appid="+apikey+"&units=imperial")
    .then(response => response.json())
    .then(data => {

        

    var place = data[0].name;
    console.log(place);

    var latitude = data[0].lat;
    console.log("Lat:"+latitude);

    var longitude = data[0]["lon"];
    console.log("Lon:"+longitude);

    CurrentWeatherSearch(latitude,longitude)
    })

    .catch(error => 
        {console.error("Wrong")

    console.log(error)
    })

}

function CurrentWeatherSearch(latitude,longitude){

    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+apikey+"&units=imperial")
    .then(response => response.json())
    .then(data =>{
    
        
     var location = data["name"];
     console.log(location)

     var temp = "Temp: "+(data["main"]["temp"])+"°F";
     console.log(temp)

     var wind = "Wind Speed: "+(data["wind"]["speed"])+" MPH";
     console.log(wind)

     var humidity = "Humidity: "+(data["main"]["humidity"])+"%";
     console.log(humidity)
    


    console.log(longitude)
    console.log(latitude)

    $(".CityDisplay > .City").text(location);
    $(".CityDisplay > .Temp").text(temp);
    $(".CityDisplay > .Wind").text(wind);
    $(".CityDisplay > .Humidity").text(humidity);

    })

}


$(document).ready(function () {
    console.log("ready")
    // saveBtn click listener 
    $(".searchbutton").on("click", function () {
        // Get nearby values of the description in JQuery
        console.log ("Taco Searching For City Weather")

        var cityinput = $(this).siblings("#cityinput").val();

        if (order == 1) {
        localStorage.setItem("City1", cityinput); 
        order++;
        }

        else if (order == 2){
        localStorage.setItem("City2", cityinput);
        order++;
        }

        else if (order == 3){
        localStorage.setItem("City3", cityinput);
        order ++
        }

        else if (order == 4){
        localStorage.setItem("City4", cityinput);
        order = 1
        } 


        CitySearch(cityinput);


    }

    )
})
