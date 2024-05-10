let login = document.querySelector("#login");
let login1btn = document.querySelector("#login2 button");
let signup1btn = document.querySelector("#signup2 button");
let signup = document.querySelector("#signup");
let Backbtn = document.querySelector("#Backbtn");
let i = document.querySelector("#Backbtn i");
let body = document.querySelector("body");
let Backbtn1 = document.querySelector("#Backbtn1");
let Backbtn2 = document.querySelector("#Backbtn2");
let input = document.querySelector("input");
let input1 = document.querySelector("#login1 input");

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
window.onload = function () {
    generate(); // Generate captcha when the window finishes loading
};

let captcha;

function generate() {
    // Clear old input
    document.getElementById("submit").value = "";

    // Access the element to store the generated captcha
    captcha = document.getElementById("image");
    let uniquechar = "";

    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate captcha for length of 4 with random character
    for (let i = 0; i < 4; i++) {
        uniquechar += randomchar.charAt(Math.floor(Math.random() * randomchar.length));
    }

    // Store generated input
    captcha.innerHTML = uniquechar;
}

function printmsg() {
    const usr_input = document.getElementById("submit").value.trim(); // Trim any leading or trailing spaces

    // Check whether the input is equal to generated captcha or not
    if (usr_input === captcha.innerHTML) {
        document.getElementById("key").innerHTML = "Matched";
        generate(); // Regenerate captcha
    } else {
        document.getElementById("key").innerHTML = "Not Matched";
    }
}

// Adding Animation To Text
textAnimation();

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

login1btn.addEventListener("click", function () {
    textAnimation()
})

signup1btn.addEventListener("click", function () {
    textAnimation()
})

function textAnimation3() {
    gsap.from("#icons i", {
        x: 120,
        stagger: 0.2,
        duration: 0.3,
        opacity: 0.5,
        onload: {
            trigger: "#login1",
            start: "top 47%",
            end: "top 37%",
            scrub: 2,
        }
    });
}
textAnimation3()

// Background Color Change
function backGroundColorChange1() {
    Backbtn.addEventListener("click", function () {
        if (!body.style.backgroundImage.includes("./IMG/DarkBg.jpg")) {
            gsap.to(Backbtn1, { opacity: 0, duration: 0.8 });
            gsap.to(Backbtn2, { opacity: 1, duration: 0.8 });
            body.style.backgroundImage = "url(./IMG/DarkBg.jpg)";
            Backbtn2.style.color = "white";
            Backbtn1.style.display = "none";
            Backbtn2.style.display = "flex";
        }
        else {
            gsap.to(Backbtn1, { opacity: 1, duration: 0.8 });
            gsap.to(Backbtn2, { opacity: 0, duration: 0.8 });
            body.style.backgroundImage = "url(./IMG/LiteBg.jpg)";
            Backbtn1.style.display = "flex";
            Backbtn1.style.color = "rgba(55, 0, 255, 0.64)";
            Backbtn2.style.display = "none";
        }
    });
}
window.onload = function () {
    backGroundColorChange1();
}

function validatePassword() {
    var passwordInput = document.getElementsByClassName("password");
    var password = passwordInput.value;
    var passwordError = document.getElementById("passwordError");
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])[0-9a-zA-Z!@#$%^&*()_+}{"':;?/>.<,]{8,}$/;

    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character";
        passwordInput.focus();
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}