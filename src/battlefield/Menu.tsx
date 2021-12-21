import React from 'react';
import styled from '@emotion/styled';
import { MenuItemMenu } from './MenuItemMenu';

const actions = ['🔨 crash', '✰ star', '📦 items', '💭 plan'];

export const Menu = () => {
    return (
        <MenuContainer>
            {actions.map((entry) => {
                return (
                    <MenuItemMenu
                        key={entry}
                        text={entry.toUpperCase()}
                    ></MenuItemMenu>
                );
            })}
        </MenuContainer>
    );
};

const MenuContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: '10vh',
    justifyContent: 'space-around',
});
