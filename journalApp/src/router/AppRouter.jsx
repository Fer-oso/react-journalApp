import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { useSelector } from 'react-redux'
import { CheckingAuth } from '../auth/pages/components/CheckingAuth'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../auth/firebase/config'

export const AppRouter = () => {

    const {status} = useSelector(state=>state.authentication);

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth)

    },[])

    if (status === 'checking') {
        return <CheckingAuth/>
    }

    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path='/*' element={<JournalRoutes/>} />
        </Routes>

    )
}
