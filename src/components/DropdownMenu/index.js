import React, { useState } from 'react';
import {
    MdMoreHoriz,
    MdEdit,
    MdDeleteForever,
    MdRemoveRedEye,
} from 'react-icons/md';

import { Container, ActionButton, OptionList, Option } from './styles';

export default function DropdownMenu({ inPackages, openModalFunction, pack }) {
    const [visible, setVisible] = useState(false);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    return (
        <Container>
            <ActionButton onClick={handleToggleVisible}>
                <MdMoreHoriz color="#fff" size={20} />
            </ActionButton>

            <OptionList visible={visible} onMouseLeave={handleToggleVisible}>
                <Option>
                    <MdEdit color="#4D85EE" />
                    <button type="button">Editar</button>
                </Option>

                <Option>
                    <MdDeleteForever color="#DE3B3B" />
                    <button type="button">Excluir</button>
                </Option>

                {inPackages && (
                    <Option>
                        <MdRemoveRedEye color="#7D40E7" />
                        <button
                            onClick={() => openModalFunction(pack)}
                            type="button"
                        >
                            Visualizar
                        </button>
                    </Option>
                )}
            </OptionList>
        </Container>
    );
}
