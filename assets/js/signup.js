document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstname = document.getElementById("signup-firstname").value.trim();
    const lastname = document.getElementById("signup-lastname").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const phone = document.getElementById("signup-phone").value.trim();
    const password = document.getElementById("signup-password").value;

    // Kiểm tra dữ liệu
    if (!firstname || !lastname || !email || !phone || !password) {
      alert("❌ Vui lòng điền đầy đủ thông tin!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra trùng email hoặc số điện thoại
    if (users.some(u => u.email === email)) {
      alert("⚠️ Email này đã được đăng ký!");
      return;
    }
    if (users.some(u => u.phone === phone)) {
      alert("⚠️ Số điện thoại này đã được sử dụng!");
      return;
    }

    // Thêm người dùng mới
    users.push({ firstname, lastname, email, phone, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Đăng ký thành công! Mời bạn đăng nhập.");
    window.location.href = "login.html";
  });
});
