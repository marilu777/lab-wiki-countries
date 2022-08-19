
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Route path="/" element={<CountriesList countries={countries}/>} />
      <Route path="/search-a-country" element={<CountriesSearch countries={countries} />} />
      <Route path="/CountryDetails/:countryCca" element={<CountryDetails countries={countries}/>} />
    </div>
  );
}

export default App;
