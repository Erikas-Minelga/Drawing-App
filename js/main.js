import Canvas from "./Canvas";

const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("2d");
const controls = document.querySelectorAll(".option");

const canvas = new Canvas(canvasElem, ctx);

canvas.setColour("#F0F0F0");
canvas.draw();