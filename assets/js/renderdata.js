document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list");
  const products = JSON.parse(localStorage.getItem("products")) || [];

  if (!container) return;

  // Render danh sách sản phẩm
  container.innerHTML = products.map(p => `
    <div class="product" data-id="${p.id}">
      <img src="assets/img/${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p class="price">${p.price}</p>
    </div>
  `).join("");

  // Thêm sự kiện click cho từng sản phẩm
  document.querySelectorAll(".product").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-id");
      const product = products.find(p => p.id == id);
      if (product) {
        localStorage.setItem("product", JSON.stringify(product));
        window.location.href = "detail.html";
      }
    });
  });
});
const productList = document.getElementById("product-list");

function renderProducts() {
  productList.innerHTML = products.map(p => `
    <div class="product">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price.toLocaleString("vi-VN")}₫</p>
      <button class="add-to-cart" data-id="${p.id}">Thêm vào giỏ</button>
    </div>
  `).join("");

  // Gắn sự kiện click sau khi render
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => addToCart(btn.dataset.id));
  });
}

renderProducts();
