# i18n: Add Greek Language Support

## Summary

Add full internationalization to the radiation protection learning platform using `next-intl`, with locale-prefixed routes (`/en/...`, `/el/...`) and a navbar language switcher.

## Decisions

- **Library:** `next-intl` (App Router native)
- **Locales:** `en` (default), `el`
- **URL scheme:** Both locales prefixed — `/en/docs/...`, `/el/docs/...`
- **Default behavior:** `/` redirects to `/en`
- **UI strings:** Translated to Greek via JSON translation files
- **MDX content:** Greek placeholders (copies of English) for later translation
- **Quiz questions:** English only for both locales; quiz UI translated to Greek

## Routing & Middleware

### New directory structure

```
app/
  [locale]/
    layout.tsx
    page.tsx
    error.tsx
    not-found.tsx
    docs/
      layout.tsx
      [[...slug]]/
        page.tsx
    quiz/
      page.tsx
      questionsData.ts
```

### Middleware (`middleware.ts`)

- `next-intl` middleware handles locale detection from URL prefix
- Config: `locales: ['en', 'el']`, `defaultLocale: 'en'`
- `/` redirects to `/en`
- Unknown locales return 404

## Translation Files

### Structure

```
messages/
  en.json
  el.json
```

### Key namespaces

- `nav` — "Learn", "Quiz", language switcher label
- `home` — hero title, description, module card titles/descriptions, CTA buttons
- `quiz` — "Start Quiz", "Next", "Back", "Submit", "Quiz Results", result messages, "Retake Quiz", "Loading Questions..."
- `docs` — pagination labels ("Previous", "Next"), "On this page", "Table of Contents"
- `common` — shared strings ("Back to top")
- `metadata` — page titles, descriptions for SEO

All UI strings translated to Greek. Quiz questions remain English in both locales.

## MDX Content Organization

### Current

```
contents/docs/getting-started/{chapter}/{topic}.mdx
```

### New

```
contents/docs/en/getting-started/{chapter}/{topic}.mdx
contents/docs/el/getting-started/{chapter}/{topic}.mdx   (placeholder copies)
```

- `lib/markdown.ts` updated to read from locale-specific subfolder
- Greek MDX files are copies of English (user replaces content later)
- `routes-config.ts` stays locale-agnostic (same slugs); titles come from translation files

## Component Changes

### Language switcher

- Dropdown in navbar (next to theme toggle)
- Labels: "EN" / "EL"
- Preserves current path when switching locale

### Updated components

| Component | Change |
|-----------|--------|
| `navbar.tsx` | Add language switcher, translate nav links |
| `leftbar.tsx` (sidebar) | Module/chapter titles from translations |
| `quiz/page.tsx` | UI strings via `useTranslations('quiz')` |
| `[locale]/layout.tsx` | `<html lang={locale}>`, locale-aware metadata |
| `pagination.tsx` | "Previous"/"Next" from translations |
| `toc.tsx` | "On this page" from translations |
| Breadcrumbs | Labels from translations |

### No changes needed

- Theme system, MDX custom components (Note, Stepper, Tabs), Radix UI primitives — language-agnostic
