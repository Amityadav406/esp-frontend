import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 bg-white w-full">
      <div className="text-center">
        <div className="inline-flex rounded-fullp-4">
          <div className="rounded-full p-4 ">
            <img
              src="/images/notFound.gif"
              className="lg:max-w-[600px] "
              alt="not-found"
            />
          </div>
        </div>
        <h1 className="lg:heading-2 font-bold heading-3  text-slate-800 ">
          404 - Page not found
        </h1>
        <p className="text-slate-600 mt-5 lg:text-lg">
          The page you are looking for doesn&apos;t exist or <br />
          has been removed.
        </p>
        <Link to="/" className="my-6 mx-auto w-fit btn btn-black px-12">
          Back to home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
