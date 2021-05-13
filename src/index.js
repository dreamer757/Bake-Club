function join() {
  let name = prompt("What is your name?");
  let bake = prompt("Are you a baker?");
  bake = bake.toLowerCase().trim();
  if (bake === "yes") {
    alert("Show us your skills!");
  } else {
    alert("Welcome " + name);
  }

  let email = prompt("What is your email address?");

  alert(
    "Thank you, " + name + "! We'll be in touch by email soon. Happy Baking!"
  );
}
let joinButton = document.querySelector(".join-button");
joinButton.addEventListener("click", join);
