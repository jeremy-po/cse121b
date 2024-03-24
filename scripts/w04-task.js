/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jeremy Oliver",
    photo: "images/cumacahike.jpg",
    favoriteFoods: ["Spaghetti", "Brownies", "Doubles"],
    hobbies: ["Gaming", "Movies", "Hiking"],
    placesLived: []
  };

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({ place: "Guanapo Street", length: "24 Years" });
myProfile.placesLived.push({ place: "Readymix Road", length: "3 Years" });

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
  });
  
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
  });

