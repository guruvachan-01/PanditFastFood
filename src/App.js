import { useState, useEffect } from 'react';
import Navbar      from './components/Navbar';
import Footer      from './components/Footer';
import HomePage    from './pages/HomePage';
import MenuPage    from './pages/MenuPage';
import ShopPage    from './pages/ShopPage';
import AboutPage   from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('Home');

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main>
        {activePage === 'Home'    && <HomePage    setActivePage={setActivePage} />}
        {activePage === 'Menu'    && <MenuPage />}
        {activePage === 'Shop'    && <ShopPage />}
        {activePage === 'About'   && <AboutPage />}
        {activePage === 'Contact' && <ContactPage />}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
