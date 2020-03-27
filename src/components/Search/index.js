import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function Search() {
    return (
        <Container>
            <Form>
                <i>
                    <MdSearch size={14} color="#eee" />
                </i>
                <Input name="name" placeholder="Buscar" />
            </Form>
        </Container>
    );
}
