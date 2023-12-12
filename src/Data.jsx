// import {
//   //import default style
//     formStyles,
  
//     //import layout helpers
//     Section,
//     Row,
    
//     //import element helpers
//     TextInput,
//     TextInputNoLabel,
//     SectionHeader,
//     CurrencyInput,
//     DateInput,
//     SelectInput,
//     TextareaInput,
//     RichTextareaInput,
//     CheckboxInput,
//     RadioInput,
  
//     } from "pdfmake-form-elements";
// // import pdfMakeForms from 'pdfmake/build/pdfmake';


// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// // pdfMake.vfs = pdfMakeForms.pdfMake.vfs;


// const data = {
//   clientInformation: {
//     accountNumber: '123456',
//     accountName: 'Acme Corporation',
//     lastName: 'Doe',
//     otherPr: 'Mr.',
//     streetAddress: '123 Main Street',
//     cityStateZip: 'City, ST, ZIP',
//     phone: '123-456-7890',
//     fax: '987-654-3210',
//     additionalReportingFax: '555-555-5555',
//   },
//   patientInformation: {
//     orderingPhysician: 'Dr. Smith',
//     treatingPhysician: 'Dr. Jones',
//   },
//   specimenInformation: {
//     specimen10: '1234567890',
//     blockId: 'A1B2C3',
//   },
//   billingInformation: {
//     primaryMen: 'John Doe',
//     primaryProm: 'Jane Doe',
//   },
// };

// function generateClientInformationPDF(data) {
//   var content = [
//     {
//       text: 'Client Information',
//       style: 'header',
//     },
//     {
//       text: 'Required Information',
//       style: 'requiredInfo',
//     },
//     {
//       columns: [
//         {
//           text: 'Account #:',
//           width: 'auto',
//           bold: true,
//         },
//         Row([
//                ]),
//         {
//           text: 'Account Name:',
//           width: 'auto',
//           bold: true,
//         },
//         {
//           text: { TextInput: { value: data.clientInformation.accountName } },
//           width: '*',
//         },
//       ],
//     },
//     {
//       text: 'Street Address:',
//       bold: true,
//     },
//     {
//       text: { textInput: { value: data.clientInformation.streetAddress } },
//     },
//     {
//       text: 'City, ST, ZIP:',
//       bold: true,
//     },
//     {
//       text: { textInput: { value: data.clientInformation.cityStateZip } },
//     },
//     {
//       columns: [
//         {
//           text: 'Phone:',
//           width: 'auto',
//           bold: true,
//         },
//         {
//           text: { textInput: { value: data.clientInformation.phone } },
//           width: '*',
//         },
//         {
//           text: 'Fax:',
//           width: 'auto',
//           bold: true,
//         },
//         {
//           text: { textInput: { value: data.clientInformation.fax } },
//           width: '*',
//         },
//       ],
//     },    {
//       text: 'Additional Reporting Fax:',
//       bold: true,
//     },
//     {
//       text: { textInput: { value: data.clientInformation.additionalReportingFax } },
//     },
//     {
//       text: '\n',  // Add an empty line
//     },
//     {
//       text: 'Interactive Input Field:',
//       bold: true,
//     },
//     {
//       text: { textInput: { value: '', placeholder: 'Click to enter text' } },
//     },
//   ];

//   var docDefinition = {
//     content: content,
//     styles: {
//       header: {
//         fontSize: 18,
//         padding:'20px',
//         bold: true,
//         margin: [0, 0, 0, 10],
//         color: 'white',
//         background: '#ADD8E6',  // Background color
//         border: [false, false, false, true],  // Border at the bottom
//       },
//       requiredInfo: {
//         fontSize: 14,
//         color: 'red',  // Red color
//         bold: true,
//         margin: [0, 10, 0, 5],
//       },
//     },
//   };

//   pdfMake.createPdf(docDefinition).open();
// }