var timer;
var timespan = 15;
var animationMaxFrame = 20;
var animationManager;
var objectManager;

function AnimationManager(objectManager) {
	this.objectManager = objectManager;
	this.animationSteps = null;
	this.currentAnimation = 0;
	this.currentFrame = 0;
	this.animationMaxFrame = animationMaxFrame;
	this.currentBlock = [];
	this.startNewAnimation = function(commands) {
		clearTimeout(timer);
		this.animationSteps = commands;
		this.startNextBlock();
		this.currentFrame = 0;
		timer = setTimeout('timeout()', timespan);
	}
	this.startNextBlock = function() {
		var foundBreak = false;
		while (this.currentAnimation < this.animationSteps.length && !foundBreak) {
			var nextCommand = this.animationSteps[this.currentAnimation].split("<cry>");
			if (nextCommand[0].toUpperCase() == "CREATECIRCLE") {
				this.objectManager.addCircleObject(parseInt(nextCommand[1]), nextCommand[2], nextCommand[5]);
				this.objectManager.setPosition(parseInt(nextCommand[1]), parseInt(nextCommand[3]), parseInt(nextCommand[4]));
			} else if (nextCommand[0].toUpperCase() == "CREATEHIGHLIGHTCIRCLE") {
				this.objectManager.addHighlightCircleObject(parseInt(nextCommand[1]), nextCommand[4]);
				this.objectManager.setPosition(parseInt(nextCommand[1]), parseInt(nextCommand[2]), parseInt(nextCommand[3]));
			} else if (nextCommand[0].toUpperCase() == "CREATERECTANGLE") {
				this.objectManager.addRectangleObject(parseInt(nextCommand[1]), nextCommand[2], parseInt(nextCommand[3]), parseInt(nextCommand[4]), nextCommand[5], nextCommand[6]);
				this.objectManager.setPosition(parseInt(nextCommand[1]), parseInt(nextCommand[7]), parseInt(nextCommand[8]));
			} else if (nextCommand[0].toUpperCase() == "CREATEHIGHLIGHTRECTANGLE") {
				this.objectManager.addHighlightRectangleObject(parseInt(nextCommand[1]), parseInt(nextCommand[2]), parseInt(nextCommand[3]), nextCommand[4], nextCommand[5]);
				this.objectManager.setPosition(parseInt(nextCommand[1]), parseInt(nextCommand[6]), parseInt(nextCommand[7]));
			} else if (nextCommand[0].toUpperCase() == "CREATEPOINTER") {
				this.objectManager.addPointerObject(parseInt(nextCommand[1]), nextCommand[2], parseInt(nextCommand[3]), nextCommand[4]);
				this.objectManager.setPosition(parseInt(nextCommand[1]), parseInt(nextCommand[5]), parseInt(nextCommand[6]));
			} else if (nextCommand[0].toUpperCase() == "CREATESTATEBOX") {
				this.objectManager.addStateBoxObject(parseInt(nextCommand[1]), nextCommand[2], parseInt(nextCommand[5]), parseInt(nextCommand[6]));
				this.objectManager.setPosition(parseInt(nextCommand[1]), parseInt(nextCommand[3]), parseInt(nextCommand[4]));
			} else if (nextCommand[0].toUpperCase() == "CREATELABEL") {
				this.objectManager.addLabelObject(parseInt(nextCommand[1]), nextCommand[2]);
				this.objectManager.setPosition(parseInt(nextCommand[1]), parseInt(nextCommand[3]), parseInt(nextCommand[4]));
			} else if (nextCommand[0].toUpperCase() == "SETSTATE") {
				$('.state p')[0].innerHTML = nextCommand[1];
			} else if (nextCommand[0].toUpperCase() == "SETLABEL") {
				this.objectManager.setLabel(parseInt(nextCommand[1]), nextCommand[2]);
			} else if (nextCommand[0].toUpperCase() == "SETFOREGROUNDCOLOR") {
				this.objectManager.setForegroundColor(parseInt(nextCommand[1]), nextCommand[2]);
			} else if (nextCommand[0].toUpperCase() == "SETBACKGROUNDCOLOR") {
				this.objectManager.setBackgroundColor(parseInt(nextCommand[1]), nextCommand[2]);
			} else if (nextCommand[0].toUpperCase() == "SETHIGHLIGHTCOLOR") {
				this.objectManager.setHighlightColor(parseInt(nextCommand[1]), nextCommand[2]);
			} else if (nextCommand[0].toUpperCase() == "SETHIGHLIGHT") {
				this.objectManager.setHighlight(parseInt(nextCommand[1]), parseBool(nextCommand[2]));
			} else if (nextCommand[0].toUpperCase() == "SETLINEHIGHLIGHT") {
				this.objectManager.setLineHighlight(parseInt(nextCommand[1]), parseInt(nextCommand[2]), parseBool(nextCommand[3]));
			} else if (nextCommand[0].toUpperCase() == "DELETE") {
				this.objectManager.removeObject(parseInt(nextCommand[1]));
			} else if (nextCommand[0].toUpperCase() == "CONNECT") {
				if (nextCommand.length > 6) {
					this.objectManager.connectEdge(parseInt(nextCommand[1]), parseInt(nextCommand[2]), nextCommand[3], parseFloat(nextCommand[4]), parseBool(nextCommand[5]), nextCommand[6]);
				} else if (nextCommand.length > 5) {
					this.objectManager.connectEdge(parseInt(nextCommand[1]), parseInt(nextCommand[2]), nextCommand[3], parseFloat(nextCommand[4]), parseBool(nextCommand[5]), "");
				} else if (nextCommand.length > 4) {
					this.objectManager.connectEdge(parseInt(nextCommand[1]), parseInt(nextCommand[2]), nextCommand[3], parseFloat(nextCommand[4]), parseBool("true"), "");
				} else if (nextCommand.length > 3) {
					this.objectManager.connectEdge(parseInt(nextCommand[1]), parseInt(nextCommand[2]), nextCommand[3], parseFloat("0.0"), parseBool("true"), "");
				}
			} else if (nextCommand[0].toUpperCase() == "DISCONNECT") {
				this.objectManager.disConnectEdge(parseInt(nextCommand[1]), parseInt(nextCommand[2]));
			} else if (nextCommand[0].toUpperCase() == "MOVE") {
				var objectID = parseInt(nextCommand[1]);
				var newAni = new SingleAnimation(objectID, parseInt(this.objectManager.getPositionX(objectID)), parseInt(this.objectManager.getPositionY(objectID)), parseInt(nextCommand[2]), parseInt(nextCommand[3]));
				this.currentBlock.push(newAni);
			} else if (nextCommand[0].toUpperCase() == "STEP") {
				foundBreak = true;
			}
			this.currentAnimation++;
		}
		this.currentFrame = 0;
	}
	this.update = function() {
		this.currentFrame++;
		for (var i = 0; i < this.currentBlock.length; i++) {
			if (this.currentFrame >= this.animationMaxFrame) {
				this.objectManager.setPosition(parseInt(this.currentBlock[i].objectID), parseInt(this.currentBlock[i].toX), parseInt(this.currentBlock[i].toY));
			} else {
				var objectID = this.currentBlock[i].objectID;
				var fromX = this.currentBlock[i].fromX;
				var fromY = this.currentBlock[i].fromY;
				var toX = this.currentBlock[i].toX;
				var toY = this.currentBlock[i].toY;
				var rate = 1.0 * this.currentFrame / this.animationMaxFrame;
				var nowX = fromX + (toX - fromX) * rate;
				var nowY = fromY + (toY - fromY) * rate;
				this.objectManager.setPosition(objectID, parseInt(nowX), parseInt(nowY));
			}
		}
		if (this.currentFrame >= this.animationMaxFrame) {
			this.currentBlock = [];
			this.startNextBlock();
		}
		this.objectManager.framenum = this.currentFrame;
	}
}

function timeout() {
	timer = setTimeout('timeout()', timespan);
	animationManager.update(); // 更新
	objectManager.draw(); // 画图
}

function parseBool(value) {
	var retVal = !(value.toUpperCase() == 'FALSE');
	return retVal;
}
var SingleAnimation = function(objectID, fromX, fromY, toX, toY) {
	this.objectID = objectID;
	this.fromX = fromX;
	this.fromY = fromY;
	this.toX = toX;
	this.toY = toY;
}
setAnimationSpeed = function(value) {
	value = parseInt(value)
	if (value >= 1 && value <= 100) {
		var min = 5;
		var max = 30;
		timespan = parseInt(1.0 * (100 - value) / 100 * (max - min) + min);
	}
}