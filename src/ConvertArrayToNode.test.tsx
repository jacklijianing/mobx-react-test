import { convertArrayToNode } from "./ConvertArrayToNode";
import { BinTreeNode } from "./TreeNode";

import { readFileSync } from 'fs';

test('single root test', () => {
    var node = new BinTreeNode(1, null, null);
    expect(convertArrayToNode([1])).toStrictEqual(node);
});

test('one child null test', () => {
    var node = new BinTreeNode(1, null, new BinTreeNode(2, null, null));
    expect(convertArrayToNode([1,null,[2]])).toStrictEqual(node);
});

test('double children test', () => {
    var node = new BinTreeNode(1, new BinTreeNode(2, null, null), new BinTreeNode(3, null, null));
    expect(convertArrayToNode([1,[2],[3]])).toStrictEqual(node);
});


