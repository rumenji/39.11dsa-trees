/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let toAdd = [this.root];
    let sum = 0;
    while(toAdd.length){
      let current = toAdd.pop();
      if(current !== null){
        sum += current.val;
        for(let child of current.children){
          toAdd.push(child);
        }
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let toCount = [this.root];
    let evens = [];
    while(toCount.length){
      let current = toCount.pop();
      if(current !== null){
          if(current.val % 2 === 0){
          evens.push(current.val);
          }
          for(let child of current.children){
            toCount.push(child);
          }
      }
    }
    return evens.length;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let toCompare = [this.root];
    let greater = [];
    while(toCompare.length){
      let current = toCompare.pop();
      if(current !== null){
        if(current.val > lowerBound){
          greater.push(current.val)
        }
        for(let child of current.children){
          toCompare.push(child);
        }
      } 
    }
    return greater.length;
  }
}

module.exports = { Tree, TreeNode };
