export default class Canvas 
{
    constructor(canvasElem, colour, size)
    {
        this.canvas = canvasElem;
        this.context = this.canvas.getContext("2d");
        this.buffer = null;
        this.canvasOffsetX = this.canvas.offsetLeft;
        this.canvasOffsetY = this.canvas.offsetTop;
        this.context.lineCap = 'round';
        this.toolColour = colour;
        this.toolSize = size;
        this.isDrawing = false;

        this.reset();
    }

    setColour(colourCode)
    {
        this.toolColour = colourCode;
    }

    setToolSize(newSize)
    {
        this.toolSize = newSize;
    }

    setDrawing(value) 
    { 
        this.isDrawing = value; 
    }

    draw(mouse_x, mouse_y)
    {
        this.context.strokeStyle = this.toolColour;
        this.context.lineWidth = this.toolSize;
        if(this.isDrawing)
        {
            this.context.lineTo(mouse_x - this.canvas.offsetLeft, mouse_y - this.canvas.offsetTop);
            this.context.stroke();
        }
        else
        {
            this.context.stroke();
            this.context.beginPath();
        }

        this.buffer = this.context.getImageData(0,0,this.canvas.width, this.canvas.height,);
    }

    erase(mouse_x, mouse_y)
    {
        if(this.isDrawing)
        {
            console.log(`Erasing at: ${mouse_x}, ${mouse_y}`);
            this.context.fillStyle = "#FFFFFF";     //Simply draw white pixels
            this.context.fillRect((mouse_x - this.canvas.offsetLeft) - this.toolSize / 2,(mouse_y - this.canvas.offsetTop) - this.toolSize / 2,this.toolSize,this.toolSize);
        }

        this.buffer = this.context.getImageData(0,0,this.canvas.width, this.canvas.height);
    }

    reset()
    {
        this.canvas.width = window.innerWidth - this.canvasOffsetX;
        this.canvas.height = window.innerHeight - this.canvasOffsetY;
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.context.fillStyle = "#FFFFFF";     //Simply draw white pixels
        this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
    }

    save()
    {
        window.location.href = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    }

    resize()
    {
        this.reset();
        this.context.putImageData(this.buffer,0,0);
        this.buffer = this.context.getImageData(0,0,this.canvas.width, this.canvas.height);
    }
}