/* ================================ Typing Animation ================================ */
var typed = new Typed(".typing", {
  strings: [
    "",
    "Xin chao",
    "Toi ten la Hoang Manh Hung",
    "Toi la sinh vien nam 2",
    "Toi hoc tai Truong dai Hoc Thang Long",
    "Tam biet",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/* ================================ Aside ================================ */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () 
  {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) 
      {
          addBackSection(j);
        // allSection[j].classList.add("back__section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerWidth < 1200)
    {
        asideSectionTogglerBtn()
    }
  });
}

function removeBackSection()
{
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back__section");
      }
}

function addBackSection(num)
{
    allSection[num].classList.add("back__section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element)
{
    for(let i = 0; i < totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav__toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", () => {
          asideSectionTogglerBtn();
      }) 
      function asideSectionTogglerBtn()
      {
          aside.classList.toggle("open");
          navTogglerBtn.classList.toggle("open");
          for(let i = 0; i < totalSection; i++)
          {
              allSection[i].classList.toggle("open");
          }
      }   







