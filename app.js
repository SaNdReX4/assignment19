import { results } from "./results.js";
console.log(results);

// 2 —  img body-ში
const img = document.createElement("img");
img.src =
  "https://fastly.picsum.photos/id/534/1000/800.jpg?hmac=tFbU1nZ2RnQNroI_ToBhH-LFB8KNjyWoc3bVv5G9Wkw";
document.body.appendChild(img);

// 4.2/4.5
const container = document.getElementById("images-list");

const cardsHTML = results
  .map((item, index) => {
    return `
      <div class="card" id="card-${index}">
        
        
        <img class="card-img" src="${item.webImage.url}" alt="${item.title}" />

        
        <h3 class="card-title">${item.title}</h3>

        
        <div class="details" id="details-${index}" style="display: none;">
          <p>${item.longTitle}</p>
          <a href="${item.links.web}" target="_blank">Visit link</a>
        </div>

        
        <div class="buttons">
            <button class="btn more-btn" data-id="${index}">See More Details</button>
            <button class="btn remove-btn" data-id="${index}">Remove Card</button>
        </div>

      </div>
    `;
  })
  .join("");

// ჩასმა სექციაში
container.insertAdjacentHTML("beforeend", cardsHTML);

// 5 — Event listeners

// SEE MORE DETAILS
document.querySelectorAll(".more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    const details = document.getElementById(`details-${id}`);
    details.style.display =
      details.style.display === "block" ? "none" : "block";
  });
});

// REMOVE CARD
document.querySelectorAll(".remove-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    const card = document.getElementById(`card-${id}`);
    card.remove();
  });
});
