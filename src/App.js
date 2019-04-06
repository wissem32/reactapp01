import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Chekpoint from './Chekpoint/Chekpoint.js';

class App extends Component {
  render() {
    return (
     <div>
        <div className="App">
           <header className="App-header">
              <center><h2>Equipe</h2></center>
           

              <Chekpoint secondename="zuckerberg" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg/260px-Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg" name="mark"/>
              
        
          
               <Chekpoint name="bill" secondename="gates"  logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/260px-Bill_Gates_2018.jpg" />
               
             
               <Chekpoint name="fakher" secondename="fakfek" logo="https://www.espacemanager.com/sites/default/files/field/image/frikha_telnet.jpg" />
               
               
               <Chekpoint name="khabib" secondename="normohammadof" logo="https://img.maximummedia.ie/sportsjoe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtc3BvcnRzam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE4XFxcLzA3XFxcLzEwMDkzODI4XFxcL0toYWJpYi1OdXJtYWdvbWVkb3YtYmVsdC5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuc3BvcnRzam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvc3BvcnRzam9lXFxcL25vLWltYWdlLnBuZz92PTIyXCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6IjQ4N2U5MTYwNzJhNDhiMmIzMzhjZGRjODg1ODIzODllNzI3ZTI3ZjgifQ==/khabib-nurmagomedov-belt.jpg"/>
               
               
            
          

              <p>
                 Edit <code>src/App.js</code> and save it.
               </p>
                 <a
                   className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                   rel="noopener noreferrer" 
                   >
                     Learn React 
                    </a> 
             </header>

        


         </div>
        
      </div>
      
    );
  }
}

export default App; 
