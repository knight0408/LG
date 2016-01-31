import {Router, Route, IndexRoute} from 'ReactRouter';
import './Home';
import './People';
import './Room';
import './Guide';

ReactDOM.render (<Router>
    <Route path="/">
		<IndexRoute component={Home}/>
		<Route path="people" component={People}/>
		<Route path="room/:people" component={Room}/>
		<Route path="guide/:people/:room" component={Guide}/>
	</Route>
</Router>, document.getElementById('lg'))