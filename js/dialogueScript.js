const splash_dialog = document.querySelector("#splash");
const save_dialog = document.querySelector("#save-dialog");
const settings_btn = document.querySelector("#settings");
const context_menu = document.querySelector("#context-menu");
const context_close = document.querySelector("#close-context");

//Save dialog elements
const file_name = document.querySelector("#filename");
const error_message = document.querySelector("#err-message");
const file_types = document.querySelectorAll("input[name='filetype']");
const download_btn = document.querySelector("#download");
let download_event_listener;

splash_dialog.showModal();

function closeSplash()
{
    splash_dialog.close();
}

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

function closeSaveDialog()
{
    save_dialog.close();
    download_btn.removeEventListener("click", download_event_listener);
}

function openSaveDialog(imageData)
{
    save_dialog.showModal();

    download_event_listener = download_btn.addEventListener('click', e => {
        e.preventDefault();
        let name;
        let type;

        name = file_name.value;

        console.log(name);

        if(file_types[0].checked)
            type = '.jpg';
        else if(file_types[1].checked)
            type = '.png';
        else if(file_types[2].checked)
            type = '.gif';

        if(name === "")
        {   
            error_message.classList.remove("hidden");
            file_name.classList.add("error");
        }
        else
        {
            error_message.classList.add("hidden");
            file_name.classList.remove("error");

            file_name.value = "";

            const tempLink = document.createElement('a');
            tempLink.href = imageData;
            tempLink.download = name + type;
            tempLink.click();           
        }
    });
}