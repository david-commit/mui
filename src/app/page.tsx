import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { HiEnvelope } from 'react-icons/hi2';
import { BsBell, BsBookmark, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter,
  },
  {
    title: 'Home',
    icon: BiHomeCircle,
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag,
  },
  {
    title: 'Notifications',
    icon: BsBell,
  },
  {
    title: 'Messages',
    icon: HiEnvelope,
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark,
  },
  {
    title: 'Profile',
    icon: BiUser,
  },
];

const page = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        <aside className='fixed w-72 flex flex-col h-screen space-y-4 my-4'>
          {NAVIGATION_ITEMS.map((item) => {
            return (
              <Link
                href={`/${item.title.toLocaleLowerCase()}`}
                key={item.title}
                className='hover:bg-white/10 text-l transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-full py-2 px-6'
              >
                <div>
                  <item.icon />
                </div>
                <div>{item.title !== 'Twitter' && item.title}</div>
              </Link>
            );
          })}
          <button className='rounded-full m-4 bg-twitterColor px-4 py-2 text-l text-center hover:bg-opacity-70 transition duration-200'>
            Tweet
          </button>
        </aside>
        <main></main>
        <aside className=''></aside>
      </div>
    </div>
  );
};

export default page;
