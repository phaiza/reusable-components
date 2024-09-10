import './App.css';
import Button from './components/Button';

function App() {
    const handleNavigate = (url:string) => {
    console.log('Button clicked!'); // Example action
     window.location.href = url; 
  };
  return (
    <>
      <Button  label="Shop now"
        onClick={handleNavigate}
        url="https://www.google.com" />
    </>
  );
}

export default App;
