function enemy(x, y, size, hp, i, type)
{
  this.type = type;
  this.x = x;
  this.y = y;
  this.size = size;
  this.i = i;
  this.speed = 1;
  this.dx = 0;
  this.dy = this.speed;
  this.hp = hp;
  this.perc = hp/100
  this.slow = 0;
  this.stun = 0;
  this.confusion = 0;
  this.confused = 0;
  this.move = function()
  {
    if(this.i === 0)
    {
      if(this.dy > 0) // ak pohyb dole
        for(var i in scene)
          {
            var obj = scene[i];
            if(this.x === obj.x && this.y <= obj.y) //bude porovnávať všetky políčka čo sú pod ním
              if(this.y+2*this.size === obj.y) //nájde také čo je o 2 pod ním
                {
                  for(var j in scene)
                  {
                    obj = scene[j];
                    if(this.y === obj.y) //teraz porovnáva všetko vedľa neho
                    {
                      if(this.x+2*this.size === obj.x) //ak je o 2 napravo od neho znamená to že musí zabočiť doľava
                      {
                        this.dy = 0;
                        this.dx = -this.speed;
                        break;
                      }
                    }
                  }
                  obj = scene[i];
                }
                else if(this.y+this.size === obj.y) //ak od neho o 2 napravo nebolo nič tak pôjde doľava keď narazí
                {
                  this.dy = 0;
                  this.dx = this.speed;
                  break;
                }
          }
      else if(this.dy < 0) // ak pohyb hore
        for(var i in scene)
          {
            var obj = scene[i];
            if(this.x === obj.x && this.y >= obj.y)
              if(this.y-2*this.size === obj.y)
                {
                  for(var j in scene)
                  {
                    obj = scene[j];
                    if(this.y === obj.y)
                    {
                      if(this.x-2*this.size === obj.x)
                      {
                        this.dy = 0;
                        this.dx = this.speed;
                        break;
                      }
                    }
                  }
                  obj = scene[i];
                }
                else if(this.y-this.size === obj.y)
                {
                  this.dy = 0;
                  this.dx = -this.speed;
                  break;
                }
          }
      else if(this.dx > 0) // ak pohyb doprava
        for(var i in scene)
          {
            var obj = scene[i];
            if(this.y === obj.y && this.x <= obj.x)
              if(this.x+2*this.size === obj.x)
                {
                  for(var j in scene)
                  {
                    obj = scene[j];
                    if(this.x === obj.x)
                    {
                      if(this.y-2*this.size === obj.y)
                      {
                        this.dy = this.speed;
                        this.dx = 0;
                        break;
                      }
                    }
                  }
                  obj = scene[i];
                }
                else if(this.x+this.size === obj.x)
                {
                  this.dy = -this.speed;
                  this.dx = 0;
                  break;
                }
          }
      else if(this.dx < 0) // ak pohyb dolava
        for(var i in scene)
          {
            var obj = scene[i];
            if(this.y === obj.y && this.x >= obj.x)
              if(this.x-2*this.size === obj.x)
                {
                  for(var j in scene)
                  {
                    obj = scene[j];
                    if(this.x === obj.x)
                    {
                      if(this.y+2*this.size === obj.y)
                      {
                        this.dy = -this.speed;
                        this.dx = 0;
                        break;
                      }
                    }
                  }
                  obj = scene[i];
                }
                else if(this.x-this.size === obj.x)
                {
                  this.dy = this.speed;
                  this.dx = 0;
                  break;
                }
          }
      if(this.y === 565 || this.x === 690) // Spat na start
      {
        this.dx = 0;
        this.dy = this.speed;
        this.x = 125;
        this.y = 85;
        player.life--;
      }
      if(this.confusion == 61)
      {
        this.dx = -this.dx;
        this.dy = -this.dy;
        this.confusion--;
      }
      if(this.confusion)
        this.confusion--;
      if(this.confusion == 1)
      {
        this.dx = -this.dx;
        this.dy = -this.dy;
        enemy.i--
        this.confusion--;
      }
      if(this.stun)
        this.stun--;
      else
        if(this.slow)
        {
          this.x += this.dx/2;
          this.y += this.dy/2; 
          this.slow--;
        }
        else
        {
          this.x += this.dx;
          this.y += this.dy; 
        }
    }
/////////////////////////Druhý rad nepriateľov(alebo aj tí napravo keď idú dole)///////////////////////////////////////////////////
    if(this.i === 1)
    {
      if(this.dy > 0) // ak pohyb dole
        for(var i in scene)
          {
            var obj = scene[i];
            if(this.x === obj.x && this.y <= obj.y) //bude porovnávať všetky políčka čo sú pod ním
              if(this.y+2*this.size === obj.y) //nájde také čo je o 2 pod ním
                {
                  for(var j in scene)
                  {
                    obj = scene[j];
                    if(this.y === obj.y) //teraz porovnáva všetko vedľa neho
                    {
                      if(this.x-2*this.size === obj.x)
                      {
                        this.dy = 0;
                        this.dx = this.speed;
                        break;
                      }
                    }
                  }
                  obj = scene[i];
                }
                else if(this.y+this.size === obj.y) //ak od neho o 2 napravo nebolo nič tak pôjde doľava keď narazí
                {
                  this.dy = 0;
                  this.dx = -this.speed;
                  break;
                }
          }
      else if(this.dy < 0) // ak pohyb hore
        for(var i in scene)
          {
            var obj = scene[i];
            if(this.x === obj.x && this.y >= obj.y)
              if(this.y-2*this.size === obj.y)
                {
                  for(var j in scene)
                  {
                    obj = scene[j];
                    if(this.y === obj.y)
                    {
                      if(this.x+2*this.size === obj.x)
                      {
                        this.dy = 0;
                        this.dx = -this.speed;
                        break;
                      }
                    }
                  }
                  obj = scene[i];
                }
                else if(this.y-this.size === obj.y)
                {
                  this.dy = 0;
                  this.dx = this.speed;
                  break;
                }
          }
      else if(this.dx > 0) // ak pohyb doprava
        for(var i in scene)
          {
            var obj = scene[i];
            if(this.y === obj.y && this.x <= obj.x)
              if(this.x+2*this.size === obj.x)
                {
                  for(var j in scene)
                  {
                    obj = scene[j];
                    if(this.x === obj.x)
                    {
                      if(this.y+2*this.size === obj.y)
                      {
                        this.dy = -this.speed;
                        this.dx = 0;
                        break;
                      }
                    }
                  }
                  obj = scene[i];
                }
                else if(this.x+this.size === obj.x)
                {
                  this.dy = this.speed;
                  this.dx = 0;
                  break;
                }
          }
      else if(this.dx < 0) // ak pohyb dolava
        for(var i in scene)
          {
            var obj = scene[i];
            if(this.y === obj.y && this.x >= obj.x)
              if(this.x-2*this.size === obj.x)
                {
                  for(var j in scene)
                  {
                    obj = scene[j];
                    if(this.x === obj.x)
                    {
                      if(this.y-2*this.size === obj.y)
                      {
                        this.dy = this.speed;
                        this.dx = 0;
                        break;
                      }
                    }
                  }
                  obj = scene[i];
                }
                else if(this.x-this.size === obj.x)
                {
                  this.dy = -this.speed;
                  this.dx = 0;
                  break;
                }
          }
      if(this.y === 565 || this.x === 690) // Spat na start
      {
        this.dx = 0;
        this.dy = this.speed;
        this.x = 150;
        this.y = 85;
        player.life--;
      }
      if(this.confusion == 61)
      {
        this.dx = -this.dx;
        this.dy = -this.dy;
        this.confusion--;
      }
      if(this.confusion)
        this.confusion--;
      if(this.confusion == 1)
      {
        this.dx = -this.dx;
        this.dy = -this.dy;
        enemy.i++
        this.confusion--;
      }
      if(this.stun)
        this.stun--;
      else
        if(this.slow)
        {
          this.x += this.dx/2;
          this.y += this.dy/2; 
          this.slow--;
        }
        else
        {
          this.x += this.dx;
          this.y += this.dy; 
        }
    }
  }
  this.draw = function()
  {
    if(this.type == 1)
      ctx.drawImage(document.getElementById('enemy1'), this.x, this.y, this.size, this.size);
    else if(this.type == 2)
      ctx.drawImage(document.getElementById('enemy2'), this.x, this.y, this.size, this.size);
    else if(this.type == 3)
      ctx.drawImage(document.getElementById('enemy3'), this.x, this.y, this.size, this.size);
    else if(this.type == 4)
      ctx.drawImage(document.getElementById('enemy4'), this.x, this.y, this.size, this.size);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 1;
    ctx.beginPath()
    ctx.moveTo(this.x+1, this.y+2);
    ctx.lineTo(this.x+this.hp/this.perc*0.25-1, this.y+2)
    ctx.stroke();
  }
}

