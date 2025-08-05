import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import ProjectDetail from './pages/projectDetail/ProjectDetail';
import Feedback from './pages/feedback/Feedback';
import ImagesLibrary from './pages/imagesLibrary/ImagesLibrary';
import Notifications from './pages/notifications/Notifications';
import ExtraWork from './pages/extraWork/ExtraWork';
import './App.scss';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="app-content">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
            <Routes>
              <Route path="/" element={<ProjectDetail />} />
              <Route path="/project-detail" element={<ProjectDetail />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/images-library" element={<ImagesLibrary />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/extra-work" element={<ExtraWork />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;