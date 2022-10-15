// @ts-check
const codeBlockSnippets = require('./code-block-snippets');

// #region test-region
// This is to test including
// some region of
// the code inside
// the code snippet.
// #endregion test-region

test('basic', () => {
    let node = {
        type: 'paragraph',
        children: [{
            type: 'image',
            alt: 'code js',
            url: 'src/remark/code-block-snippets.test.js',
            title: 'Some title',
        }],
    };

    codeBlockSnippets.visitor(node);

    expect(node.type).toBe('code');
    expect(node.lang).toBe('js');
    expect(node.meta).toBe('title="Some title"');
    expect(node.value).not.toBeNull();
});

test('line-number', () => {
    let node = {
        type: 'paragraph',
        children: [{
            type: 'image',
            alt: 'code js',
            url: 'src/remark/code-block-snippets.test.js#L3',
            title: 'Some title',
        }],
    };

    codeBlockSnippets.visitor(node);

    expect(node.type).toBe('code');
    expect(node.lang).toBe('js');
    expect(node.meta).toBe('title="Some title"');
    expect(node.value.split("\n").length).toBe(1);
});

test('line-numbers', () => {
    let node = {
        type: 'paragraph',
        children: [{
            type: 'image',
            alt: 'code js',
            url: 'src/remark/code-block-snippets.test.js#L2-L4',
            title: 'Some title',
        }],
    };

    codeBlockSnippets.visitor(node);

    expect(node.type).toBe('code');
    expect(node.lang).toBe('js');
    expect(node.meta).toBe('title="Some title"');
    expect(node.value.split("\n").length).toBe(3);
});

test('region', () => {
    let node = {
        type: 'paragraph',
        children: [{
            type: 'image',
            alt: 'code js',
            url: 'src/remark/code-block-snippets.test.js#test-region',
            title: 'Some title',
        }],
    };

    codeBlockSnippets.visitor(node);

    expect(node.type).toBe('code');
    expect(node.lang).toBe('js');
    expect(node.meta).toBe('title="Some title"');
    expect(node.url.endsWith('L5-L8')).toBe(true);
    expect(node.value.split("\n").length).toBe(4);
});

test('invalid-file', () => {
    let node = {
        type: 'paragraph',
        children: [{
            type: 'image',
            alt: 'code js',
            url: 'src/remark/foobar.js',
            title: 'Some title',
        }],
    };

    expect(() => {codeBlockSnippets.visitor(node)}).toThrow('ENOENT: no such file or directory, open \'src/remark/foobar.js\'');
});

test('invalid-region', () => {
    let node = {
        type: 'paragraph',
        children: [{
            type: 'image',
            alt: 'code js',
            url: 'src/remark/code-block-snippets.test.js#some-nonexistent-region',
            title: 'Some title',
        }],
    };

    expect(() => {codeBlockSnippets.visitor(node)}).toThrow(ReferenceError);
});

test('invalid-line-numbers', () => {
    let node = {
        type: 'paragraph',
        children: [{
            type: 'image',
            alt: 'code js',
            url: 'src/remark/code-block-snippets.test.js#L2-L400',
            title: 'Some title',
        }],
    };

    expect(() => {codeBlockSnippets.visitor(node)}).toThrow(ReferenceError);
});

test('code-in-separate-paragraph', () => {
    let node = {
        type: 'paragraph',
        children: [{
                type: 'image',
                alt: 'code js',
                url: 'src/remark/code-block-snippets.test.js',
                title: 'Some title',
        }],
    };

    const textNode = {
        type: 'text',
        value: 'some-text',
    };

    node.children.push(textNode);
    codeBlockSnippets.visitor(node);
    expect(node.type).toBe('paragraph');
    node.children.pop();

    node.children = [textNode, ...node.children];
    codeBlockSnippets.visitor(node);
    expect(node.type).toBe('paragraph');

    node.children.push(textNode);
    codeBlockSnippets.visitor(node);
    expect(node.type).toBe('paragraph');
});
