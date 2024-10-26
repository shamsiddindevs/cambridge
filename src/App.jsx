import React from 'react'
import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout'
import { Home,About,Contact,Teacher,Nopage,Courses } from './page'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/*' element={<Nopage/>}/>
      </Route>
    )
  )

  return (
    <>
        <RouterProvider  router={ router}/>
    </>
  )
}

export default App