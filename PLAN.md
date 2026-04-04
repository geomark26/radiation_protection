# Plan: Create Documentation from PDF

## Phase 1: Read & Understand
1. Read the PDF to identify all chapters, subchapters, and their content
2. Note where each figure appears and its caption/description

## Phase 2: Clean Up Existing Content
3. Delete all existing folders in `contents/docs/getting-started/`

## Phase 3: Create Folder Structure
4. Create chapter folders and subchapter folders matching the document structure:
   ```
   contents/docs/getting-started/
   ├── introduction/index.mdx
   ├── chapter-1/
   │   ├── subchapter-slug/index.mdx
   │   └── ...
   ├── chapter-2/
   │   └── ...
   └── references/index.mdx
   ```

## Phase 4: Write MDX Content
5. For each subchapter, create `index.mdx` with:
   - Frontmatter (`title`, `description`)
   - Clean markdown content
   - Images placed as `<img alt='Figure N: caption' src='/figures/N.png' />` with incrementing numbers in order of appearance

## Phase 5: Update Routes
6. Rewrite `lib/routes-config.ts` to match the new chapter/subchapter structure

## Phase 6: Verify
7. Run `npm run build` to confirm everything compiles and all pages generate correctly
