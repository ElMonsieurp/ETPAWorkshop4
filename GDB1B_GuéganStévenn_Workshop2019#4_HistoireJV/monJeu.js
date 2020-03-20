var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
scene: {
		init: init,
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);
var score = 0;
var dasht;
var dashreset=100;
var pvjoueur=3;
var invicibilite=100;
var resetchoix=1000;
var saut=2;
var xsauveattaque=0;
var sauvechoix=2;
var choixmonstre=2;
var sauvegardedureset=1;
var attaquemonstre=0;
var timerattaque=1000;
var timertouch=0;
var scene=0;
var sceneb=0;
var scenec=0;
var sensprojectile=1;
var timerattaquejoueur=0;
var timerresetattaque=0;
var cdattaque=300;
var dialogue1=0;
var resettouchdia=1;
var dialogue2=0;
var timerpantin=0;
var resettimerpantin=0;
var dialogue3=0;
var viearbre=3;
var resetarbre=1;
var viemonstre=20;
var timermonstremort=0;
var resetplateforme=0;
var dialogue4=0;
var dialogue5=0;
function init(){
	var sauvesaut;
	var saut;
 	var platforms;
	var player;
	var cursors; 
	var stars;
	var scoreText;
	var bomb;
    var sauvedash;
	var dashreset;
	var endurance;
	var fdp;
	var pointdevie;
	var pvjoueur;
	var invicibilite;
	var barredepv1;
	var barredepv2;
	var barredepv3;
	var monstre;
	var choixmonstre;
	var resetchoix;
	var textchoix;
	var sauvechoix;
	var sauvegardedureset;
	var xjoueur;
	var xmonstre;
	var xmonstremargeplus;
	var xmonstremargemoins;
	var yjoueur;
	var ymonstre;
	var xsauveattaque;
	var attaquemonstre;
	var timerattaque;
	var timertouch;
	var scene;
	var sceneb;
	var scenec;
	var sensprojectile;
	var timerattaquejoueur;
	var timerresetattaque;
	var cdattaque;
	var dialogue1;
	var dialoguePong;
	var resettouchedia;
	var dialoguePlateforme;
	var dialogue2;
	var timerpantin;
	var resettimerpantin;
	var dialogue3;
	var dialogueCombat;
	var viearbre;
	var debris;
	var resetarbre;
	var viemonstre;
	var timermonstremort;
	var resetplateforme;
	var dialogue4;
	var dialogue5;
}

function preload(){
	this.load.image('background','imag/fondcool.png');	
	this.load.image('fond','imag/fond.png');
	this.load.image('etoile','imag/star.png');
	this.load.image('sol','imag/platformVmichel.png');
	this.load.image('attaquenb','imag/projectileenhaut.png');
	this.load.image('murur','imag/plateformemururur.png');
	this.load.image('plateformeboisgrosse','imag/planchemonter.png');
	this.load.image('plateformebois','imag/planchepourmonter.png');
	this.load.image('hitboxpierre','imag/hitboxjeu.png');
	this.load.image('hitboxgrotte','imag/hitboxgrotte.png');
	this.load.image('arbre','imag/arbre.png');
	this.load.image('debris','imag/debris.png');
	this.load.image('portbreak','imag/portecassable.png');
	this.load.spritesheet('pantin','imag/pantin.png',{frameWidth: 30, frameHeight: 47});
	this.load.spritesheet('perso','imag/magiciende.png',{frameWidth: 22, frameHeight: 31});
	this.load.spritesheet('run','imag/coursemagicien.png',{frameWidth: 21, frameHeight: 29});
	this.load.spritesheet('saut','imag/sautmag.png',{frameWidth: 21, frameHeight: 28});
	this.load.spritesheet('leftjump','imag/sautmagique.png',{frameWidth: 26, frameHeight: 26});
	this.load.spritesheet('dash','imag/dashstyl.png',{frameWidth: 34, frameHeight: 29});
	this.load.spritesheet('bomb','imag/bomb.png',{frameWidth: 27, frameHeight: 27});
	this.load.spritesheet('vie','imag/vie.png',{frameWidth: 13, frameHeight: 10});
	this.load.spritesheet('monstres','imag/statiquemonstre.png',{frameWidth: 45, frameHeight: 51});
	this.load.spritesheet('leftmonstre','imag/monstreleft.png',{frameWidth: 45, frameHeight: 51});
	this.load.spritesheet('attaquemonstre','imag/attaquemonstre.png',{frameWidth: 80, frameHeight: 57});
	this.load.spritesheet('attaquejoueur','imag/attaquedu.png',{frameWidth: 41, frameHeight: 34});
	this.load.spritesheet('propro','imag/projectile.png',{frameWidth: 44, frameHeight: 33});
	this.load.spritesheet('takehit','imag/hit.png',{frameWidth: 56, frameHeight: 52});
	this.load.spritesheet('mouchepantin','imag/pantinanim.png',{frameWidth: 30, frameHeight: 47});
	this.load.spritesheet('pong','imag/Animpong.png',{frameWidth: 240, frameHeight: 90});
}



