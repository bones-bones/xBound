import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Battlefield } from './battlefield';
import { KeyOrder } from './action-components/KeyOrder';
import { KeyHold } from './action-components/KeyHold';
import { KeyTap } from './action-components/KeyTap';
import { Hold } from './action-components/Hold';
import { Tap } from './action-components/Tap';
import { Order } from './action-components/Order';
import { useDispatch } from 'react-redux';
import { actions } from './stats';

export const App = () => {
    const dispatch = useDispatch();
    setInterval(
        () => dispatch(actions.dealDamage({ target: 'car', value: 1 })),
        500
    );
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
                            RenderableComponent={Order}
                        />
                    }
                />
                <Route
                    path="/keyHold"
                    element={
                        <KeyHold
                            keyValue="left"
                            time={2000}
                            successCallback={() => console.log('good')}
                            failureCallback={() => console.log('bad')}
                            RenderableComponent={Hold}
                        />
                    }
                />
                <Route
                    path="/keyTap"
                    element={
                        <KeyTap
                            keyValue="a"
                            time={1000}
                            successCallback={() => console.log('good')}
                            failureCallback={() => console.log('bad')}
                            RenderableComponent={Tap}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
