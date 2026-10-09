// Builds the shop from products.js. Randy shouldn't need to edit this file.

const STATUS_LABEL = {
  "in-stock": "In stock",
  "made-to-order": "Made to order",
  "sold-out": "Sold out",
};

function money(n) {
  return "$" + (Number.isInteger(n) ? n : n.toFixed(2));
}

// Shop name everywhere
document.title = SHOP.name;
document.getElementById("shop-name").textContent = SHOP.name;
document.getElementById("footer-name").textContent = SHOP.name;
document.getElementById("tagline").textContent = SHOP.tagline;
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }
});

// Filters
const filterBox = document.querySelector(".filters");
let currentFilter = "All";
["All", ...CATEGORIES].forEach((cat) => {
  const b = document.createElement("button");
  b.className = "filter-btn" + (cat === "All" ? " active" : "");
  b.textContent = cat;
  b.addEventListener("click", () => {
    currentFilter = cat;
    filterBox.querySelectorAll(".filter-btn").forEach((x) => x.classList.toggle("active", x === b));
    renderGrid();
  });
  filterBox.appendChild(b);
});

// Product cards
const grid = document.getElementById("product-grid");
function renderGrid() {
  grid.innerHTML = "";
  PRODUCTS
    .filter((p) => currentFilter === "All" || p.category === currentFilter)
    .forEach((p) => {
      const card = document.createElement("button");
      card.className = "card" + (p.status === "sold-out" ? " is-sold-out" : "");
      card.setAttribute("aria-label", `${p.name}, ${money(p.price)}, ${STATUS_LABEL[p.status]}`);
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="card-body">
          <div class="card-top"><h3></h3><span class="price">${money(p.price)}</span></div>
          <p class="colors"></p>
          <span class="tag ${p.status}">${STATUS_LABEL[p.status]}</span>
        </div>`;
      card.querySelector("h3").textContent = p.name;
      card.querySelector(".colors").textContent = p.colors.join(" · ");
      card.addEventListener("click", () => openDialog(p));
      grid.appendChild(card);
    });
}
renderGrid();

// Product popup
const dlg = document.getElementById("product-dialog");
let chosen = null;
function openDialog(p) {
  chosen = p;
  document.getElementById("dlg-img").src = p.image;
  document.getElementById("dlg-img").alt = p.name;
  document.getElementById("dlg-title").textContent = p.name;
  document.getElementById("dlg-price").textContent = money(p.price);
  document.getElementById("dlg-desc").textContent = p.description;
  document.getElementById("dlg-colors").textContent = p.colors.join(", ");
  document.getElementById("dlg-size").textContent = p.size;
  document.getElementById("dlg-time").textContent = p.printTime;
  const btn = document.getElementById("dlg-order");
  btn.disabled = p.status === "sold-out";
  btn.textContent = p.status === "sold-out" ? "Sold out for now" : "I want this!";
  dlg.showModal();
}
document.querySelector(".dlg-close").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
document.getElementById("dlg-order").addEventListener("click", () => {
  dlg.close();
  document.getElementById("picked-item").textContent = chosen.name;
  document.getElementById("picked").hidden = false;
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
});

// Order form (Google Form)
const formArea = document.getElementById("order-form-area");
if (SHOP.orderFormUrl) {
  let url = SHOP.orderFormUrl;
  if (!url.includes("embedded=true")) url += (url.includes("?") ? "&" : "?") + "embedded=true";
  formArea.innerHTML = `<iframe class="form-frame" src="${url}" title="Order form" loading="lazy">Loading…</iframe>`;
} else {
  formArea.innerHTML = `<div class="form-placeholder">
    <p><strong>📝 The order form is coming soon!</strong></p>
    <p>For now, ask Randy at school or have a grown-up get in touch${SHOP.parentEmail ? ` at <a href="mailto:${SHOP.parentEmail}">${SHOP.parentEmail}</a>` : ""}.</p>
  </div>`;
}
