var AnimatedLabel = function(objectID, label) {
	this.objectID = objectID;
	this.label = label;
}
AnimatedLabel.prototype = new AnimatedObject();
AnimatedLabel.prototype.constructor = AnimatedLabel;
AnimatedLabel.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.font = "10px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = this.foregroundColor;
	ctx.fillText(this.label, this.x, this.y);
}