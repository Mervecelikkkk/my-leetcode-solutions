index.js

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function generateTrees(n) {
  if (n === 0) return []; // eğer n = 0 ise hiç ağaç oluşturulamaz
  return generateTreesHelper(1, n); // BST'lerin oluşturulmasına yardımcı olan yardımcı fonksiyonu çağırın
}

function generateTreesHelper(start, end) {
  const result = [];

  // Başlangıç değeri end'den büyük olduğunda null değeri ekleme
  if (start > end) {
    result.push(null);
    return result;
  }

  // Kök düğümünü her bir olası değerle oluştur
  for (let i = start; i <= end; i++) {
    // Sol ve sağ alt ağaçlar için benzersiz BST yapılarını oluşturun
    const leftSubTrees = generateTreesHelper(start, i - 1);
    const rightSubTrees = generateTreesHelper(i + 1, end);

    // Sol ve sağ alt ağaçları birleştirin ve anahtar düğümüne bağlayın
    for (const leftSubTree of leftSubTrees) {
      for (const rightSubTree of rightSubTrees) {
        const root = new TreeNode(i);
        root.left = leftSubTree;
        root.right = rightSubTree;
        result.push(root);
      }
    }
  }

  return result; // tüm olası BST yapılarını içeren sonuç dizisini döndür
}

/* 
Time Complexity:

generateTrees() fonksiyonunun zaman karmaşıklığı, tüm olası BST yapılarının sayısına bağlıdır. Bu sayı, Catalan sayıları olarak bilinen bir diziye uyar. Catalan sayıları, n elemanlı bir BST'nin tüm olası yapılarının sayısını temsil eder ve formülü şu şekildedir:

C(0) = 1
C(n+1) = Sum(C(i)*C(n-i)), i=0 to n, n >= 0

Bu formül, generateTrees() fonksiyonunun zaman karmaşıklığını O(C(n)) yapar.

Space Complexity: O(C(n))

*/

