class treeNode {
    value: number | string;
    children: treeNode[];
  
    constructor(value: number | string) {
      this.value = value;
      this.children = [];
    }
  }
  
  class Tree {
    root: treeNode | null;
  
    constructor() {
      this.root = null;
    }
  
    insert(value: number | string, parentValue: number | string | null = null) {
      const newtreeNode = new treeNode(value);
  
      if (!this.root) {
        this.root = newtreeNode;
        return;
      }
  
      if (!parentValue) {
        this.root.children.push(newtreeNode);
        return;
      }
  
      let parent: treeNode | null = null;
      const queue = [this.root];
      while (queue.length) {
        const treeNode = queue.shift();
        if (treeNode) {
          if (treeNode.value === parentValue) {
            parent = treeNode;
            break;
          }
          queue.push(...treeNode.children);
        }
      }
  
      if (parent) {
        parent.children.push(newtreeNode);
      }
    }
  }
  