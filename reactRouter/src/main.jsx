import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { getGithubData } from './components/github/Github.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,createRoutesFromElements,Route } from 'react-router-dom'


// const router= createBrowserRouter(
//   [
//     { path: '/', 
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>,
//       },
//       {
//         path: 'about',
//         element: <About/>,
//       },
//       {
//         path: 'contact',
//         element: <Contact/>,
//       },
//       {
//         path: 'user/:id',
//         element: <User/>,
      
//       },
//       {
//         path:'github',
//         element:<Github/>
//       }
//     ]
//   }
//   ]
// )
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:id" element={<User/>}/>
      <Route path="github" 
      loader={getGithubData}
      element={<Github/>}/>
    </Route>
  
)
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
   
  </React.StrictMode>,
);
