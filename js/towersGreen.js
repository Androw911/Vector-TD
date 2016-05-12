/*VŠETKY DAMAGE MODIFIKÁROTY SÚ HOTOVE*/
function towerG1(x, y)
{
  this.name = 'Green Laser mk.I'
  this.desc1 = 'Deals constant damage to'
  this.desc2 = 'single target'
  this.desc3 = ''
  this.x = x;
  this.y = y;
  this.size = 25;
  this.tower = 1;
  this.damage = 26;
  this.cost = 100;
  this.range = 70;
  this.level = 1;
  this.anim = 0;
  this.selected = 0;
  this.target = false;
  this.rof = 2;
  this.timer = this.rof;
  this.lock = 1;
  this.id = document.getElementById('greentwr1');

  this.projectile = function(enemy)
  {
      ctx.strokeStyle = '#008200';
      ctx.beginPath();
      ctx.moveTo(this.x+this.size/2, this.y+this.size/2);
      ctx.lineTo(enemy.x+this.size/2-this.size/12+this.size*Math.random()/6, enemy.y+this.size/2-this.size/12+this.size*Math.random()/6);
      ctx.stroke();
  }
}

towerG1.prototype = Object.create(tower.prototype);

function towerG2(x, y)
{
  this.name = 'Green Laser mk.II'
  this.desc1 = 'Same as mk.I but has higher'
  this.desc2 = 'damage and after hitting first'
  this.desc3 = 'enemy, laser jumps to second'
  this.x = x;
  this.y = y;
  this.size = 25;
  this.tower = 1;
  this.damage = 60;
  this.cost = 400;
  this.range = 72;
  this.level = 1;
  this.anim = 0;
  this.selected = 0;
  this.target = false;
  this.target1 = false;
  this.rof = 2;
  this.timer = this.rof;
  this.lock = 1;
  this.id = document.getElementById('greentwr2');

  this.projectile = function(enemy, centre)
  { 
      ctx.strokeStyle = "#008200";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centre.x+centre.size/2, centre.y+centre.size/2);
      ctx.lineTo(enemy.x+enemy.size/2-enemy.size/12+enemy.size*Math.random()/6, enemy.y+enemy.size/2-enemy.size/12+enemy.size*Math.random()/6);
      ctx.stroke();
  }
}
towerG2.prototype = Object.create(tower.prototype);
towerG2.prototype.targeting = function()
{
  var first = 1;
    if(this.target && enemies[this.target]) //Ak má živý target tak zistí či je v range
    {
      var enemy = enemies[this.target];
      if((enemy.x-enemy.size/2-this.x+this.size/2)*(enemy.x-enemy.size/2-this.x+this.size/2) +
        (enemy.y-enemy.size/2-this.y+this.size/2)*(enemy.y-enemy.size/2-this.y+this.size/2) >= this.range*this.range)
        {
          this.target = false;
          this.target1 = false;
        }
    }

    if(!this.target || !enemies[this.target]) //Ak nemá target
    for(var i in enemies)
    {
      var enemy = enemies[i]; //prejde polom enemies a nájde takých čo sú v range
        if(enemy && ((enemy.x-enemy.size/2-this.x+this.size/2)*(enemy.x-enemy.size/2-this.x+this.size/2) +
        (enemy.y-enemy.size/2-this.y+this.size/2)*(enemy.y-enemy.size/2-this.y+this.size/2) <= this.range*this.range))
            {
              if(first) //Ak nemá target tak targetne prvého
              {
                first = 0;
                this.target = i;
              }
              else
              { //vyberie z nich nearest visible
                if(enemy && (enemy.x-enemy.size/2-this.x+this.size/2)*(enemy.x-enemy.size/2-this.x+this.size/2) +
                    (enemy.y-enemy.size/2-this.y+this.size/2)*(enemy.y-enemy.size/2-this.y+this.size/2) <
                    (enemies[this.target].x-enemies[this.target].size/2-this.x+this.size/2)*(enemies[this.target].x-enemies[this.target].size/2-this.x+this.size/2) +
                    (enemies[this.target].y-enemies[this.target].size/2-this.y+this.size/2)*(enemies[this.target].y-enemies[this.target].size/2-this.y+this.size/2))
                  this.target = i;
              }
            }
    }
    first = 1;
    if(this.target && enemies[this.target]) //Ak má prvý target
    for(var i in enemies)
    {
      var enemy = enemies[i]; //prejde polom enemies a nájde takých čo sú v range(70) od prvého targetu
        if(enemy && ((enemy.x-enemy.size/2-enemies[this.target].x+enemies[this.target].size/2)*(enemy.x-enemy.size/2-enemies[this.target].x+enemies[this.target].size/2) +
        (enemy.y-enemy.size/2-enemies[this.target].y+enemies[this.target].size/2)*(enemy.y-enemy.size/2-enemies[this.target].y+enemies[this.target].size/2) <= 70*70))
            {
              if(first && i != this.target) //Ak nemá target tak targetne prvého
              {
                first = 0;
                this.target1 = i;
              }
              else
              { //vyberie z nich nearest visible
                if(enemy && i != this.target && 
                    (enemy.x-enemy.size/2-enemies[this.target].x+enemies[this.target].size/2)*(enemy.x-enemy.size/2-enemies[this.target].x+enemies[this.target].size/2) +
                    (enemy.y-enemy.size/2-enemies[this.target].y+enemies[this.target].size/2)*(enemy.y-enemy.size/2-enemies[this.target].y+enemies[this.target].size/2) <
                    (enemies[this.target1].x-enemies[this.target1].size/2-enemies[this.target].x+enemies[this.target].size/2)*(enemies[this.target1].x-enemies[this.target1].size/2-enemies[this.target].x+enemies[this.target].size/2) +
                    (enemies[this.target1].y-enemies[this.target1].size/2-enemies[this.target].y+enemies[this.target].size/2)*(enemies[this.target1].y-enemies[this.target1].size/2-enemies[this.target].y+enemies[this.target].size/2))
                  this.target1 = i;
              }
            }
    }
}

