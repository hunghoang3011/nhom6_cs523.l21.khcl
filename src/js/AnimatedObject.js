function AnimatedObject() {
	this.init() ;
}

AnimatedObject.prototype.init = function() {
	this.foregroundColor = '#FF0000' ; 
	this.backgroundColor = '#00FF00' ;
	this.highlightColor = '#FF6347' ; 
	this.highlighted = false ; 
	this.highlightDiff = 3 ; 
	this.objectID = -1 ; 
	this.label = "" ; 
	this.x = 0 ; 
	this.y = 0 ; 
	this.alpha = 0 ; 
	this.labelColor = '#FF0000' ; 
	this.addToScene = false ; 
	this.animationMaxFrame = animationMaxFrame ; 
}


AnimatedObject.prototype.setLabel = function(label) {
	this.label = label ;
}


AnimatedObject.prototype.setForegroundColor = function(color) {
	this.foregroundColor = color ;
}


AnimatedObject.prototype.setBackgroundColor = function(color) {
	this.backgroundColor = color ;
}


AnimatedObject.prototype.setHighlightColor = function(color) {
	this.highlightColor = color ;
}


AnimatedObject.prototype.setHighlight = function(value) {
	this.highlighted = value ;
}


AnimatedObject.prototype.getHighlight = function() {
	return this.highlighted ;
}


AnimatedObject.prototype.pluseHighlight = function(framenum) {
	if(this.highlighted) {
		var alpha = 1.0 ;
		if(framenum <= this.animationMaxFrame/2) {
			alpha = (2.0 * framenum / this.animationMaxFrame) ;
		}
		else {
			alpha = 2 -  (2.0 * framenum / this.animationMaxFrame) ;
		}

		this.setAlpha(alpha) ;
	}
}


AnimatedObject.prototype.setAlpha = function(alpha) {
	this.alpha = alpha ;
}


AnimatedObject.prototype.getAlpha = function() {
	return this.alpha ;
}


AnimatedObject.prototype.getArrowHeadPoint = function(fromX, fromY) {
}


AnimatedObject.prototype.getArrowTailPoint = function(fromX, fromY) {
}
