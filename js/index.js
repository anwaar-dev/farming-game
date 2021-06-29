// GETTING THE OLD DATA FROM LOCAL STORAGE
let account,Data,accountData,saveAccountData,saveData;document.onload=getData();
function getData() {
	account=localStorage.getItem("acc");
	accountData=localStorage.getItem(account);
	Data=JSON.parse(accountData);
}
function saveGame(s) {
	Data.TimeMins=timeMins;Data.TimeHours=timeHours;Data.DateDays=dateDays;Data.DateMonths=dateMonths;
	saveAccountData=JSON.stringify(Data);menuButtonNumber=1;menuButtonClick();
	localStorage.setItem(account,saveAccountData);
	if (s==1){alert("Game Saved As "+account);} 
}
// ASIGNING THE RETRIVED DATA
let timeMins=Data.TimeMins;
let timeHours=Data.TimeHours;
let dateDays=Data.DateDays;
let dateMonths=Data.DateMonths;















// DECLARING VARIABLES
let abletomoveUp=true,abletomoveRight=true,abletomoveDown=true,abletomoveLeft=true;
let player = document.querySelector("#player");let nightTime,menuButtonNumber=0;
let range = document.querySelector("#range");let theCollidingDiv,isitnight=false;
let rangeX=range.offsetLeft,rangeY=range.offsetTop;let OldManFace=1,sltrow1=0,sltrow2=0;
player.style.backgroundImage="url('../graphics/people/player-d.png')";let sltrow3=0;
let pond1 = document.querySelector(".pond1");let crsbtn = document.querySelector("#crsbtn");
let OldMan = document.querySelector(".OldMan"),sellQuantityNumber=0,selectedItem="none";















// FUNCTIONS

