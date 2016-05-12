function splash()
{
  menu();
  ctx.drawImage(document.getElementById('bgs'), 0, 0, canvas.width, canvas.height);
}

function howToPlay()
{
  player.tut++
  if(player.tut == 1)
    ctx.drawImage(document.getElementById('tut1'), 0, 0, canvas.width, canvas.height);
  else if(player.tut == 2)
    ctx.drawImage(document.getElementById('tut2'), 0, 0, canvas.width, canvas.height);
  else if(player.tut == 3)
    ctx.drawImage(document.getElementById('tut3'), 0, 0, canvas.width, canvas.height);
  else if(player.tut == 4)
    ctx.drawImage(document.getElementById('tut4'), 0, 0, canvas.width, canvas.height);
  else if(player.tut == 5)
    ctx.drawImage(document.getElementById('tut5'), 0, 0, canvas.width, canvas.height);
  else if(player.tut > 5)
    {
      player.tut = 0;
      menu();
    }
  if(player.tut)
  {
    ctx.font = '20px bomba';
    ctx.fillText('Click anywhere to continue', 0, 0)
  }
}

function menu()
{
  ctx.drawImage(document.getElementById('bg'), 0, 0, canvas.width, canvas.height);
  ctx.drawImage(document.getElementById('titlebg'), 100, 17, 470, 73);
  ctx.font = '45px bomba';
  ctx.fillStyle = "white";
  ctx.fillText('Vector Tower Defence', 165, 28);
  ctx.drawImage(document.getElementById('menubg'), 745, 95, 230, 480);
  ctx.drawImage(document.getElementById('unsel'), 750, 100, 220, 45);
  if(mode === 0)
  {
    ctx.drawImage(document.getElementById('sel'), 750, 200, 220, 45);
    ctx.drawImage(document.getElementById('unsel'), 750, 250, 220, 45);
  }
  else
  {
    ctx.drawImage(document.getElementById('unsel'), 750, 200, 220, 45);
    ctx.drawImage(document.getElementById('sel'), 750, 250, 220, 45);
  }

  if(map === 0)
  {
    ctx.drawImage(document.getElementById('sel'), 750, 350, 220, 45);
    ctx.drawImage(document.getElementById('unsel'), 750, 400, 220, 45);
    ctx.drawImage(document.getElementById('unsel'), 750, 450, 220, 45);
    ctx.drawImage(document.getElementById('switchback'), 0, 0, canvas.width, canvas.height);
  }
  else
  {
    if(map === 1)
    {
      ctx.drawImage(document.getElementById('unsel'), 750, 350, 220, 45);
      ctx.drawImage(document.getElementById('sel'), 750, 400, 220, 45);
      ctx.drawImage(document.getElementById('unsel'), 750, 450, 220, 45);
    ctx.drawImage(document.getElementById('thetwist'), 0, 0, canvas.width, canvas.height);
    }
    else
    {
      ctx.drawImage(document.getElementById('unsel'), 750, 350, 220, 45);
      ctx.drawImage(document.getElementById('unsel'), 750, 400, 220, 45);
      ctx.drawImage(document.getElementById('sel'), 750, 450, 220, 45);
    }
  }
  ctx.drawImage(document.getElementById('unsel'), 750, 525, 220, 45);
  ctx.font = '30px bomba';
  ctx.fillText('How To Play', 765, 105);
  ctx.fillText('Mode:', 750, 155);
      ctx.fillText('Normal', 765, 205);
      ctx.fillText('Survival', 765, 255);
  ctx.fillText('Map:', 750, 305);
      ctx.fillText('Switchback', 765, 355);
      ctx.fillText('The Twist', 765, 405);
      ctx.fillText('No Left Turns', 765, 455);
  ctx.fillText('Play', 765, 530);
}


