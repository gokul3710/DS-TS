class Branch {
  value: number;
  left: Branch | null;
  right: Branch | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: Branch | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newBranch = new Branch(value);

    if (!this.root) {
      this.root = newBranch;
      return;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newBranch;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newBranch;
          return;
        }
        current = current.right;
      }
    }
  }

  find(value: number): boolean {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }


  preOrderTraversal(node: Branch | null = this.root, values: number[] = []) {
    if (!node) return;

    console.log(node.value);
    this.preOrderTraversal(node.left, values);
    this.preOrderTraversal(node.right, values);

    return values;
  }

  delete(value: number): void {
    this.root = this.deleteNode(this.root, value);
  }

  private deleteNode(node: Branch | null, value: number): Branch | null {
    if (!node) {
      return null;
    }
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    }
    if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    }
    if (!node.left) {
      return node.right;
    }
    if (!node.right) {
      return node.left;
    }
    node.value = this.findMinValue(node.right);
    node.right = this.deleteNode(node.right, node.value);
    return node;
  }

  private findMinValue(node: Branch): number {
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }
}

let tree = new BinarySearchTree()
tree.insert(43)
tree.insert(343)
tree.insert(2)
tree.insert(4)
tree.delete(2)
// tree.delete(4)
  console.log(tree.root);
tree.preOrderTraversal()
