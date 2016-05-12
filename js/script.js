var canvas;
var ctx;
var mode = 0;
var map = 0;
var audio;

var scene = [];
var enemies = [];
var player;

function player()
{
  this.life = 20;
  this.money = 275;
  this.bonus = 0;
  this.income = 1.03;
  this.hp = 0;
  this.diff = 1.23;
  this.score = 0;
  this.wave = -1;
  this.play = 0;
  this.sel = 0;
  this.selected = false;
  this.splash = 1;
  this.waves = 49;
  this.nextwave = 0;
  this.nope = 0;
  this.tut = 0;
  this.end = 0;
  this.i = 0;
  this.j = 0;
}

function field(x, y, size)
{
  this.x = x;
  this.y = y;
  this.size = size;
  this.tower = 0;

  /*this.draw = function()
  {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.closePath();
    ctx.fill();
  }*/
}

function play()
{
  player.life = 20;
  player.money = 275;
  player.bonus = 0;
  player.income = 1;
  player.hp = 0;
  player.diff = 1.23;
  player.score = 0;
  player.wave = -1;
  player.selected = false;
  player.sel = false;
  player.play = 1;
  for(var i in enemies)
    enemies[i] = undefined;
  scene.splice(0,scene.length);

  if(mode === 1)
    player.waves = 9999999;
  if(map === 0)
    switchback();
  if(map === 1)
    theTwist();

  gameMenu();
  requestAnimationFrame(loop);
}

function nextWave()
{
  var yop = 1;
  for(var i in enemies)
    if(enemies[i])
    {
      yop = 0;
      break;
    }
  for(var i in scene)
  {
    if(tower)
      scene.target = false;
  }

  if(yop)
  {
    player.nope = 1;
    player.diff -= 0.000852;
    player.wave++;
    player.nextwave = 1;
    if(!(player.wave%5))
      player.income += 0.03;
    if(player.wave)
      player.money *= player.income;
    type = Math.floor(Math.random()*4) + 1;
  }
}

function loop()
{
  if(audio.ended)
  {
    audio = new Audio('music/loop.mp3');
    audio.volume = 0.1
    audio.play();
  }

  ctx.drawImage(document.getElementById('bg'), 0, 0, canvas.width, canvas.height);
  if(map === 0)
    ctx.drawImage(document.getElementById('switchback'), 0, 0, canvas.width, canvas.height);
  else if(map === 1)
    ctx.drawImage(document.getElementById('thetwist'), 0, 0, canvas.width, canvas.height);
  gameMenu();

  if(player.nextwave)
  {
    createEnemies(type);
  }

  for(var k in enemies)
  {
    var obj;
    obj = enemies[k];
    if(obj)
    {
      obj.move();
      obj.draw();
    }
  }
  for(k in scene)
  {
    obj = scene[k];
    if(obj.tower)
      obj.draw();
  }
  for(k in scene)
  {
    obj = scene[k];
    if(obj.tower)
      obj.fire();
  }

  if(player.sel)
    player.sel.draw();
  
  if(!player.life)
    gameOver();
/////////////Disable button for next wave/////
  var yop = 1;
  for(var i in enemies)
  {
    if(enemies[i])
    {
      yop = 0;
      break;
    }
  }
  if(yop)
    player.nope = 0;
/////////////////////////////////////////////
  if(player.wave == player.waves)
  {
    end = 1
    for(var i in enemies)
      if(enemies[i])
      {
        end = 0;
        break;
      }
    if (end)
      gameEnd();
  }

  if(player.play)
    requestAnimationFrame(loop);
}

window.onload = function()
{
  canvas = document.getElementById('Canvas');
  ctx = canvas.getContext('2d');
  ctx.font = '30px bomba'
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.textBaseline = 'top';
  player = new player();
  splash();
  audio = new Audio('music/opening.mp3');
  audio.volume=0.1;
  audio.play();
}