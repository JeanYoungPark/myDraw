
import './bootstrap';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link
} from 'react-router-dom'
import Draws from './components/Draws';
import DrawsCreate from './components/DrawsCreate';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/draws" element={<Draws/>} />
            <Route path="/draws/create" element={<DrawsCreate/>} />
        </Routes>
    </Router>,
    document.getElementById('root')
)