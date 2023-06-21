import { convertArrayToNode } from "./ConvertArrayToNode";
import { BinTreeNode } from "./TreeNode";

test('single root test', () => {
    expect(convertArrayToNode([1])).toMatchObject(({"id":1, "left":null, "right":null}));
});

test('one child null test', () => {
    expect(convertArrayToNode([1,null,[2]])).toMatchObject({"id":1, "left":null, "right":{"id":2, "left":null, "right":null}});
});

test('double children test', () => {
    var node = new BinTreeNode(1, new BinTreeNode(2, null, null), new BinTreeNode(3, null, null));
    expect(convertArrayToNode([1,[2],[3]])).toMatchObject(
        {"id":1, "left":{"id":2, "left":null, "right":null}, "right":{"id":3, "left":null, "right":null}}
    );
});


