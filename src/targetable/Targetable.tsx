import React, { ReactChildren } from 'react';
import styled from '@emotion/styled';
import Star from '../images/star.png';

export const Targetable: React.FC<{ target?: boolean }> = ({
    children,
    target,
}) => {
    return (
        <>
            {target && (
                <StarDiv>
                    <img src={Star} height={'30px'} width={'30px'} />
                </StarDiv>
            )}
            {children}
        </>
    );
};

const StarDiv = styled.div({ top: '0px', right: '0px' });
