import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes, } from 'react-router-dom';
import './components/baseStyle/base.scss'
import Header from './components/baseElement/header/Header.jsx';
import Footer from './components/baseElement/footer/Footer.jsx';
import Index from './components/path/index/index.jsx'
import Sight from './components/path/sight/sight.jsx'
import Contact from './components/path/contact/contact.jsx';
import Card from './components/path/card/card.jsx';
import NotFountPage from './components/path/notFound/NotFoundPage.jsx';

const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient} >
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sight' element={<Sight />} />
          <Route path='/sight/card/:id' element={<Card />} />
          <Route path='*' element={<NotFountPage />} />
        </Routes>
        <Footer />
      </>
    </QueryClientProvider>
  );
}

export default App;