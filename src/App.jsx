import React from 'react';
import Terminal from './components/shared/Terminal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from './components/shared/Start';
import BirthdayWishPage from './components/shared/BirthdayWishPage';
import Final from './components/shared/Final';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/terminal" element={<Terminal />} />
                <Route path="/birthday-wish" element={<BirthdayWishPage />} />
                <Route path="/final" element={<Final />} />
            </Routes>
        </BrowserRouter>
       

    );
}

export default App;
