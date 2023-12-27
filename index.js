document.addEventListener("keydown",function()
{
    document.querySelector("h1").innerHTML="Level 1";
    Game();
})

function Game()
{
var runGame=true;
var level=1;
while(runGame===true)
{
    var noOfButtons=level;
    var seqOfButtons=[];
    var buttons=document.querySelectorAll(".btn");
    while(noOfButtons--)
    {
        var sizeOfArray=buttons.length;
        var index=Math.floor(Math.random()*sizeOfArray);
        seqOfButtons.push(index);
        var chosenButton=buttons[index];
        document.querySelector(chosenButton).style.backgroundColor="black";
        // document.querySelector(chosenButton).classList.remove("pressed");
    }

    var userButtons=[];
    for(var i=0;i<buttons.length;i++)
    {
        document.querySelector(buttons[i]).addEventListener("click",function()
        {
            userButtons.push(i);
            document.querySelector(buttons[i]).classList.add("pressed");
            setTimeout(function()
            {
                buttons[i].classList.remove("pressed");
            },100);
        })
    }

    if(userButtons!==seqOfButtons)
    {
        runGame=false;
        document.querySelector("h1").innerHTML="Game over! Press any key to restart the game."
        restart();
    }

    else{
        level++;
        document.querySelector("h1").innerHTML="Level "+level;
    }
}
}

function restart()
{   
    Game();
}
