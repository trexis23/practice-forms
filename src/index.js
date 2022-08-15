// TODO: Log the form submission

// TODO: Select the form element from the HTML
const form = document.querySelector("form");
console.log(localStorage.getItem("username"));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event.target.username.value);
  // console.log(event.target.password.value);
  // console.log(event.target.saveUsername.checked);

  const submission = Object.fromEntries(new FormData(event.target));
  console.log(submission);

  if (Object.keys(submission).includes("saveUsername")) {
    localStorage.setItem("username", submission.username);
  }
});
