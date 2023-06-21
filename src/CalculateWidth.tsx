import { BinTreeNode } from "./TreeNode";

export function calculateWidth(input: BinTreeNode): number{
    if (!input || input === null)
        return 35; // default value for "root"
    return calculateWidthForNode(input);
}

function calculateWidthForNode(root: BinTreeNode): number{
    if (root.left && root.left !== null && root.right && root.right !== null) 
    {
        return calculateWidthForNode(root.left) + calculateWidthForNode(root.right) + 30; // 30 is leaving some space for the blank of boxes
    }
    else if ((!root.left ||root.left === null) && (root.right && root.right !== null))
    {
        return 22 + calculateWidthForNode(root.right) + 30; // 22 is size of empty blank
    }
    else if ((root.left && root.left !== null) && (!root.right || root.right === null))
    {
        return calculateWidthForNode(root.left) + 22 + 30;
    }
    else
    {
        // no child, return head value
        return 35;
    }
    
}
