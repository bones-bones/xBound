import React from 'react';
import styled from '@emotion/styled';

const actions = ['bash', 'star', 'goods', 'plan'];

export const Menu = () => {
    return (
        <>
            {actions.map((entry) => {
                return (
                    <MenuItemDiv key={entry}>{entry.toUpperCase()}</MenuItemDiv>
                );
            })}
        </>
    );
};

const MenuItemDiv = styled.div({ backgroundColor: '#666611' });
