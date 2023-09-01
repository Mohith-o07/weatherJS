const cityform=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');
const forecast=new Forecast();
const updateUI=(data)=>{
    // const citydet=data.citydet;
    // const weather=data.weather;
    console.log(data);
    const {citydet,weather}=data;
    details.innerHTML=`
    <h5 class="my-3">${citydet.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>
    `;
    //update night/day and icon images..
    let timesrc=weather.IsDayTime?'day.svg':'night.svg';
    const iconsrc=`icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconsrc);
    time.setAttribute('src',timesrc);
    if(card.classList.contains('d-none'))
    card.classList.remove('d-none');
};
cityform.addEventListener('submit',e=>{
    e.preventDefault();
    const city=cityform.city.value.trim();
    cityform.reset();
    forecast.updateCity(city).
    then(data=>updateUI(data))
    .catch(err=>console.log(err));

    localStorage.setItem('city',city);
});
if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.city)
    .then(data=>updateUI(data))
    .catch(err=>console.log(err));
}