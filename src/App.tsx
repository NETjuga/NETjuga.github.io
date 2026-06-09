import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import PortfolioPage from './pages/PortfolioPage';
import WorkingOnPage from './pages/WorkingOnPage';
import UpToPage from './pages/UpToPage';
import Homepage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/working-on" element={<WorkingOnPage />} />
        <Route path="/up-to" element={<UpToPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;