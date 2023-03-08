var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

    /*Retire a linha de comentário errada*/
    //canvas.addEventListener("mousedown", my_mousedown);
    //canvas.setEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    /*
    Crie um event listener para "mousemove"
    e chame a função my_mousemove
    */

    function my_mousemove(e)
    {
        //canvas.setEventListener("mousemove"), my_mousemove;
        //currentPositionOfMouseX = e.clientX - canvas.offsetBottom;

        /*
        crie currentPositionOfMouseY and
        assign it e.clientY - canvas.offsetTop;
        */

        if (mouseEvent == "mouseDown") {
        console.log("Posição atual das coordenadas x e y= ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }
    function my_mousemove(e)
    {
        //currentPositionOfMouseX = e.clientY - canvas.offsetBottom;
        if (mouseEvent == "mouseDown") {
            console.log("Posição atual das coordenadas x e y= ");
            console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = widthOfLine;
            ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius ,0 , 2 * Math.PI);
            ctx.stroke();
            }
    
    }

    //*Crie um event listener para "mouseup"
    e chame a função my_mouseup

    function my_mousemove(e)
    {
        //canvas.setEventListener("mouseup"), my_mouseup;
        if (mouseEvent == "mouseUp") {
            console.log("Posição atual das coordenadas x e y= ");
            console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = widthOfLine;
            ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius ,0 , 2 * Math.PI);
            ctx.stroke();
            }
    
    }

    //*Crie uma função chamada my_mouseup com o evento como parâmetro. Atribua "mouseUP" ao mouseEvent dentro da função
    *//
    
    //*Crie uma event listener para "mouseleave" e chame a função my_mouseleave

    function my_mousemove(e)
    {
        //canvas.setEventListener("mouseleave"), my_mouseleave;
        if (mouseEvent == "mouseleave") {
            console.log("Posição atual das coordenadas x e y= ");
            console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = widthOfLine;
            ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius ,0 , 2 * Math.PI);
            ctx.stroke();
            }
    
    }

    Crie uma função chamada my_mouseleave com event de parâmetro.
    
    Atribua "mouseleave" ao mouseEvent
    dentro da função
    */

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
