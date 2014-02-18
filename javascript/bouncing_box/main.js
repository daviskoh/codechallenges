// Frame
  // has height & width provided or default
// Box
  // bounces around Frame
    // box moves inside Frame until
      // it hits border
  // replicates itself when clicked
  // inherits traits of 'parent' box

window.onload = function() {
  console.log('Loaded JS');

  function Frame(width, height) {
    this.element = document.getElementById('frame');
    
    if (width && height) {
      this.width = width;
      this.height = height;
    } else {
      this.width = 500;
      this.height = 500;
    }

    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';

    frame = this;
    new Box();
  }

  function Box(marginLeft, marginTop) {
    this.length = 50;
    this.leftIncrement = Math.floor(Math.random() * (11) - 5);
    this.topIncrement = Math.floor(Math.random() * (11) - 5);
    
    if (marginLeft && marginTop) {
      this.marginLeft = marginLeft;
      this.marginTop = marginTop;
    } else {
      // container center is half of frame minus half of box
      this.marginLeft = (frame.width / 2) - (this.length / 2);
      this.marginTop = (frame.height / 2) - (this.length / 2);
    }

    // create element in memory
    this.element = document.createElement('div');
    this.element.className = 'box';

    // size box
    this.element.style.width = this.element.style.height = this.length + 'px';

    // position box
    this.element.style.marginLeft = this.marginLeft + 'px';
    this.element.style.marginTop = this.marginTop + 'px';

    // upon instantiation render box inside frame
    console.log('Appending new Box');
    frame.element.appendChild(this.element);
    
    var self = this;
    setInterval(function() { self.move(); }, 50);

    this.element.addEventListener('click', function() {
      console.log('box clicked');
      new Box(self.marginLeft, self.marginTop);
    })
  }
  Box.prototype.move = function() {
    // toggle direction when box hits border
    // border is effectively width/height of frame - width/height of box
    if (this.marginLeft >= (frame.width - this.length) || this.marginLeft <= 0) this.leftIncrement *= -1;
    if (this.marginTop >= (frame.height - this.length) || this.marginTop <= 0) this.topIncrement *= -1;

    // increment box margins
    this.marginLeft += this.leftIncrement;
    this.marginTop -= this.topIncrement;

    // render changes
    this.element.style.marginLeft = this.marginLeft + 'px';
    this.element.style.marginTop = this.marginTop + 'px';
  }

  var frame = new Frame();
}
