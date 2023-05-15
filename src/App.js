import { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import CategoryList from './components/categories/CategoryList';
import stay from './components/categories/stay.jpg';
import adventure from './components/categories/adventure.jpg';
import experience from './components/categories/experience.jpg';
import restaurant from './components/categories/restaurant.jpg';

function App() {
  const categoryList = [
    {
      id: 1,
      categoryName: 'Stays',
      description: 'Homes, Boutique & more',
      image: stay,
    },
    {
      id: 2,
      categoryName: 'Experiences',
      description: 'Activities hosted by locals',
      image: experience,
    },
    {
      id: 3,
      categoryName: 'Adventures',
      description: 'Hosted trips including lodging',
      image: adventure,
    },
    {
      id: 4,
      categoryName: 'Restaurants',
      description: 'Popular spots to eat & drink',
      image: restaurant,
    },
  ];

  const alertDescription = desc => alert(`Descrtitio: ${desc}`);

  return (
    <Fragment>
      <Navbar />
      <CategoryList
        categoryList={categoryList}
        alertDescription={alertDescription}
      />
    </Fragment>
  );
}

export default App;
