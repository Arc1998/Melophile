import './App.css';
import router from './routes';
import { RouterProvider } from "react-router-dom";
import store from './store'
import {Provider} from 'react-redux'
function App() {
  return (
  <>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </>
  )
}

export default App;


 /* {
    isAuthenticated?
     <div>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
       Log Out
      </button>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    :
   <button onClick={() => loginWithRedirect()}>
    Log In
   </button>
  } */