import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <Header></Header>
      <MainContainer></MainContainer>
    </div>
  );
}

export default App;
