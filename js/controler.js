window.onclick = function mainMenuClick(event)
{
  var x = event.pageX - canvas.offsetLeft
  var y = event.pageY - canvas.offsetTop
  ///////Splash screen/////////////////////////////////////////////////////////
  if(player.splash)
  {
    player.splash = 0;
    menu();
  }
  /////Výber v main menu///////////////////////////////////////////////////////
  else if(!player.play && !player.splash && !player.tut && !player.end)
  {
    if(x >= 750 && x <= 970)
    {
      if(y >= 100 && y <= 145)
        howToPlay();
      else if(y >= 200 && y <= 245)
        mode = 0;
      else if(y >= 250 && y <= 295)
        mode = 1;
      else if(y >= 350 && y <= 395)
        map = 0;
      else if(y >= 400 && y <= 445)
        map = 1;
      else if(y >= 450 && y <= 495)
        map = 2
      if(!player.tut)
        menu();
    }
    if(x >= 750 && x <= 970 && y >= 525 && y <= 570)
      play();
  }
  ////////////////Game Menu//////////////////////////////////////////////////////
  else if(player.play && !player.splash)
  {
    if(x >= 750 && x <= 970 && y >= 145 && y <= 570)
    {
      if (x >= 775 && x <= 810)
      {
          if(y >= 145 && y <= 180 && player.money >= 100)
            player.sel = new towerG1(-1000, -1000); 
          else if(y >= 190 && y <= 225 && player.money >= 400)
            player.sel = new towerG2(-1000, -1000);
          else if(y >= 235 && y <= 270 && player.money >= 2000)
            player.sel = new towerG3(-1000, -1000);
      }
      else if (x >= 820 && x <= 855)
      {
        if(y >= 145 && y <= 180 && player.money >= 200)
          player.sel = new towerR1(-1000, -1000);
        else if(y >= 190 && y <= 225 && player.money >= 800)
          player.sel = new towerR2(-1000, -1000);
        else if(y >= 235 && y <= 270 && player.money >= 2500)
          player.sel = new towerR3(-1000, -1000);
      }
      else if (x >= 865 && x <= 900)
      {
        if(y >= 145 && y <= 180 && player.money >= 300)
          player.sel = new towerP1(-1000, -1000);
        else if(y >= 190 && y <= 225 && player.money >= 900)
          player.sel = new towerP2(-1000, -1000);
        else if(y >= 235 && y <= 270 && player.money >= 2800)
          player.sel = new towerP3(-1000, -1000);
      }
      else if (x >= 910 && x <= 945)
      {
        if(y >= 145 && y <= 180 && player.money >= 300)
          player.sel = new towerB1(-1000, -1000);
        else if(y >= 190 && y <= 225 && player.money >= 700)
          player.sel = new towerB2(-1000, -1000);
        else if(y >= 235 && y <= 270 && player.money >= 1200)
          player.sel = new towerB3(-1000, -1000);
      }
       /////////////////////////////////////Apgrejd///////////////////////////////
      if (player.selected && scene[player.selected].level < 5 && x >= 750 && x <= 970 && y >= 385 && y <= 430)
      {
        if(player.money >= Math.round(scene[player.selected].cost/2*Math.pow(1.5,scene[player.selected].level-1)))
        {
          if(scene[player.selected].slow)
          {
            scene[player.selected].slow += 10
            if(scene[player.selected].stun)
            {
              scene[player.selected].slow -= 4
              scene[player.selected].stun += 3
            }
          }
          scene[player.selected].damage = Math.round(scene[player.selected].damage*1.4)
          scene[player.selected].range = Math.round(scene[player.selected].range*1.1)
          player.money -= Math.round(scene[player.selected].cost/2*Math.pow(1.5,scene[player.selected].level-1))
          scene[player.selected].level++
        }
      }
      else if(x >= 750 && x <= 970 && y >= 525 && y <= 570)
      {
        nextWave();
      }
    }
    ///////Click on Map//////////////////////////////////////////////////////////
    else
    {

      for (var j in scene)
      {
        scene[j].selected = 0;
      }
      player.selected = false;
      for(var i in scene)
      {
        var obj = scene[i]; //zistí či som klikol na scénu
        if(obj.x < x && obj.x + obj.size > x && obj.y < y && obj.y + obj.size > y)
          {
            if(!scene[i].tower && player.sel)
            {
              player.money -= player.sel.cost;
              scene[i] = player.sel;
              scene[i].x = obj.x;
              scene[i].y = obj.y;
              player.selected = i;
            }
            else if(scene[i].tower)
              {
                for (var j in scene)
                  scene[j].selected = 0; //všetko unelectne
                scene[i].selected = 1; //kliknutú selectne
                player.selected = i;
              }
            else
              {
                for (var j in scene)
                  scene[j].selected = 0;
              }
            player.sel = false;
          }
      }
      if(100 <= x && 700 >= x && 100 <= y && 575 >= y)
        player.sel = false;
    }
  }
  else if (player.tut)
    howToPlay();
  else if(player.end)
  {
    if(y >= 340 && y <= 385)
    {
      if(x >= 250 && x <= 470)
      {
        player.end = 0;
        play();
      }if(x >= 480 && x <= 700)
      {
        player.end = 0;
        menu();
      }
    }
  }
}

