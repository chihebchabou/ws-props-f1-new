import React from 'react';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';

const CategoryList = ({ categoryList, alertDescription }) => {
  return (
    <div className="container pt-4">
      <div className="row">
        {categoryList.map((category, i) => (
          <CategoryItem
            key={category.id}
            category={category}
            title={category.categoryName}
            alertDescription={alertDescription}
          >
            <img
              style={{ height: 200, objectFit: 'cover' }}
              src={category.image}
              alt=""
              className="card-img-top"
            />
          </CategoryItem>
        ))}
      </div>
    </div>
  );
};

CategoryList.propTypes = {
  categoryList: PropTypes.array.isRequired,
  alertDescription: PropTypes.func.isRequired,
};

export default CategoryList;
