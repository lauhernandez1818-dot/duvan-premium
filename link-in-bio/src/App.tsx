import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { HomePage } from '@/pages/HomePage';
import { ComidaPage } from '@/pages/ComidaPage';
import { ComidaEspecialesPage } from '@/pages/ComidaEspecialesPage';
import { PostresPage } from '@/pages/PostresPage';
import { CateringPage } from '@/pages/CateringPage';
import { UbicacionPage } from '@/pages/UbicacionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/comida" element={<ComidaPage />} />
          <Route path="/comida-especiales" element={<ComidaEspecialesPage />} />
          <Route path="/postres" element={<PostresPage />} />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/ubicacion" element={<UbicacionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
