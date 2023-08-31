const cityform=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');
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
    // if(weather.IsDayTime){
    //     timesrc='day.svg';
    // }
    // else{
    //     timesrc='night.svg';
    // }
    time.setAttribute('src',timesrc);
    if(card.classList.contains('d-none'))
    card.classList.remove('d-none');
};
const updatecity=async(city)=>{
const citydet=await getcity(city);
const weather=await getweather(citydet.Key);
return {citydet,weather};
};
cityform.addEventListener('submit',e=>{
    e.preventDefault();
    const city=cityform.city.value.trim();
    cityform.reset();
    updatecity(city).
    then(data=>updateUI(data))
    .catch(err=>console.log(err));

    localStorage.setItem('city',city);
});
if(localStorage.getItem('city')){
    updatecity(localStorage.city)
    .then(data=>updateUI(data))
    .catch(err=>console.log(err));
}