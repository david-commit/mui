import LeftSideBar from '@/components/LeftSideBar';

const page = () => {
  return (
    <div className='w-full h-full justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-ful flex relative'>
        <LeftSideBar />
      </div>
    </div>
  );
};

export default page;
