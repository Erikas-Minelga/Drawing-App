export default class Canvas 
{
    constructor(canvasElem, ctx)
    {
        this.canvas = canvasElem;
        this.context = ctx;
        this.toolColour = "#000000";
        this.toolSize = 2;
    }

    setColour(colourCode)
    {
        this.toolColour = colourCode;
    }

    setBrushSize(newSize)
    {
        this.toolSize = newSize;
    }

    draw()
    {
        this.context.fillStyle = this.toolColour;
        this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
    }

    erase()
    {
        console.log("Erasing");
    }

    fill()
    {
        console.log("Filling");
    }
}