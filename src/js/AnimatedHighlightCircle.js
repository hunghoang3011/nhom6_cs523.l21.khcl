var AnimatedHighlightCircle = function(objectID, radius) {
	this.objectID = objectID;
	this.radius = radius;
	this.thickness = 3;
}
AnimatedHighlightCircle.prototype = new AnimatedObject();
AnimatedHighlightCircle.prototype.constructor = AnimatedHighlightCircle;
AnimatedHighlightCircle.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.arc(this.x, this.y, parseInt(this.radius) + parseInt(this.thickness), 0, 2 * Math.PI, false);
	ctx.strokeStyle = this.foregroundColor;
	ctx.lineWidth = this.thickness + 1;
	ctx.stroke();
}