function createEnemies(type)
{
  if(!enemies[player.j-1] && !enemies[1] && !enemies[15])
    {
      enemies[player.j+15*player.i] = (new enemy(125+player.i*25, 85, 25, player.hp*Math.pow(player.diff,player.wave), player.i, type))
      player.i++;
      enemies[player.j+15*player.i] = (new enemy(125+player.i*25, 85, 25, player.hp*Math.pow(player.diff,player.wave), player.i, type))
      player.j++;
      if(player.j+15*player.i != 30)
          player.i--;
        else
        {
          player.nextwave = 0;
          player.i = 0;
          player.j = 0;
        }
    }
      if(enemies[player.j-1] && enemies[player.j-1].y === 110 || enemies[player.j+15] && enemies[player.j+15].y === 110)
      {
        enemies[player.j+15*player.i] = (new enemy(125+player.i*25, 85, 25, player.hp*Math.pow(player.diff,player.wave), player.i, type))
        player.i++;
        enemies[player.j+15*player.i] = (new enemy(125+player.i*25, 85, 25, player.hp*Math.pow(player.diff,player.wave), player.i, type))
        player.j++;
        if(player.j+15*player.i != 30)
          player.i--;
        else
        {
          player.nextwave = 0;
          player.i = 0;
          player.j = 0;
        }
      }
}

///**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**
//\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\* Enemy 1 červeny \\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**
///**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//* Enemy 2 zeleny  //**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**
//\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\* Enemy 3 fialovy \\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**
///**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//* Enemy 4 modry   //**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**
//\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**\\**