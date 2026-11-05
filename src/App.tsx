import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LightboxModal } from './components/LightboxModal';
import { SearchModal } from './components/SearchModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ScrollToTop } from './components/ScrollToTop';

// Public Pages
import { HomePage } from './pages/HomePage';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { HsePolicyPage } from './pages/HsePolicyPage';
import { QualityPolicyPage } from './pages/QualityPolicyPage';
import { EquipmentPage } from './pages/EquipmentPage';
import { ServicesPage } from './pages/ServicesPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ClientsPage } from './pages/ClientsPage';
import { NewsPage } from './pages/NewsPage';
import { CareerPage } from './pages/CareerPage';
import { ContactPage } from './pages/ContactPage';

// Admin CMS Portal Pages
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminProjectsPage } from './pages/admin/AdminProjectsPage';
import { AdminEquipmentPage } from './pages/admin/AdminEquipmentPage';
import { AdminLeadsPage } from './pages/admin/AdminLeadsPage';
import { AdminAuditPage } from './pages/admin/AdminAuditPage';

import type { DivisionItem, ProjectItem } from './data/topekData';

function ScrollToTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; src: string; title: string }>({
    isOpen: false,
    src: '',
    title: ''
  });
  const [selectedDivision, setSelectedDivision] = useState<DivisionItem | null>(null);

  const handleOpenContact = (initialService = '') => {
    setContactInitialService(initialService);
    setIsContactOpen(true);
  };

  const handleImageClick = (src: string, title: string) => {
    setLightbox({
      isOpen: true,
      src,
      title
    });
  };

  const handleProjectSelect = (project: ProjectItem) => {
    handleImageClick(project.image, project.title);
  };

  const handleSearchResult = (type: 'service' | 'project', item: any) => {
    if (type === 'service') {
      setSelectedDivision(item as DivisionItem);
      navigate('/services');
    } else {
      const proj = item as ProjectItem;
      handleImageClick(proj.image, proj.title);
      navigate('/projects');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#d62828] selection:text-white">
      <ScrollToTopOnNav />

      {/* Render Public TopBar and Navbar only for non-admin routes */}
      {!isAdminRoute && (
        <>
          <TopBar onRequestInfo={() => handleOpenContact()} />
          <Navbar
            onOpenSearch={() => setIsSearchOpen(true)}
            onRequestInfo={() => handleOpenContact()}
          />
        </>
      )}

      {/* Routing Table */}
      <main className="flex-1">
        <Routes>
          {/* Public Website Routes */}
          <Route
            path="/"
            element={
              <HomePage
                onImageClick={handleImageClick}
                onSelectDivision={(div) => setSelectedDivision(div)}
                onOpenContact={handleOpenContact}
                onProjectSelect={handleProjectSelect}
              />
            }
          />
          <Route
            path="/who-we-are"
            element={<WhoWeArePage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/hse-policy"
            element={<HsePolicyPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/quality-policy"
            element={<QualityPolicyPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/equipment"
            element={<EquipmentPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectDivision={(div) => setSelectedDivision(div)}
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route
            path="/certifications"
            element={<CertificationsPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                onImageClick={handleImageClick}
                onProjectSelect={handleProjectSelect}
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route
            path="/clients"
            element={<ClientsPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/news"
            element={<NewsPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/careers"
            element={<CareerPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />

          {/* Admin CMS Portal Routes */}
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/projects" element={<AdminProjectsPage />} />
          <Route path="/admin/equipment" element={<AdminEquipmentPage />} />
          <Route path="/admin/leads" element={<AdminLeadsPage />} />
          <Route path="/admin/audit-logs" element={<AdminAuditPage />} />

          {/* Catch-all fallback */}
          <Route
            path="*"
            element={
              <HomePage
                onImageClick={handleImageClick}
                onSelectDivision={(div) => setSelectedDivision(div)}
                onOpenContact={handleOpenContact}
                onProjectSelect={handleProjectSelect}
              />
            }
          />
        </Routes>
      </main>

      {/* Render Public Footer only on public routes */}
      {!isAdminRoute && <Footer />}

      {/* Floating Scroll to Top */}
      {!isAdminRoute && <ScrollToTop />}

      {/* Global Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={contactInitialService}
      />

      <LightboxModal
        isOpen={lightbox.isOpen}
        imageSrc={lightbox.src}
        imageTitle={lightbox.title}
        onClose={() => setLightbox({ isOpen: false, src: '', title: '' })}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSearchResult}
      />

      <ServiceDetailModal
        division={selectedDivision}
        onClose={() => setSelectedDivision(null)}
        onRequestQuote={(divTitle) => handleOpenContact(divTitle)}
      />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;
