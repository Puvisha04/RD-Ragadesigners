// ================= MOBILE MENU =================
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// ================= FORM =================
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
});

// ================= RENDER PORTFOLIO (DYNAMIC) =================
const container = document.getElementById("portfolio");

portfolio.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <img src="${item.img}" style="width:100%;border-radius:10px;">
    <h3 style="margin-top:10px;">${item.title}</h3>
  `;

  container.appendChild(div);
});