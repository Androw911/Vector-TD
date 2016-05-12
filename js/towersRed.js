function towerR1(x, y)
{
  this.name = 'Red Refractor'
  this.desc1 = 'Deals low damage to single target'
  this.desc2 = 'but as it hits first target ray'
  this.desc3 = 'refracts to nearby enemies'
  this.x = x;
  this.y = y;
  this.size = 25;
  this.tower = 1;
  this.damage = 128;
  this.cost = 200;
  this.range = 80;
  this.level = 1;
  this.anim = 8;
  this.selected = 0;
  this.target = false;
  this.rof = 16;
  this.timer = this.rof;
  this.lock = true;
  this.splash = 50;
  this.id = document.getElementById('redtwr1');

  this.projectile = function(enemy, centre, width)
  {
      alpha = (this.rof - this.timer)/2;
      if (this.timer == this.rof)
        alpha = 1;
      for(var i = 1; i<4; i++)
      {
        ctx.strokeStyle = 'rgba(181,6,6,' + 0.3333*i/alpha + ')';
        ctx.lineWidth = width*(4-i);
        ctx.beginPath();
        ctx.moveTo(centre.x+centre.size/2, centre.y+centre.size/2);
        ctx.lineTo(enemy.x+enemy.size/2, enemy.y+enemy.size/2);
        ctx.stroke();
      }
  }
}

towerR1.prototype = Object.create(tower.prototype);
towerR1.prototype.fire = function ()
  {
    this.targeting();

    if(!this.timer)
      this.timer = this.rof;

    if(enemies[this.target] && this.target)
    {
      var enemy = enemies[this.target];
      if(this.timer >= this.rof-this.anim) //projectile
      {
        this.projectile(enemy, this, 1.3);
        for(var i in enemies)
        {
          enemy = enemies[i];
          if(enemy && ((enemy.x-enemy.size/2-enemies[this.target].x+enemies[this.target].size/2)*(enemy.x-enemy.size/2-enemies[this.target].x+enemies[this.target].size/2) +
                      (enemy.y-enemy.size/2-enemies[this.target].y+enemies[this.target].size/2)*(enemy.y-enemy.size/2-enemies[this.target].y+enemies[this.target].size/2)  <= this.splash*this.splash))
          this.projectile(enemy, enemies[this.target], 0.6);
       }

      if (!this.lock && this.timer == this.rof-this.anim)
        this.target = false;
      } //End of projectile

      if(this.timer === this.rof) //Damage
      {
       for(var i in enemies)
       {
         enemy = enemies[i]; //SPLASH DAMAGE, OU YEAH!!!!!!!!
         if(enemy && ((enemy.x-enemy.size/2-enemies[this.target].x+enemies[this.target].size/2)*(enemy.x-enemy.size/2-enemies[this.target].x+enemies[this.target].size/2) +
                      (enemy.y-enemy.size/2-enemies[this.target].y+enemies[this.target].size/2)*(enemy.y-enemy.size/2-enemies[this.target].y+enemies[this.target].size/2)  <= this.splash*this.splash))
         {
          if(enemy.type == 2)
            enemy.hp -= this.damage/2;
          else if(enemy.type == 1)
            enemy.hp -= this.damage*1.5;
          else
            enemy.hp -= this.damage
         }
       }   
       this.timer --;
      if(enemies[this.target].hp <= 0)
       {
         enemies[this.target] = undefined;
         player.money += 4 + player.wave;
         player.score += (player.wave+(player.money/500))*player.life
         this.target = false;
       }
      for(i in enemies) //Zabíjanie zranených zo splashu
        if(enemies[i] && enemies[i].hp <= 0)
        {
          enemies[i] = undefined;
          player.money += 4 + player.wave;
          player.score += (player.wave+(player.money/500))*player.life
        }
      }//End of damage
    }
    if(this.timer != this.rof)
      this.timer--;
  }

function towerR2(x, y)
{
  this.name = 'Red Spamer'
  this.desc1 = 'Has very high rate of fire but is'
  this.desc2 = 'only capable of hitting random'
  this.desc3 = 'targets'
  this.x = x;
  this.y = y;
  this.size = 25;
  this.tower = 1;
  this.damage = 670;
  this.cost = 700;
  this.range = 95;
  this.level = 1;
  this.anim = 2;
  this.selected = 0;
  this.target = false;
  this.rof = 5;
  this.timer = this.rof;
  this.lock = false;
  this.id = document.getElementById('redtwr2');

  this.projectile = function(enemy)
  {
      ctx.strokeStyle = '#b50606';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(this.x+this.size/2, this.y+this.size/2); //tu niekedy nemá x
      ctx.lineTo(enemy.x+this.size/2-this.size/12+this.size*Math.random()/6, enemy.y+this.size/2-this.size/12+this.size*Math.random()/6);
      ctx.stroke();
  }
}