towerG2.prototype.fire = function ()
  {
    this.targeting();

    if(!this.timer)
      this.timer = this.rof;

    if(this.target)
    {
      if(enemies[this.target] && this.timer === this.rof)
      {
        this.projectile(enemies[this.target], this)
        if(enemies[this.target].type == 1)
          enemies[this.target].hp -= this.damage/2;
        else if(enemies[this.target].type == 2)
          enemies[this.target].hp -= this.damage*1.5;
        else
          enemies[this.target].hp -= this.damage;
        this.timer --;
        if(enemies[this.target1])
        {
          this.projectile(enemies[this.target1], enemies[this.target])
          if(enemies[this.target1].type == 1)
            enemies[this.target1].hp -= this.damage/2;
          else if(enemies[this.target1].type == 2)
            enemies[this.target1].hp -= this.damage*1.5;
          else
            enemies[this.target1].hp -= this.damage;
        }
       if(enemies[this.target].hp <= 0)
        {
          enemies[this.target] = undefined;
          player.money += 4 + player.wave;
          player.score += (player.wave+(player.money/500))*player.life
          this.target = false;
        }
         if(enemies[this.target1] && enemies[this.target1].hp <= 0)
          {
            enemies[this.target1] = undefined;
            player.money += 4 + player.wave;
          player.score += (player.wave+(player.money/500))*player.life
            this.target1 = false;
          }
          if(!this.target)
            this.target1 = false;
        }
      
      if (!this.lock)
        this.target = false;
    }
    if(this.timer != this.rof)
      this.timer--;
  }

