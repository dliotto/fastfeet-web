import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

import logo from '../../assets/fastfeet-logo2.png';

export default function Header() {
    const dispatch = useDispatch();

    const profile = useSelector(state => state.auth.user);

    function handleSignOut() {
        dispatch(signOut());
    }

    console.tron.log('Profile aba');
    console.tron.log(profile);

    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="FASTFEET" width={260} />
                    <Link to="/dashboard">DASHBOARD</Link>
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link onClick={handleSignOut}>Sair do sistema</Link>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
