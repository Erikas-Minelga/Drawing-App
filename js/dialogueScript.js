const splash_dialog = document.querySelector("#splash");
const settings_btn = document.querySelector("#settings");
const context_menu = document.querySelector("#context-menu");
const context_close = document.querySelector("#close-context");

splash_dialog.showModal();

settings_btn.addEventListener("click", e => {
    context_menu.show();
    context_menu.style.marginLeft = "75px";
    context_menu.style.opacity = "1";
});

context_close.addEventListener("click", e => {
    context_menu.close();
    context_menu.style.marginLeft = "-100px";
    context_menu.style.opacity = "0";
});