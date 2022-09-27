const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const menus = document.querySelector(".menus");
const faqs = document.querySelectorAll(".item");

hamburger.addEventListener("click", function () {
    if (hamburger.classList.contains("clicked")) {
        hamburger.classList.remove("clicked");
        menus.classList.remove("open");
    } else {
        hamburger.classList.add("clicked");
        menus.classList.add("open");
    }
});

faqs.forEach(function (faq) {
    faq.addEventListener("click", function () {
        if (faq.classList.contains("toggled")) {
            faq.classList.remove("toggled");
        } else {
            faqs.forEach(function (faq) {
                faq.classList.remove("toggled");
            });
            faq.classList.add("toggled");
        }
    });
});
