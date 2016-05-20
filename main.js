var vi = [];

function setup() {
	createCanvas(800, 750);
}

function mousePressed() {
	var v = createVector(mouseX, mouseY);
	vi.push(v);
}

function draw() {
	background(52, 73, 94);

	var rc = [];
	var uc = [];

	for (var i = 0; i < vi.length; i++) {
		uc.push(vi[i]);
	}

	rc.push(uc[0]);
	uc.splice(ui, 1);

	while (uc.length > 0) {
		var r = 100000;
		var ri;
		var ui;

		for (var i = 0; i < rc.length; i++) {
			for (var j = 0; j < uc.length; j++) {
				var v1 = rc[i];
				var v2 = uc[j];
				var d = dist(v1.x, v1.y, v2.x, v2.y);
				if (d < r) {
					r = d;
					ri = i;
					ui = j;
				}
			}
		}

		stroke(52+10, 152+10, 219+10)		
		strokeWeight(2);
		line(rc[ri].x, rc[ri].y, uc[ui].x, uc[ui].y);

		rc.push(uc[ui]);
		uc.splice(ui, 1);

	}

	for (var i = 0; i < vi.length; i++) {
		stroke(52+10, 152+10, 219+10);
		strokeWeight(2);
		fill(52, 152, 219, 100);
		ellipse(vi[i].x, vi[i].y, 40, 40);
	}
}	