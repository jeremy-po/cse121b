/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
    try {
        temples.forEach(temple => {
            const article = document.createElement("article");
            const h3 = document.createElement("h3");
            const img = document.createElement("img");

            h3.textContent = temple.templeName;
            img.src = temple.imageUrl;
            img.alt = temple.location;

            article.appendChild(h3);
            article.appendChild(img);

            templesElement.appendChild(article);
        });
    } catch (error) {
        console.error("Error displaying temples:", error);
    }
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        const data = await response.json();
        templeList = data;
        console.log(templeList);
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = () => {
    reset();
    const filter = document.getElementById("filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(templeList.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(templeList.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            const cutoffDate = new Date(1950, 0, 1);
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < cutoffDate));
            break;
        case "all":
        default:
            displayTemples(templeList);
            break;
    }
};

getTemples();

/* Event Listener */
document.getElementById("filtered").addEventListener("change", filterTemples);



