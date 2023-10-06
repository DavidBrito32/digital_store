import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutPage from '../layouts/Public';

import HomePage from '../pages/Home'
import ErrorPage from '../pages/ErrorPage';

const Ways = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LayoutPage />}>
                        <Route index element={<HomePage />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Ways;