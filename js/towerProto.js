function tower()
{
	
}

tower.prototype =
{
	draw : function()
	  {
	    ctx.drawImage(this.id, this.x, this.y, this.size, this.size);
	    if(this.selected)
	    {
	      ctx.beginPath();
	      ctx.arc(this.x+this.size/2, this.y+this.size/2, this.range, 0, 2*Math.PI, false);
	      ctx.strokeStyle = 'grey';
	      ctx.lineWidth = 1;
	      ctx.stroke();
	    }
	  },

	targeting : function()
	  {
	    var first = 1;
	    if(this.target && enemies[this.target]) //Ak má živý target tak zistí či je v range
	    {
	      var enemy = enemies[this.target];
	      if((enemy.x-enemy.size/2-this.x+this.size/2)*(enemy.x-enemy.size/2-this.x+this.size/2) +
	        (enemy.y-enemy.size/2-this.y+this.size/2)*(enemy.y-enemy.size/2-this.y+this.size/2) >= this.range*this.range &&
	        (!this.anim || this.timer > this.anim))
	        {
	          this.target = false;
	        }
	    }
	    if(!this.target || !enemies[this.target]) //Ak nemá target
	    for(var i in enemies)
	    {
	      var enemy = enemies[i]; //prejde polom enemies a nájde takých čo sú v range
	        if(enemy && ((enemy.x-enemy.size/2-this.x+this.size/2)*(enemy.x-enemy.size/2-this.x+this.size/2) +
	        (enemy.y-enemy.size/2-this.y+this.size/2)*(enemy.y-enemy.size/2-this.y+this.size/2) <= this.range*this.range))
	            {
	              if(first === 1) //Ak nemá target tak targetne prvého
	              {
	                first = 0;
	                this.target = i;
	              }
	              else
	              { //vyberie z nich nearest visible
	                var target = enemies[this.target];
                    if(enemy && (enemy.x-enemy.size/2-this.x+this.size/2)*(enemy.x-enemy.size/2-this.x+this.size/2) +
                      (enemy.y-enemy.size/2-this.y+this.size/2)*(enemy.y-enemy.size/2-this.y+this.size/2) <
                      (target.x-target.size/2-this.x+this.size/2)*(target.x-target.size/2-this.x+this.size/2) +
                      (target.y-target.size/2-this.y+this.size/2)*(target.y-target.size/2-this.y+this.size/2))
                    	this.target = i;
	              }
	            }
	    }
	  },
	fire : function ()
  	{
	    this.targeting();

	    if(!this.timer)
	      this.timer = this.rof;

	  	if(this.target && this.timer <= this.anim)
	  	{
	  		this.projectile(enemies[this.target], this);
		    if (!this.lock && this.timer === this.rof-this.anim)
		      this.target = false;
	  	}

	    if(this.target && enemies[this.target])
	    {
	      var enemy = enemies[this.target];
	      if(this.timer === this.rof)
	      {
	        this.projectile(enemy, this);
	        if(enemies[this.target].type == 1)
	       		enemies[this.target].hp -= this.damage/2;
	       	else
	       		if(enemies[this.target].type == 2)
	       		enemies[this.target].hp -= this.damage*1.5;
	       	else
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
	    if(this.timer != this.rof)
	      this.timer--;
  	},
}