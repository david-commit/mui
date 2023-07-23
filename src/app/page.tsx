import LeftSideBar from '@/components/LeftSideBar';
import MainComponent from '@/components/mainComponent';
import RightSideBar from '@/components/RightSideBar';

const page = () => {
  return (
    <div className='w-full h-full justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-ful flex relative'>
        <LeftSideBar />
        <MainComponent />
        <RightSideBar />
      </div>
    </div>
  );
};

export default page;
