import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import Form from './components/Form';
import SecondForm from './components/RestForm/SecondForm';


function App() {
  return (
    <div className="App">
     
     <Form/>
     {/* <SecondForm/> */}
    </div>
  );
}

export default App;
