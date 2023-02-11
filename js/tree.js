"use strict";
class treeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    insert(value, parentValue = null) {
        const newtreeNode = new treeNode(value);
        if (!this.root) {
            this.root = newtreeNode;
            return;
        }
        if (!parentValue) {
            this.root.children.push(newtreeNode);
            return;
        }
        let parent = null;
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

    delete(value) {
        if (!this.root) return;
        if (this.root.value === value) {
            this.root = null;
            return;
        }
        let parent = null;
        let nodeToDelete = null;
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            if (node) {
                for (let i = 0; i < node.children.length; i++) {
                    if (node.children[i].value === value) {
                        parent = node;
                        nodeToDelete = node.children[i];
                        break;
                    }
                    queue.push(node.children[i]);
                }
            }
        }
        if (parent && nodeToDelete) {
            parent.children = parent.children.filter(
                (node) => node !== nodeToDelete
            );
        }
    }
    
}
