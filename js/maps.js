function switchback()
{
  player.hp = 690;
  for(var i = 0; i < 19; i++)
    scene.push(new field(100,100+i*25,25))
  for(var j = 0; j < 2; j++)
    for(var i = 0; i < 21; i++)
      scene.push(new field(i*25+175,100+j*25,25))
  for(var j = 0; j < 2; j++)
    for(var i = 0; i < 20; i++)
      scene.push(new field(125+i*25,200+j*25,25))
  for(var i = 0; i < 14; i++)
    scene.push(new field(675,150+i*25,25))
  for(var j = 0; j < 2; j++)
    for(var i = 0; i < 5; i++)
      scene.push(new field(625+j*25,375+i*25,25))
  for(var i = 0; i < 7; i++)
    scene.push(new field(450+i*25,375,25))
  for(var j = 0; j < 5; j++)
    for(var i = 0; i < 3; i++)
      scene.push(new field(500+j*25,250+i*25,25))
  for(var i = 0; i < 7; i++)
    scene.push(new field(425,325+i*25,25))
  for(var i = 0; i < 11; i++)
    scene.push(new field(175+i*25,300,25))
  for(var i = 0; i < 10; i++)
    scene.push(new field(125+i*25,375,25))
  for(var j = 0; j < 2; j++)
    for(var i = 0; i < 10; i++)
      scene.push(new field(175+i*25,450+j*25,25))
  for(var i = 0; i < 23; i++)
    scene.push(new field(125+i*25,550,25))
  for(var j = 0; j < 4; j++)
    for(var i = 0; i < 7; i++)
      scene.push(new field(450+i*25,400+j*25,25))
  /*for(i in scene)
  {
    scene[i].draw();
  }*/
}

function theTwist()
{
  player.hp = 800;
  for(var i = 0; i < 19; i++)
    scene.push(new field(100,100+i*25,25))
  for(var j = 0; j < 2; j++)
    for(var i = 0; i < 21; i++)
      scene.push(new field(i*25+175,100+j*25,25))
  for(var i = 0; i < 20; i++)
      scene.push(new field(125+i*25,200,25))
  for(var i = 0; i < 17; i++)
    scene.push(new field(675,150+i*25,25))
  for(var i = 0; i < 11; i++)
    scene.push(new field(600,225+i*25,25))
  for(var i = 0; i < 6; i++)
    scene.push(new field(450+i*25,475,25))
  for(var i = 0; i < 9; i++)
    scene.push(new field(375-i*25,475,25))
  for(var i = 0; i < 9; i++)
    scene.push(new field(450+i*25,550,25))
  for(var i = 0; i < 11; i++)
    scene.push(new field(375-i*25,550,25))
  for(var i = 0; i < 8; i++)
    scene.push(new field(175,275+i*25,25))
  for(var i = 0; i < 14; i++)
      scene.push(new field(200+i*25,275,25))
  for(var j = 0; j < 5; j++)
    for(var i = 0; i < 4; i++)
      scene.push(new field(i*25+450,300+j*25,25))
  for(var j = 0; j < 3; j++)
    for(var i = 0; i < 6; i++)
      scene.push(new field(i*25+250,350+j*25,25))

 /* for(i in scene)
  {
    scene[i].draw();
  }*/
}