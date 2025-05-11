// 1. Events
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button was clicked!");
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "salmon";
  });
  document.getElementById("hoverBox").addEventListener("mouseout", () => {
    document.getElementById("hoverBox").style.backgroundColor = "lightblue";
  });
  
  document.addEventListener("keydown", (e) => {
    document.getElementById("keyPressed").textContent = e.key;
  });
  
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("Double-click secret unlocked! 🔓");
  });
  
  // 2. Interactive
  document.getElementById("colorToggle").addEventListener("click", function () {
    this.textContent = this.textContent === "Changed!" ? "Change My Text & Color" : "Changed!";
    this.style.backgroundColor = this.style.backgroundColor === "orange" ? "lightgray" : "orange";
  });
  
  // Image gallery
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
  let current = 0;
  const imgEl = document.getElementById("galleryImage");
  
  document.getElementById("prevBtn").addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    imgEl.src = images[current];
  });
  document.getElementById("nextBtn").addEventListener("click", () => {
    current = (current + 1) % images.length;
    imgEl.src = images[current];
  });
  
  // Tabs
  document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach(tc => tc.classList.add("hidden"));
      document.getElementById(button.dataset.target).classList.remove("hidden");
    });
  });
  
  // 3. Form Validation
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    let msg = "";
  
    if (!name) {
      msg += "Name is required. ";
    }
  
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      msg += "Invalid email. ";
    }
  
    if (password.length < 8) {
      msg += "Password must be at least 8 characters.";
    }
  
    document.getElementById("formMessage").textContent = msg || "Form submitted successfully!";
  });
  