function ObjectManager() {
	this.Nodes = [];
	this.Edges = [];
	this.BackEdges = [];
	this.context = document.getElementById("drawing").getContext("2d"); // 画布
	this.framenum = 0;
	this.height = 1000;
	this.width = 2000;
	this.addCircleObject = function(objectID, label, radius) {
		if (this.Nodes[objectID] != null) {
			alert('circle object already exists!');
		} else {
			var newCircle = new AnimatedCircle(objectID, label, radius);
			this.Nodes[objectID] = newCircle;
		}
	}
	this.addHighlightCircleObject = function(objectID, radius) {
		if (this.Nodes[objectID] != null) {
			alert('highlight circle object already exists!');
		} else {
			var newCircle = new AnimatedHighlightCircle(objectID, radius);
			this.Nodes[objectID] = newCircle;
		}
	}
	this.addRectangleObject = function(objectID, label, width, height, xJust, yJust) {
		if (this.Nodes[objectID] != null) {
			alert('rectangle object already exists!');
		} else {
			var newRect = new AnimatedRectangle(objectID, label, width, height, xJust, yJust);
			this.Nodes[objectID] = newRect;
		}
	}
	this.addHighlightRectangleObject = function(objectID, width, height, xJust, yJust) {
		if (this.Nodes[objectID] != null) {
			alert('highlight rectangle object already exists!');
		} else {
			var newRect = new AnimatedHighlightRectangle(objectID, width, height, xJust, yJust);
			this.Nodes[objectID] = newRect;
		}
	}
	this.addPointerObject = function(objectID, label, length, direction) {
		if (this.Nodes[objectID] != null) {
			alert('pointer object already exists!');
		} else {
			var newPoint = new AnimatedPointer(objectID, label, length, direction);
			this.Nodes[objectID] = newPoint;
		}
	}
	this.addStateBoxObject = function(objectID, state, width, height) {
		if (this.Nodes[objectID] != null) {
			alert('state box object already exists!');
		} else {
			var newState = new StateBox(objectID, state, width, height);
			this.Nodes[objectID] = newState;
		}
	}
	this.addLabelObject = function(objectID, label) {
		if (this.Nodes[objectID] != null) {
			alert('label object already exists!');
		} else {
			var newLabel = new AnimatedLabel(objectID, label);
			this.Nodes[objectID] = newLabel;
		}
	}
	this.setState = function(objectID, state) {
		if (this.Nodes[objectID] == null) {
			alert('state box object do not exists!');
		} else {
			this.Nodes[objectID].setState(state);
		}
	}
	this.setLabel = function(objectID, label) {
		if (this.Nodes[objectID] == null) {
			alert('node do not exists!');
		} else {
			//alert('sl') ;
			this.Nodes[objectID].setLabel(label);
		}
	}
	this.setForegroundColor = function(objectID, color) {
		if (this.Nodes[objectID] == null) {
			alert('node do not exist!');
		} else {
			this.Nodes[objectID].setForegroundColor(color);
		}
	}
	this.setBackgroundColor = function(objectID, color) {
		if (this.Nodes[objectID] == null) {
			alert('node do not exist!');
		} else {
			this.Nodes[objectID].setBackgroundColor(color);
		}
	}
	this.setHighlightColor = function(objectID, color) {
		if (this.Nodes[objectID] == null) {
			alert('node do not exist!');
		} else {
			this.Nodes[objectID].setHighlightColor(color);
		}
	}
	this.setHighlight = function(objectID, value) {
		if (this.Nodes[objectID] == null) {
			alert('node do not exist!');
		} else {
			this.Nodes[objectID].setHighlight(value);
		}
	}
	this.setLineHighlight = function(fromObject, toObject, value) {
		if (this.Edges[fromObject] == null || this.Edges[fromObject] == undefined || this.BackEdges[toObject] == null || this.BackEdges[toObject] == undefined) {
			alert('node do not exist! cannot highlight');
		} else {
			for (var i = 0; i < this.Edges[fromObject].length; i++) {
				if (this.Edges[fromObject][i].Node2 == this.Nodes[toObject]) {
					this.Edges[fromObject][i].setHighlight(value);
				}
			}
		}
	}
	this.removeObject = function(objectID) {
		if (this.Nodes[objectID] == null) {} else {
			if (objectID == this.Nodes.length - 1) {
				this.Nodes.pop();
			} else {
				this.Nodes[objectID] = null;
			}
		}
	}
	this.connectEdge = function(fromObject, toObject, color, curve, directed, weight) {
		if (this.Nodes[fromObject] == null || this.Nodes[toObject] == null) {
			alert('do not exist!');
		} else {
			if (this.Edges[fromObject] == null || this.Edges[fromObject] == undefined) {
				this.Edges[fromObject] = [];
			}
			if (this.BackEdges[toObject] == null || this.BackEdges[toObject] == undefined) {
				this.BackEdges[toObject] = [];
			}
			var newLine = new AnimatedLine(this.Nodes[fromObject], this.Nodes[toObject], color, curve, directed, weight);
			this.Edges[fromObject].push(newLine);
			this.BackEdges[toObject].push(newLine);
		}
	}
	this.disConnectEdge = function(fromObject, toObject) {
		if (this.Edges[fromObject] == null || this.Edges[fromObject] == undefined || this.BackEdges[toObject] == null || this.BackEdges[toObject] == undefined) {
			alert('node do not exist! cannot disconnect');
		} else {
			for (var i = 0; i < this.Edges[fromObject].length; i++) {
				if (this.Edges[fromObject][i].Node2 == this.Nodes[toObject]) {
					if (i != this.Edges[fromObject].length) {
						this.Edges[fromObject][i] = this.Edges[fromObject][this.Edges[fromObject].length - 1];
					}
					this.Edges[fromObject].pop();
				}
			}
			for (var i = 0; i < this.BackEdges[toObject].length; i++) {
				if (this.BackEdges[toObject][i].Node1 == this.Nodes[fromObject]) {
					if (i != this.BackEdges[toObject].length) {
						this.BackEdges[toObject][i] = this.BackEdges[toObject][this.BackEdges[toObject].length - 1];
					}
					this.BackEdges[toObject].pop();
				}
			}
		}
	}
	this.draw = function() {
		this.context.clearRect(0, 0, this.width, this.height);
		for (var i = 0; i < this.Nodes.length; i++) {
			if (this.Nodes[i] != null) {
				if (this.Nodes[i].highlighted == false) {
					this.Nodes[i].draw(this.context);
				} else {
					this.Nodes[i].pluseHighlight(this.framenum);
					this.Nodes[i].draw(this.context);
				}
			}
		}
		for (var i = 0; i < this.Edges.length; i++) {
			if (this.Edges[i] != null) {
				for (var j = 0; j < this.Edges[i].length; j++) {
					if (this.Edges[i][j] != null && this.Edges[i][j] != undefined) {
						if (this.Edges[i][j].highlighted == false) {
							this.Edges[i][j].draw(this.context);
						} else {
							this.Edges[i][j].pluseHighlight(this.framenum);
							this.Edges[i][j].draw(this.context);
						}
					}
				}
			}
		}
	}
	this.setPosition = function(nodeID, newX, newY) {
		if (this.Nodes[nodeID] == null) {
			alert('do not exist!');
		} else {
			this.Nodes[nodeID].x = newX;
			this.Nodes[nodeID].y = newY;
		}
	}
	this.getPositionX = function(nodeID) {
		return this.Nodes[nodeID].x;
	}
	this.getPositionY = function(nodeID) {
		return this.Nodes[nodeID].y;
	}
}