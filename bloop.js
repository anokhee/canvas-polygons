const canvas = document.getElementById('bloop');
const c = canvas.getContext("2d");
width = 800;
height = 600;
canvas.width = width;
canvas.height = height;
canvas.style.position = "fixed";
canvas.style.top = "0";

function makePolygon() {
    var numberOfSides = 3,
        size = 80,
        Xcenter = size * 2,
        Ycenter = size * 2;

    c.beginPath();
    c.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

    for (var i = 1; i <= numberOfSides; i += 1) {
        c.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }

    c.strokeStyle = "#000000";
    c.lineWidth = 1;
    c.stroke();
}

makePolygon();
