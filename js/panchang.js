const panchang = {
    tithi: "Ekadashi",
    nakshatra: "Rohini",
    yoga: "Siddhi",
    karana: "Bava",
    sunrise: "05:42 AM",
    sunset: "06:58 PM",
    moonrise: "03:20 PM",
    moonset: "02:15 AM"
};

function loadPanchang() {

    document.getElementById("tithi").textContent = panchang.tithi;
    document.getElementById("nakshatra").textContent = panchang.nakshatra;
    document.getElementById("yoga").textContent = panchang.yoga;
    document.getElementById("karana").textContent = panchang.karana;
    document.getElementById("sunrise").textContent = panchang.sunrise;
    document.getElementById("sunset").textContent = panchang.sunset;
    document.getElementById("moonrise").textContent = panchang.moonrise;
    document.getElementById("moonset").textContent = panchang.moonset;

}

loadPanchang();