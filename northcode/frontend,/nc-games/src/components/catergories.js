import React, { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

return (
    <>
      <main>
        <h2>List of categories:</h2>
        <ul>
          {categories.map((category) => {
            return (
              <Link
                key={category.slug}
                to={`/reviews?category=${category.slug}`}
>
                <li>{category.slug}</li>
              </Link>
            );
          })}
        </ul>
      </main>
    </>
  );

}

export default Categories;