// MENU BUTTON CLICK
function menuButtonClick() {
if (menuButtonNumber==0){
	menu.style.left=window.innerWidth-menu.offsetWidth+"px";menuButtonNumber++;
	menuButton.style.left=window.innerWidth-menu.offsetWidth+10+"px";
	menuButton.style.background="url('../graphics/all/menuButton2.png')";
	credit.style.left=menu.offsetLeft-250+"px";credit.style.opacity="1";
	menu.style.opacity="1";}
else if(menuButtonNumber==1){
	menu.style.left=window.innerWidth+"px";menuButtonNumber--;
	menuButton.style.left=window.innerWidth-menuButton.offsetWidth+"px";
	menuButton.style.background="url('../graphics/all/menuButton.png')";
	credit.style.left=menu.offsetLeft+250+"px";credit.style.opacity="0";
	menu.style.opacity="0.5";}
}
// DAY & NIGHT
function dayNightCycle() {
	if (nightTime==true&&timeHours<12&&timeHours>7) {
		night.style.animation="turningNight 10.2s";
		light1.style.display="block";light2.style.display="block";
		night.style.display="block";isitnight=true;}
	else if (timeHours==12){isitnight=false;
		light1.style.display="none";light2.style.display="none";
		night.style.animation="turningDay 10.2s";}
	else{night.style.display="none";isitnight=false;light1.style.display="none";light2.style.display="none";}
}
// POP UP HIDE AND SHOW
function infoPopUp(colliderDiv,theKey2,b) {
	if (b=="house3"||b=="pond1"||b=="field1"||b=="field2"||b=="field3"||b=="field4"||b=="field5"||b=="field6"||b=="OldMan") {
		if (theKey2=="W"){popUp.style.top="65%";popUp.style.left="50%";}
		else if (theKey2=="A"){popUp.style.left="118%";popUp.style.top="25%";}
		else if (theKey2=="S"){popUp.style.top="-18%";popUp.style.left="50%";}
		else if (theKey2=="D"){popUp.style.left="-18%";popUp.style.top="25%";}
		popUp.style.display="block";}
		if (b=="house3"){popUp.innerHTML="My Home<br><samp>Wanna Sleep?</samp><div id='crsbtn' onclick='hidePopUp()'>X</div><div class='PopUpButton' onclick='sleep()'>Sleep</div>"}
		if (b=="pond1"){popUp.innerHTML="Pond<br><samp>Start Fishing</samp><div id='crsbtn' onclick='hidePopUp()'>X</div><div class='PopUpButton fishingButton'>Start Fishing</div>"}
		if (b=="field1"){popUp.innerHTML="Fields<div id='crsbtn' onclick='hidePopUp(field1)'>X</div> <div class='waterButton' title='Water' onclick='waterButtonClick(field1,Data.field1Obj)'></div><div class='harvestButton' title='Harvest' onclick='harvestButtonClick(field1,Data.field1Obj)'></div><div class='sowButton' title='Sow seeds' onclick='sowButtonClick(field1,Data.field1Obj)'></div><div class='cleanButton' title='Clean' onclick='cleanButtonClick(field1,Data.field1Obj)'></div>";fieldOutline(field1);popUp.style.backgroundImage="url('../graphics/all/popups/field.png')";}
		if (b=="field2"){popUp.innerHTML="Fields<div id='crsbtn' onclick='hidePopUp(field2)'>X</div> <div class='waterButton' title='Water' onclick='waterButtonClick(field2,Data.field2Obj)'></div><div class='harvestButton' title='Harvest' onclick='harvestButtonClick(field2,Data.field2Obj)'></div><div class='sowButton' title='Sow seeds' onclick='sowButtonClick(field2,Data.field2Obj)'></div><div class='cleanButton' title='Clean' onclick='cleanButtonClick(field2,Data.field2Obj)'></div>";fieldOutline(field2);popUp.style.backgroundImage="url('../graphics/all/popups/field.png')";}
		if (b=="field3"){popUp.innerHTML="Fields<div id='crsbtn' onclick='hidePopUp(field3)'>X</div> <div class='waterButton' title='Water' onclick='waterButtonClick(field3,Data.field3Obj)'></div><div class='harvestButton' title='Harvest' onclick='harvestButtonClick(field3,Data.field3Obj)'></div><div class='sowButton' title='Sow seeds' onclick='sowButtonClick(field3,Data.field3Obj)'></div><div class='cleanButton' title='Clean' onclick='cleanButtonClick(field3,Data.field3Obj)'></div>";fieldOutline(field3);popUp.style.backgroundImage="url('../graphics/all/popups/field.png')";}
		if (b=="field4"){popUp.innerHTML="Fields<div id='crsbtn' onclick='hidePopUp(field4)'>X</div> <div class='waterButton' title='Water' onclick='waterButtonClick(field4,Data.field4Obj)'></div><div class='harvestButton' title='Harvest' onclick='harvestButtonClick(field4,Data.field4Obj)'></div><div class='sowButton' title='Sow seeds' onclick='sowButtonClick(field4,Data.field4Obj)'></div><div class='cleanButton' title='Clean' onclick='cleanButtonClick(field4,Data.field4Obj)'></div>";fieldOutline(field4);popUp.style.backgroundImage="url('../graphics/all/popups/field.png')";}
		if (b=="field5"){popUp.innerHTML="Fields<div id='crsbtn' onclick='hidePopUp(field5)'>X</div> <div class='waterButton' title='Water' onclick='waterButtonClick(field5,Data.field5Obj)'></div><div class='harvestButton' title='Harvest' onclick='harvestButtonClick(field5,Data.field5Obj)'></div><div class='sowButton' title='Sow seeds' onclick='sowButtonClick(field5,Data.field5Obj)'></div><div class='cleanButton' title='Clean' onclick='cleanButtonClick(field5,Data.field5Obj)'></div>";fieldOutline(field5);popUp.style.backgroundImage="url('../graphics/all/popups/field.png')";}
		if (b=="field6"){popUp.innerHTML="Fields<div id='crsbtn' onclick='hidePopUp(field6)'>X</div> <div class='waterButton' title='Water' onclick='waterButtonClick(field6,Data.field6Obj)'></div><div class='harvestButton' title='Harvest' onclick='harvestButtonClick(field6,Data.field6Obj)'></div><div class='sowButton' title='Sow seeds' onclick='sowButtonClick(field6,Data.field6Obj)'></div><div class='cleanButton' title='Clean' onclick='cleanButtonClick(field6,Data.field6Obj)'></div>";fieldOutline(field6);popUp.style.backgroundImage="url('../graphics/all/popups/field.png')";}
		if (b=="shop1"&&theKey2=="W"){popUp.innerHTML="Market<br><div id='crsbtn' onclick='hidePopUp()'>X</div><div class='sellButton' title='Sell' onclick='sellButtonClick()'>SELL</div><div class='buyButton' title='Buy' onclick='sellButtonClick()'>BUY</div>";popUp.style.left="118%";popUp.style.top="25%";popUp.style.display="block";popUp.style.backgroundImage="url('../graphics/all/popups/market.png')";}
		if (b=="OldMan"){popUp.innerHTML="Old Farmer<br><div id='crsbtn' onclick='hidePopUp()'>X</div><samp>"+OldManTalks();+"</samp> "}
}
function hidePopUp(cd) {
	popUp.style.display="none";popUp.style.backgroundImage="none";
	cd.style.outline="none";
	popUp.innerHTML="INFO<div id='crsbtn' onclick='hidePopUp()'>X</div>"
}
// SLEEP
function sleep() {
	if (isitnight==true) {timeHours+=1;
	timeBarHours.innerHTML=timeHours+":";
	sleepScreen.style.display="block";
	sleepScreen.style.animation="sleep 2s";
	if(timeHours>=12&&dateDays<10){dateDays++;dateBarDays.innerHTML=dateDays+":";timeHours=0;saveGame();}
	else if(dateDays>=10){dateMonths++;dateBarMonths.innerHTML=dateMonths;timeMins=0;dateDays=0;}
	fieldsUpdate(field1,Data.field1Obj);fieldsUpdate(field2,Data.field2Obj);fieldsUpdate(field3,Data.field3Obj);fieldsUpdate(field4,Data.field4Obj);fieldsUpdate(field5,Data.field5Obj);fieldsUpdate(field6,Data.field6Obj);
} 
	else{sleepScreen.style.display="none";sleepScreen.style.animation="none";alert("You Can Only Sleep At Night.")}
hidePopUp();
}
// FIELDS FUNCTIONS
function fieldsUpdate(field,fieldObj){
	if (fieldObj.Watered==true){
		field.style.backgroundImage="url('../graphics/nature/field.png')";
		if(fieldObj.Seeded==true){field.style.backgroundImage="url('../graphics/nature/seedfield.png')";}
		if(fieldObj.Dirty==true){field.style.backgroundImage="url('../graphics/nature/dirtfield.png')";}
		if(fieldObj.Crop!=="none"){
			if(fieldObj.Growth==0){field.style.backgroundImage="url('../graphics/nature/field.png')";}
			if(fieldObj.Growth==1){field.style.backgroundImage="url('../graphics/nature/planted/potato1.png')";}
			if(fieldObj.Growth==2){field.style.backgroundImage="url('../graphics/nature/planted/potato2.png')";}
			if(fieldObj.Growth>=3){field.style.backgroundImage="url('../graphics/nature/planted/potato3.png')";}
		}
	}
	if (fieldObj.Watered==false){
		field.style.backgroundImage="url('../graphics/nature/dryfield.png')";
		if(fieldObj.Seeded==true){field.style.backgroundImage="url('../graphics/nature/seedfielddry.png')";}
		if(fieldObj.Dirty==true){field.style.backgroundImage="url('../graphics/nature/dirtfield.png')";}
		if(fieldObj.Crop!=="none"){
			if(fieldObj.Growth==0){field.style.backgroundImage="url('../graphics/nature/dryfield.png')";}
			if(fieldObj.Growth==1){field.style.backgroundImage="url('../graphics/nature/planted/potato1dry.png')";}
			if(fieldObj.Growth==2){field.style.backgroundImage="url('../graphics/nature/planted/potato2dry.png')";}
			if(fieldObj.Growth>=3){field.style.backgroundImage="url('../graphics/nature/planted/potato3dry.png')";}
		}
	}
}
function fieldInform(drop,fieldObj) {
	if(fieldObj.Watered==false&&fieldObj.Crop!=="none"&&fieldObj.Growth!==3){drop.style.display="block";drop.style.backgroundImage="url('../graphics/all/drop.png')";drop.style.width="20px";drop.style.height="28px";}
	else if(fieldObj.Growth>=3){drop.style.display="block";drop.style.backgroundImage="url('../graphics/all/gat.png')";drop.style.width="38px";drop.style.height="36px";}
	else{drop.style.display="none"}
}
function fieldOutline(field) {
	field1.style.outline="none";field2.style.outline="none";field3.style.outline="none";field4.style.outline="none";field5.style.outline="none";field6.style.outline="none";
	field.style.outline="2px dashed yellow";
}
function waterButtonClick(field,fieldObj) {
	if (fieldObj.Watered==false){fieldObj.Watered=true;fieldsUpdate(field,fieldObj);} 
}
function harvestButtonClick(field,fieldObj) {
	if (fieldObj.Growth>=3){
		if (fieldObj.Crop=="carrot"){Data.Carrot+=8;}
		else if (fieldObj.Crop=="corn"){Data.Corn+=8;}
		fieldObj.Growth=0;fieldObj.Crop="none";
		fieldObj.Dirty=true;fieldsUpdate(field,fieldObj);
}}
function sowButtonClick(field,fieldObj) {
	if (fieldObj.Seeded==false&&fieldObj.Growth==0&&fieldObj.Dirty==false){fieldObj.Seeded=true;fieldsUpdate(field,fieldObj);} 
}
function cleanButtonClick(field,fieldObj) {
	if (fieldObj.Dirty==true&&fieldObj.Growth==0){fieldObj.Dirty=false;fieldObj.Watered=true;fieldsUpdate(field,fieldObj);} 
}
function sellButtonClick() {
	sellPanel.style.display="block";darkScreen.style.display="block";inventoryShow();
	inventory.style.transform="translate(-100%,-50%)";inventoryCloseButton.style.display="none";
}
function dSClick() {
	sellPanel.style.display="none";darkScreen.style.display="none";inventoryShow();
	inventory.style.transform="translate(-50%,-50%)";inventoryCloseButton.style.display="block";
	inventoryPic.style.backgroundImage="none";sellPic.style.backgroundImage="none";
}
function sellMinusClick() {
	if (selectedItem=="carrot"&&sellQuantityNumber>0){
		sellQuantityNumber--;sellQuantity.innerHTML=sellQuantityNumber;
		sellPrice.innerHTML=sellQuantityNumber*20;
	}
	else if (selectedItem=="corn"&&sellQuantityNumber>0){
		sellQuantityNumber--;sellQuantity.innerHTML=sellQuantityNumber;
		sellPrice.innerHTML=sellQuantityNumber*50;
	}
}
function sellPlusClick() {
	if (selectedItem=="carrot"&&sellQuantityNumber<Data.Carrot){
		sellQuantityNumber++;sellQuantity.innerHTML=sellQuantityNumber;
		sellPrice.innerHTML=sellQuantityNumber*20;
	}
	else if (selectedItem=="corn"&&sellQuantityNumber<Data.Corn){
		sellQuantityNumber++;sellQuantity.innerHTML=sellQuantityNumber;
		sellPrice.innerHTML=sellQuantityNumber*50;
	}
}
function sellButton2Click() {
	if(selectedItem=="carrot"){
		Data.Carrot-=sellQuantityNumber;Data.Money+=sellQuantityNumber*20;
		inventoryUpdate();selectedItem="none";sellPrice.innerHTML=sellQuantityNumber*20;
		sellQuantityNumber=0;money.innerHTML=Data.Money;
	}
	sellPic.style.backgroundImage="none";sellPrice.innerHTML="0000";sellQuantity.innerHTML=0;
}
// INVENTORY STUFF
let invnum=false;
function inventoryShow() {
	if (invnum==false) {document.querySelector('#inventory').style.display="block";invnum=true;}
	else{document.querySelector('#inventory').style.display="none";invnum=false}
	inventoryUpdate();selectedItem="none";
}

