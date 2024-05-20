import { Danger } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { LINKS } from 'src/data/links';

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex items-center justify-center size-32 rounded-full bg-primary/20 text-primary">
        <Danger size="48" />
      </div>
      <h2 className="mt-4 text-center text-3xl font-semibold text-black">Oops! Something Went Wrong</h2>
      <p className="right mt-2 w-full max-w-[505px] text-center text-lg font-medium text-[#292D32]">
        We’ll contact you as there is a technical error at this moment.
      </p>
      <Link
        to={LINKS.DASHBOARD}
        className="mt-8 flex h-[56px] w-full max-w-[570px] items-center justify-center rounded-[10px] bg-primary text-lg font-bold text-white"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
