var wrapper = document.body;
var stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12]
var elements = [];

function stringer(value) {
  var that = this;
  this.value = value;
  this.ele = document.createElement("div");
  this.ele.classList.add("style");
  this.valEle = document.createElement("div");
  //VALUE + SPECIAL STATEMENT
  if(this.value < 10){
    this.valEle.innerHTML = "The value is " + this.value + " and is less than 10";
  }
  else if (this.value == 15){
    this.valEle.innerHTML = "The value is " + this.value + " and is exactly 15";
  }
  else if (this.value.length > 5){
    this.valEle.innerHTML = "The value is " + this.value + " and character length is more than 5";
  }
  else{
  this.valEle.innerHTML = "The value is " + this.value + " and is normal";
  }
  //CLICK
  this.ele.addEventListener("click", function(){
    that.changeColor();
  })  

  this.ele.appendChild(this.valEle);
  wrapper.appendChild(this.ele);
}
//COLOR CHANGE
stringer.prototype.changeColor = function () {
  this.ele.style.color="blue";
};

for (var i = 0; i < stringers.length; i++) {
  elements.push(new stringer(stringers[i]));
}