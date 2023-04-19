import './App.css';
import { ShowButton } from './questionComponents/ShowButton';

import { EmployeeCard } from './questionComponents/EmployeeCard';
import { StationaryList } from './questionComponents/StationaryList';
import { RandomImage } from './questionComponents/RandomImage';
import { ProductsList } from './questionComponents/ProductsList';
import { ProductsListSalesGreaterThanQuantity } from './questionComponents/ProductsListSalesGreaterThanQuantity';
import { StudentDetails } from './questionComponents/StudentDetails';
import { EmployeeDetails } from './questionComponents/EmployeeDetails';
const backgroundColor = 'lightgreen'
const color = 'darkgreen'
const borderRadius = '5px'
const padding = '10px'

const items = ['pen', 'pencil', 'ruler', 'eraser']

const products = [
  { name: 'Perk', quantity: 10, sales: 7 },
  { name: 'Pepsi', quantity: 10, sales: 20 },
  { name: 'Coke', quantity: 18, sales: 50 },
  { name: 'Maggi', quantity: 41, sales: 22 },
  { name: '5Star', quantity: 7, sales: 9 },
]

const student = {
  name: 'John Doe',
  english: 90,
  maths: 80,
  computers: 70,
}

function App() {
  return (
    <div className="App">
      <EmployeeCard name={"Tushar Anekar"} designation={"Aspiring Web Developer"} experience={5} />
      <ShowButton userBackgroundColor={backgroundColor} userColor={color} userBorderRadius={borderRadius} userPadding={padding} />
      <StationaryList stationaryItems={items} heading={"Stationery Items"} />
      <RandomImage imageLink=
        {'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'}
        caption={'Spring Flowers'} />
      <ProductsList products={products}/>
      <ProductsListSalesGreaterThanQuantity products={products}/>
      <StudentDetails student={student}/>
      <EmployeeDetails />
    </div>
  );
}

export default App;
