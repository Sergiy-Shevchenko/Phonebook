import {Outlet} from 'react-router-dom';
// import { Navigation } from './Navigation/Navigation';
// import { AuthNav } from './AuthNav/AuthNav';
// import { UserMenu } from './UserMenu/UserMenu';
import { AppBar } from './AppBar/AppBar';

const styled = {
    hed: {
        display: 'flex',
        backgroundColor: 'rgb(217, 218, 218)',
        justifyContent: 'space-around',
    }
}

export const Layout = () => {
    return (
        <div>
            <header style={styled.hed}>
           <AppBar/>
            </header>
            <main><Outlet/></main>
        </div>
    )
}