import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Battlefield } from './battlefield';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Battlefield />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
