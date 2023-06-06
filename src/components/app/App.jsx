import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDirections } from '../../services/actions/directions';
import { fetchFilter } from '../../services/actions/filter';
import { Get } from '../get/get';
import { Receive } from '../recevie/recevie';
import './App.css';

function App() {

  const { isLoading, hasError, directions } = useSelector(state => state.directions);
  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDirections());
    dispatch(fetchFilter());
  }, [dispatch])

  return (
    <>
      {!hasError && !isLoading && directions.length > 0 && filter.length > 0 && (
        <div className="App">
          <Receive />
          <Get />
        </div>
      )}
      {isLoading && (
        <p>Loading..</p>
      )}
      {hasError && (
        <p>Error..</p>
      )}
    </>
  );
}

export default App;
