import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Battlefield } from './battlefield';
import { KeyOrder } from './action-components/KeyOrder';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Battlefield />} />
                <Route
                    path="/keyOrder"
                    element={
                        <KeyOrder
                            time={5000}
                            successCallback={() => alert('good')}
                            failureCallback={() => alert('bad')}
                            chain={[
                                'up',
                                'up',
                                'down',
                                'down',
                                'left',
                                'right',
                                'left',
                                'right',
                            ]}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
