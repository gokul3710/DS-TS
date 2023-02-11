"use strict";
class Branch {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
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
            }
            else {
                if (!current.right) {
                    current.right = newBranch;
                    return;
                }
                current = current.right;
            }
        }
    }
    find(value) {
        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            }
            else if (value > current.value) {
                current = current.right;
            }
            else {
                return true;
            }
        }
        return false;
    }
    preOrderTraversal(node = this.root, values = []) {
        if (!node) return;
        console.log(node.value);
        this.preOrderTraversal(node.left, values);
        this.preOrderTraversal(node.right, values);
        return values;
    }

    inOrderTraversal(node = this.root, values = []) {
        if (!node) return;
        this.preOrderTraversal(node.left, values);
        console.log(node.value);
        this.preOrderTraversal(node.right, values);
        return values;
    }

    postOrderTraversal(node = this.root, values = []) {
        if (!node) return;
        this.preOrderTraversal(node.left, values);
        this.preOrderTraversal(node.right, values);
        console.log(node.value);
        return values;
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(node, value) {
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
    findMinValue(node) {
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }
}
let tree = new BinarySearchTree();
tree.insert(43);
tree.insert(343);
tree.insert(2);
tree.insert(4);
tree.delete(2);
// tree.delete(4)
console.log(tree.root);
tree.preOrderTraversal();
