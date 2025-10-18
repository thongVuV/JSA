document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("registerBtn");
  const userDisplay = document.getElementById("user-display");
  const headerRight = document.querySelector(".right-section");

  if (!loginBtn || !signupBtn || !headerRight) return;

  if (user) {
    // Ẩn nút đăng nhập + đăng ký
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";

    // Hiển thị tên người dùng
    if (userDisplay) {
      userDisplay.textContent = `Xin chào, ${user.name || user.firstname || "Người dùng"}!`;
      userDisplay.style.marginRight = "10px";
    } else {
      const newDisplay = document.createElement("span");
      newDisplay.id = "user-display";
      newDisplay.textContent = `Xin chào, ${user.name || user.firstname || "Người dùng"}!`;
      newDisplay.style.color = "#fff";
      newDisplay.style.marginRight = "10px";
      headerRight.insertBefore(newDisplay, document.querySelector(".cart"));
    }

    // Tạo nút đăng xuất
    const logoutBtn = document.createElement("button");
    logoutBtn.textContent = "Đăng xuất";
    logoutBtn.classList.add("auth-btn");

    // Thêm nút đăng xuất trước giỏ hàng (cart)
    headerRight.insertBefore(logoutBtn, document.querySelector(".cart"));

    // Sự kiện đăng xuất
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      alert("Bạn đã đăng xuất!");
      window.location.href = "index.html";
    });
  } else {
    // Nếu chưa đăng nhập
    if (userDisplay) userDisplay.textContent = "";
    loginBtn.style.display = "inline-block";
    signupBtn.style.display = "inline-block";

    loginBtn.addEventListener("click", () => {
      window.location.href = "login.html";
    });
    signupBtn.addEventListener("click", () => {
      window.location.href = "signup.html";
    });
  }
});
