import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="w-full bg-gray-50/50 border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 text-sm text-gray-500 font-body">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i < items.length - 1 ? (
                <>
                  <Link 
                    to={item.url} 
                    className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
                  >
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className="text-gray-300 select-none">/</span>
                </>
              ) : (
                <span aria-current="page" className="text-gray-900 font-medium">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