function inventoryUpdate() {
	carrot.style.left=slot2.offsetLeft+"px";carrot.style.top=slot2.offsetTop+"px";
	carrotQuantity.innerHTML=Data.Carrot;
	corn.style.left=slot1.offsetLeft+"px";corn.style.top=slot1.offsetTop+"px";
	if (Data.Carrot>0){carrot.style.display="block"}else{carrot.style.display="none"}
	if (Data.Corn>0){corn.style.display="block"}else{corn.style.display="none"}
	inventoryPic.style.backgroundImage="none";inventoryInfo.innerHTML="Select an Item to view its Details";
}
function carrotClick() {
	inventoryPic.style.backgroundImage="url('../graphics/nature/carrot.png')";
	sellPic.style.backgroundImage="url('../graphics/nature/carrot.png')";
	inventoryInfo.innerHTML="Carrot<br>You can Sell it at Shop.";
	selectedItem="carrot";sellQuantityNumber=0;sellPlusClick();
}
function cornClick() {
	inventoryPic.style.backgroundImage="url('../graphics/nature/corn.png')";
	sellPic.style.backgroundImage="url('../graphics/nature/corn.png')";
	inventoryInfo.innerHTML="Corn<br>You can Sell it at the Shop.";
	selectedItem="corn";sellQuantityNumber=0;sellPlusClick();
}

