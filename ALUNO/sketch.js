const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;

var bg_img;
var food;
var rabbit;

var button;
var bunny;

//aula 31 - variável para as animações piscar, comer e triste.


function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');

  //aula 31 - lendo animação
 
  
  //aula 31 - inimações sendo reproduzidas como true
 
  //aula 31 - não queremos que haja loop da animação de comer e triste
  
}

function setup() {
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;
  
  button = createImg('cut_btn.png');
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);
  
  //aula 31 - definindo atrasos de quadros
  
  
  bunny = createSprite(230,620,100,100);
  bunny.scale = 0.2;

  //aula 31 - adicionando a animação ao coelho
  //1º é nome da animação
  //2º é a variável com a animação carregada
  

  //aula 31 - aqui há uma troca de animação para piscar
  
  
  rope = new Rope(7,{x:245,y:30});
  ground = new Ground(200,690,600,20);
  
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);
  image(bg_img,width/2,height/2,490,690);

  //aula 31 - código referente ao corpo da fruta.
 

  rope.show();
  Engine.update(engine);
  ground.show();

  //aula 31 - Se a fruta colidir com o coelho, mudaremos a animação para a animação do coelho comendo
 

  //aula 31 - se a fruta colidir com o solo, mudaremos a animação para a animação do coelho triste
  
  
   drawSprites();
}

function drop()
{
  rope.break();
  fruit_con.detach();
  fruit_con = null; 
}

//aula 31 - função de colisão
function collide(body, sprite){
  if(body!=null){
    //aula 31 - é necessário achar a distância entre 2 corpos com a função dist() do p5
    
    
    //aula 31 - condição de que a distância for <= a algum valor que determina causará uma colisão.
    //aula 31 - se a condição for verdade, precisamos remover a fruta domundo e torná-la null
    if(d<=80){ 
      
      // aula 31 - Também é necessário retornar true como um retorno de callback (chamada).
      
    }else{
      //aula 31 - Se essa condição não for satisfeita, simplesmente retornaremos false
      
    }
  }
}

