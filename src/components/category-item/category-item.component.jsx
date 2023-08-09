import './category-item.styles.scss';

var CategoryItem = (component) => {

    var { ele } = component;

    return (
        <div className="category-container" key={ele.id}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${ele.imageUrl})`,
                }}
            />

            <div className="category-body-container">


                <h2> {ele.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>

    );


}

export default CategoryItem;