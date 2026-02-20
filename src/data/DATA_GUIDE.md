# Content Edit Guide

This guide explains where to edit content for your portfolio.

## Quick Reference

| Content | File | What to edit |
|---------|------|--------------|
| **Name, intro, tagline** | `src/constants/index.js` | `aboutMe` object |
| **Resume link** | `src/constants/index.js` | `resumeLink` |
| **Navigation links** | `src/constants/index.js` | `navLinks` array |
| **Projects** | `src/constants/index.js` | `projects` array |
| **Education** | `src/constants/index.js` | `educationList` array |
| **Work experience** | `src/constants/index.js` | `experiences` array |
| **Skills** | `src/constants/index.js` | `skills` array |
| **Blog posts** | `src/constants/index.js` | `blogPosts` array |
| **Achievements** | `src/constants/index.js` | `achievements` array |
| **Social links** | `src/constants/index.js` | `socialMedia` array |

## Project structure (projects array)

Each project needs:
- `id` - unique (e.g. "project-1")
- `title` - project name
- `content` - short description
- `image` - import from assets
- `duration` - e.g. "August 2024 - Present"
- `stack` - array of { id, icon, name }
- `github`, `link` - optional URLs
- `details` - array for project detail page (headings, paragraphs, images)

## Blog structure (blogPosts array)

Each post needs:
- `id` - unique
- `title` - post title
- `link` - URL to full post
- `date` - display date
- `image` - thumbnail URL
- `tags` - array of { id, name }
