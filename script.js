
let login1btn = document.querySelector("#login2 button");
let login = document.querySelector("#login");
let signup1btn = document.querySelector("#signup2 button");
let signup = document.querySelector("#signup");

// Login and Signup Event Listeners
login1btn.addEventListener("click", function () {
    gsap.to("#login", { opacity: 0, duration: 0.8 });
    gsap.to("#signup", { opacity: 1, duration: 0.8 });
    login.style.display = "none";
    signup.style.display = "flex";
});

signup1btn.addEventListener("click", function () {
    gsap.to("#signup", { opacity: 0, duration: 0.8 });
    gsap.to("#login", { opacity: 1, duration: 0.8 });
    signup.style.display = "none";
    login.style.display = "flex";
});
// Captcha Code Generator
let captcha;
function generate() {

    // Clear old input
    document.getElementById("submit").value = "";

    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image");
    let uniquechar = "";

    const randomchar =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }

    // Store generated input
    captcha.innerHTML = uniquechar;
}

function printmsg() {
    const usr_input = document
        .getElementById("submit").value;

    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captcha.innerHTML) {
        let s = document.getElementById("key")
            .innerHTML = "Matched";
        generate();
    }
    else {
        let s = document.getElementById("key")
            .innerHTML = "not Matched";
        generate();
    }
}


// Adding Animation To Text
function textAnimation() {
    gsap.from("#Text1 h1", {
        y: 120,
        stagger: 0.3,
        duration: 0.5,
        onload: {
            trigger: "#login1",
            start: "top 47%",
            end: "top 37%",
            scrub: 2
        }
    });
    gsap.from("#Text2 h1", {
        y: 120,
        stagger: 0.3,
        duration: 0.5,
        onload: {
            trigger: "#signup1",
            start: "top 47%",
            end: "top 37%",
            scrub: 2
        }
    });
}
window.onload = function () {
    textAnimation();
}

function textAnimation2() {
    gsap.from("#Text1 h1", {
        y: 120,
        stagger: 0.3,
        duration: 0.5,
        onload: {
            trigger: "#login1",
            start: "top 47%",
            end: "top 37%",
            scrub: 2
        }
    });
    gsap.from("#Text2 h1", {
        y: 120,
        stagger: 0.3,
        duration: 0.5,
        onload: {
            trigger: "#signup1",
            start: "top 47%",
            end: "top 37%",
            scrub: 2
        }
    });
}

login1btn.addEventListener("click", function () {
    textAnimation2()
})
signup1btn.addEventListener("click", function () {
    textAnimation()
})