class TrieNode {
    children: Map<string, TrieNode>;
    endOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char)!;
        }
        current.endOfWord = true;
    }

    search(word: string): boolean {
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char)) {
                return false;
            }
            current = current.children.get(char)!;
        }
        return current.endOfWord;
    }

    startsWith(prefix: string): boolean {
        let current = this.root;
        for (const char of prefix) {
            if (!current.children.has(char)) {
                return false;
            }
            current = current.children.get(char)!;
        }
        return true;
    }
}
