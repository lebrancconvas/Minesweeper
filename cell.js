function Cell(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.bee = true;
    this.revealed = true;
}

Cell.prototype.show = function() {
    rect(this.x, this.y, this.w, this.w);
}