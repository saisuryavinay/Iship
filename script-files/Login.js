let sign_up_btn = document.querySelector(".normal-btn");
let content1 = document.querySelector(".content1");
let content2 = document.querySelector(".content2");
let signin_form = document.querySelector(".signin-form");
let signup_form = document.querySelector(".signup-form");
let text_from_left_page = document.querySelector(".text");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let line4 = document.querySelector(".line4");
let line5 = document.querySelector(".line5");
let line6 = document.querySelector(".line6");
let line7 = document.querySelector(".line7");
let line8 = document.querySelector(".line8");
let line9 = document.querySelector(".line9");
let line11 = document.querySelector(".line11");
let signup = false;

sign_up_btn.addEventListener("click", () => {
    if (!signup) {
        content1.innerText = "Welcome Back!";
        content2.innerText =
            "Enter your personal details to use all of the site features";
        sign_up_btn.innerText = "Sign In";
        line1.classList.add("multianimateout");
        setTimeout(() => {
            line2.classList.add("multianimateout");
        }, 50);
        setTimeout(() => {
            line3.classList.add("multianimateout");
            line4.classList.add("multianimateout");
        }, 150);
        setTimeout(() => {
            line5.classList.add("multianimateout");
        }, 200);
        setTimeout(() => {
            signin_form.classList.add("hide");
        }, 480);
        setTimeout(() => {
            signup_form.classList.remove("hide");
            signup_form.classList.add("add");
        }, 700);
        text_from_left_page.classList.add("add");
    } else {
        text_from_left_page.classList.add("add");
        content1.innerText = "Hello, Friend!";
        content2.innerText =
            "Register with your personal details to use all of the site features";
        sign_up_btn.innerText = "Sign Up";
        line6.classList.add("multianimateout");
        setTimeout(() => {
            line7.classList.add("multianimateout");
        }, 50);
        setTimeout(() => {
            line8.classList.add("multianimateout");
        }, 150);
        setTimeout(() => {
            line9.classList.add("multianimateout");
        }, 200);
        setTimeout(() => {
            line11.classList.add("multianimateout");
        }, 250);
        setTimeout(() => {
            signup_form.classList.add("hide");
        }, 480);
        setTimeout(() => {
            signin_form.classList.remove("hide");
            signin_form.classList.add("add");
        }, 750);
        text_from_left_page.classList.add("add");
    }

    setTimeout(() => {
        text_from_left_page.classList.remove("add");
        line1.classList.remove("multianimateout");
        line2.classList.remove("multianimateout");
        line3.classList.remove("multianimateout");
        line4.classList.remove("multianimateout");
        line5.classList.remove("multianimateout");
        line6.classList.remove("multianimateout");
        line7.classList.remove("multianimateout");
        line8.classList.remove("multianimateout");
        line9.classList.remove("multianimateout");
        line11.classList.remove("multianimateout");
    }, 1000);
    signup = !signup;
});

line5.addEventListener("click", () => {
    if (localStorage.getItem(line2.value) === null) {
        // Redirect to Home page or perform login action
        alert("Please register first.");
    } 
    else if (
        JSON.parse(localStorage.getItem(line2.value))["password"] ===
        line3.value
    ) {
        // Redirect to Home page or perform login action
        localStorage.setItem(
            "loggedInUserName",
            JSON.parse(localStorage.getItem(line2.value))["name"]
        );
        window.parent.location.reload();
    } else {
        // Show error message
        alert("Invalid email or password. Please try again.");
    }
});

line11.addEventListener("click", () => {
    if (
        line7.value &&
        line8.value &&
        line9.value &&
        localStorage.getItem(line8.value) === null
    ) {
        localStorage.setItem(
            line8.value,
            JSON.stringify({ password: line9.value, name: line7.value })
        );
        window.location.href = "./Login.html";
    } else if (localStorage.getItem(line8.value) !== null) {
        alert("User already exists. Please login.");
    } else {
        alert("Please fill all fields.");
    }
});
