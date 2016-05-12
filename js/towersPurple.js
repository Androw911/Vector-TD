function towerP1(x, y)
{
  this.name = 'Purple Beam I'
  this.desc1 = 'Requires 1/4s to initial charge'
  this.desc2 = 'the beam, it is slow but powerful, '
  this.desc3 = 'ideal to kill strong enemies'
  this.x = x;
  this.y = y;
  this.size = 25;
  this.tower = 1;
  this.damage = 2800;
  this.cost = 300;
  this.range = 100;
  this.level = 1;
  this.anim = 15;
  this.selected = 0;
  this.target = false;
  this.rof = 55;
  this.timer = this.rof;
  this.lock = true;
  this.id = document.getElementById('violtwr1')

  this.projectile = function(enemy, centre)
  {
    alpha = this.timer;
      if(alpha == this.rof)
        alpha = 1;
      for(var i = 1; i<4; i++)
      {
        ctx.strokeStyle = 'rgba(150,0,164,' + 0.3333*i/alpha + ')';
        ctx.lineWidth = 8-2*i;
        ctx.beginPath();
        ctx.moveTo(centre.x+centre.size/2, centre.y+centre.size/2);
        ctx.lineTo(enemy.x+enemy.size/2, enemy.y+enemy.size/2);
        ctx.stroke();
      }
  }
}

towerP1.prototype = Object.create(towerR3.prototype);

function towerP2(x, y)
{
  this.name = 'Purple Beam II'
  this.desc1 = 'Same as Purple Beam I but with'
  this.desc2 = '2 beams causing high amount'
  this.desc3 = 'of damage'
  this.x = x;
  this.y = y;
  this.size = 25;
  this.tower = 1;
  this.damage = 9350;
  this.cost = 850;
  this.range = 112;
  this.level = 1;
  this.anim = 15;
  this.selected = 0;
  this.target = false;
  this.rof = 55;
  this.timer = this.rof;
  this.lock = true;
  this.id = document.getElementById('violtwr2')

  this.projectile = function(enemy, centre)
  {
    alpha = this.timer;
      if(alpha == this.rof)
        alpha = 1;
      for(var i = 1; i<4; i++)
      {
        ctx.strokeStyle = 'rgba(150,0,164,' + 0.3333*i/alpha + ')';
        ctx.lineWidth = 8-2*i;
        ctx.beginPath();
        ctx.moveTo(centre.x+centre.size/2-10, centre.y+centre.size/2);
        ctx.lineTo(enemy.x+enemy.size/2, enemy.y+enemy.size/2);
        ctx.stroke();
      }
      for(var i = 1; i<4; i++)
      {
        ctx.strokeStyle = 'rgba(150,0,164,' + 0.3333*i/alpha + ')';
        ctx.lineWidth = 8-2*i;
        ctx.beginPath();
        ctx.moveTo(centre.x+centre.size/2+10, centre.y+centre.size/2);
        ctx.lineTo(enemy.x+enemy.size/2, enemy.y+enemy.size/2);
        ctx.stroke();
      }
  }
}
towerP2.prototype = Object.create(towerR3.prototype);

function towerP3(x, y)
{
  this.name = 'Purple Beam III'
  this.desc1 = 'Same as Purple Beam II but with'
  this.desc2 = '3 beams causing very high amount'
  this.desc3 = 'of damage which stuns enemy'
  this.x = x;
  this.y = y;
  this.size = 25;
  this.tower = 1;
  this.damage = 23500;
  this.cost = 2700;
  this.range = 130;
  this.level = 1;
  this.anim = 15;
  this.selected = 0;
  this.target = false;
  this.rof = 55;
  this.timer = this.rof;
  this.lock = true;
  this.id = document.getElementById('violtwr3')
  this.slow = 8;
  this.stun = 25;

  this.projectile = function(enemy, centre)
  {
    alpha = this.timer;
      if(alpha == this.rof)
        alpha = 1;
      for(var i = 1; i<4; i++)
      {
        ctx.strokeStyle = 'rgba(150,0,164,' + 0.3333*i/alpha + ')';
        ctx.lineWidth = 8-2*i;
        ctx.beginPath();
        ctx.moveTo(centre.x+centre.size/2, centre.y+centre.size/2);
        ctx.lineTo(enemy.x+enemy.size/2, enemy.y+enemy.size/2);
        ctx.stroke();
      }
      for(var i = 1; i<4; i++)
      {
        ctx.strokeStyle = 'rgba(150,0,164,' + 0.3333*i/alpha + ')';
        ctx.lineWidth = 8-2*i;
        ctx.beginPath();
        ctx.moveTo(centre.x+centre.size/2-10, centre.y+centre.size/2);
        ctx.lineTo(enemy.x+enemy.size/2, enemy.y+enemy.size/2);
        ctx.stroke();
      }
      for(var i = 1; i<4; i++)
      {
        ctx.strokeStyle = 'rgba(150,0,164,' + 0.3333*i/alpha + ')';
        ctx.lineWidth = 8-2*i;
        ctx.beginPath();
        ctx.moveTo(centre.x+centre.size/2+10, centre.y+centre.size/2);
        ctx.lineTo(enemy.x+enemy.size/2, enemy.y+enemy.size/2);
        ctx.stroke();
      }
  }
}
towerP3.prototype = Object.create(towerR3.prototype);
towerP3.prototype.fire = function ()
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
         enemy.hp -= this.damage;
         enemy.stun = 14;
            if(enemy.slow%2)
              enemy.slow = this.slow+1;
            else
              enemy.slow = this.slow;
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