function create(){
	
	
	this.add.image(1920,1080,'background');

	
	platforms = this.physics.add.staticGroup();
	
	
	platforms.create(100,2130,'sol');
	platforms.create(350,2130,'sol');
	platforms.create(550,2130,'sol');
	platforms.create(820,2130,'sol');
	platforms.create(1060,2113,'sol');
	platforms.create(1260,2113,'sol');
	platforms.create(1460,2113,'sol');
	platforms.create(1550,2113,'sol');
	platforms.create(1715,2100,'murur');
	
	platforms.create(1398,2018,'plateformeboisgrosse');
	platforms.create(1597,1895,'plateformebois');
	platforms.create(1710,1863,'hitboxpierre');
	platforms.create(1745,1869,'hitboxpierre');
	
	platforms.create(2145,1890,'hitboxpierre'); 
	platforms.create(2120,1890,'hitboxpierre'); 
	
	
	platforms.create(2615,2050,'hitboxpierre'); 
	platforms.create(2580,2050,'hitboxpierre'); 
	
		platforms.create(2929,1865,'hitboxpierre'); 
		platforms.create(2929,1868,'hitboxpierre'); 
		platforms.create(2929,1878,'hitboxpierre'); 
		platforms.create(2929,1898,'hitboxpierre'); 
	platforms.create(2970,1849,'hitboxpierre'); 
	
	platforms.create(3388,1760,'hitboxpierre'); 
	platforms.create(3420,1750,'hitboxpierre'); 
	platforms.create(3460,1750,'hitboxpierre'); 
	
	platforms.create(3800,1750,'hitboxpierre'); 
	

	
	platforms.create(3570,1630,'hitboxgrotte'); 
	platforms.create(3560,1560,'hitboxgrotte'); 
	platforms.create(3500,1500,'hitboxpierre'); 
	platforms.create(3480,1480,'hitboxpierre'); 
	
	platforms.create(3820,1600,'hitboxpierre'); 
	platforms.create(3700,1469,'hitboxpierre'); 
	platforms.create(3800,1380,'hitboxpierre'); 
	platforms.create(3598,1350,'hitboxpierre'); 
	platforms.create(3440,1290,'hitboxpierre'); 
	platforms.create(3300,1220,'hitboxpierre'); 
	platforms.create(3820,1150,'hitboxpierre'); 
	platforms.create(3740,1220,'hitboxpierre'); 
	
	platforms.create(3050,1218,'sol'); 
	platforms.create(2850,1218,'sol'); 
	platforms.create(2650,1218,'sol'); 
	platforms.create(2550,1218,'sol'); 
	
	platforms.create(1937,969,'sol'); 
	platforms.create(1737,969,'sol'); 
	platforms.create(1537,969,'sol'); 
	platforms.create(1337,969,'sol'); 
	platforms.create(1217,969,'sol'); 
	
	platforms.create(960,1031,'sol'); 
	platforms.create(760,1031,'sol'); 
	platforms.create(560,1031,'sol'); 
	platforms.create(480,1031,'sol'); 

platforms.create(230,949,'sol');
platforms.create(130,949,'sol');  

platforms.create(90,800,'sol'); 

platforms.create(60,630,'sol'); 

platforms.create(30,500,'sol'); 

platforms.create(449,448,'sol');
platforms.create(649,448,'sol');  
platforms.create(849,448,'sol'); 
platforms.create(1069,448,'sol'); 

	platforms.create(2050,1000,'hitboxgrotte');
	platforms.create(2050,1100,'hitboxgrotte');
	platforms.create(2050,1200,'hitboxgrotte');
	platforms.create(2050,1300,'hitboxgrotte');
	platforms.create(2050,1400,'hitboxgrotte');
	
	
	
	
	
	
	platforms.create(3641,1774,'sol');
	
	plateformecassable = this.physics.add.sprite(348,800,'portbreak');
	
	barredepv1 = this.add.sprite(430,26,'vie').setScale(2);
	barredepv2 = this.add.sprite(460,26,'vie').setScale(2);
	barredepv3 = this.add.sprite(490,26,'vie').setScale(2);
	
	barredattaque1 = this.add.sprite(430,570,'attaquenb').setScale(0.5);
	barredattaque2 = this.add.sprite(460,570,'attaquenb').setScale(0.5);
	
	player = this.physics.add.sprite(10,2050,'perso');
	player.setCollideWorldBounds(true);
	player.body.setGravityY(000);
	this.physics.add.collider(player,platforms);
	
	monstre = this.physics.add.sprite(400,450,'monstres');
	monstre.setCollideWorldBounds(true);
	monstre.body.setGravityY(000);
	this.physics.add.collider(monstre,platforms);
	
	pantin = this.physics.add.sprite(2800,1164,'pantin');
	pantin.setCollideWorldBounds(true);
	pantin.body.setGravityY(000);
	this.physics.add.collider(pantin,platforms);
	
	arbre = this.physics.add.sprite(2480,1054,'arbre');
	arbre.setCollideWorldBounds(true);
	arbre.body.setGravityY(000);
	this.physics.add.collider(arbre,platforms);
	
	cursors = this.input.keyboard.createCursorKeys(); 
	dasht= this.input.keyboard.addKey('W');
	atkt= this.input.keyboard.addKey('D');
	parler= this.input.keyboard.addKey('E');
	
	ponganimation = this.add.sprite(1190,1960,'pong');
	
	this.anims.create({
		key:'left',
		frames: this.anims.generateFrameNumbers('run', {start: 0, end: 5}),
		frameRate: 11,
		repeat: -1
	});
	this.anims.create({
		key:'leftsaut',
		frames: this.anims.generateFrameNumbers('leftjump', {start: 0, end: 2}),
		frameRate: 10,
		repeat: -1
	});
	
	this.anims.create({
		key:'stop',
		frames: this.anims.generateFrameNumbers('perso', {start: 0, end: 3}),
		frameRate: 10
	});
	
	this.anims.create({
		key:'saut',
		frames: this.anims.generateFrameNumbers('saut', {start: 0, end: 2}),
		frameRate: 19,
	});
	this.anims.create({
		key:'dash',
		frames: this.anims.generateFrameNumbers('dash', {start: 0, end: 3}),
		frameRate: 5,
		repeat:-1
	});
	
	this.anims.create({
		key:'animb',
		frames: this.anims.generateFrameNumbers('bomb', {start: 0, end: 3}),
		frameRate: 9,
		repeat:-1
	});
	this.anims.create({
		key:'pv',
		frames: this.anims.generateFrameNumbers('vie', {start: 0, end: 3}),
		frameRate: 9,
		repeat:-1
	});
	
	this.anims.create({
		key:'monstrestatique',
		frames: this.anims.generateFrameNumbers('monstres', {start: 0, end: 3}),
		frameRate: 9,
		repeat:-1
	});
	
		this.anims.create({
		key:'monstremarche',
		frames: this.anims.generateFrameNumbers('leftmonstre', {start: 0, end: 3}),
		frameRate: 9,
		repeat:-1
	});
	
		this.anims.create({
		key:'monstreattaque',
		frames: this.anims.generateFrameNumbers('attaquemonstre', {start: 0, end: 7}),
		frameRate: 9,
	});
	
		this.anims.create({
		key:'atkjoueur',
		frames: this.anims.generateFrameNumbers('attaquejoueur', {start: 0, end: 5}),
		frameRate: 9,
	});
	
		this.anims.create({
		key:'projectile',
		frames: this.anims.generateFrameNumbers('propro', {start: 0, end: 2}),
		frameRate: 9,
		repeat: -1,
	});
	
		this.anims.create({
		key:'prendhit',
		frames: this.anims.generateFrameNumbers('takehit', {start: 0, end: 3}),
		frameRate: 9,
	});
	 	this.anims.create({
		key:'pantinprend',
		frames: this.anims.generateFrameNumbers('mouchepantin', {start: 0, end: 3}),
		frameRate: 9,
	});
	this.anims.create({
		key:'pantinn',
		frames: this.anims.generateFrameNumbers('pantin', {start: 0, end: 1}),
		frameRate: 9,
		repeat: -1,
	});
	this.anims.create({
		key:'pongg',
		frames: this.anims.generateFrameNumbers('pong', {start: 0, end: 6}),
		frameRate: 9,
		repeat: -1,
	});
	
	

	
	
	stars = this.physics.add.group({
		key: 'etoile',
		setXY: {x:1000,y:1200},
	});
	
	this.physics.add.collider(stars,platforms);
	this.physics.add.overlap(player,stars,collectStar,null,this);

stars = this.physics.add.group({
		key: 'etoile',
		setXY: {x:3800,y:1200},
	});
	
	this.physics.add.collider(stars,platforms);
	this.physics.add.overlap(player,stars,collectStar,null,this);    
	stars = this.physics.add.group({
		key: 'etoile',
		setXY: {x:3800,y:1000},
	});
	
	this.physics.add.collider(stars,platforms);
	this.physics.add.overlap(player,stars,collectStar,null,this);    
	endurance = this.add.text(400,576,'endurance: ', {fontSize: '32px', fill:'#FFF'});
	scoreText = this.add.text(16,16, 'golds: 0', {fontSize: '32px', fill:'#000'});
	bombs = this.physics.add.group();
	textchoix =	this.add.text(0, 1600, 'Deplacement : Touches directionnelles/Dash : W+Direction/Possibilite de double jump ',{fontSize: '12px', fill:'#000'});
	dialoguePong= this.add.text (1089,2000, 'Appuyez sur E pour derouler',{font: 'Arial Black' ,fontSize: '12px', fill:'#000'});
	dialoguePlateforme= this.add.text (1450,2000, 'Appuyez sur E pour derouler',{font: 'Arial Black' ,fontSize: '12px', fill:'#000'});
	dialogueCombat= this.add.text (3050,1100, 'Appuyez sur E pour derouler',{font: 'Arial Black' ,fontSize: '12px', fill:'#000'});
	dialogueAvantdernier= this.add.text (1190,850, 'Appuyez sur E pour derouler',{font: 'Arial Black' ,fontSize: '12px', fill:'#000'});
	dialogueP= this.add.text (560,350, 'Appuyez sur E pour derouler',{font: 'Arial Black' ,fontSize: '12px', fill:'#000'});
	
	
	
	this.physics.add.collider(bombs,platforms);
	this.physics.add.collider(player,plateformecassable,antibouge,null,this);

	this.physics.add.collider(player,bombs, hitBomb, null, this);
	this.physics.add.collider(player,monstre, hitmonstre, null, this);

	pointderecups = this.physics.add.group();
	this.physics.add.collider(pointderecups,platforms);
	this.physics.add.collider(player,pointderecups, collectPV, null, this);
	
	projectiles = this.physics.add.group();
	this.physics.add.collider(projectiles,monstre, hitprojectilebadass, null, this);
	this.physics.add.collider(projectiles,pantin, hitpantin, null, this);
	this.physics.add.collider(projectiles,arbre, toucherarbre,null,this);
	
	debris = this.physics.add.group()
	
	plateformearbres = this.physics.add.staticGroup();
	this.physics.add.collider(plateformearbres,player);
	
	timerEvent1 =  this.time.addEvent({ delay: 2000,callback:animatkmonstre,  timeScale: 1,startAt:0,repeat:-1 });
    timerEvent2 = this.time.addEvent({ delay: 1000,callback:attenteattaque, timeScale: 1,startAt:0 , repeat:-1 });
    timerEvent3 = this.time.addEvent({ delay: 500,callback:resetattaquemonstre, timeScale: 1,startAt:0 , repeat:-1 });
	timerEvent4 = this.time.addEvent({ delay: 300,callback:lancerproj, timeScale: 1,startAt:0 , repeat:-1 });
	this.cameras.main.setBounds(0, 0, 1920 * 2, 1080 * 2);
    this.physics.world.setBounds(0, 0, 1920 * 2, 1080 * 2);
	this.cameras.main.startFollow(player, true, 0.05, 0.05);
}



