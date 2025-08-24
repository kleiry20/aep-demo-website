// Debug listener to verify event dispatch
document.addEventListener("formSubmitComplete", () => {
  console.log("✅ Launch should hear this event");
});

document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect values
  const formSubmit = {
    name: document.getElementById("name").value.trim() || "default",
    email: document.getElementById("email").value.trim() || "default",
    age: document.getElementById("age").value.trim() || 0,
    gender:
      document.querySelector('input[name="gender"]:checked')?.value ||
      "default",
    dob: document.getElementById("dob").value || "2018-01-12",
    company: document.getElementById("company").value.trim() || "default",
    hobbies: Array.from(
      document.querySelectorAll('input[name="hobbies"]:checked')
    ).map((el) => el.value),
    message: document.getElementById("message").value.trim() || "default",
    testField: document.getElementById("testField").value.trim() || "default",
  };

  // Save in sessionStorage for easy lookup by Adobe Data Elements
  sessionStorage.setItem("formSubmit", JSON.stringify(formSubmit));

  // 🔥 Dispatch custom event so Adobe Data Collection can listen to it
  document.dispatchEvent(new CustomEvent("formSubmitComplete"));

  // Debug log
  console.log("Form Submitted:", formSubmit);
  console.log("SessionStorage value:", sessionStorage.getItem("formSubmit"));
});

