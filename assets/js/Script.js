const apikey = "6fb2b354c822933f6fd35ad30af473fe"


let order = 1


onload = function LoadForecast() {

};

onload = function LoadCities() {

};


function CitySearch()
{
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+cityinput+"&limit=5&appid="+apikey+"&units=imperial")
    .then(response => response.json())
    .then(data => {

    var location = data.name[0];
    console.log(location);

    var latitude = (data["coord"]["lat"]);
    console.log(latitude);

    var longitude = (data["coord"]["lon"]);
    console.log(longitude);

    

    })

    .catch(error => alert("Wrong"))

}


$(document).ready(function () {
    console.log("ready")
    // saveBtn click listener 
    $(".searchbutton").on("click", function () {
        // Get nearby values of the description in JQuery
        console.log ("Searching For City Weather")

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

        CitySearch();


    }

    )
})