function update(){


	if (viemonstre>0) {
		plateformecassable.setGravityY(-500);
		plateformecassable.setY(800);
		plateformecassable.setX(348);
	
	}
	
	ponganimation.anims.play('pongg', true);
	
	
	xmonstre=monstre.x;
	xjoueur=player.x;
	ymonstre=monstre.y;
	yjoueur=player.y;
	arbre.setVelocityX(0);
	if (parler.isUp) {
		resettouchdia=1;
	}
	
	if (parler.isDown && xjoueur>1060 && xjoueur<1300 && resettouchdia==1 && yjoueur>1500) {
		resettouchdia=0;
		dialogue1=dialogue1+1;
	}
	if (dialogue1==0) {
		dialoguePong.setText('Appuyez sur E pour derouler');
	}
	if (dialogue1==1) {
		dialoguePong.setText('Il fut un temps, les hommes \nont decouvert les joies \ndu divertissement...');
	}
	if (dialogue1==2) {
		dialoguePong.setText('Des ingenieurs creerent un jeu \nde tennis sur un osciloscope ...');
	}
	if (dialogue1==3) {
		dialoguePong.setText("Pong fut l'un des premiers \njeux video. ");
	}
	if (dialogue1==4) {
		dialogue1=1;
	}
	
	if (xjoueur<960) {
	dialogue1=0;
	}
	if (xjoueur>1700) {
	dialogue1=0;
	}
	
	if (parler.isDown && xjoueur>1450 && xjoueur<1600 && resettouchdia==1) {
		resettouchdia=0;
		dialogue2=dialogue2+1;
	}
	if (dialogue2==0) {
		dialoguePlateforme.setText('Appuyez sur E pour \nderouler');
	}
	if (dialogue2==1) {
		dialoguePlateforme.setText('Plus tard un jeu de\nplateforme a ete cree...\nil fallait monter...');
	}
	if (dialogue2==2) {
		dialoguePlateforme.setText("En evitant les obstacles. \nAfin d'arriver en haut\nle plus vite");
	}
	if (dialogue2==3) {
		dialoguePlateforme.setText("Mario reprit ce principe \net devint une icone \npour le jeu video. ");
	}
	if (dialogue2==4) {
		dialoguePlateforme.setText("Voyons voir ce que vous \navez traversez ces\n montagnes...Ne mourrez pas ");
	}
	if (dialogue2==5) {
		dialogue2=1;
	}
	
		if (parler.isDown && xjoueur>2750 && xjoueur<3200 && resettouchdia==1) {
		resettouchdia=0;
		dialogue3=dialogue3+1;
	}
	if (dialogue3==0) {
		dialogueCombat.setText('Appuyez sur E pour \nderouler');
	}
	if (dialogue3==1) {
		dialogueCombat.setText("Les jeux d'action et de combat sont devenu \npendant un moment des jeux prises \nMegaman,street fighter...");
	}
	if (dialogue3==2) {
		dialogueCombat.setText("Etaient des jeux tres connus dans les annees 90 \nVoyons voir ce que vous avez retenu...");
	}
	if (dialogue3==3) {
		dialogueCombat.setText("Attaque ce pantin avec la touche D elle lancera une \nonde magique.Attention ton arme magique n'attaque pas \nà l'infini. Il y'a un temps de recharge ! ");
	}
	if (dialogue3==4) {
		dialogue3=1;
	}
	
	if (xjoueur>3200) {
	dialogue3=0;
	}
	if (xjoueur<2600) {
	dialogue3=0;
	}
	
	
	if (parler.isDown && xjoueur>900 && xjoueur<1300 && yjoueur<1600 && resettouchdia==1) {
		resettouchdia=0;
		dialogue4=dialogue4+1;
	}
	if (dialogue4==0) {
		dialogueAvantdernier.setText('Appuyez sur E pour \nderouler');
	}
	if (dialogue4==1) {
		dialogueAvantdernier.setText("Bravo tu as reussi le puzzle... Enfin de niveau FACILE \nCependant voici une tache plus dure qui \nTe rappellera des souvenirs...");
	}
	if (dialogue4==2) {
		dialogueAvantdernier.setText("Depuis la nuit des temps le jeu video comporte quelque \n chose a la fin...Un boss.");
	}
	if (dialogue4==3) {
		dialogueAvantdernier.setText("Attention celui-ci semble coriace \nIl te faudra pas mal de coups pour le vaincre... \nSeras-tu à la hauteur? C'est ce qu'on va pouvoir juger");
	}
	if (dialogue4==4) {
		dialogue4=1;
	}
	
	if (xjoueur>1350) {
	dialogue4=0;
	}
	if (xjoueur<700) {
	dialogue4=0;
	}
	
	
			if (parler.isDown && xjoueur>450 && xjoueur<720 && yjoueur<1000 && resettouchdia==1) {
		resettouchdia=0;
		dialogue5=dialogue5+1;
	}
	if (dialogue5==0) {
		dialogueP.setText('Appuyez sur E pour \nderouler');
	}
	if (dialogue5==1) {
		dialogueP.setText("BRAVO tu as battu le boss \nNous allons entrer dans une nouvelle ere \n LA 3D");
	}
	if (dialogue5==2) {
		dialogueP.setText("La 3D a commence a voir le jour sous sa vrai forme \nA la fin des annees 1990");
	}
	if (dialogue5==3) {
		dialogueP.setText("La PS1 et toutes machines capable de l'afficher \nse sont empresses de le faire \nMais certains jeux devaient rester en 2D... ");
	}
	if (dialogue5==4) {
		dialogue5=1;
	}
	
	if (xjoueur>800) {
	dialogue5=0;
	}
	if (xjoueur<400) {
	dialogue5=0;
	}
	
	
	if (dasht.isUp) {
		sauvedash=40;
		if (dashreset<200) {
		dashreset=dashreset+0.5;	
		}
	}
	if (atkt.isUp) {
	  timerattaquejoueur=0;
	  timerresetattaque=80;
	  timerEvent4.reset(false);
	timerEvent4 = this.time.addEvent({ delay: 300,callback:lancerproj, timeScale: 1,startAt:0 , repeat:-1 });
	}
	if (timerresetattaque==0) {
	cdattaque=0;	
	}
	if (cdattaque<300) {
	cdattaque=cdattaque+1;	
	}
	if (atkt.isDown && player.body.touching.down && timerresetattaque>0 && cdattaque==300) {
		player.anims.play('atkjoueur', true);
		player.setVelocityX(0);
		timerresetattaque=timerresetattaque-1;
		timerEvent4;
		if (timerattaquejoueur==20) {
		projectilebadass()
		timerattaquejoueur=0;
		 timerEvent4.reset(false);
		timerEvent4 = this.time.addEvent({ delay: 300,callback:lancerproj, timeScale: 1,startAt:0 , repeat:-1 });
		}
	}
	
	else if(cursors.left.isDown){
		sensprojectile=1;
		if (player.body.touching.down) {
		 if (dasht.isDown && sauvedash>0 && dashreset>9) {
		dashreset=dashreset-2;
		
		player.setVelocityX(-600);
		player.setFlipX(true);
		sauvedash=sauvedash-1;
		if (dashreset>19) {
		player.anims.play('dash', true);	
		}
		 } else {
		player.anims.play('left', true);
		player.setVelocityX(-300);
		player.setFlipX(true);
		}}
		else {
		player.anims.play('leftsaut', true);
		player.setVelocityX(-300);
		player.setFlipX(true);	
		}
	}else if(cursors.right.isDown){
		sensprojectile=0;
		if (player.body.touching.down) {
			 if (dasht.isDown && sauvedash>0 && dashreset>9) {
		dashreset=dashreset-2;
		player.setVelocityX(600);
		player.setFlipX(false);
		sauvedash=sauvedash-1;
		if (dashreset>19) {
		player.anims.play('dash', true);	
		}
		 } else {	
		player.anims.play('left', true);
		player.setVelocityX(300);
		player.setFlipX(false);
		}}
		else {
		player.anims.play('leftsaut', true);
		player.setVelocityX(300);
		player.setFlipX(false);	
		}
		
	}else{
		player.setVelocityX(0);
		if (player.body.touching.down && cursors.up.isUp ){
			player.anims.play('stop', true);
		}
		if (player.body.touching.down && cursors.up.isDown && saut<1) {
			player.anims.play('stop', true);
		}
		
	}
	
	
	if(cursors.up.isUp && player.body.touching.down){
		saut=2;
	} 
	if(cursors.up.isDown && sauvesaut==1 && saut>0){
		
		player.anims.play('saut', true);
		
		sauvesaut=0;
		saut=saut-1;
		if (saut==1) {
			
		player.setVelocityY(-330);
		}
		if (saut==0) {
		player.setVelocityY(-300);	
		}
	} 
	if (cursors.up.isUp) {
		sauvesaut=1;
	}
	if (dashreset<35) {
	endurance.setText('endurance: 0 dash ');
	}
	if (dashreset>=35 && dashreset<100) {
	endurance.setText('endurance: 1 dash ');
	}
	if (dashreset>=100 && dashreset<170) {
	endurance.setText('endurance: 2 dashs ');
	}
	
	if (dashreset>=170 && dashreset<=200) {
	endurance.setText('endurance: 3 dashs ');
	}
	if (invicibilite<100){
	invicibilite=invicibilite+1;
	}
	if (invicibilite>90 && pvjoueur!=0) {
	player.clearTint()
	}
	if (pvjoueur==3) {
	barredepv1.anims.play('pv', true);
	barredepv2.anims.play('pv', true);
	barredepv3.anims.play('pv', true);
	barredepv3.setVisible(true);
	}
	if (pvjoueur==2) {

	barredepv1.anims.play('pv', true);
	barredepv2.anims.play('pv', true);
	barredepv2.setVisible(true);
	barredepv3.setVisible(false)
	}
	if (pvjoueur==1) {
	barredepv1.anims.play('pv', true);
	barredepv1.setVisible(true);
	barredepv2.setVisible(false);
	}
	if (pvjoueur==0) {
	barredepv1.setVisible(false);
	}
	if (cdattaque<300) {
	barredattaque1.setVisible(false);
	barredattaque2.setVisible(false);
	}
	else if (timerresetattaque==80) {
	barredattaque2.setVisible(true);
	barredattaque1.setVisible(true);
	}
	if (timerresetattaque<80) {
	barredattaque2.setVisible(false);
	barredattaque1.setVisible(true);	
	}
	if (timerresetattaque==0) {
	barredattaque1.setVisible(false);		
	}
	
	
	
	
	
	if (resetchoix<1000 && viemonstre>0) {
     resetchoix=resetchoix+1;
	}
	if (choixmonstre==10 && viemonstre!=0) 
	{
	resetchoix=970;
    sauvechoix=10;	
	choixmonstre=1000;
	}
	
	if (resetchoix==1000 && viemonstre>0) {
	choixmonstre = Phaser.Math.Between(1,2);
	if (choixmonstre==0) {
	sauvechoix=0;
	resetchoix=0;
	}
	if (choixmonstre==4 && viemonstre>0) {
	sauvechoix=1;
	resetchoix=800;
	}
	if (choixmonstre==2 && viemonstre>0 || choixmonstre==1 && viemonstre>0) {
	sauvechoix=2;
	resetchoix=0;
	}
	}
	if (sauvechoix<2 && viemonstre>0) {
	monstre.setVelocityX(0);
	monstre.anims.play('monstrestatique', true);
	xsauveattaque=0;
	}
	if (sauvechoix==10 && viemonstre>0) {
	monstre.anims.play('prendhit',true);
	monstre.setVelocityX(0);
	xsauveattaque=0;
	}
	if (sauvechoix==2) { 
	if (ymonstre+20>=yjoueur && ymonstre-89<=yjoueur && xmonstre+100>=xjoueur && xmonstre-100<=xjoueur && viemonstre>0){
		
		xsauveattaque=1;
		
	
	}else if (xmonstre+20>=xjoueur && xmonstre-20<=xjoueur && xsauveattaque==0 && viemonstre>0) {
	monstre.setVelocityX(0);	
	monstre.anims.play('monstrestatique', true);
 }
		
	else if (player.x<monstre.x && xsauveattaque==0 && viemonstre>0) {
	monstre.setVelocityX(-75);
	monstre.anims.play('monstremarche', true);
	monstre.setFlipX(true);	
	
		}
	else if (player.x>monstre.x && xsauveattaque==0 && viemonstre>0) {
	monstre.setVelocityX(75);
	monstre.anims.play('monstremarche', true);
	monstre.setFlipX(false);
	
		
	 }
	}
	
	
/*	if (timerattaque<1000) {
	timerattaque=timerattaque+1;
	if (timerattaque<100) {
	timerattaque=1000;	
	}
	}
	
	if (xsauveattaque==1 && timerattaque>80) {
			monstre.setVelocityX(0);
		monstre.anims.play('monstreattaque',true);
		timerattaque=timerattaque-5;
		timertouch=timertouch+1;
		if (timerattaque<100) {
		xsauveattaque=0;
		}
		if (timertouch==100) {
		timertouch=0;
		}
		if (timertouch>=80 && timertouch<100) {
		attaquemonstre=3;	
		} else {
		attaquemonstre=0;	
		}
	}
	if (xsauveattaque==0) {
	attaquemonstre=0;
	timertouch=0;	
	} */
	
	if (xsauveattaque==1) {
	monstre.setVelocityX(0);
	monstre.anims.play('monstreattaque',true);
	timerEvent1;

	if (attaquemonstre==0) {
		
	timerEvent2;
	
}
	}
	if (attaquemonstre==3) {
	timerEvent3;

	}
	
	if (xsauveattaque==0) {
	 attaquemonstre=0;	
	 timerEvent1.reset(false);
	 timerEvent2.reset(false);
	 timerEvent3.reset(false);
	timerEvent1 =  this.time.addEvent({ delay: 2000,callback:animatkmonstre,  timeScale: 1,startAt:0,repeat:-1 });
    timerEvent2 = this.time.addEvent({ delay: 900,callback:attenteattaque, timeScale: 1,startAt:0 , repeat:-1 });
    timerEvent3 = this.time.addEvent({ delay: 400,callback:resetattaquemonstre, timeScale: 1,startAt:0 , repeat:-1 });
	}
	
	
	
	
	if (invicibilite==100 && ymonstre+20>=yjoueur && ymonstre-59<=yjoueur && xmonstre+80>=xjoueur && xmonstre-100<=xjoueur && attaquemonstre==3) {
    pvjoueur=pvjoueur-1;
	invicibilite=0;
	player.setTint(0xff6969);
	}
	if (pvjoueur==0) {
	this.physics.pause();
	player.setTint(0xff0000);
	player.anims.play('turn');
	gameOver=true;
	}
	
	if (score==10000000) {
	window.open ("Jeu/index.html", "_self");
	}
	endurance.setScrollFactor(0);
	scoreText.setScrollFactor(0);
	barredepv1.setScrollFactor(0);
	barredepv2.setScrollFactor(0);
	barredepv3.setScrollFactor(0);
	barredattaque1.setScrollFactor(0);
	barredattaque2.setScrollFactor(0);
	dialoguePong.setStroke(000, 1);
	dialoguePlateforme.setStroke(000, 1);
	dialogueCombat.setStroke(000, 1);
	dialogueAvantdernier.setStroke(000, 1);
	dialogueP.setStroke(000, 1);
	
	if (yjoueur>2100) {
	player.setY(2050);
    player.setX(1000);
	pvjoueur=pvjoueur-1;
	invicibilite=0;
	player.setTint(0xff6969);
	}
	
		if (xjoueur<2500 && xjoueur>1800 && yjoueur>1320 && yjoueur< 1400) {
		player.setY(2050);
    player.setX(1000);
	pvjoueur=pvjoueur-1;
	invicibilite=0;
	player.setTint(0xff6969);
	}
	if (timerpantin==1) {
	pantin.anims.play('pantinprend', true);
	 resettimerpantin=resettimerpantin+1;
	}
	if (resettimerpantin==200) {
		timerpantin=0;
		pantin.anims.play('pantinn', true);
		resettimerpantin=0;
		
	}
	if (viearbre<1 && resetarbre==1) {
	arbre.angle = 270;
	arbre.setY(1190);
    arbre.setX(2330);
	arbre.setGravityY(-500);
	var plateformearbre = plateformearbres.create(2369, 1180, 'hitboxpierre');
						plateformearbres.create(2300, 1129, 'hitboxpierre');
						plateformearbres.create(2300, 1149, 'hitboxpierre');
						
				
						resetarbre=0;
	}
	scoreText.setText('golds: '+score);
	if (viemonstre<1 && timermonstremort==3 || viemonstre<1 && timermonstremort==120) 
	{
		monstre.setVelocityX(0);
	}
	
	if (viemonstre<1) {
		choixmonstre=101010;
		monstre.anims.play('prendhit',true);
		timermonstremort=timermonstremort+1;
		
		if (timermonstremort==200) {
			monstre.setX(-10);
			score+=40;
			
			
			
		plateformecassable.destroy(true);
			
			
			
			
		}
	}
	
	if (yjoueur<700 && xjoueur>1000) {
		if (score==70) {
		window.open ("Jeu/index.html", "_self");
		} else {
		window.open ("Jeuloser/index.html", "_self");	
		}
		
	}
	
}


