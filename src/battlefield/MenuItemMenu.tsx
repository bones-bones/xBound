import React, { useState } from 'react';
import styled from '@emotion/styled';
const items = ['First', 'second person that', 'testing'];
export const MenuItemMenu: React.FC<{ text: string }> = (props) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Container>
            <MenuItemDiv tabIndex={1} onClick={() => setOpen(!open)}>
                {props.text}
            </MenuItemDiv>
            {open && (
                <ListMenu>
                    {items.map((entry) => (
                        <LineItem key={entry}>{entry}</LineItem>
                    ))}
                </ListMenu>
            )}
        </Container>
    );
};
const LineItem = styled.li({
    backgroundColor: '#FFA500',
    borderRadius: '5px',
    listStyle: 'none',
});
const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const ListMenu = styled.ul({
    color: 'white',
    zIndex: 1,
    position: 'absolute',
    height: '20px',
    marginLeft: '0px',
    paddingLeft: '0px',
    top: '60px',
});

const MenuItemDiv = styled.button({
    backgroundColor: '#FFA500',
    color: 'black',
    textDecoration: 'underline',
    fontWeight: 'bold',
    zIndex: 1,
    height: '6vh',
    display: 'flex',
    alignItems: 'center',
    width: '18vw',
    justifyContent: 'center',
    borderRadius: '10px',
    overflow: 'hidden',
    fontFamily: 'Fipps',

    border: '2px solid black',
    ':hover': {
        color: 'white',
        backgroundColor: 'darkred',
        border: '2px solid white',
    },
    ':focus': {
        color: 'white',
        backgroundColor: 'darkred',
        border: '2px solid white',
    },
});
