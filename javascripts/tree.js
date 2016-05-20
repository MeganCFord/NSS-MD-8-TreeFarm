// Create a Plant function.
 
function Plant () {
  // Plant should have a property of height.
  this.height = 0;
  this.branchCounter = 0;
  
}

// The Plant prototype should have two methods on it: increaseHeight and decreaseHeight. Each method should accept an integer value as input.

Plant.prototype.increaseHeight = function (growth) {
// increaseHeight should increase the value of the height property by the amount passed in as an argument.
  this.height += growth;
  this.branchCounter += growth;
  // Each time the height of a tree increases by 10, the value of branch should increase by one.
   if (this.branchCounter >= 10) {
    this.branches += 1;
    this.branchCounter = 0;
  }
  return this;
}

Plant.prototype.decreaseHeight = function(trimming) {
// decreaseHeight should decrease the value of the height property by the amount passed in as an argument.
  this.height -= trimming;
  // When you invoke the trim method on Tree, the values of the branches property should be decreased by one.
  this.branches -= 1;
  return this;
}


// Create a Tree function.
function Tree () {
  // Tree should have a property of branches.
  this.branches = 0;
  this.grow = function(val) {
    this.increaseHeight(val);
  }
}
// Plant should be the prototype of Tree.
Tree.prototype = new Plant();


// There should be a function named grow on the prototype of Tree.
Tree.prototype.grow = function(val) {
  // When you invoke the grow method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument (e.g. PearTree.grow(2))
  this.increaseHeight(val);


}


// There should be a function named trim on the prototype of Tree.
Tree.prototype.trim = function(val) {
  // When you invoke the trim method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. PearTree.trim(2))
  this.decreaseHeight(val);
  
}



// Create a PearTree instance of Tree. var PearTree = new Tree();
var pear = new Tree();
// Create an OakTree instance of Tree.
var oak = new Tree();

var pearTreeDiv = document.getElementById("pearTreeDiv");
var pearStatus = function() {
 pearTreeDiv.innerHTML +=`<p>Total Growth: ${howManyTimesHaveIGrown}. The pear tree is now ${pear.height} inches tall and has ${pear.branches} branches.</p>`;
} 
var oakTreeDiv = document.getElementById("oakTreeDiv");
var oakStatus = function() {
  oakTreeDiv.innerHTML +=`<p>Total Growth: ${howManyTimesHaveIGrown}. The oak tree is now ${oak.height} inches tall and has ${oak.branches} branches.</p>`;
}

var howManyTimesHaveIGrown= 0;
// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.
var treesAreGrowing = setInterval(function() {
  howManyTimesHaveIGrown++;
  pear.grow(2);
  oak.grow(3);
  // Also output the current height of each tree and how many branches it has to the DOM.
  pearStatus();
  oakStatus();
  
  // Every tenth time the trees are grown, invoke the trim method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.
  if (howManyTimesHaveIGrown % 10 === 0) {
    pear.trim(1);
    oak.trim(2);
    console.log("TRIMMED" );
  } 
  
  // Stop growing the trees after they have grown 30 times.
  if (howManyTimesHaveIGrown === 30) {
    window.clearInterval(treesAreGrowing);
  }
}, 1000)



