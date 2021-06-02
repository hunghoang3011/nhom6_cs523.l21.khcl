var AnimatedLine = function(n1, n2, color, curve, directed, weight) {
	this.Node1 = n1;
	this.Node2 = n2;
	this.foregroundColor = color;
	this.curve = curve;
	this.directed = directed;
	this.weight = weight;
	this.arrowHeight = 8;
	this.arrowWidth = 4;
}
AnimatedLine.prototype = new AnimatedObject();
AnimatedLine.prototype.constructor = AnimatedLine;
AnimatedLine.prototype.drawArrow = function(ctx, controlX, controlY) {
	var endPoint = this.Node2.getArrowTailPoint(this.Node1.x, this.Node1.y);
	ctx.beginPath();
	var xVec = controlX - endPoint[0];
	var yVec = controlY - endPoint[1];
	var len = Math.sqrt(xVec * xVec + yVec * yVec);
	xVec = 1.0 * xVec / len;
	yVec = 1.0 * yVec / len;
	ctx.moveTo(endPoint[0], endPoint[1]);
	ctx.lineTo(endPoint[0] + xVec * this.arrowHeight - yVec * this.arrowWidth, endPoint[1] + yVec * this.arrowHeight + xVec * this.arrowWidth);
	ctx.lineTo(endPoint[0] + xVec * this.arrowHeight + yVec * this.arrowWidth, endPoint[1] + yVec * this.arrowHeight - xVec * this.arrowWidth);
	ctx.lineTo(endPoint[0], endPoint[1]);
	ctx.closePath();
	ctx.strokeStyle = this.foregroundColor;
	ctx.lineWidth = 1;
	ctx.stroke();
	ctx.fillStyle = this.foregroundColor;
	ctx.fill();
	if (this.highlighted) {
		ctx.beginPath();
		ctx.globalAlpha = this.alpha;
		ctx.moveTo(endPoint[0], endPoint[1]);
		ctx.lineTo(endPoint[0] + xVec * this.arrowHeight - yVec * this.arrowWidth, endPoint[1] + yVec * this.arrowHeight + xVec * this.arrowWidth);
		ctx.lineTo(endPoint[0] + xVec * this.arrowHeight + yVec * this.arrowWidth, endPoint[1] + yVec * this.arrowHeight - xVec * this.arrowWidth);
		ctx.lineTo(endPoint[0], endPoint[1]);
		ctx.closePath();
		ctx.fillStyle = this.highlightColor;
		ctx.fill();
	}
}
AnimatedLine.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	var startPoint = this.Node1.getArrowHeadPoint(this.Node2.x, this.Node2.y);
	var endPoint = this.Node2.getArrowTailPoint(this.Node1.x, this.Node1.y);
	var deltaX = endPoint[0] - startPoint[0];
	var deltaY = endPoint[1] - startPoint[1];
	var midX = (deltaX) / 2.0 + startPoint[0];
	var midY = (deltaY) / 2.0 + startPoint[1];
	var controlX = midX - deltaY * this.curve;
	var controlY = midY + deltaX * this.curve;
	ctx.moveTo(startPoint[0], startPoint[1]);
	ctx.quadraticCurveTo(controlX, controlY, endPoint[0], endPoint[1]);
	ctx.strokeStyle = this.foregroundColor;
	ctx.lineWidth = 2;
	ctx.stroke();
	if (this.highlighted) {
		ctx.beginPath();
		ctx.globalAlpha = this.alpha;
		ctx.moveTo(startPoint[0], startPoint[1]);
		ctx.quadraticCurveTo(controlX, controlY, endPoint[0], endPoint[1]);
		ctx.strokeStyle = this.highlightColor;
		ctx.lineWidth = 4;
		ctx.stroke();
	}
	var labelPosX = 0.25 * startPoint[0] + 0.5 * controlX + 0.25 * endPoint[0];
	var labelPosY = 0.25 * startPoint[1] + 0.5 * controlY + 0.25 * endPoint[1];
	var midLen = Math.sqrt(deltaY * deltaY + deltaX * deltaX);
	if (midLen != 0) {
		labelPosX += (-deltaY * (this.curve > 0 ? 1 : -1)) / midLen * 10;
		labelPosY += (deltaX * (this.curve > 0 ? 1 : -1)) / midLen * 10;
	}
	ctx.textAlign = 'center';
	ctx.font = '10px sans-serif';
	ctx.textBaseline = 'middle';
	ctx.fillStyle = this.foregroundColor;
	ctx.fillText(this.weight, labelPosX, labelPosY);
	if (this.directed) {
		this.drawArrow(ctx, controlX, controlY);
	}
}