// PEOPLE'S FACE FUNCTIONS
function OldManFaceFun(){
	if (OldManFace==1) {OldMan.style.backgroundImage="url('../graphics/people/nika-l.png')";OldManFace++;}
	else if(OldManFace==2){OldMan.style.backgroundImage="url('../graphics/people/nika-d.png')";OldManFace--;}
if (nightTime==true) {OldMan.style.display="none"}else{OldMan.style.display="block"}
}
function OldManTalks() {
	if (dateDays==1){return "You can only sleep at night."}
	else if (dateDays==2){return "You can buy more Fields if you have the required amount of money."}
	else if (dateDays>2){return "Don't have anything new to share."}
}




















// MOVEMENTS
function keydown(e) {
	if (e.keyCode==68&&abletomoveRight==true){// D
		player.style.backgroundImage="url('../graphics/people/player-r.gif')";
		rangeX+=5;range.style.left=rangeX+"px";
		if (rangeX>=window.innerWidth-range.offsetWidth){window.scrollBy(15,0);}
		collider(pond1,"D","pond1");collider(bush1,"D","bush1");collider(house3,"D","house3");
		collider(crops1,"D","crops1");collider(field1,"D","field1");collider(field2,"D","field2");
		collider(field3,"D","field3");collider(field4,"D","field4");collider(field5,"D","field5");
		collider(field6,"D","field6");
		collider(OldMan,"D","OldMan");collider(house2,"D","house2");collider(house1,"D","house1");
		collider(shop1,"D","shop1");collider(shop2,"D","shop2");collider(shop3,"D","shop3");
		collider(shop4,"D","shop4");collider(shop5,"D","shop5");collider(shop6,"D","shop6");
		collider(bush2,"D","bush2");collider(sL1,"D","sL1");collider(sL2,"D","sL2");
		collider(bench1,"D","bench1");collider(bench2,"D","bench2");collider(flowerPot1,"D","flowerPot1");
		collider(cage,"D","cage");
	}
	if (e.keyCode==65&&abletomoveLeft==true){// A
		player.style.backgroundImage="url('../graphics/people/player-l.gif')";
		rangeX-=5;range.style.left=rangeX+"px";
		if (rangeX<=window.innerWidth){window.scrollBy(-15,0);}
		collider(pond1,"A","pond1");collider(bush1,"A","bush1");collider(house3,"A","house3");
		collider(crops1,"A","crops1");collider(field1,"A","field1");collider(field2,"A","field2");
		collider(field3,"A","field3");collider(field4,"A","field4");collider(field5,"A","field5");
		collider(field6,"A","field6");
		collider(OldMan,"A","OldMan");collider(house2,"A","house2");collider(house1,"A","house1");
		collider(shop1,"A","shop1");collider(shop2,"A","shop2");collider(shop3,"A","shop3");
		collider(shop4,"A","shop4");collider(shop5,"A","shop5");collider(shop6,"A","shop6");
		collider(bush2,"A","bush2");collider(sL1,"A","sL1");collider(sL2,"A","sL2");
		collider(bench1,"A","bench1");collider(bench2,"A","bench2");collider(flowerPot1,"A","flowerPot1");
		collider(cage,"A","cage");
	}
	if (e.keyCode==87&&abletomoveUp==true){// W
		player.style.backgroundImage="url('../graphics/people/player-u.gif')";
		rangeY-=5;range.style.top=rangeY+"px";
		if (rangeY<=window.innerHeight){window.scrollBy(0,-15);}
		collider(pond1,"W","pond1");collider(bush1,"W","bush1");collider(house3,"W","house3");
		collider(crops1,"W","crops1");collider(field1,"W","field1");collider(field2,"W","field2");
		collider(field3,"W","field3");collider(field4,"W","field4");collider(field5,"W","field5");
		collider(field6,"W","field6");
		collider(OldMan,"W","OldMan");collider(house2,"W","house2");collider(house1,"W","house1");
		collider(shop1,"W","shop1");collider(shop2,"W","shop2");collider(shop3,"W","shop3");
		collider(shop4,"W","shop4");collider(shop5,"W","shop5");collider(shop6,"W","shop6");
		collider(bush2,"W","bush2");collider(sL1,"W","sL1");collider(sL2,"W","sL2");
		collider(bench1,"W","bench1");collider(bench2,"W","bench2");collider(flowerPot1,"W","flowerPot1");
		collider(cage,"W","cage");
	}
	if (e.keyCode==83&&abletomoveDown==true){// S
		player.style.backgroundImage="url('../graphics/people/player-d.gif')";
		rangeY+=5;range.style.top=rangeY+"px";
		if (rangeY>=window.innerHeight-range.offsetHeight){window.scrollBy(0,15);}
		collider(pond1,"S","pond1");collider(bush1,"S","bush1");collider(house3,"S","house3");
		collider(crops1,"S","crops1");collider(field1,"S","field1");collider(field2,"S","field2");
		collider(field3,"S","field3");collider(field4,"S","field4");collider(field5,"S","field5");
		collider(field6,"S","field6");
		collider(OldMan,"S","OldMan");collider(house2,"S","house2");collider(house1,"S","house1");
		collider(shop1,"S","shop1");collider(shop2,"S","shop2");collider(shop3,"S","shop3");
		collider(shop4,"S","shop4");collider(shop5,"S","shop5");collider(shop6,"S","shop6");
		collider(bush2,"S","bush2");collider(sL1,"S","sL1");collider(sL2,"S","sL2");
		collider(bench1,"S","bench1");collider(bench2,"S","bench2");collider(flowerPot1,"S","flowerPot1");
		collider(cage,"S","cage");
	}
	if (e.keyCode==70){menuButtonClick();}
	if (e.keyCode==69){inventoryShow()}
if (rangeX+range.offsetWidth>=window.innerWidth*2){abletomoveRight=false}
if (rangeX<=0){abletomoveLeft=false}
if (rangeY+range.offsetHeight>=window.innerHeight*2){abletomoveDown=false}
if (rangeY<=0){abletomoveUp=false;}
}
function keyup(e) {
	if (e.keyCode==68){player.style.backgroundImage="url('../graphics/people/player-r.png')";}
	if (e.keyCode==65){player.style.backgroundImage="url('../graphics/people/player-l.png')";}
	if (e.keyCode==87){player.style.backgroundImage="url('../graphics/people/player-u.png')";}
	if (e.keyCode==83){player.style.backgroundImage="url('../graphics/people/player-d.png')";}
}
function collider(theColliderDiv,theKey,buildingName) {
doElsCollide = function(el1, el2) {
    theColliderDiv.offsetBottom = theColliderDiv.offsetTop + theColliderDiv.offsetHeight;
    theColliderDiv.offsetRight = theColliderDiv.offsetLeft + theColliderDiv.offsetWidth;
    range.offsetBottom = range.offsetTop + range.offsetHeight/2+20;
    range.offsetRight = range.offsetLeft + range.offsetWidth/2+8;
    
    return !((theColliderDiv.offsetBottom < range.offsetTop+range.offsetHeight/2+10) ||
             (theColliderDiv.offsetTop > range.offsetBottom) ||
             (theColliderDiv.offsetRight < range.offsetLeft+range.offsetWidth/2-6) ||
             (theColliderDiv.offsetLeft > range.offsetRight))
};
  if (doElsCollide(theColliderDiv, range) == true) {

  	infoPopUp(theColliderDiv,theKey,buildingName);
  	if (theKey=="W"){abletomoveUp=false;rangeY+=5;}
  	else if (theKey=="A"){abletomoveLeft=false;rangeX+=5;}
  	else if (theKey=="S"){abletomoveDown=false;rangeY-=5;}
  	else if (theKey=="D"){abletomoveRight=false;rangeX-=5;}
  	range.style.left=rangeX+"px";range.style.top=rangeY+"px";
  	
} 
else if(doElsCollide(theColliderDiv, range) == false) {
	abletomoveRight=true;abletomoveDown=true;abletomoveLeft=true;abletomoveUp=true;
}}

