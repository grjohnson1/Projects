import {useState, useEffect} from 'react';
import moneyBags from './assets/investment-calculator-logo.png';
import UserDataEntry from './components/UserDataEntry';
import { calculateInvestmentResults, formatter } from './util/investment';

const userData = [
  {
    text: "Initial Investment",
    label: "initialInvestment",
    value: 15000,
  },
  {
    text: "Annual Investment",
    label: "annualInvestment",
    value: 900,
  },
  {
    text: "Expected Return",
    label: "expectedReturn",
    value: 6,
  },
  {
    text: "Duration",
    label: "duration",
    value: 10,
  }
];

function App() {
  const [userInputs, setUserInputs] = useState(userData);
  const [returnData, setReturnData] = useState([]);
  let totalInterest = 0;
  let totalAmountInvested = 0;

  useEffect(() => {
    const tableData = {
      initialInvestment: +findInputValueById("initialInvestment"),
      annualInvestment: +findInputValueById("annualInvestment"),
      expectedReturn: +findInputValueById("expectedReturn"),
      duration: +findInputValueById("duration")
    };
    //console.log(tableData);
    const results = calculateInvestmentResults(tableData);

    const updateRows = results.map(rowData => {
      totalInterest = 
        rowData.valueEndOfYear - 
        rowData.annualInvestment * 
        rowData.year;
      totalAmountInvested = rowData.valueEndOfYear - totalInterest;

      return {
        ...rowData,
        totalInterest: totalInterest,
        totalAmountInvested: totalAmountInvested
      }
    });

    setReturnData(updateRows);


    console.log(returnData);
  }, [userInputs]);

  function findInputValueById(id) {
    const foundId = userInputs.findIndex(item => item.label === id);
    return userInputs[foundId].value;
    //return parseInt(userInputs.findIndex(item => item.label === id).value);
  } 

  function handleChange(event) {
    setUserInputs(prevUserInputs => prevUserInputs.map(item=> item.label === event.target.id ? {...item, value: event.target.value} : {...item}));
  }

  return (
    <>
      <header id="header">
        <img src={moneyBags} alt="Money Bags" />
        <h1>Investment Calculator</h1>
      </header>

      <section id="user-input">
        <div className="input-group">
          {userInputs.slice(0, 2).map((inputItem) => <UserDataEntry key={inputItem.label} onChange={handleChange} {...inputItem} />)}
        </div>
        <div className="input-group">
          {userInputs.slice(2, userInputs.length).map((inputItem) => <UserDataEntry key={inputItem.label} onChange={handleChange} {...inputItem} />)}
        </div>
      </section>

      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {
              returnData.map((rowData) => {
                <tr key={rowData.year}>
                  <td>{rowData.year}</td>
                  <td>{formatter.format(rowData.valueEndOfYear)}</td>
                  <td>{formatter.format(rowData.interest)}</td>
                  <td>{formatter.format(rowData.totalInterest)}</td>
                  <td>{formatter.format(rowData.totalAmountInvested)}</td>
                </tr>
              })
            }
        </tbody>
      </table>
    </>
  )
}

export default App
