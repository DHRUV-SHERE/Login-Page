
let login1btn = document.querySelector("#login1 button");
let login = document.querySelector("#login");
let signup1btn = document.querySelector("#signup1 button");
let signup = document.querySelector("#signup");

login1btn.addEventListener("click", function () {
    gsap.to("#login", { opacity: 0 });
    gsap.to("#signup", { opacity: 1 });
    login.style.display = "none";
    signup.style.display = "flex";
});

signup1btn.addEventListener("click", function () {
    gsap.to("#signup", { opacity: 0 });
    gsap.to("#login", { opacity: 1 });
    signup.style.display = "none";
    login.style.display = "flex";
});
