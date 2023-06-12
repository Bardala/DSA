var cloneGraph = function (node) {
    if (!node) return [];
    let map = new Array(null).fill(101);
    let clone = new Node(node.val);
    dfs(node, clone);
    return clone;

    function dfs(head, clone) {
        map[head.val] = clone;

        for (let n of head.neighbors) {
            if (!map[n?.val]) {
                let newNode = new Node(n.val);
                clone.neighbors.push(newNode);
                dfs(n, newNode);
            } else {
                clone.neighbors.push(map[n?.val]);
            }
        }
    }
};
