import React from 'react';

type CallBack = ()=> void;

type EPositions = 'top' | 'left' | 'right' | 'bottom';

export default interface IDrawer{
    isOpen: boolean,
    children?: React.ReactNode,
    className?: string,
    onClose: CallBack,
    position: EPositions,
    removeWhenClose?: boolean 
};
