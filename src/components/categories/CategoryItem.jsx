import React from 'react';
import PropTypes from 'prop-types';
// import stay from './stay.jpg';

const CategoryItem = props => {
  const { category, title, children, alertDescription } = props;
  const { description, image } = category;

  const handleClick = () => alertDescription(description);

  // console.log(props);
  //   const category = {
  //     categoryName: 'Stays',
  //     description: 'Homes, Boutique & more',
  //     image: stay,
  //   };
  return (
    <div className="col-md-3">
      <div className="card mb-4">
        {children}
        <div className="card-body">
          <h3 className="text-primary">{title}</h3>
          {/* <p className="card-text">{description}</p> */}
          <a href="#!" className="btn btn-primary" onClick={handleClick}>
            View Description
          </a>
        </div>
      </div>
    </div>
  );
};

CategoryItem.defaultProps = {
  title: 'Default title',
};

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
  title: PropTypes.string,
  alertDescription: PropTypes.func.isRequired,
};

export default CategoryItem;
