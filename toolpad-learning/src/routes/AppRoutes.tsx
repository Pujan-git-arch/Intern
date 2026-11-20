import {Routes, Route} from 'react-router';
import DashboardLayoutPage from '../layouts/DashboardLayout';

import Home from '../pages/home';
import Actors from '../pages/actors';
import Movies from '../pages/movies';
import Login from '../pages/login';

type AppRoutesProps = {
    onLogin: () => void;
    user:{
        

            email:string;
            password:string;
            name:string;
            image:string;

        
    }

};
export default function AppRoutes({onLogin,user}: AppRoutesProps) {
    return(
        <Routes>
            <Route path="login" element={<Login onLogin={onLogin} user={user} />} />
            <Route element={<DashboardLayoutPage />}>
                <Route index element={<Home />} />
                <Route path='movies' element={<Movies />} />
                <Route path='actors' element={<Actors />} />
            </Route>
        </Routes>
    )
}