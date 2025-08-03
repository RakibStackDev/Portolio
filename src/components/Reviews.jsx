import React from 'react';
import "aos/dist/aos.css";

const Reviews = () => {
  return (
    <div className="group relative w-[380px] " 
    data-aos="fade-down"
          data-aos-duration="1000">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="absolute right-6 top-6">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-indigo-500/10">
              <path d="M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C9.591 12.322 8.17 10.841 8.17 9c0-1.657 1.343-3 3-3s3.215.186 3.247.679zm5.498 0C20.945 7.773 21.5 9 21.5 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C15.091 12.322 13.67 10.841 13.67 9c0-1.657 1.343-3 3-3s3.215.186 3.245.679z" />
            </svg>
          </div>
          <div className="flex items-center gap-1">
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-amber-400">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-amber-400">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-amber-400">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-amber-400">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-amber-400">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div className="mt-4 space-y-2">
            <h3 className="text-xl font-semibold text-white"
                data-aos="fade-down"
          data-aos-duration="800">
              Outstanding Experience!
            </h3>
            <p className="text-slate-400"
            data-aos="fade-down"
          data-aos-duration="700">
              The attention to detail and premium quality exceeded my expectations.
              The customer service was exceptional, and the product arrived earlier
              than expected. I'm thoroughly impressed with every aspect of my
              purchase.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="group/avatar relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-75 blur transition-all duration-300 group-hover/avatar:opacity-100" />
              <div className="relative h-12 w-12 rounded-full bg-slate-950 ring-2 ring-slate-950">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-12 w-12 text-indigo-500">
                  <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white">Ameerah</h4>
              <p className="text-sm text-slate-400">Senior Developer</p>
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-1 rounded-full bg-indigo-500/10 px-3 py-1">
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-indigo-500">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
                <span className="text-xs font-medium text-indigo-500">Verified</span>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-slate-900/50 p-4">
              <div className="flex items-center gap-2">
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-indigo-500">
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
                <span className="text-sm font-medium text-white">12</span>
              </div>
              <p className="mt-1 text-xs text-slate-400">Purchases</p>
            </div>
            <div className="rounded-xl bg-slate-900/50 p-4">
              <div className="flex items-center gap-2">
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-indigo-500">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
                <span className="text-sm font-medium text-white">8</span>
              </div>
              <p className="mt-1 text-xs text-slate-400">Reviews</p>
            </div>
            <div className="rounded-xl bg-slate-900/50 p-4">
              <div className="flex items-center gap-2">
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-indigo-500">
                  <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
                <span className="text-sm font-medium text-white">45</span>
              </div>
              <p className="mt-1 text-xs text-slate-400">Helpful</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="rounded-lg bg-slate-900 p-2 text-slate-400 transition-colors hover:text-white">
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </button>
              <button className="rounded-lg bg-slate-900 p-2 text-slate-400 transition-colors hover:text-white">
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </button>
              <button className="rounded-lg bg-slate-900 p-2 text-slate-400 transition-colors hover:text-white">
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <span className="text-sm text-slate-400">Posted 2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
