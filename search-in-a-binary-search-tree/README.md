# Search in a Binary Search Tree

You are given the `root` of a binary search tree (BST) and an integer `val`.

Find the node in the BST that the node's value equals `val` and return the subtree rooted with that node. If such a node does not exist, return `null`.

 

**Example 1:**

![tree1](https://user-images.githubusercontent.com/51165242/236321540-f6565bb5-e048-4e92-bf76-66b726258349.jpg)


```
Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
```

**Example 2:**

![tree2](https://user-images.githubusercontent.com/51165242/236321566-d6a9aeee-98db-4def-b595-2896113e4e95.jpg)

```
Input: root = [4,2,7,1,3], val = 5
Output: []
```



**Constraints:**

- The number of nodes in the tree is in the range `[1, 5000]`.
- `1 <= Node.val <= 10^7`
- `root` is a binary search tree.
- `1 <= val <= 10^7`

 
