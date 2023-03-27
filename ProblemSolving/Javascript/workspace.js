class Trie {
  constructor() {
    this.root = {}; // Initialize the root node as an empty object
  }

  insert(word) {
    let node = this.root; // Start at the root node
    for (let c of word) {
      // Iterate over each character in the word
      if (node[c] == null) node[c] = {}; // If the current node doesn't have a child with the current character, create a new object and add it to the current node
      node = node[c]; // Move to the child node with the current character
    }
    node.isWord = true; // Mark the end of the word
  }

  traverse(word) {
    let node = this.root; // Start at the root node
    for (let c of word) {
      // Iterate over each character in the word
      node = node[c]; // Move to the child node with the current character
      if (node == null) return null; // If there is no child node with the current character, return null
    }
    return node; // Return the last node in the traversal
  }

  search(word) {
    const node = this.traverse(word); // Traverse the trie to find the last node in the word
    return node != null && node.isWord === true; // Return true if the last node is marked as a word
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null; // Return true if there is at least one word in the trie that starts with this prefix
  }
}

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app")); // true

// explaination of the code
// https://www.youtube.com/watch?v=AXjmTQ8LEoI

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// class TrieNode {
//   constructor() {
//     this.children = {};
//     this.isEndOfWord = false;
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new TrieNode();
//   }

//   insert(word) {
//     let current = this.root;
//     // Traverse the trie from the root to the end of the word
//     for (let i = 0; i < word.length; i++) {
//       const ch = word[i];
//       // If the current node doesn't have a child with the current character,
//       // create a new node and add it to the current node's children
//       if (!current.children[ch]) {
//         current.children[ch] = new TrieNode();
//       }
//       // Move to the child node with the current character
//       current = current.children[ch];
//     }
//     // Mark the end of the word
//     current.isEndOfWord = true;
//   }

//   search(word) {
//     let current = this.root;
//     // Traverse the trie from the root to the end of the word
//     for (let i = 0; i < word.length; i++) {
//       const ch = word[i];
//       // If the current node doesn't have a child with the current character,
//       // the word is not in the trie
//       if (!current.children[ch]) {
//         return false;
//       }
//       // Move to the child node with the current character
//       current = current.children[ch];
//     }
//     // Return true if the end of the word is marked
//     return current.isEndOfWord;
//   }

//   startsWith(prefix) {
//     let current = this.root;
//     // Traverse the trie from the root to the end of the prefix
//     for (let i = 0; i < prefix.length; i++) {
//       const ch = prefix[i];
//       // If the current node doesn't have a child with the current character,
//       // there is no word in the trie that starts with this prefix
//       if (!current.children[ch]) {
//         return false;
//       }
//       // Move to the child node with the current character
//       current = current.children[ch];
//     }
//     // Return true since there is at least one word in the trie that starts with this prefix
//     return true;
//   }
// }