let fish1MoveRight=false,fish1MoveLeft=true,fish1MoveUp=true,fish1MoveDown=false;
let fish2MoveRight=false,fish2MoveLeft=true,fish2MoveUp=true,fish2MoveDown=false;
function fishMovement(fish) {
	if(fish.offsetLeft<50){
		if (fish==fish1){fish1MoveRight=true;fish1MoveLeft=false;}
		if (fish==fish2){fish2MoveRight=true;fish2MoveLeft=false;}
		fish.style.transform="scaleX(-1)";
	}
	if (fish.offsetLeft>250){
		if (fish==fish1){fish1MoveRight=false;fish1MoveLeft=true;}
		if (fish==fish2){fish2MoveRight=false;fish2MoveLeft=true;}
		fish.style.transform="scaleX(1)";
	}
	if (fish.offsetTop<30) {
		if (fish==fish1){fish1MoveUp=false;fish1MoveDown=true;}
		if (fish==fish2){fish2MoveUp=false;fish2MoveDown=true;}
	}
	if (fish.offsetTop>140) {
		if (fish==fish1){fish1MoveUp=true;fish1MoveDown=false;}
		if (fish==fish2){fish2MoveUp=true;fish2MoveDown=false;}
	}
}
function fishUpdate(fish,fU,fR,fD,fL) {
	fishMovement(fish);
	if (fU==true){fish.style.top=fish.offsetTop-1+"px";}
	if (fR==true){fish.style.left=fish.offsetLeft+1+"px";}
	if (fD==true){fish.style.top=fish.offsetTop+1+"px";}
	if (fL==true){fish.style.left=fish.offsetLeft-1+"px";}
}


















