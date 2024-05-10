import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/Aboutus.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Splash from './pages/SplashTest.jsx'
import PostForm from './pages/PostForm.jsx'
import PostedBlog from './pages/PostedBlog.jsx'
import ReadBlog from './pages/ReadBlog.jsx'
import EditForm from './component/EditForm.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
        {
          path : '',
          element : <Splash />
        },
        {
          path : 'about',
          element : <About />
        },
        {
          path : 'signup',
          element : <Signup />
        },
        {
          path : 'login',
          element : <Login />
        },
        {
          path : 'home',
          element : <Home />
        },
        {
          path : 'editform/:postid',
          element : <EditForm />
        },
        {
          path : 'postedblog',
          element : <PostedBlog />
        }
        ,
        {
          path : 'readblog/:postid',
          element : <ReadBlog />
        }
      ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
