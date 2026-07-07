// ==========================
// Panchang Data (Demo)
// ==========================

const panchangData = {

    "2026-07-07": {
        tithi: "Guru Purnima",
        nakshatra: "Mula",
        yoga: "Siddhi",
        karana: "Bava",
        sunrise: "05:42 AM",
        sunset: "06:58 PM",
        moonrise: "07:10 PM",
        moonset: "05:20 AM",
        festival: "Guru Purnima"
    },

    "2026-08-19": {
        tithi: "Raksha Bandhan",
        nakshatra: "Shravana",
        yoga: "Shobhana",
        karana: "Balava",
        sunrise: "05:55 AM",
        sunset: "06:44 PM",
        moonrise: "08:05 PM",
        moonset: "06:00 AM",
        festival: "Raksha Bandhan"
    }

};
// ==========================
// Update Panchang
// ==========================

function updatePanchang(date) {

    const data = panchangData[date];

    if (!data) {

        document.getElementById("tithi").textContent = "--";
        document.getElementById("nakshatra").textContent = "--";
        document.getElementById("yoga").textContent = "--";
        document.getElementById("karana").textContent = "--";
        document.getElementById("sunrise").textContent = "--";
        document.getElementById("sunset").textContent = "--";
        document.getElementById("moonrise").textContent = "--";
        document.getElementById("moonset").textContent = "--";
        document.getElementById("festival").textContent = "No Festival";

        return;

    }

    document.getElementById("tithi").textContent = data.tithi;
    document.getElementById("nakshatra").textContent = data.nakshatra;
    document.getElementById("yoga").textContent = data.yoga;
    document.getElementById("karana").textContent = data.karana;
    document.getElementById("sunrise").textContent = data.sunrise;
    document.getElementById("sunset").textContent = data.sunset;
    document.getElementById("moonrise").textContent = data.moonrise;
    document.getElementById("moonset").textContent = data.moonset;
    document.getElementById("festival").textContent = data.festival;

}

// ==========================
// Calendar Variables
// ==========================

const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");

let currentDate = new Date();

// ==========================
// Render Calendar
// ==========================

function renderCalendar() {

    calendar.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.textContent = currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });

    const firstDay = new Date(year, month, 1).getDay();

    const totalDays = new Date(year, month + 1, 0).getDate();

    // Empty Boxes

    for (let i = 0; i < firstDay; i++) {

        const empty = document.createElement("div");

        calendar.appendChild(empty);

    }

    const today = new Date();

    // Dates

    for (let day = 1; day <= totalDays; day++) {

        const box = document.createElement("div");

        box.classList.add("day");

        box.textContent = day;

        // Full Date

        const fullDate =
            `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

        // Festival Dot

       if (isFestival(fullDate)) {

        box.style.color = "#ff6f00";
    box.style.fontWeight = "bold";

            const dot = document.createElement("div");

            dot.classList.add("festival-dot");

            box.appendChild(dot);

            box.title = festivals.find(item => item.date === fullDate).festival;

        }
        // Today Highlight

        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {

            box.classList.add("today");

        }

        // Click Event

        box.addEventListener("click", function () {

    document.querySelectorAll(".day").forEach(d => {
        d.classList.remove("selected");
    });

    box.classList.add("selected");

    updatePanchang(fullDate);

    // Festival Name Update
    document.getElementById("festival").textContent =
getFestival(fullDate);

        // Upcoming Festival
    document.getElementById("upcomingFestival").textContent =
getUpcomingFestival(fullDate);

});

        calendar.appendChild(box);

    }

}
// ==========================
// Initial Load
// ==========================
renderCalendar();

// Load Today's Data

const currentToday = new Date();

const todayDate =
`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;

updatePanchang(todayDate);

document.getElementById("festival").textContent =
getFestival(todayDate);

document.getElementById("upcomingFestival").textContent =
getUpcomingFestival(todayDate);
// ==========================
// Previous Month
// ==========================
document.getElementById("prevBtn").addEventListener("click", () => {

    currentDate.setMonth(currentDate.getMonth() - 1);

    renderCalendar();

});
// ==========================
// Next Month
//==========================

document.getElementById("nextBtn").addEventListener("click", () => {

    currentDate.setMonth(currentDate.getMonth() + 1);

    renderCalendar();

});