// DECLARING VARIABLES
document.onkeydown=keydown;
document.onkeyup=keyup;
let house1 = document.querySelector(".house1");
let house2 = document.querySelector(".house2");
let house3 = document.querySelector(".house3");
let light1 = document.querySelector(".light1");
let light2 = document.querySelector(".l2");
let sL1 = document.querySelector(".sl1");
let sL2 = document.querySelector(".sl2");
let bush1 = document.querySelector(".bush1");
let bush2 = document.querySelector(".bush2");
let cage = document.querySelector(".cage");
let shop1 = document.querySelector(".shop1");
let shop2 = document.querySelector(".shop2");
let shop3 = document.querySelector(".shop3");
let shop4 = document.querySelector(".shop4");
let shop5 = document.querySelector(".shop5");
let shop6 = document.querySelector(".shop6");
let bench1 = document.querySelector(".bench1");
let bench2 = document.querySelector(".bench2");
let flowerPot1 = document.querySelector(".flowerPot1");
let crops1 = document.querySelector(".crops1");
let fish1 = document.querySelector(".fish1");
fish1.style.left="50px";fish1.style.top="50px";
let fish2 = document.querySelector(".fish2");
fish2.style.left="150px";fish2.style.top="80px";
let timeBarMins = document.querySelector("#timeBarMins");
let timeBarHours = document.querySelector("#timeBarHours");
let dateBarDays = document.querySelector("#dateBarDays");
let dateBarMonths = document.querySelector("#dateBarMonths");
let night = document.querySelector("#night");
let slot1=document.querySelector(".slot1");let slot9=document.querySelector(".slot9");
let slot2=document.querySelector(".slot2");let slot10=document.querySelector(".slot10");
let slot3=document.querySelector(".slot3");let slot11=document.querySelector(".slot11");
let slot4=document.querySelector(".slot4");let slot12=document.querySelector(".slot12");
let slot5=document.querySelector(".slot5");let slot13=document.querySelector(".slot13");
let slot6=document.querySelector(".slot6");let slot14=document.querySelector(".slot14");
let slot7=document.querySelector(".slot7");let slot15=document.querySelector(".slot15");
let slot8=document.querySelector(".slot8");let slot16=document.querySelector(".slot16");
let carrot = document.querySelector(".carrot");
let carrotQuantity = document.querySelector("#carrotQuantity");
let corn = document.querySelector(".corn");
let inventoryPic = document.querySelector("#inventoryPic");
let sellPic = document.querySelector(".sellPic");
let sellQuantity = document.querySelector(".sellQuantity");
let sellPrice = document.querySelector("#sellPrice");
let inventoryInfo = document.querySelector("#inventoryInfo");
let sleepScreen = document.querySelector("#sleepScreen");
let darkScreen = document.querySelector("#darkScreen");
let menuButton = document.querySelector("#menuButton");
let money = document.querySelector("#money");
let drop1 = document.querySelector(".drop1");
let drop2 = document.querySelector(".drop2");
let drop3 = document.querySelector(".drop3");
let drop4 = document.querySelector(".drop4");
let drop5 = document.querySelector(".drop5");
let drop6 = document.querySelector(".drop6");
let menu = document.querySelector("#menu");
let sellPanel = document.querySelector("#sellPanel");
let credit = document.querySelector(".credit");
let popUp = document.querySelector("#popUp");
money.innerHTML=Data.Money;
let field1 = document.querySelector(".field1");
let field2 = document.querySelector(".field2");
let field3 = document.querySelector(".field3");
let field4 = document.querySelector(".field4");
let field5 = document.querySelector(".field5");
let field6 = document.querySelector(".field6");



