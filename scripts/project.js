
async function getRandomScripture() {
    try {
      const response = await fetch('https://bible-api.com/?random=verse');
      const data = await response.json();
      
      const scriptureText = data.text.trim();
      return scriptureText;
    } catch (error) {
      console.error('Error fetching scripture:', error);
      return 'Unable to fetch scripture. Please try again later.';
    }
  }
  
  
  async function updateScriptureText() {
    const randomScripture = await getRandomScripture();
    document.getElementById('scripture-text').textContent = randomScripture;
  }
  
  
  document.getElementById('fetch-scripture-btn').addEventListener('click', updateScriptureText);
  
  
  const currentYear = new Date().getFullYear();
  document.getElementById('year').textContent = currentYear;
  