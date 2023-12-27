var buttonColours=["red","blue","green","yellow"];
var userClickedPattern=[];
var gamePattern=[];
var level=0;
var started=false; //to check whether the game has started or not;
document.addEventListener("keydown",function()
{
    if(!started)
    {
        document.getElementById('level-title').innerHTML="level "+level;
        nextSequence();
        started=true;
    }
});

var buttons=document.querySelectorAll('.btn');

function nextSequence()
{   
    userClickedPattern=[]; 
    level++;
    document.getElementById('level-title').innerHTML="Level "+level;
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    document.getElementById(randomChosenColor).style.opacity = '0';
    setTimeout(function() {
      document.getElementById(randomChosenColor).style.opacity = '1';
    }, 100);
   //use jquery as well
    playSound(randomChosenColor);
    
    
}
// nextSequence();


var userChosenColor;
for(var i=0;i<buttonColours.length;i++)
{
    buttons[i].addEventListener("click",function(event)
    {
        userChosenColor=event.target.id; //this.id can also be used
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length-1);
    })
}

function playSound(sound)
{
    var audioName='./sounds/'+sound+'.mp3';
    var audioElement=new Audio(audioName);
    audioElement.play();
}

function animatePress(currentColor) {
    document.getElementById(currentColor).classList.add('pressed');
    setTimeout(function() {
      document.getElementById(currentColor).classList.remove('pressed');
    }, 100);
  }
  

// if(document.querySelectorAll("h1").innerHTML==="Press A Key to Start");
// {
//     document.addEventListener("keydown",nextSequence);
// }

function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
    {
        
        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(function()
            {   
                // alert('success');
                nextSequence();
            },1000);
        }
    }
    
    else
    {
        // console.log('wrong');
        document.getElementsByTagName("body")[0].classList.add("game-over");
        setTimeout(function()
        {
            document.getElementsByTagName("body")[0].classList.remove("game-over");
        },200);
        document.querySelector("h1").innerHTML="Game Over, Press Any Key to Restart";
        startOver();
    }
}

function startOver()
{
    level=0;
    gamePattern=[];
    started=false;
}


