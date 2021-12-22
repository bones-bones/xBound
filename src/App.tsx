import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Battlefield } from './battlefield';
import { KeyOrder } from './action-components/KeyOrder';
import { KeyHold } from './action-components/KeyHold';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Battlefield />} />
                <Route
                    path="/keyOrder"
                    element={
                        <KeyOrder
                            time={10000}
                            successCallback={() => console.log('good')}
                            failureCallback={() => console.log('bad')}
                            chain={['up', 'down', 'left', 'right']}
                        />
                    }
                />
                <Route
                    path="/keyHold"
                    element={
                        <KeyHold
                            keyValue="left"
                            time={3000}
                            successCallback={() => console.log('good')}
                            failureCallback={() => console.log('bad')}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
