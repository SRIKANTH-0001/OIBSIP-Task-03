const celsiusEl=document.getElementById("celcius");
const faherenheitEl=document.getElementById("fahrenheit");
const kelvinEl=document.getElementById("kelvin");


function computetemp( event){
    const presentValue= +event.target.value;
    
    switch (event.target.name) {
        case "celcius":
            kelvinEl.value=(presentValue + 273.15).toFixed(2);
            faherenheitEl.value=(presentValue * 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit":
            kelvinEl.value=((presentValue - 32)/1.8+273.15).toFixed(2);
            celsiusEl.value=((presentValue - 32)/1.8).toFixed(2);
            break;

        case "kelvin":
            faherenheitEl.value=((presentValue - 273.15)* 1.8+32).toFixed(2);
            celsiusEl.value=((presentValue - 273.15)).toFixed(2);
            break;
        
        default:
            break;
    }
}