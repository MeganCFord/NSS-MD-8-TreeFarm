// Unit Tests

// There should be a Plant function defined.
 
describe ("Plant", function() {
  it("should exist", function(){
    expect(Plant).toBeDefined();
  });
// There should be a function named increaseHeight on the prototype of Plant.
  describe("increaseHeight", function(){
    it("should exist", function(){
      expect(Plant.increaseHeight).toBeDefined();
    });
  });
// There should be a height property on Plant.
  describe("height property", function(){
    it("should exist", function(){
      expect(Plant.height).toBeDefined();
    });
  });
// There should be a function named decreaseHeight on the prototype of Plant.
  describe("decreaseHeight", function(){
    it("should exist", function(){
      expect(Plant.prototype.decreaseHeight).toBeDefined();
    });
  });
  describe("increase height", function(){
    it("should exist", function(){
      expect(Plant.prototype.increaseHeight).toBeDefined();
    })
  })
})


// There should be a Tree function defined.
describe ("Tree", function() {
  it("should exist", function(){
    expect(Tree).toBeDefined();
  });

  //There should be a property called branches on Tree. 
  describe("branches", function(){
    it("should exist", function(){
      expect(Tree.branches).toBeDefined();
    })
  })
// There should be a function named grow on the prototype of Tree.
  describe("grow", function(){
    it("should exist", function(){
      expect(Tree.grow).toBeDefined();
    });
  });
// There should be a function named trim on the prototype of Tree.
  describe("trim", function() {
    it("should exist", function(){
      expect(Tree.prototype.trim).toBeDefined();
      
    })
  })
})


// When you invoke the trim method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. PearTree.trim(2))
// When you invoke the trim method on Tree, the values of the branches property should be decreased by one.
// When you invoke the grow method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument (e.g. PearTree.grow(2))
