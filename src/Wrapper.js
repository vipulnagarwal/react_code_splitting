import React,{Suspense} from "react";

const Home = React.lazy(() => import('./Home'));
const Stuff = React.lazy(() => import('./Stuff'));
const Contact = React.lazy(() => import('./Contact'));

function Wrapper(props) {
  console.log(props.urlPath);
  debugger;
  const RenderComponent = () => {
    if (props.urlPath.indexOf('/contact') >= 0) {
      return (React.lazy(() => import('./Contact')));
    } else if (props.urlPath.indexOf('/stuff') >= 0) {
      return (React.lazy(() => import('./Stuff')));
    } else if (props.urlPath.indexOf('/home') >= 0) {
      return (React.lazy(() => import('./Home')));
    } else {
      return (React.lazy(() => import('./Home')));
    }
  }
  return (<>
  <Suspense fallback={<div>Loading components 1234567890-asdfghjklxcvbnm,1234567890...</div>}>
    {RenderComponent()}
  </Suspense>
  
  </>);
  }
 
export default Wrapper;