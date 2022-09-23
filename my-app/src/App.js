import logo from "./assets/logo.svg";
import "./App.less";
import Title from "./components/Title";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Title />
			</header>
		</div>
	);
}

export default App;