function hitBomb(player, bomb){
	if (invicibilite==100) {
    pvjoueur=pvjoueur-1;
	invicibilite=0;
	player.setTint(0xff6969);
	}
	if (pvjoueur==0) {
	this.physics.pause();
	player.setTint(0xff0000);
	player.anims.play('turn');
	gameOver=true;
	}
}

function hitmonstre(player,monstre) {
	if (invicibilite==100) {
    pvjoueur=pvjoueur-1;
	invicibilite=0;
	player.setTint(0xff6969);
	}
	if (pvjoueur==0) {
	this.physics.pause();
	player.setTint(0xff0000);
	player.anims.play('turn');
	gameOver=true;
	}
	
}

function collectStar(player, star){
	star.disableBody(true,true);
	score += 10;
	
	
	if (score==200 || score==500 || score==1000 || score==2000 ||score==3000 || score==4000 || score==10000) {
	var pointderecup = pointderecups.create(400, 16, 'vie');
		pointderecup.anims.play('pv', true);
		pointderecup.setBounce(0);
		pointderecup.setCollideWorldBounds(true);
	}
}

function animatkmonstre () {
		xsauveattaque=0;
}

function attenteattaque () {
		attaquemonstre=3;
}

function resetattaquemonstre () {
	attaquemonstre=0;
}

