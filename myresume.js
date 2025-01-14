const menuIcon = document.querySelector("#menuIcon");
const menu = document.querySelector("#menu");
const menuBg = document.querySelector("#menu .background");
const menuContent = document.querySelector("#menu .content")
const menuItem = document.querySelectorAll("#menu .content .item")
const skillsItem = document.querySelectorAll("#skills .item")
const itemArea = document.querySelector("#skills .down")
const contactArea = document.querySelector("#contact .up .info")
const contactItem = document.querySelectorAll("#contact .down .item")

window.onload = function () {
    document.querySelector("#preloader").style.visibility = "hidden";
    document.querySelector("#preloader").style.opacity = "0";
    document.body.style.overflow = "visible";
    document.querySelectorAll(".section").forEach(e => {
        e.style.visibility = "visible";
    })
    document.querySelector("#footer").style.visibility = "visible";
    document.querySelector(".navbar").style.visibility = "visible";
    document.querySelector(".navbar").classList.add("animation");
    document.querySelector("#intro").classList.add("animation");
    document.querySelectorAll("#home .right img").forEach(e=>{
        e.classList.add("animation")
    })

};


openMenu = () => {
    menu.classList.toggle("show-down");
    menuBg.classList.toggle("show-down");
    menuContent.classList.toggle("show-down");
}

menuIcon.addEventListener("click", openMenu);
menuBg.addEventListener("click", openMenu);
menuItem.forEach(e => {
    e.addEventListener("click", openMenu)
})

skillsItem.forEach(item => {
    item.addEventListener("click", () => {
        skillsItem.forEach(e => e.classList.remove("active"));
        item.classList.add("active");
        let itemInfo = "";
        let itemText = "";
        itemInfo = item.getAttribute("data-info");
        switch (itemInfo) {
            case "HTML":
                itemText = "熟悉 Flexbox 等布局技術，能夠靈活應用於網頁彈性布局設計，並結合其他技術實現響應式界面。";
                break;
            case "JS":
                itemText = "掌握基礎語法、DOM 操作與事件處理，能夠實現動態交互效果，並有效解決常見開發問題。";
                break;
            case "FIGMA":
                itemText = "擁有 Photoshop、Illustrator 以及 Figma 的基礎使用能力，能夠進行簡單的設計和原型製作";
                break;
            case "GIT":
                itemText = "了解基本的 Git 操作，包括 commit、push、pull 以及分支管理。";
                break;
            case "PHP":
                itemText = "具備基本的 PHP 編程能力，並了解 MySQL 的數據庫操作。";
                break;
            case "VUE":
                itemText = "能夠使用 Vue 3 的基本功能，實現組件化開發。";
                break;
        }
        itemArea.innerText = itemText;
    });
});

contactItem.forEach(item => {
    item.addEventListener("click", () => {
        contactItem.forEach(e => {
            e.classList.remove("open");
        })
        let contInfo = "";
        let infoText = "";
        contInfo = item.getAttribute("data-info");
        switch (contInfo) {
            case "email":
                infoText = "vicyang212@gmail.com";
                break;
            case "git":
                infoText = "vicyang212";
                break;
        }
        item.classList.add("open");
        contactArea.classList.add("open");
        contactArea.innerText = infoText;
    })
})



