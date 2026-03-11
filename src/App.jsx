import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import BackToTop from "./components/layout/BackToTop";

import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Project = lazy(() => import("./pages/Project"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Skeleton loader for Suspense fallback
const PageLoader = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white" aria-label="Loading content">
    <div className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
    <p className="mt-4 text-gray-500 font-heading tracking-widest text-sm uppercase">Loading...</p>
  </div>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            } />
            <Route path="/service" element={<Suspense fallback={<PageLoader />}><Service /></Suspense>} />
            <Route path="/project" element={<Suspense fallback={<PageLoader />}><Project /></Suspense>} />
            <Route path="/blog" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
            <Route path="/privacy-policy" element={<Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>} />
            <Route path="/terms-conditions" element={<Suspense fallback={<PageLoader />}><TermsConditions /></Suspense>} />
            <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
          </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
