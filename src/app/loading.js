// src/app/loading.js
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-50/80 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        {/* Animasi Bar Musik */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-12 bg-blue-600 rounded-full animate-[bounce_1s_infinite]"></div>
          <div className="w-3 h-16 bg-blue-500 rounded-full animate-[bounce_1.2s_infinite]"></div>
          <div className="w-3 h-10 bg-blue-400 rounded-full animate-[bounce_0.8s_infinite]"></div>
          <div className="w-3 h-14 bg-blue-300 rounded-full animate-[bounce_1.1s_infinite]"></div>
        </div>
        <h2 className="text-slate-800 font-bold text-lg animate-pulse">
          Menyiapkan Audio...
        </h2>
      </div>
    </div>
  );
}