import { Fragment } from 'react';
import 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';


function App() {
    const location = useLocation();

    return (
        <>
        {location.pathname === '/' ? <HomePage/> : (
            <Fragment>
            <NavBar />
            <Container style={{marginTop: '7em'}}>
                <Outlet />
            </Container>
        </Fragment>
        )}
        </>
    )
}

export default observer(App)
