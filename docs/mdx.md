---
id: mdx
title: Powered by MDX
---

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}> {children} </span> );

<Highlight color="#F7B962"> <b>Note:</b> Docusaurus You can write JSX and use React components within your Markdown thanks to You can write JSX and use React components within your Markdown thanks to You can write JSX and use React components within your Markdown thanks to  green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

```jsx
console.log('Every repo must come with a mascot.');
```


```jsx {3}
function HighlightSomeText(highlight) {
  if (highlight) {
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}
```

### this is a comment and hopefully will not apear */

:::caution Note
note important tip caution warning
:::

I can write **Markdown** alongside my _JSX_!
