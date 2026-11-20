import  {ReactRouterAppProvider} from '@toolpad/core/react-router';
import {NAVIGATION} from './components/navigation';
import AppRoutes from './routes/AppRoutes';
import { useState } from 'react';

function App() {
  const [session,setSession] = useState<any>(null)
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
  setSession({
    user: {
      name: demoUser.user.name,
      email: demoUser.user.email,
      image: demoUser.user.image,
    },
  });
};
  const authentication = {
    signIn :handleLogin,

    signOut: () =>{
      setSession(null);
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