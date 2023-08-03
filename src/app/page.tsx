'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import RecentPosts from "./recentposts";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar o botão quando o scroll passar de 400 pixels
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    // Faz o scroll suave para o topo do site
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <main className="px-8">
      <div 
        className="cursor-pointer bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80')] flex content-end flex-wrap w-full rounded-2xl" 
        style={{ height: 'calc(100vh - 6rem)' }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        <div className="text-slate-50 px-12 pb-12">
          <h3 className="text-2xl font-medium">Autor</h3>
          <h1 className="text-6xl font-extrabold py-2">Titulo do Post</h1>
          <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eos magni reiciendis ullam maiores id qui itaque, dolorem maxime suscipit laboriosam totam necessitatibus excepturi dignissimos, porro magnam nesciunt nisi officia.</p>
        </div>
      </div>
      <section className="flex flex-col mx-12 pt-12 pb-1">
        <h2 className="text-center text-xl uppercase font-extrabold mb-10">Recent blog posts</h2>
        <div className="grid grid-cols-3 mb-10 gap-12">
          <RecentPosts />
          <RecentPosts />
          <RecentPosts />
          <RecentPosts />
          <RecentPosts />
          <RecentPosts />
          <RecentPosts />
          <RecentPosts />
          <RecentPosts />

        </div>
        <button className="flex gap-1 items-center bg-gray-700 py-2 px-8 text-white font-medium rounded-full w-1/4 justify-center">
          <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" >
          <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
          <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z">
          <animateTransform attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="0.5s"
          repeatCount="indefinite"/>
          </path>
          </svg>
          Load More</button>
      </section>



      {showButton && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-slate-500 text-white rounded-full shadow-md hover:bg-slate-600 focus:outline-none"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/> </svg>
        </button>
      )}

      
    </main>
  )
}
