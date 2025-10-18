document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      alert(`✅ Đăng nhập thành công! Xin chào, ${user.name}`);
      localStorage.setItem("currentUser", JSON.stringify(user)); // ✅ sửa lại
      window.location.href = "index.html";
    } else {
      alert("❌ Sai email hoặc mật khẩu!");
    }
  });
});
