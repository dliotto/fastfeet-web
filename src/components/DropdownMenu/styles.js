import styled from 'styled-components';

export const Container = styled.div``;
export const ActionButton = styled.button`
    background: none;
    border: 0;
    position: relative;
`;
export const OptionList = styled.ul`
    position: absolute;
    width: 110px;
    left: calc(84.6%);
    background: rgba(0, 0, 0, 2);
    border-radius: 4px;
    padding: 15px 5px;
    margin-top: 15px;
    display: ${props => (props.visible ? 'block' : 'none')};
    z-index: 2;

    &::before {
        content: '';
        position: absolute;
        left: calc(50% - 25px);
        top: -25px;
        width: 0;
        height: 0;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 25px solid rgba(0, 0, 0, 2);
    }
`;
export const Option = styled.li`
    text-align: left;
    margin: 5px;
    button {
        color: #fff;
        margin-left: 5px;
    }

    & + li {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
`;