window.onmousemove = function mouseMove(event)
{
  var x = event.pageX - canvas.offsetLeft
  var y = event.pageY - canvas.offsetTop
  if(player.sel)
  {
    for(var i in scene)
    {
      var obj = scene[i];
      if(!obj.tower && obj.x < x && obj.x+obj.size > x && obj.y < y && obj.y+obj.size > y)
      {
        player.sel.x = obj.x;
        player.sel.y = obj.y;
        player.sel.selected = 1
      }
    }
  }
  if(player.play && !player.splash)
  {
    if(x >= 750 && x <= 970 && y >= 145 && y <= 570)
    {
      if (x >= 775 && x <= 810)
      {
          if(y >= 145 && y <= 180 && player.money >= 100)
            player.selOnMouseOver = new towerG1(-1000, -1000); 
          else if(y >= 190 && y <= 225 && player.money >= 400)
            player.selOnMouseOver = new towerG2(-1000, -1000);
          else if(y >= 235 && y <= 270 && player.money >= 2000)
            player.selOnMouseOver = new towerG3(-1000, -1000);
      }
      else if (x >= 820 && x <= 855)
      {
        if(y >= 145 && y <= 180 && player.money >= 200)
          player.selOnMouseOver = new towerR1(-1000, -1000);
        else if(y >= 190 && y <= 225 && player.money >= 800)
          player.selOnMouseOver = new towerR2(-1000, -1000);
        else if(y >= 235 && y <= 270 && player.money >= 2500)
          player.selOnMouseOver = new towerR3(-1000, -1000);
      }
      else if (x >= 865 && x <= 900)
      {
        if(y >= 145 && y <= 180 && player.money >= 300)
          player.selOnMouseOver = new towerP1(-1000, -1000);
        else if(y >= 190 && y <= 225 && player.money >= 900)
          player.selOnMouseOver = new towerP2(-1000, -1000);
        else if(y >= 235 && y <= 270 && player.money >= 2800)
          player.selOnMouseOver = new towerP3(-1000, -1000);
      }
      else if (x >= 910 && x <= 945)
      {
        if(y >= 145 && y <= 180 && player.money >= 300)
          player.selOnMouseOver = new towerB1(-1000, -1000);
        else if(y >= 190 && y <= 225 && player.money >= 700)
          player.selOnMouseOver = new towerB2(-1000, -1000);
        else if(y >= 235 && y <= 270 && player.money >= 1200)
          player.selOnMouseOver = new towerB3(-1000, -1000);
      }
    }
    else
      player.selOnMouseOver = false;
  }
}
