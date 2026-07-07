// Festival Data
let festivals = [];

// Load Festival JSON
async function loadFestivals() {

    try {

        const response = await fetch("data/festivals.json");

        festivals = await response.json();

        console.log("Festivals Loaded:", festivals);

        // JSON Load होने के बाद Calendar दुबारा बनाओ
        if (typeof renderCalendar === "function") {
            renderCalendar();
        }

    } catch (error) {

        console.error("Festival Load Error:", error);

    }

}

// Check Festival
function isFestival(date) {

    return festivals.some(item => item.date === date);

}

// Start Loading
loadFestivals();