dateBarDays.innerHTML=dateDays+":";dateBarMonths.innerHTML=dateMonths;
timeBarHours.innerHTML=timeHours+":";timeBarMins.innerHTML=timeMins;
window.setInterval(function(){
if (timeMins<60){timeMins++;timeBarMins.innerHTML=timeMins;fieldInform(drop1,Data.field1Obj);fieldInform(drop2,Data.field2Obj);fieldInform(drop3,Data.field3Obj);fieldInform(drop4,Data.field4Obj);fieldInform(drop5,Data.field5Obj);fieldInform(drop6,Data.field6Obj);fishUpdate(fish1,fish1MoveUp,fish1MoveRight,fish1MoveDown,fish1MoveLeft);fishUpdate(fish2,fish2MoveUp,fish2MoveRight,fish2MoveDown,fish2MoveLeft);}
else if(timeMins>=60&&timeHours<12){timeHours++;timeBarHours.innerHTML=timeHours+":";timeMins=0;OldManFaceFun();}
else if(timeHours>=12&&dateDays<10){
	dateDays++;dateBarDays.innerHTML=dateDays+":";timeHours=0;
	// FIELD-1
	if(Data.field1Obj.Seeded==true&&Data.field1Obj.Watered==true){Data.field1Obj.Growth=1;Data.field1Obj.Seeded=false;Data.field1Obj.Crop="carrot";}else if(Data.field1Obj.Growth>0&&Data.field1Obj.Watered==true){Data.field1Obj.Growth++;}Data.field1Obj.Watered=false;fieldsUpdate(field1,Data.field1Obj);
	// FIELD-2
	if(Data.field2Obj.Seeded==true&&Data.field2Obj.Watered==true){Data.field2Obj.Growth=1;Data.field2Obj.Seeded=false;Data.field2Obj.Crop="carrot";}else if(Data.field2Obj.Growth>0&&Data.field2Obj.Watered==true){Data.field2Obj.Growth++;}Data.field2Obj.Watered=false;fieldsUpdate(field2,Data.field2Obj);
	// FIELD-3
	if(Data.field3Obj.Seeded==true&&Data.field3Obj.Watered==true){Data.field3Obj.Growth=1;Data.field3Obj.Seeded=false;Data.field3Obj.Crop="carrot";}else if(Data.field3Obj.Growth>0&&Data.field3Obj.Watered==true){Data.field3Obj.Growth++;}Data.field3Obj.Watered=false;fieldsUpdate(field3,Data.field3Obj);
	// FIELD-4
	if(Data.field4Obj.Seeded==true&&Data.field4Obj.Watered==true){Data.field4Obj.Growth=1;Data.field4Obj.Seeded=false;Data.field4Obj.Crop="carrot";}else if(Data.field4Obj.Growth>0&&Data.field4Obj.Watered==true){Data.field4Obj.Growth++;}Data.field4Obj.Watered=false;fieldsUpdate(field4,Data.field4Obj);
	// FIELD-5
	if(Data.field5Obj.Seeded==true&&Data.field5Obj.Watered==true){Data.field5Obj.Growth=1;Data.field5Obj.Seeded=false;Data.field5Obj.Crop="carrot";}else if(Data.field5Obj.Growth>0&&Data.field5Obj.Watered==true){Data.field5Obj.Growth++;}Data.field5Obj.Watered=false;fieldsUpdate(field5,Data.field5Obj);
	// FIELD-6
	if(Data.field6Obj.Seeded==true&&Data.field6Obj.Watered==true){Data.field6Obj.Growth=1;Data.field6Obj.Seeded=false;Data.field6Obj.Crop="carrot";}else if(Data.field6Obj.Growth>0&&Data.field6Obj.Watered==true){Data.field6Obj.Growth++;}Data.field6Obj.Watered=false;fieldsUpdate(field6,Data.field6Obj);
	
	saveGame();
}
else if(dateDays>=10){dateMonths++;dateBarMonths.innerHTML=dateMonths;timeMins=1;dateDays=1;}
if (timeHours>8) {nightTime=true}else{nightTime=false}
dayNightCycle();
},160)
//160
// CALLING FUNCTIONS 
fieldsUpdate(field1,Data.field1Obj);
fieldsUpdate(field2,Data.field2Obj);
fieldsUpdate(field3,Data.field3Obj);
fieldsUpdate(field4,Data.field4Obj);
fieldsUpdate(field5,Data.field5Obj);
fieldsUpdate(field6,Data.field6Obj);