
import CategoryItem from "../category-item/category-item.component";

import "./directory.styles.scss"

const Directory = ({ categories }) => {

    return (
        <div className="categories-container" >
            {categories.map((ele) => {
                return <CategoryItem ele={ele}></CategoryItem>;

            })

            }


        </div>
    );
}

export default Directory;