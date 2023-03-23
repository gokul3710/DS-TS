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

    prefix(pre: string): string[] {
        let values: string[] = []
        let stack: string[] = []
        let current = this.root;
        for (const char of pre) {
            if (!current.children.has(char)) {
                return [];
            }
            current = current.children.get(char)!;
        }
        console.log(current.children);
        for (const letter of current.children) {
            // console.log(letter[0]);
            values.push(this.String(current.children.get(letter[0])!, pre,letter[0]))
        }

        console.log(values);
        
        return values
    }

    String(node: TrieNode, str: string,letter: string): string  {
        str+=letter
        for(const letter of node.children){
            return this.String(node.children.get(letter[0])!,str,letter[0]) 
        }
        return str
    }
}

let trie = new Trie()
trie.insert("Gokul")
trie.insert("Gopal")
trie.insert("Gowri")
trie.insert("Gautham")
trie.prefix("Go")
