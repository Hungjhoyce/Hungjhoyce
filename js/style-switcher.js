/* ======================= Toggle Style Switcher ======================= */
const styleSwitcherToggle = document.querySelector(".style__switcher--toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style__switcher").classList.toggle("open");
})
// Hide Style - Switcher On Scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style__switcher").classList.contains("open"))
    {
        document.querySelector(".style__switcher").classList.remove("open");
    }
})

/* ======================= Theme Color ======================= */
const alternaterStyles = document.querySelectorAll(".alternate__style");
function setActiveStyle(color)
{
    alternaterStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

/* ======================= Theme Light And Dark Mode ======================= */
const dayNight = document.querySelector(".day__night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})











