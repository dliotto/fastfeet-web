import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 600px;
    margin-left: 10px auto;

    form {
        display: flex;
        flex-direction: row;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid #000;
            border-radius: 4px;
            height: 33px;
            padding: 0 18px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
                margin-right: 15px;
            }
        }

        i {
            position: relative;
            top: 11px;
            left: 16px;
        }
    }
`;