function gameMenu()
{
  ctx.drawImage(document.getElementById('menubg'), 745, 95, 230, 480);
  ctx.drawImage(document.getElementById('titlebg'), 100, 17, 470, 73);
  ctx.font = '45px bomba';
  ctx.fillText('Vector Tower Defence', 165, 28);
  ctx.font = '30px bomba';
  ctx.fillText('Towers', 750, 100);
  ctx.drawImage(document.getElementById('greentwr1'), 775, 145, 35, 35);
  if(player.money < 100)
    ctx.drawImage(document.getElementById('nope'), 775, 145, 35, 35);
  ctx.drawImage(document.getElementById('greentwr2'), 775, 190, 35, 35);
  if(player.money < 400)
    ctx.drawImage(document.getElementById('nope'), 775, 190, 35, 35);
  ctx.drawImage(document.getElementById('greentwr3'), 775, 235, 35, 35);
  if(player.money < 2000)
    ctx.drawImage(document.getElementById('nope'), 775, 235, 35, 35);

  ctx.drawImage(document.getElementById('redtwr1'), 820, 145, 35, 35);
  if(player.money < 200)
    ctx.drawImage(document.getElementById('nope'), 820, 145, 35, 35);
  ctx.drawImage(document.getElementById('redtwr2'), 820, 190, 35, 35);
  if(player.money < 800)
    ctx.drawImage(document.getElementById('nope'), 820, 190, 35, 35);
  ctx.drawImage(document.getElementById('redtwr3'), 820, 235, 35, 35);
  if(player.money < 2500)
    ctx.drawImage(document.getElementById('nope'), 820, 235, 35, 35);

  ctx.drawImage(document.getElementById('violtwr1'), 865, 145, 35, 35);
  if(player.money < 300)
    ctx.drawImage(document.getElementById('nope'), 865, 145, 35, 35);
  ctx.drawImage(document.getElementById('violtwr2'), 865, 190, 35, 35);
  if(player.money < 900)
    ctx.drawImage(document.getElementById('nope'), 865, 190, 35, 35);
  ctx.drawImage(document.getElementById('violtwr3'), 865, 235, 35, 35);
  if(player.money < 2800)
    ctx.drawImage(document.getElementById('nope'), 865, 235, 35, 35);

  ctx.drawImage(document.getElementById('bluetwr1'), 910, 145, 35, 35);
  if(player.money < 300)
    ctx.drawImage(document.getElementById('nope'), 910, 145, 35, 35);
  ctx.drawImage(document.getElementById('bluetwr2'), 910, 190, 35, 35);
  if(player.money < 700)
    ctx.drawImage(document.getElementById('nope'), 910, 190, 35, 35);
  ctx.drawImage(document.getElementById('bluetwr3'), 910, 235, 35, 35);
  if(player.money < 1200)
    ctx.drawImage(document.getElementById('nope'), 910, 235, 35, 35);

  ctx.drawImage(document.getElementById('titlebg'), 580, 17, 395, 73);
  ctx.font = '20px bomba';
  ctx.fillText('Lives: '+player.life+'', 600, 28);
  ctx.fillText('Wave: '+(player.wave+1)+'', 600, 55);
  ctx.fillText('Money: '+Math.round(player.money)+'', 670, 28);
  ctx.fillText('Income: '+Math.round((player.income-1)*100)+'%', 670, 55);
  ctx.fillText('Score: '+Math.round((player.score)/10)+'', 795, 28);
  ctx.fillText('Next enemy HP: '+Math.round(player.hp*Math.pow(player.diff,player.wave+1))+'', 795, 55);
  if(player.selOnMouseOver)
  {
    ctx.fillText(''+player.selOnMouseOver.name+'', 760, 275);
    ctx.fillText('Cost: '+player.selOnMouseOver.cost+'', 760, 300);
    ctx.fillText('Attributes:', 760, 325);
    ctx.font = '17px bomba';
    ctx.fillText('Damage: ' +player.selOnMouseOver.damage+ '', 770, 350);
    ctx.fillText('Range: ' +player.selOnMouseOver.range+ '', 770, 370);
    ctx.fillText('Rate of fire: ' +Math.round(60/(player.selOnMouseOver.rof-1)*100)/100+ ' shoots/s', 770, 390);
    ctx.font = '20px bomba';
    ctx.fillText("Description:", 760, 415);
    ctx.font = '17px bomba';
    ctx.fillText(''+player.selOnMouseOver.desc1+'', 770, 440)
    ctx.fillText(''+player.selOnMouseOver.desc2+'', 770, 460)
    ctx.fillText(''+player.selOnMouseOver.desc3+'', 770, 480)
  }
  else if(player.sel) ////Selection in menu
  {
    ctx.fillText(''+player.sel.name+'', 760, 275);
    ctx.fillText('Cost: '+player.sel.cost+'', 760, 300);
    ctx.fillText('Attributes:', 760, 325);
    ctx.font = '17px bomba';
    ctx.fillText('Damage: ' +player.sel.damage+ '', 770, 350);
    ctx.fillText('Range: ' +player.sel.range+ '', 770, 370);
    ctx.fillText('Rate of fire: ' +Math.round(60/(player.sel.rof-1)*100)/100+ ' shoots/s', 770, 390);
    ctx.font = '20px bomba';
    ctx.fillText("Description:", 760, 415);
    ctx.font = '17px bomba';
    ctx.fillText(''+player.sel.desc1+'', 770, 440)
    ctx.fillText(''+player.sel.desc2+'', 770, 460)
    ctx.fillText(''+player.sel.desc3+'', 770, 480)
  }
  
 else if(player.selected) ////Selected existing tower
  {
    ctx.fillText('Attributes:', 760, 275);
    ctx.font = '17px bomba';
    ctx.fillText('Damage: ' +scene[player.selected].damage+ '', 770, 300);
    ctx.fillText('Range: ' +scene[player.selected].range+ '', 770, 320);
    ctx.fillText('Rate of fire: ' +Math.round(60/(scene[player.selected].rof-1)*100)/100+ ' shoots/s', 770, 340);
    if(scene[player.selected].level < 5)
    {
      ctx.fillText('Upgrade cost: ' +Math.round(scene[player.selected].cost/2*Math.pow(1.5,scene[player.selected].level-1))+ '', 770, 360);
      ctx.drawImage(document.getElementById('unsel'), 750, 385, 220, 45); 
      ctx.font = '30px bomba';
      ctx.fillText('Upgrade', 765, 390);
      if(player.money <= Math.round(scene[player.selected].cost/2*Math.pow(1.5,scene[player.selected].level-1)))
        ctx.drawImage(document.getElementById('nope'), 750, 385, 220, 45);
      ctx.font = '20px bomba';
      ctx.fillText('After upgrade:', 760, 430);
      ctx.font = '17px bomba';
      ctx.fillText('Damage: ' +Math.round(scene[player.selected].damage*1.4)+ '', 770, 455);
      ctx.fillText('Range: ' +Math.round(scene[player.selected].range*1.1)+ '', 770, 475);
    }
  }


  ctx.drawImage(document.getElementById('unsel'), 750, 525, 220, 45);
  ctx.font = '30px bomba';
  ctx.fillText('Next wave', 765, 530);
  if(player.nope)
    ctx.drawImage(document.getElementById('nope'), 750, 525, 220, 45)
}

