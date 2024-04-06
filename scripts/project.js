async function getRandomScripture() {
    try {
        const response = await fetch('json/book-of-mormon.json');
        const data = await response.json(); 
        const books = data.books;
        const randomBookIndex = Math.floor(Math.random() * books.length);
        const randomChapterIndex = Math.floor(Math.random() * books[randomBookIndex].chapters.length);
        const randomVerseIndex = Math.floor(Math.random() * books[randomBookIndex].chapters[randomChapterIndex].verses.length);
        const randomVerse = books[randomBookIndex].chapters[randomChapterIndex].verses[randomVerseIndex];
        const scriptureText = `${randomVerse.reference}: ${randomVerse.text}`;
        return scriptureText;
    } catch (error) {
        console.error('Error fetching scripture:', error);
        return 'Unable to fetch scripture. Please try again later.';
    }
}

document.getElementById('fetch-scripture-btn').addEventListener('click', async () => {
    const randomScripture = await getRandomScripture();
    document.getElementById('scripture-text').textContent = randomScripture;
});

const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;
