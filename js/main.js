import Canvas from "./Canvas";

const canvas_elem = document.querySelector("canvas");
const colour_elem = document.querySelector("#colour");
const paint_tools = document.querySelectorAll(".paint-tool");
const canvas_options = document.querySelectorAll(".canvas-option");
const canvas = new Canvas(canvas_elem, colour_elem.value, size_elem.value);

window.addEventListener("resize", e => {
    canvas.resize();
})

colour_elem.addEventListener("change", e => {
    canvas.setColour(e.target.value);
});

//size_elem is set in brushSizeSetter.js, as it contains additional functionality
size_elem.addEventListener("change", e => {
    if(e.target.value > 45)
        e.target.value = 45;

    canvas.setToolSize(e.target.value);
});

canvas_elem.addEventListener("mousedown", e => {
    canvas.setDrawing(true);
});

canvas_elem.addEventListener("mouseup", e => {
    canvas.setDrawing(false);
});

canvas_elem,addEventListener("mousemove", e => {
    handleDrawFunctions(e);
});

canvas_elem.addEventListener("touchstart", e => {
    e.preventDefault();
    canvas.setDrawing(true);
});

canvas_elem.addEventListener("touchend", e => {
    e.preventDefault();

    canvas.setDrawing(false);

    handleDrawFunctions(e.changedTouches[0]);
});

canvas_elem,addEventListener("touchmove", e => {
    e.preventDefault();

    handleDrawFunctions(e.changedTouches[0]);
});

canvas_options.forEach(canvas_option => {
    canvas_option.addEventListener("click", e => {
        e.preventDefault();

        handleCanvasOptions(e);
    });
});

function handleDrawFunctions(event)
{
    if(paint_tools[0].checked)
        canvas.draw(event.clientX, event.clientY);

    if(paint_tools[1].checked)
        canvas.erase(event.clientX, event.clientY);
}

function handleCanvasOptions(event)
{
    switch(event.target.id)
    {
        case "newfile":
            canvas.reset();
            break;
        case "save":
            openSaveDialog(canvas.getDataUrl());
            break;
        default:
            break;
    }
}