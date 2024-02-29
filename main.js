const button = document.querySelector("button")
const h5 = document.querySelector("h5")
const h2 = document.querySelector("h2")
const h6 = document.querySelector("h6")

const getQuote = async () => {
    const response = await fetch("https://quotable.io/random")
    const data = await response.json()
    h2.innerText = data.content;
    h5.innerText = `Author - ${data.author}`;
    h6.innerText = data.tags;
};

button.addEventListener("click", getQuote);
