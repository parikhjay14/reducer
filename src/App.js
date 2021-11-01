import React, {Component} from 'react';
import {Provider} from 'react-redux'; 
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer';
import ListViewScreen from './components/ListViewScreen';

class App extends Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        // createStore(<reducers>,<initial-state, mostlt kept empty)
        // return <ListViewScreen />;
        return(
            <Provider store={store}>
                <ListViewScreen />
            </Provider>
        );
    }
}

export default App;
