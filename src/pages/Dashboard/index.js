import React, { useState } from 'react';
import Search from '~/components/Search';
import DropdownMenu from '~/components/DropdownMenu';

import { Container } from './styles';

export default function Dashboard() {
    const [arr, setArr] = useState([
        { id: 'valor1', visible: false },
        { id: 'valor2', visible: false },
    ]);

    function handleRequestOpen() {}

    return (
        <>
            <Container>
                <Search />

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Destinatário</th>
                                <th>Entregador</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arr.map(products => (
                                <tr key={products.id}>
                                    <td>{products.id}</td>
                                    <td>IDES</td>
                                    <td>IDES ENTRE</td>
                                    <td>IDES ENTRE CID</td>
                                    <td>IDES ENTRE CID ESTA</td>
                                    <td>IDES ENTRE CID STATU</td>
                                    <td>
                                        <DropdownMenu
                                            pack={products.id}
                                            inPackages
                                            openModalFunction={
                                                handleRequestOpen
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    );
}
