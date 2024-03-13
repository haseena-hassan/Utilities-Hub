import './App.css';

import { useEffect, useState } from 'react'; 
import Axios from 'axios'; 

function App() {

	const [ipDetails, setIpDetails] = useState([]); 
  const [locDetails, setLocDetails] = useState([]); 
  
	useEffect(() => { 
		Axios.get('https://api.ipify.org/?format=json').then((res) => { 
        setIpDetails(res.data); 
		}); 
    Axios.get('https://ipapi.co/json/').then((res) => { 
        setLocDetails(res.data); 
		}); 
	}, []) 
  return (
    <div className="App">
      <h1>IP Address Finder</h1> 
					<h3 id="ip">{ipDetails.ip}</h3> 
					<h4>Approximate location: {locDetails.city}, {locDetails.region}, 
						{locDetails.country_name}</h4> 

					<h4>Internet Service Provider(ISP): {locDetails.org}</h4> 
    </div>
  );
}

export default App;
