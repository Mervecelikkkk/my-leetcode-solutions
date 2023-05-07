
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {

    if (!root) {
        // Eğer root null ise, ağacın derinliği 0'dır.
        return 0;
    }
    const leftDepth = maxDepth(root.left); // Sol alt ağacın derinliğini hesapla
    const rightDepth = maxDepth(root.right); // Sağ alt ağacın derinliğini hesapla
    return Math.max(leftDepth, rightDepth) + 1; // Daha derin olan alt ağacın derinliğini döndür ve 1 ekleyerek root dahil et
};

// Time Complexity: O(n)
// Space Complexity: O(h)  h, ağacın yüksekliği (en uzun yoldaki düğümlerin sayısı) dir.
