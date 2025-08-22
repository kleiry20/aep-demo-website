document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect values
  const formSubmit = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    age: document.getElementById("age").value.trim(),
    gender: document.querySelector('input[name="gender"]:checked')?.value || "",
    dob: document.getElementById("dob").value,
    hobbies: Array.from(
      document.querySelectorAll('input[name="hobbies"]:checked')
    ).map((el) => el.value),
  };

  // Save in sessionStorage for easy lookup by Adobe Data Elements
  sessionStorage.setItem("formSubmit", JSON.stringify(formSubmit));

  // 🔥 Dispatch custom event so Adobe Data Collection can listen to it
  document.dispatchEvent(new CustomEvent("formSubmitComplete"));

  // Debug log
  console.log("Form Submitted:", formSubmit);
  console.log("SessionStorage value:", sessionStorage.getItem("formSubmit"));
  alert("Form submitted!");
});
