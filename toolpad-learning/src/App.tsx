import  {ReactRouterAppProvider} from '@toolpad/core/react-router';
import {NAVIGATION} from './components/navigation';
import AppRoutes from './routes/AppRoutes';

import { useDispatch, useSelector } from 'react-redux';
import {login,logout} from "./redux/actions/authActions";
import {type AppDispatch, type RootState } from './redux/store';

function App() {

 

  const session = useSelector(
    (state: RootState) => state.auth.session
  )
  const dispatch = useDispatch<AppDispatch>();
   console.log("Current session:", session);

 const demoUser = {
    user: {
      name: 'Pujan Subedi',
      email: 'hello@gmail.com',
      image:'',
      password:"123456"
      

    },
  }

  const handleLogin = () => {

    dispatch(
      login({
        user:{
          name: demoUser.user.name,
          email: demoUser.user.email,
          image: demoUser.user.image,
        }
      })
    )

};

  const authentication = {
    signIn :handleLogin,

    signOut: () =>{
      dispatch(logout());
    }
  }

  
  return(
    <ReactRouterAppProvider 
    navigation={NAVIGATION} 
    branding={{
      title: 'My DashApp',
      logo: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-qgR1hKltsTP-6GE2lnku67IT0fEMKMI1RFHkaz8o0C9bNiVIh5xp4cP&s=10" alt="Logo"  />,
      
    }}
    session={session}
    authentication={authentication}
    >    
      <AppRoutes onLogin={handleLogin} user={demoUser.user} />
    </ReactRouterAppProvider>

  );
  
};
export default App;