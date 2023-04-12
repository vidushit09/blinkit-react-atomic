import { Link } from "react-router-dom";
import lodash from "lodash";
function categoryMoreHelper(categories, categoryClick) {
  let list = lodash.map(categories, (category, index) => {
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