function towerG3(x, y)
{
  this.name = 'Green Laser mk.III'
  this.desc1 = 'Same as mk.II but has higher '
  this.desc2 = 'damage and jumps to another'
  this.desc3 = 'two targets'
  this.x = x;
  this.y = y;
  this.size = 25;
  this.tower = 1;
  this.damage = 280;
  this.cost = 2000;
  this.range = 74;
  this.level = 1;
  this.anim = 0;
  this.selected = 0;
  this.target = false;
  this.target1 = false;
  this.target2 = false;
  this.rof = 2;
  this.timer = this.rof;
  this.lock = 1;
  this.id = document.getElementById('greentwr3');

  this.projectile = function(enemy, centre)
  { 
      ctx.strokeStyle = "#008200";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centre.x+centre.size/2, centre.y+centre.size/2);
      ctx.lineTo(enemy.x+enemy.size/2-enemy.size/12+enemy.size*Math.random()/6, enemy.y+enemy.size/2-enemy.size/12+enemy.size*Math.random()/6);
      ctx.stroke();
  }
}
towerG3.prototype = Object.create(tower.prototype);
towerG3.prototype.targeting = function()
{
  var first = 1;
    if(this.target && enemies[this.target]) //Ak má živý target tak zistí či je v range
    {
      var enemy = enemies[this.target];
      if((enemy.x-enemy.size/2-this.x+this.size/2)*(enemy.x-enemy.size/2-this.x+this.size/2) +
        (enemy.y-enemy.size/2-this.y+this.size/2)*(enemy.y-enemy.size/2-this.y+this.size/2) >= this.range*this.range)
        {
          this.target = false;
          this.target1 = false;
        }
    }

    if(!this.target || !enemies[this.target]) //Ak nemá target
    for(var i in enemies)
    {
      var enemy = enemies[i]; //prejde polom enemies a nájde takých čo sú v range
        if(enemy && ((enemy.x-enemy.size/2-this.x+this.size/2)*(enemy.x-enemy.size/2-this.x+this.size/2) +
        (enemy.y-enemy.size/2-this.y+this.size/2)*(enemy.y-enemy.size/2-this.y+this.size/2) <= this.range*this.range))
            {
              if(first) //Ak nemá target tak targetne prvého
              {
                first = 0;
                this.target = i;
              }
              else
              { //vyberie z nich nearest visible
                if(enemy && (enemy.x-enemy.size/2-this.x+this.size/2)*(enemy.x-enemy.size/2-this.x+this.size/2) +
                    (enemy.y-enemy.size/2-this.y+this.size/2)*(enemy.y-enemy.size/2-this.y+this.size/2) <
                    (enemies[this.target].x-enemies[this.target].size/2-this.x+this.size/2)*(enemies[this.target].x-enemies[this.target].size/2-this.x+this.size/2) +
                    (enemies[this.target].y-enemies[this.target].size/2-this.y+this.size/2)*(enemies[this.target].y-enemies[this.target].size/2-this.y+this.size/2))
                  this.target = i;
              }
            }
    }
    first = 1;
    if(this.target && enemies[this.target]) //Ak má prvý target
    for(var i in enemies)
    {
      var enemy = enemies[i]; //prejde polom enemies a nájde takých čo sú v range(70) od prvého targetu
        if(enemy && ((enemy.x-enemy.size/2-enemies[this.target].x+enemies[this.target].size/2)*(enemy.x-enemy.size/2-enemies[this.target].x+enemies[this.target].size/2) +
        (enemy.y-enemy.size/2-enemies[this.target].y+enemies[this.target].size/2)*(enemy.y-enemy.size/2-enemies[this.target].y+enemies[this.target].size/2) <= 70*70))
            {
              if(first && i != this.target) //Ak nemá target tak targetne prvého
              {
                first = 0;
                this.target1 = i;
              }
              else
              { //vyberie z nich nearest visible
                if(enemy && i != this.target && 
                    (enemy.x-enemy.size/2-enemies[this.target].x+enemies[this.target].size/2)*(enemy.x-enemy.size/2-enemies[this.target].x+enemies[this.target].size/2) +
                    (enemy.y-enemy.size/2-enemies[this.target].y+enemies[this.target].size/2)*(enemy.y-enemy.size/2-enemies[this.target].y+enemies[this.target].size/2) <
                    (enemies[this.target1].x-enemies[this.target1].size/2-enemies[this.target].x+enemies[this.target].size/2)*(enemies[this.target1].x-enemies[this.target1].size/2-enemies[this.target].x+enemies[this.target].size/2) +
                    (enemies[this.target1].y-enemies[this.target1].size/2-enemies[this.target].y+enemies[this.target].size/2)*(enemies[this.target1].y-enemies[this.target1].size/2-enemies[this.target].y+enemies[this.target].size/2))
                  this.target1 = i;
              }
            }
    }
    first = 1;
    if(this.target1 && enemies[this.target1]) //Ak má prvý target
    for(var i in enemies)
    {
      var enemy = enemies[i]; //prejde polom enemies a nájde takých čo sú v range(70) od prvého targetu
        if(enemy && ((enemy.x-enemy.size/2-enemies[this.target1].x+enemies[this.target1].size/2)*(enemy.x-enemy.size/2-enemies[this.target1].x+enemies[this.target1].size/2) +
        (enemy.y-enemy.size/2-enemies[this.target1].y+enemies[this.target1].size/2)*(enemy.y-enemy.size/2-enemies[this.target1].y+enemies[this.target1].size/2) <= 70*70))
            {
              if(first && i != this.target && i != this.target1) //Ak nemá target tak targetne prvého
              {
                first = 0;
                this.target2 = i;
              }
              else
              { //vyberie z nich nearest visible
                if(enemy && enemies[this.target1] && i != this.target && i != this.target1 && 
                    (enemy.x-enemy.size/2-enemies[this.target1].x+enemies[this.target1].size/2)*(enemy.x-enemy.size/2-enemies[this.target1].x+enemies[this.target1].size/2) +
                    (enemy.y-enemy.size/2-enemies[this.target1].y+enemies[this.target1].size/2)*(enemy.y-enemy.size/2-enemies[this.target1].y+enemies[this.target1].size/2) <
                    (enemies[this.target2].x-enemies[this.target2].size/2-enemies[this.target1].x+enemies[this.target1].size/2)*(enemies[this.target2].x-enemies[this.target2].size/2-enemies[this.target1].x+enemies[this.target1].size/2) +
                    (enemies[this.target2].y-enemies[this.target2].size/2-enemies[this.target1].y+enemies[this.target1].size/2)*(enemies[this.target2].y-enemies[this.target2].size/2-enemies[this.target1].y+enemies[this.target1].size/2))
                  this.target2 = i;
              }
            }
    }
}