function gameOver()
{
  player.play = 0;
  player.end = 1;
 // gameMenu();
  ctx.drawImage(document.getElementById('nope'), 0, 0, canvas.width, canvas.height);
  ctx.drawImage(document.getElementById('titlebg'), 245, 250, 460, 140);
  ctx.font = '35px bomba'
  ctx.fillText('Game Over', 415, 260)
  ctx.font = '20px bomba'
  ctx.fillText('Your score is: '+Math.round((player.score)/10)+'', 415, 305)
  ctx.drawImage(document.getElementById('unsel'), 250, 340, 220, 45);
  ctx.font = '30px bomba';
  ctx.fillText('Retry', 265, 345);
  ctx.drawImage(document.getElementById('unsel'), 480, 340, 220, 45);
  ctx.fillText('Main menu', 495, 345);
}
function gameEnd()
{
  player.play = 0;
  player.end = 1;
 // gameMenu();
  ctx.drawImage(document.getElementById('nope'), 0, 0, canvas.width, canvas.height);
  ctx.drawImage(document.getElementById('titlebg'), 245, 250, 460, 140);
  ctx.font = '35px bomba'
  ctx.fillText('You beat the game', 365, 260)
  ctx.font = '20px bomba'
  ctx.fillText('Your score is: '+Math.round((player.score)/10)+'', 415, 305)
  ctx.drawImage(document.getElementById('unsel'), 250, 340, 220, 45);
  ctx.font = '30px bomba';
  ctx.fillText('Retry', 265, 345);
  ctx.drawImage(document.getElementById('unsel'), 480, 340, 220, 45);
  ctx.fillText('Main menu', 495, 345);
}