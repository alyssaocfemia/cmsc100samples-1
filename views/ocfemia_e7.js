function car(plateNo,model,Color){
		this.plateNo = plateNo;
		this.model = model;
		this.Color = Color;
		this.speed	= 0;

	this.startCar = startCar;
	this.stopCar = stopCar;
	this.accelerate = accelerate;
	this.decelerate = decelerate;
	this.repaintCar = repaintCar;
}

function startCar (){
	this.speed = 10;
}
function stopCar (){
	this.speed = 0;
}
function accelerate (n){
	this.speed = this.speed + n;
}
function decelerate (n){
	this.speed = this.speed - n;
}
function repaintCar (newColor){
	this.Color = newColor;
}