import { Suspense, useState, lazy } from 'react';
import './App.css';
import Page1 from './components/Page1';
const Page2 = lazy(() => import('./components/Page2'));
const Page3 = lazy(() => import('./components/Page3'));

function App() {

  const [route, setRoute] = useState('page1');

  const onRouteChange = (route) => {
    setRoute(route)
  }
  
  if(route === 'page1'){
    return <Page1 onRouteChange={onRouteChange} />
  } 
  else if(route === 'page2') {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Page2 onRouteChange={onRouteChange} />
        </Suspense>
      </div>
    );
  } 
  else if(route === 'page3') {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Page3 onRouteChange={onRouteChange} />
        </Suspense>
      </div>
    );
  }
}

export default App;