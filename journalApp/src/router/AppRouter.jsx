import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login, Register } from '../auth/pages'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path='/*' element={<JournalRoutes/>} />
        </Routes>

    )
}
