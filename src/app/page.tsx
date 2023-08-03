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
    <main className="px-8 w-full">
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
      <section className="flex flex-col md:mx-12 pt-12 pb-1">
        <h2 className="text-center text-xl uppercase font-extrabold mb-10">Recent blog posts</h2>
        <div className="md:grid md:grid-cols-3 mb-10 gap-12">
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
