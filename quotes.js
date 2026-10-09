const quoteCards = document.querySelectorAll('.quote');
const randomQuote = document.getElementById('random-quote');
const randomSource = document.getElementById('random-source');

if (quoteCards.length > 0 && randomQuote && randomSource) {
    const randomIndex = Math.floor(Math.random() * quoteCards.length);
    const chosenQuote = quoteCards[randomIndex];
    const chosenText = chosenQuote.querySelector('blockquote p').textContent;
    const chosenSource = chosenQuote.querySelector('footer').textContent.trim();
    randomQuote.innerHTML = `<p>${chosenText}</p>`;
    randomSource.textContent = chosenSource;
}
