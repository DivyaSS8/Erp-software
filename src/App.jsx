import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

// Pages
import MainContent from './components/Pages/MainContent';
import FollowUpPage from './components/Pages/FollowUpPage';
import AnalyticsPage from './components/Pages/AnalyticsPage';

// Components
import AddClient from './components/AddClient';
import ClientTable from './components/ClientTable';

const App = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/followups" element={<FollowUpPage />} />
          <Route path="/products" element={<ClientTable />} />
          <Route path="/add-product" element={<AddClient />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
