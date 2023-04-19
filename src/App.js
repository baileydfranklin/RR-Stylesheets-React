import './App.css';
import Container from './components/Container'
import Menu from './components/Menu';
import Aside from './components/Aside';

const menu = {
  backgroundColor: '#CCFF33'
}
const menuItem = {
  backgroundColor: 'teal',
  color: 'white',
  fontSize: '2rem'
}
const aside = {
  backgroundColor: 'orange',
  color: 'green',
  fontSize: '1.5rem'
}

function App() {
  return (
    <div className="App">
      <Container>
        <h2>This is the container child</h2>
        <Menu menuStyle={menu} menuItem ={ menuItem }/>
        <Aside />
      </Container>
    </div>
  );
}

export default App;
