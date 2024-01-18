import Link from 'next/link';
import { BlogCard, CardProps } from './_components/card';
import Pagination from './_components/pagination';
import HeroSection from '@/components/hero/HeroSection';
import { heroSectionBlogBg } from '@/assets/svg';
import { getBlogs, getTags, getCategories } from './blogs-service-api';

const gridTemplate = 'grid-cols-[repeat(auto-fit,minmax(340px,1fr))]';

export default async function Blogs() {
  const blogs = await getBlogs();
  const categories = await getCategories();
  const tags = await getTags();
  return (
    <>
      <HeroSection title='Blogs' image={heroSectionBlogBg} />

      <main className='mx-auto mb-20 max-w-[1440px]'>
        <div className={`grid ${gridTemplate} gap-8`}>
          <div className={`col-span-2 grid ${gridTemplate} gap-6 p-6`}>
            {blogs.map(({ id, ...props }) => (
              <BlogCard {...props} key={id} />
            ))}
          </div>
          <div className='sticky top-6 mt-6 flex h-min flex-col gap-4 rounded-3xl bg-[#F7FAFC] p-8 '>
            <div className='flex h-14 items-center overflow-hidden rounded-xl bg-white pr-3 text-sm'>
              <input
                className='w-full py-4 pl-3 font-medium focus-visible:outline-none'
                placeholder='Search Here'
              />
              <SearchIcon />
            </div>
            <hr className='mt-2' />
            <div>
              <span className='mb-4 block text-lg font-bold'>Categories</span>
              <ul className='mb-2 mt-2 grid gap-3 text-sm text-[#2D3748]'>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link href={''}>{category.title}</Link>
                  </li>
                ))}
              </ul>
              <hr className='mb-5 mt-5' />
              <span className='mb-4 block text-lg font-bold'>Post Tag</span>
              <div className='flex flex-wrap gap-4'>
                {tags?.map(({ id, tag }) => (
                  <div
                    key={id}
                    className='rounded-full border border-[#E2E8F0] px-4 py-2 text-sm text-[#4A5568]'
                  >
                    <Link href={''}>{tag}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Pagination totalPages={5} />
        </div>
      </main>
    </>
  );
}

const SearchIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M5.1967 5.1967C6.60322 3.79018 8.51088 3 10.5 3C12.4891 3 14.3968 3.79018 15.8033 5.1967C17.2098 6.60322 18 8.51088 18 10.5C18 12.1528 17.4545 13.7493 16.4631 15.0489L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.0489 16.4631C13.7493 17.4545 12.1528 18 10.5 18C8.51088 18 6.60322 17.2098 5.1967 15.8033C3.79018 14.3968 3 12.4891 3 10.5C3 8.51088 3.79018 6.60322 5.1967 5.1967ZM10.5 5C9.04131 5 7.64236 5.57946 6.61091 6.61091C5.57946 7.64236 5 9.04131 5 10.5C5 11.9587 5.57946 13.3576 6.61091 14.3891C7.64236 15.4205 9.04131 16 10.5 16C11.9587 16 13.3576 15.4205 14.3891 14.3891C15.4205 13.3576 16 11.9587 16 10.5C16 9.04131 15.4205 7.64236 14.3891 6.61091C13.3576 5.57946 11.9587 5 10.5 5Z'
      fill='#1B1F3B'
      fill-opacity='0.4'
    />
  </svg>
);
