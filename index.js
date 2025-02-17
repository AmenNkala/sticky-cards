document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("card-container");
  const cardLinks = document.getElementById("card-links");
  const cardContent = [
    "Card One",
    "Card Two",
    "Card Three",
    "Card Four",
    "Card Five",
    "Card Six",
    "Card Seven",
    "Card Eight",
  ];

  cardContent.forEach((title, index) => {
    const cardBtn = document.createElement("button");
    cardBtn.textContent = title;

    const btnItem = document.createElement("li");
    btnItem.appendChild(cardBtn);
    cardLinks.appendChild(btnItem);
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", `card-${index + 1}`);

    card.innerHTML = `
        <h1>${title}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu vel nisi tempus iaculis.</p>
      `;

    cardBtn.onclick = () => {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    container.appendChild(card);
  });
});
