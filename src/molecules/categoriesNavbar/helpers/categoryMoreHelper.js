import { Link } from "react-router-dom";
var _ = require("lodash");
function categoryMoreHelper(categories, categoryClick) {
  let list = _.map(categories, (category, index) => {
    return (
      <Link to="/">
        <li onClick={() => categoryClick(category)} key={index}>
          {category}
        </li>
      </Link>
    );
  });
  return list;
}

export { categoryMoreHelper };
