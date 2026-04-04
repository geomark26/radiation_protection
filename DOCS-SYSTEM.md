# Documentation System - How It Works

## Overview

The app serves educational content organized into chapters and subchapters, rendered as a documentation site with sidebar navigation, table of contents, breadcrumbs, and prev/next pagination.

## Architecture

```
ROUTES (lib/routes-config.ts)        <- Single source of truth for structure
    |
    v
contents/docs/getting-started/       <- MDX content files on disk
    |
    v
app/docs/[[...slug]]/page.tsx        <- Dynamic route that renders any doc page
    |
    v
Rendered page with sidebar, TOC, breadcrumbs, pagination
```

## 1. Route Configuration (`lib/routes-config.ts`)

The `ROUTES` array defines the entire site structure:

```ts
export const ROUTES: EachRoute[] = [
  { title: 'Introduction', href: '/introduction' },
  {
    title: 'Chapter Title',          // Displayed in sidebar as section header
    href: '/chapter-1',              // Path segment
    noLink: true,                    // Cannot be navigated directly (section header only)
    items: [                         // Subchapters (actual pages)
      { title: 'Subchapter Title', href: '/subchapter-slug' },
    ],
  },
];
```

**Key concepts:**
- `noLink: true` = chapter header (non-clickable, just a grouping label in the sidebar)
- Items without `noLink` = actual pages with content
- `href` values are path segments that get concatenated: `/chapter-1` + `/subchapter-slug` = `/chapter-1/subchapter-slug`

The `page_routes` export flattens the tree into a linear array of all navigable pages (skipping `noLink` entries). This flat array is used for pagination order and static generation.

## 2. Content Files (`contents/docs/getting-started/`)

Each page needs an `index.mdx` file at:
```
contents/docs/getting-started/{full-slug}/index.mdx
```

**Examples:**
| Route href | File path |
|---|---|
| `/introduction` | `contents/docs/getting-started/introduction/index.mdx` |
| `/chapter-1/eye-anatomy` | `contents/docs/getting-started/chapter-1/eye-anatomy/index.mdx` |
| `/chapter-2/oct` | `contents/docs/getting-started/chapter-2/oct/index.mdx` |

**MDX frontmatter format:**
```yaml
---
title: Page Title
description: A short description of the page content
---

Page content in markdown here...
```

- The `title` is rendered as an `<h1>` by the page component (don't repeat it in the body)
- The `description` is shown below the title and used for SEO metadata
- Content supports standard markdown plus custom MDX components (Note, Tabs, Stepper, etc.)

## 3. Content Loading (`lib/markdown.ts`)

The `getDocsForSlug(slug)` function:
1. Builds the file path: `contents/docs/getting-started/{slug}/index.mdx`
2. Reads the raw MDX file
3. Compiles it with `next-mdx-remote/rsc` using:
   - **Remark plugins:** GitHub Flavored Markdown
   - **Rehype plugins:** syntax highlighting (Prism), heading slugs, autolink headings, code titles
4. Returns `{ frontmatter, content }` where content is compiled JSX

## 4. Page Rendering (`app/docs/[[...slug]]/page.tsx`)

The `[[...slug]]` catch-all route handles all doc URLs:
- URL `/docs/chapter-1/eye-anatomy` → slug = `["chapter-1", "eye-anatomy"]`
- Joins to `"chapter-1/eye-anatomy"` and calls `getDocsForSlug()`
- Renders: breadcrumb + title + description + content + pagination + TOC sidebar

Static params are generated from `page_routes` so all pages are pre-rendered at build time.

## 5. Sidebar Navigation

**Components:** `DocsMenu` → `SubLink` (recursive)

- `DocsMenu` iterates `ROUTES` and passes each to `SubLink`
- `SubLink` handles the rendering logic:
  - `noLink: true` → renders as a non-clickable `<h4>` section header
  - Has `items` → wraps children in a `<Collapsible>` with expand/collapse chevron
  - Otherwise → renders as a clickable `<Anchor>` link
- Sections auto-expand when the current page is inside them
- Active page is highlighted

## 6. Pagination (Prev/Next)

Uses the flattened `page_routes` array:
- Finds current page index
- Returns `page_routes[index - 1]` (prev) and `page_routes[index + 1]` (next)
- Order matches the ROUTES definition order

## 7. Table of Contents (TOC)

- Extracts `##`, `###`, `####` headings from the raw MDX using regex
- Generates slugified anchor links (e.g., "Why This Matters" → `#why-this-matters`)
- Uses `IntersectionObserver` to highlight the currently visible heading during scroll
- Indentation varies by heading level

## 8. Breadcrumbs

Converts the slug array to a breadcrumb trail:
- `["chapter-1", "eye-anatomy"]` → `Docs > Chapter 1 > Eye Anatomy`
- Kebab-case is converted to Title Case
- Last segment is the current page (non-clickable)

## Adding New Content

To add a new chapter with subchapters:

1. **Update `lib/routes-config.ts`:**
   ```ts
   {
     title: 'My Chapter',
     href: '/my-chapter',
     noLink: true,
     items: [
       { title: 'First Topic', href: '/first-topic' },
       { title: 'Second Topic', href: '/second-topic' },
     ],
   }
   ```

2. **Create content files:**
   ```
   contents/docs/getting-started/my-chapter/first-topic/index.mdx
   contents/docs/getting-started/my-chapter/second-topic/index.mdx
   ```

3. **Each file needs frontmatter:**
   ```yaml
   ---
   title: First Topic
   description: Overview of the first topic
   ---

   Your markdown content here...
   ```

4. **Build to verify:** `npm run build`
