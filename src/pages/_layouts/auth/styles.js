import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-90deg, #0f4c81, #0f6c81);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 315px;
    max-width: 315px;
    height: 350px;
    text-align: center;
    background: #fff;

    img {
        margin-top: 35px;
        width: 230px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        div {
            text-align: left;
            margin: 0 25px 10px;
            font-weight: bold;
            font-size: 12px;
        }

        input {
            border: 1px solid #ccc;
            box-shadow: inset 0 1px 3px #ddd;
            border-radius: 4px;
            height: 40px;
            padding: 0 15px;
            margin: 0 25px 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 8px 10px;
        }

        button {
            margin: 5px 25px 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 13px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.08, '#3b9eff')};
            }
        }

        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &::hover {
                opacity: 1;
            }
        }
    }
`;
