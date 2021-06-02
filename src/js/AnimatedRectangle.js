var AnimatedRectangle = function(objectID, label, width, height, xJust, yJust) {
	this.objectID = objectID;
	this.label = label;
	this.width = width;
	this.height = height;
	this.xJustify = xJust;
	this.yJustify = yJust;
	this.addToScene = true;
}
AnimatedRectangle.prototype = new AnimatedObject();
AnimatedRectangle.prototype.constructor = AnimatedRectangle;
AnimatedRectangle.prototype.left = function() {
	var xPos;
	if (this.xJustify == 'center') {
		xPos = parseInt(this.x - this.width / 2);
	} else if (this.xJustify == 'left') {
		xPos = this.x;
	} else if (this.xJustify == 'right') {
		xPos = parseInt(this.x - this.width);
	}
	return xPos;
}
AnimatedRectangle.prototype.right = function() {
	var xPos;
	if (this.xJustify == 'center') {
		xPos = parseInt(this.x + this.width / 2);
	} else if (this.xJustify == 'left') {
		xPos = parseInt(this.x + this.width);
	} else if (this.xJustify == 'right') {
		xPos = this.x;
	}
	return xPos;
}
AnimatedRectangle.prototype.top = function() {
	var yPos;
	if (this.yJustify == 'center') {
		yPos = parseInt(this.y - this.height / 2);
	} else if (this.yJustify == 'top') {
		yPos = this.y;
	} else if (this.yJustify == 'bottom') {
		yPos = parseInt(this.y - this.height);;
	}
	return yPos;
}
AnimatedRectangle.prototype.bottom = function() {
	var yPos;
	if (this.yJustify == 'center') {
		yPos = parseInt(this.y + this.height / 2);
	} else if (this.yJustify == 'top') {
		yPos = parseInt(this.y + this.height);
	} else if (this.yJustify == 'bottom') {
		yPos = this.y;
	}
	return yPos;
}
AnimatedRectangle.prototype.centerX = function() {
	var xPos;
	if (this.xJustify == 'center') {
		xPos = this.x;
	} else if (this.xJustify == 'left') {
		xPos = parseInt(this.x + this.width / 2);
	} else if (this.xJustify == 'right') {
		xPos = parseInt(this.x - this.width / 2);
	}
	return xPos;
}
AnimatedRectangle.prototype.centerY = function() {
	var yPos;
	if (this.yJustify == 'center') {
		yPos = this.y;
	} else if (this.yJustify == 'top') {
		yPos = parseInt(this.y + this.height / 2);
	} else if (this.yJustify == 'bottom') {
		yPos = parseInt(this.y - this.height / 2);
	}
	return yPos;
}
AnimatedRectangle.prototype.draw = function(ctx) {
	var startX;
	var startY;
	var labelX;
	var labelY;
	if (this.xJustify.toUpperCase() == 'LEFT') {
		startX = this.x;
		labelX = this.x + this.width / 2;
	} else if (this.xJustify.toUpperCase() == 'CENTER') {
		startX = this.x - this.width / 2;
		labelX = this.x;
	} else if (this.xJustify.toUpperCase() == 'RIGHT') {
		startX = this.x - this.width;
		labelX = this.x - this.width / 2;
	}
	if (this.yJustify.toUpperCase() == 'TOP') {
		startY = this.y;
		labelY = this.y + this.height / 2;
	} else if (this.yJustify.toUpperCase() == 'CENTER') {
		startY = this.y - this.height / 2;
		labelY = this.y;
	} else if (this.yJustify.toUpperCase() == 'BOTTOM') {
		startY = this.y - this.height;
		labelY = this.y - this.height / 2;
	}
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.moveTo(startX, startY);
	ctx.lineTo(startX + this.width, startY);
	ctx.lineTo(startX + this.width, startY + this.height);
	ctx.lineTo(startX, startY + this.height);
	ctx.fillStyle = this.backgroundColor;
	ctx.fill();
	ctx.moveTo(startX, startY);
	ctx.lineTo(startX + this.width, startY);
	ctx.lineTo(startX + this.width, startY + this.height);
	ctx.lineTo(startX, startY + this.height);
	ctx.lineTo(startX, startY);
	ctx.strokeStyle = this.foregroundColor;
	ctx.lineWidth = 2;
	ctx.stroke();
	ctx.font = "10px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = this.foregroundColor;
	ctx.fillText(this.label, labelX, labelY);
	if (this.highlighted) {
		ctx.beginPath();
		ctx.globalAlpha = this.alpha;
		ctx.moveTo(startX, startY);
		ctx.lineTo(startX + this.width, startY);
		ctx.lineTo(startX + this.width, startY + this.height);
		ctx.lineTo(startX, startY + this.height);
		ctx.lineTo(startX, startY);
		ctx.fillStyle = this.highlightColor;
		ctx.fill();
	}
}
AnimatedRectangle.prototype.getArrowHeadPoint = function(fromX, fromY) {
	var xDelta;
	var yDelta;
	var xPos;
	var yPos;
	if (this.left() > fromX) {
		xDelta = this.left() - fromX;
		xPos = this.left();
	} else if (fromX > this.right()) {
		xDelta = fromX - this.right();
		xPos = this.right();
	} else {
		xDelta = 0;
		xPos = this.centerX();
	}
	if (this.bottom() > fromY) {
		yDelta = this.bottom() - fromY;
		yPos = this.top();
	} else if (fromY > this.top()) {
		yDelta = fromY - this.top();
		yPos = this.bottom();
	} else {
		yDelta = 0;
		yPos = this.centerY();
	}
	if (xDelta > yDelta) {
		yPos = this.centerY();
	} else {
		xPos = this.centerX();
	}
	return [xPos, yPos];
}
AnimatedRectangle.prototype.getArrowTailPoint = function(fromX, fromY) {
	return this.getArrowHeadPoint(fromX, fromY);
}