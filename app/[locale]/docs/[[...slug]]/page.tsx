import DocsBreadcrumb from '@/components/docs-breadcrumb';
import Pagination from '@/components/pagination';
import Toc from '@/components/toc';
import { page_routes } from '@/lib/routes-config';
import { notFound } from 'next/navigation';
import { getDocsForSlug } from '@/lib/markdown';
import { Typography } from '@/components/typography';
import ChapterQuiz from '@/components/chapter-quiz';


const CHAPTER_QUIZ_PAGES: Record<string, number> = {
  'chapter-1/quiz': 1,
  'chapter-2/quiz': 2,
  'chapter-3/quiz': 3,
  'chapter-4/quiz': 4,
  'chapter-5/quiz': 5,
};

type PageProps = {
  params: Promise<{ slug: string[]; locale: string }>;
};

export default async function DocsPage(props: PageProps) {
  const params = await props.params;
  const { slug = [], locale } = params;

  const pathName = slug.join('/');

  const quizChapter = CHAPTER_QUIZ_PAGES[pathName];
  if (quizChapter) {
    return (
      <div className='flex items-start gap-10'>
        <div className='flex-[4.5] pt-10'>
          <DocsBreadcrumb paths={slug} />
          <ChapterQuiz chapter={quizChapter} />
        </div>
      </div>
    );
  }

  const res = await getDocsForSlug(pathName, locale);

  if (!res) notFound();

  return (
    <div className='flex items-start gap-10'>
      <div className='flex-[4.5] pt-10'>
        <DocsBreadcrumb paths={slug} />
        <Typography>
          <h1 className='text-3xl !-mt-0.5'>{res.frontmatter.title}</h1>
          <p className='-mt-4 text-muted-foreground text-[16.5px]'>
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
          <Pagination pathname={pathName} />
        </Typography>
      </div>
      <Toc path={pathName} />
    </div>
  );
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { slug = [], locale } = params;

  const pathName = slug.join('/');
  if (CHAPTER_QUIZ_PAGES[pathName]) return { title: 'Quiz' };
  const res = await getDocsForSlug(pathName, locale);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split('/').slice(1),
  }));
}
