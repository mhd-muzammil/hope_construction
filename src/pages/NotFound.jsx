import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found | Hope Construction"
        description="The page you're looking for doesn't exist."
        canonical="/404"
        noindex={true}
      />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
        <div className="text-center max-w-lg">
          <h1 className="text-9xl font-black text-primary font-heading tracking-tighter">
            404
          </h1>
          <h2 className="text-3xl font-bold text-dark mt-4 font-heading uppercase">
            Page Not Found
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="mt-8 inline-flex items-center justify-center bg-dark text-white font-bold uppercase tracking-wide px-8 py-4 hover:bg-primary hover:text-dark transition-colors duration-300 font-heading"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;