towerR2.prototype = Object.create(tower.prototype);
towerR2.prototype.targeting = function()
{
  var j = false;
  for(var i in enemies)
  {
    var enemy = false;
    if (enemies[i])
      enemy = enemies[i]
      if(enemy && (enemy.x-enemy.size/2-this.x+this.size/2)*(enemy.x-enemy.size/2-this.x+this.size/2) +
        (enemy.y-enemy.size/2-this.y+this.size/2)*(enemy.y-enemy.size/2-this.y+this.size/2) <= this.range*this.range)
        {
          j = 1;
          break;
        }
  }
  this.target = false;
     while(j && this.target === false) 
     {
      i = Math.floor(30*Math.random());
      var enemy = enemies[i];
          if(enemy && ((enemy.x-enemy.size/2-this.x+this.size/2)*(enemy.x-enemy.size/2-this.x+this.size/2) +
          (enemy.y-enemy.size/2-this.y+this.size/2)*(enemy.y-enemy.size/2-this.y+this.size/2) <= this.range*this.range))
                    this.target = i;   
     }
     if (this.target === 0)
     {
      this.target = "0";
     }
}
towerR2.prototype.fire = function ()
    {
      this.targeting();

      if(!this.timer)
        this.timer = this.rof;

      if(this.target && enemies[this.target] && this.timer <= this.anim)
      {
        this.projectile(enemies[this.target], this);
        this.timer--;
        if (this.timer === this.rof-this.anim)
          this.target = false;
      }

      if(this.target && enemies[this.target])
      {
        var enemy = enemies[this.target];
        if(this.timer === this.rof)
        {
         this.projectile(enemy, this);
         enemies[this.target].hp -= this.damage;
         this.timer --;
         if(enemies[this.target].hp <= 0)
          {
            enemies[this.target] = undefined;
            this.target = false;
            player.money += 4 + player.wave;
            player.score += (player.wave+(player.money/500))*player.life
          }
        }
      }
      if(this.timer != this.anim)
        this.timer--;
    }


function towerR3(x, y)
{
  this.name = 'Death Ray'
  this.desc1 = 'After this tower targets enemy'
  this.desc2 = 'it requires 1/4s to initial charge'
  this.desc3 = 'the beam, very dangerous weapon'
  this.x = x;
  this.y = y;
  this.size = 25;
  this.tower = 1;
  this.damage = 30000;
  this.cost = 2500;
  this.range = 150;
  this.level = 1;
  this.anim = 15;
  this.selected = 0;
  this.target = false;
  this.rof = 61;
  this.timer = this.anim;
  this.lock = true;
  this.id = document.getElementById('redtwr3')

  this.projectile = function(enemy, centre)
  {
      alpha = this.timer;
      if(alpha == this.rof)
        alpha = 1;
      for(var i = 1; i<4; i++)
      {
        ctx.strokeStyle = 'rgba(181,6,6,' + 0.3333*i/alpha + ')';
        ctx.lineWidth = 8-2*i;
        ctx.beginPath();
        ctx.moveTo(centre.x+centre.size/2, centre.y+centre.size/2);
        ctx.lineTo(enemy.x+enemy.size/2, enemy.y+enemy.size/2);
        ctx.stroke();
      }
  }
}
towerR3.prototype = Object.create(tower.prototype);

towerR3.prototype.fire = function ()
    {
      this.targeting();

      if(!this.timer)
        this.timer = this.rof;

      if(this.target && enemies[this.target] && this.timer <= this.anim)
      {
        this.projectile(enemies[this.target], this);
        this.timer--;
        if (!this.lock && this.timer === this.rof-this.anim)
          this.target = false;
      }

      if(this.target && enemies[this.target])
      {
        var enemy = enemies[this.target];
        if(this.timer === this.rof)
        {
         this.projectile(enemy, this);
         enemies[this.target].hp -= this.damage;
         this.timer --;
         if(enemies[this.target].hp <= 0)
          {
            enemies[this.target] = undefined;
            this.target = false;
            player.money += 4 + player.wave;
            player.score += (player.wave+(player.money/500))*player.life
          }
        }
      }
      if(this.timer > this.anim)
        this.timer--;
    }
