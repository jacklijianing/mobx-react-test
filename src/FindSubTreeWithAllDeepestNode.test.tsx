import { FindSubTreeWithAllDeepestNode } from "./FindSubTreeWithAllDeepestNode";
import { BinTreeNode } from "./TreeNode";

test('single root test', () => {
    const root = new BinTreeNode(1,null,null);
    expect(FindSubTreeWithAllDeepestNode(root)).toStrictEqual(root);
});

test('one child null test', () => {
    const root = new BinTreeNode(1,null,null);
    const leftChild = new BinTreeNode(2,null,null); 
    root.left = leftChild;
    expect(FindSubTreeWithAllDeepestNode(root)).toStrictEqual(leftChild);
});


test('double same depth children test', () => {
    const root = new BinTreeNode(1,null,null);
    const leftChild = new BinTreeNode(2,null,null); 
    const rightChild = new BinTreeNode(3,null,null); 
    root.left = leftChild;
    root.right = rightChild;
    expect(FindSubTreeWithAllDeepestNode(root)).toStrictEqual(root);
});

test('double different depth children test', () => {
    const root = new BinTreeNode(1,null,null);
    const leftChild = new BinTreeNode(2,null,null); 
    const rightChild = new BinTreeNode(3,null,null); 
    const leftChildleft = new BinTreeNode(21,null,null); 
    const leftChildright = new BinTreeNode(22,null,null); 
    leftChild.left = leftChildleft;
    leftChild.right = leftChildright;
    root.left = leftChild;
    root.right = rightChild;
    expect(FindSubTreeWithAllDeepestNode(root)).toStrictEqual(leftChild);
});

test('double same depth children test with different structure', () => {
    // 1 has 2 and 3
    // 2 has 21 and 22, 21 depth is 2, 22 depth is 1
    // 21 has 221 as left
    // 3 has 31 as left, 31 depth is 2
    // 31 has 311 as left
    // 2 and 3 has same depth, so should return root
    const root = new BinTreeNode(1,null,null);
    const leftChild = new BinTreeNode(2,null,null); 
    const rightChild = new BinTreeNode(3,null,null); 
    const leftChildleft = new BinTreeNode(21,null,null); 
    const leftChildright = new BinTreeNode(22,null,null); 
    const leftChildrightChildleft = new BinTreeNode(221, null, null);
    const rightChildleft = new BinTreeNode(31,null,null); 
    const rightChildleftChildleft = new BinTreeNode(311,null,null); 
    rightChildleft.left = rightChildleftChildleft;
    leftChildright.left = leftChildrightChildleft;
    leftChild.left = leftChildleft;
    leftChild.right = leftChildright;
    rightChild.left = rightChildleft;
    root.left = leftChild;
    root.right = rightChild;
    expect(FindSubTreeWithAllDeepestNode(root)).toStrictEqual(root);
});