document.getElementById('getWeather').addEventListener('click', () => {
  const city = document.getElementById('city').value.toLowerCase();
  const weatherData = {
      'kolkata': {
          temperature: '29°C',
          description: 'Partly cloudy',
          humidity: '75%',
          windSpeed: '7 m/s'
      },
      'durgapur': {
          temperature: '27°C',
          description: 'Sunny',
          humidity: '70%',
          windSpeed: '5 m/s'
      },
      'howrah': {
          temperature: '28°C',
          description: 'Clear sky',
          humidity: '72%',
          windSpeed: '6 m/s'
      },
      'asansol': {
          temperature: '26°C',
          description: 'Partly cloudy',
          humidity: '67%',
          windSpeed: '4 m/s'
      },
      'siliguri': {
          temperature: '22°C',
          description: 'Overcast',
          humidity: '80%',
          windSpeed: '5 m/s'
      },
      'berhampore': {
          temperature: '25°C',
          description: 'Mist',
          humidity: '78%',
          windSpeed: '4 m/s'
      },
      'malda': {
          temperature: '30°C',
          description: 'Sunny',
          humidity: '72%',
          windSpeed: '6 m/s'
      },
      'raiganj': {
          temperature: '24°C',
          description: 'Showers',
          humidity: '79%',
          windSpeed: '5 m/s'
      },
      'krishnanagar': {
          temperature: '27°C',
          description: 'Partly cloudy',
          humidity: '74%',
          windSpeed: '4 m/s'
      },
      'kalyani': {
          temperature: '28°C',
          description: 'Clear sky',
          humidity: '76%',
          windSpeed: '6 m/s'
      },
      'jalpaiguri': {
          temperature: '23°C',
          description: 'Rain showers',
          humidity: '82%',
          windSpeed: '5 m/s'
      },
      'burdwan': {
          temperature: '29°C',
          description: 'Clear sky',
          humidity: '77%',
          windSpeed: '7 m/s'
      },
      'bankura': {
          temperature: '26°C',
          description: 'Mostly sunny',
          humidity: '70%',
          windSpeed: '5 m/s'
      },
      'purulia': {
          temperature: '28°C',
          description: 'Sunny',
          humidity: '65%',
          windSpeed: '6 m/s'
      },
      'midnapore': {
          temperature: '27°C',
          description: 'Partly cloudy',
          humidity: '73%',
          windSpeed: '5 m/s'
      }
  };

  const data = weatherData[city];

  if (data) {
      document.getElementById('temperature').textContent = `Temperature: ${data.temperature}`;
      document.getElementById('description').textContent = `Description: ${data.description}`;
      document.getElementById('humidity').textContent = `Humidity: ${data.humidity}`;
      document.getElementById('windSpeed').textContent = `Wind Speed: ${data.windSpeed}`;
  } else {
      alert('City not found');
      // Clear weather data if city not found
      document.getElementById('temperature').textContent = '';
      document.getElementById('description').textContent = '';
      document.getElementById('humidity').textContent = '';
      document.getElementById('windSpeed').textContent = '';
  }
});