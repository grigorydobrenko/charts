import React, {useEffect} from 'react';
import './App.css';
import {getChartsTC} from "../store/reducers/charts-reducer";
import {useAppDispatch} from "../hooks/hooks";
import ChartsPage from "../pages/ChartsPage";

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getChartsTC())
    }, [dispatch])
    return (
        <div className="App">
            <ChartsPage/>
        </div>
    );
}

export default App;
