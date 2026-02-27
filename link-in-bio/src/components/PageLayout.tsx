import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PageLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col relative overflow-hidden bg-gradient-to-b from-zinc-900 via-gray-800 to-zinc-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-[10%] left-0 w-[70%] max-w-[280px] h-[280px] bg-red-600/25 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-0 w-[65%] max-w-[260px] h-[260px] bg-blue-600/25 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[320px] h-[320px] bg-gradient-to-br from-red-600/10 to-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {!isHome && (
        <Link
          to="/"
          className="fixed top-4 left-4 z-20 flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium bg-black/30 backdrop-blur-sm rounded-full pl-3 pr-4 py-2 border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Inicio
        </Link>
      )}

      <div className="relative z-10 flex-1">
        <Outlet />
      </div>
    </div>
  );
}
