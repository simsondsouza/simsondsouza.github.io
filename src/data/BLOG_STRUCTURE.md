# Blog Post Structure

Edit blog posts in `src/constants/index.js` → `blogPosts` array.

## Each post object

```js
{
  id: "post-1",
  slug: "my-post-url",        // used in /blog/my-post-url
  title: "Post Title",
  date: "Feb 20, 2025",
  image: "https://...",       // thumbnail for blog list
  tags: [{ id: "1", name: "AI" }],
  content: [ /* blocks - for full post on site */ ]
}
```

- **Internal post**: Include `slug` and `content`. User clicks → opens full post on your site.
- **External post**: Include `link` (URL). User clicks → opens external URL. No `content` needed.

## Content blocks (for internal posts)

| Type       | Example |
|------------|---------|
| `heading`  | `{ type: "heading", content: "Section Title" }` |
| `subheading` | `{ type: "subheading", content: "Subsection" }` |
| `paragraph` | `{ type: "paragraph", content: "Your text here." }` |
| `gif`      | `{ type: "gif", src: "https://...", alt: "description" }` |
| `image`    | `{ type: "image", src: "https://...", alt: "description" }` |
| `caption`  | `{ type: "caption", content: "Image caption" }` |
