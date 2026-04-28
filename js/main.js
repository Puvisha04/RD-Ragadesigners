// ================= MOBILE NAV (future ready) =================
const nav = document.querySelector("nav");

// ================= PORTFOLIO RENDER =================
const portfolioContainer = document.querySelector(".grid-3");

function renderPortfolio() {
  if (!portfolioContainer) return;

  portfolioData.forEach(item => {
    const card = document.createElement("div");
    card.className = "portfolio-card";
    card.style.background = `linear-gradient(135deg, ${item.color}, #111)`;

    card.innerHTML = `
      <div>
        <h3>${item.title}</h3>
        <p style="font-size: 0.85rem; opacity: 0.8;">${item.description}</p>
      </div>
    `;

    portfolioContainer.appendChild(card);
  });
}
