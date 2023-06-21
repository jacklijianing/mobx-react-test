import { checkIDUnique } from "./CheckIDUnique";
import { BinTreeNode } from "./TreeNode";

test('a tree with duplicate IDs', () => {
    const root = new BinTreeNode(1,null,null);
    const leftChild = new BinTreeNode(2,null,null); 
    const rightChild = new BinTreeNode(3,null,null); 
    const leftChildleft = new BinTreeNode(1,null,null); // duplicate to the root!
    const leftChildright = new BinTreeNode(22,null,null); 
    leftChild.left = leftChildleft;
    leftChild.right = leftChildright;
    root.left = leftChild;
    root.right = rightChild;
    expect(checkIDUnique(root)).toBe(false);
    if (root.left != null && root.left.left != null)
        root.left.left.id = 21; // correct it
    expect(checkIDUnique(root)).toBe(true);
});