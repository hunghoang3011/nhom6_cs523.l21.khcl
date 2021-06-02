var AnimatedCircle = function(objectID, label, radius) {
    this.objectID = objectID;
    this.label = label;
    this.radius = radius;
    this.addToScene = true;
}


AnimatedCircle.prototype = new AnimatedObject();
AnimatedCircle.prototype.constructor = AnimatedCircle;


AnimatedCircle.prototype.draw = function(ctx) {
    ctx.beginPath();

    ctx.globalAlpha = 1.0;

    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.backgroundColor;
    ctx.fill();

    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = this.foregroundColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = "10px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.foregroundColor;
    ctx.fillText(this.label, this.x, this.y);

    if (this.highlighted) {
        ctx.beginPath();

        ctx.globalAlpha = this.alpha;

        ctx.arc(this.x, this.y, parseInt(this.radius), 0, 2 * Math.PI, false);
        ctx.fillStyle = this.highlightColor;
        ctx.fill();
    }
}


AnimatedCircle.prototype.getArrowHeadPoint = function(fromX, fromY) {
    var xVec = parseInt(this.x - fromX);
    var yVec = parseInt(this.y - fromY);
    var len = Math.sqrt(xVec * xVec + yVec * yVec);
    var deltaX = this.radius * (xVec / len);
    var deltaY = this.radius * (yVec / len);
    return [this.x - deltaX, this.y - deltaY];
}


AnimatedCircle.prototype.getArrowTailPoint = function(fromX, fromY) {
    return this.getArrowHeadPoint(fromX, fromY);
}