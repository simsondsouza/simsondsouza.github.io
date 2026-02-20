# Project Content Structure

Edit projects in `src/constants/index.js` → `projects` array.

## Each project object

```js
{
  id: "project-1",           // unique ID, used in URL
  title: "Project Name",
  content: "Short description (1-2 sentences)",
  image: importedImage,      // from assets
  duration: "Jan 2024 - Present",
  github: "https://...",     // optional
  link: "https://...",       // optional - demo or report
  stack: [
    { id: "1", icon: SiPython, name: "Python" },
  ],
  details: [ /* blocks below */ ]
}
```

## Detail blocks (details array)

| Type | Use for | Example |
|------|---------|---------|
| `heading` | Main section title | `{ type: "heading", content: "Overview" }` |
| `subheading` | Subsection | `{ type: "subheading", content: "Problem" }` |
| `paragraph` | Body text | `{ type: "paragraph", content: "Text..." }` or `content: ["Text with ", { type: "link", content: "link text", style: { href: "url" } }, " more."]` |
| `point` | Bullet list (comma-separated) | `{ type: "point", content: "Point 1, Point 2, Point 3" }` |
| `image` | Single image | `{ type: "image", src: img, alt: "...", caption: "Fig 1" }` |
| `mediaRow` | Side-by-side images/videos | `{ type: "mediaRow", content: [{ type: "image", src, alt, caption }, { type: "youtube", src: "embed url" }] }` |

Order blocks as you want them to appear. Headings and subheadings become clickable in the sidebar.
