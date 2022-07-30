import moment from 'moment';
import Card from './components/Card';
import Expense from './components/Expense';
import './css/app.css'

export default function App() {
  const data =[
    {
      date: moment("July 12 2020").format("MMMM YYYY D").toString() ,
      name: 'English Book',
      price: 3500
    },{
      date: moment("May 1 2021").format("MMMM YYYY D").toString() ,
      name: 'Beauty and the Beat',
      price: 1600
    },{
      date: moment("March 15 2022").format("MMMM YYYY D").toString() ,
      name: 'Ruby the Gold Fish',
      price: 2000
    },{
      date: moment("June 3 2022").format("MMMM YYYY D").toString() ,
      name: 'Batman Handy Man',
      price: 1200
    }];
  
  

  return (
    <div className="container">
      <Card>
        <Expense item={data}/>
      </Card>
    </div>
  );
}