towerG3.prototype.fire = function ()
  {
    this.targeting();

    if(!this.timer)
      this.timer = this.rof;

    if(this.target)
    {
      if(enemies[this.target] && this.timer === this.rof)
      {
        this.projectile(enemies[this.target], this)
        if(enemies[this.target].type == 1)
          enemies[this.target].hp -= this.damage/2;
        else if(enemies[this.target].type == 2)
          enemies[this.target].hp -= this.damage*1.5;
        else
          enemies[this.target].hp -= this.damage;
        this.timer --;
       if(enemies[this.target1])
       {
          this.projectile(enemies[this.target1], enemies[this.target])
          if(enemies[this.target1].type == 1)
            enemies[this.target1].hp -= this.damage/2;
          else if(enemies[this.target1].type == 2)
            enemies[this.target1].hp -= this.damage*1.5;
          else
            enemies[this.target1].hp -= this.damage;
       }
       if(enemies[this.target2] && enemies[this.target1])
       {
          this.projectile(enemies[this.target2], enemies[this.target1])
          if(enemies[this.target2].type == 1)
            enemies[this.target2].hp -= this.damage/2;
          else if(enemies[this.target2].type == 2)
            enemies[this.target2].hp -= this.damage*1.5;
          else
            enemies[this.target2].hp -= this.damage;
       }
       if(enemies[this.target].hp <= 0)
        {
          enemies[this.target] = undefined;
          player.money += 4 + player.wave;
          player.score += (player.wave+(player.money/500))*player.life
          this.target = false;
        }
         if(enemies[this.target1] && enemies[this.target1].hp <= 0)
          {
            enemies[this.target1] = undefined;
            player.money += 4 + player.wave;
          player.score += (player.wave+(player.money/500))*player.life
            this.target1 = false;
          }
         if(enemies[this.target2] && enemies[this.target2].hp <= 0)
          {
            enemies[this.target2] = undefined;
            player.money += 4 + player.wave;
          player.score += (player.wave+(player.money/500))*player.life
            this.target2 = false;
          }
        }
        if(!this.target)
        {
          this.target1 = false;
          this.target2 = false;
        }
      
      if (!this.lock)
        this.target = false;
    }
    if(this.timer != this.rof)
      this.timer--;
  }
