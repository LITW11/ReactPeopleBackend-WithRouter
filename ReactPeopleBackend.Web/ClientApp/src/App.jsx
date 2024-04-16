import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PeopleTable from './PeopleTable';
import EditPersonPage from './EditPersonPage';
import Layout from './Layout';


const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<PeopleTable />} />
                <Route path='/editperson/:id' element={<EditPersonPage />} />
            </Routes>
        </Layout>
    )
}

export default App;