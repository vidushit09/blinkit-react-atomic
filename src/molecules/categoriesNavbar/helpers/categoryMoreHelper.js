import { Link } from "react-router-dom";
function categoryMoreHelper(categories, categoryClick){
    let list=categories.map((category, index) => {
        return (
          <Link to="/">
            <li onClick={()=>categoryClick(category)} key={index}>
              {category}
            </li>
          </Link>
        );
      });
      return list;
}

export {categoryMoreHelper};