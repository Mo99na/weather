function getWeatherData(city)  {
    
    
        const url = `http://api.weatherapi.com/v1/current.json?key=c75638b5e22f4aa487834946231008&q=${city}`;
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {const weatherData = {
                      temperature: data.temp_c,
                        location: data.name,
                    };
                    return weatherData;
                  });
                
   
};


  function updateUI(weatherData) {
    const temperature = document.querySelector(".temp p");
    const condition = document.querySelector(".humidity");
    const location = document.querySelector(".country");
  
    temperature.innerHTML = `${weatherData.temperature}`;
    location.innerHTML = `${weatherData.location}`;
  }


  const searchBtn = document.querySelector(".find");
const searchBar = document.querySelector(".right");

searchBtn.addEventListener("click", () => {
  const city = searchBar.value;
  getWeatherData(city)
    .then(weatherData => {
      updateUI(weatherData);
    })
    .catch(error => {
      console.log(error);
    });
});