function collectPV(player,pointderecup) {
	pointderecup.disableBody(true,true);
	if (pvjoueur<3) {
	pvjoueur=pvjoueur+1;
	}
	else {
	score +=100;	
	}
}

function projectilebadass () {
	var projectile = projectiles.create(player.x, player.y, 'propro');
		projectile.anims.play('projectile', true);
		projectile.setBounce(0);
	if (sensprojectile==1) {
	projectile.setVelocityX(-375);
	projectile.setFlipX(true);	
	projectile.body.setGravityY(-500);
	}
	if (sensprojectile==0) {
	projectile.setVelocityX(375);
projectile.setFlipX(false);	
projectile.body.setGravityY(-500);
	}
}

function hitprojectilebadass(monstre,projectile) {
	
	projectile.disableBody(true,true);
	if (viemonstre>0) {
	choixmonstre=10;
	
	viemonstre=viemonstre-1;
	}
}

function toucherarbre(arbre, projectile) {
	viearbre=viearbre-1;
projectile.disableBody(true,true);
	if (viearbre>0) {
	arbre.setY(1090);
    arbre.setX(2480);
	}
	 
	
	var debriss = debris.create(2490, 1140, 'debris');
	debriss.setVelocityX(65);
				 debris.create(2490, 1130, 'debris');
	   
		debriss.setVelocityX(75);
		
}

function lancerproj () {
 timerattaquejoueur=20;
}

function hitpantin (pantin,projectile) {
	projectile.disableBody(true,true);
	pantin.anims.play('pantinn', true);
	pantin.setY(1164);
    pantin.setX(2800);
	pantin.setVelocityX(0);
	timerpantin=1;
}

function antibouge (player,plateformecassable) {
	player.setX(500);
}