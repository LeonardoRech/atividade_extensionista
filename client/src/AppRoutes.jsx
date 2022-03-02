import React, {useContext} from 'react'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DonorPage from './pages/Forms/Donor';
import StudentPage from './pages/Forms/Student';
import Admin from './pages/AdminPages/index'
import EletronicAdmin from './pages/AdminPages/Eletronics'
import StudentAdmin from './pages/AdminPages/Students'
import EletronicPage from './pages/EletronicPage/EletronicPage'

import { AuthContext, AuthProvider } from './contexts/auth';

export default function AppRoutes() {
    const Private = ({children}) => {
        const { authenticate, loading } = useContext(AuthContext)
        
        if(loading){
            return <div className="loading">Carregado...</div>
        }

        if(!authenticate){
            return <Navigate to="/login"/>
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/eletronics" element={<DonorPage/>}/>
                    <Route path="/student" element={<StudentPage />}/>
                    <Route path="/admin" element={<Private><Admin/></Private>}/>
                    <Route path="/eletronicsadmin" element={<Private><EletronicAdmin/></Private>}/>
                    <Route path="/studentsadmin" element={<Private><StudentAdmin/></Private>}/>
                    <Route path="/eletronics/:id" element={<EletronicPage />}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}