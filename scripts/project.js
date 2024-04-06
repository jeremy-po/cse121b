document.getElementById("year").innerHTML = new Date().getFullYear();

async function fetchRandomScripture() {
  try {
    const response = await fetch('https://bible-api.com/?random=verse');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching scripture:', error);
    return null;
  }
}

async function displayRandomScripture() {
  const scriptureContainer = document.getElementById("scripture-text");
  const randomScripture = await fetchRandomScripture();
  if (randomScripture) {
    scriptureContainer.innerText = `${randomScripture.bookname} ${randomScripture.chapter}:${randomScripture.verse} - ${randomScripture.text}`;
  } else {
    scriptureContainer.innerText = "Failed to load scripture.";
  }
}

displayRandomScripture();
