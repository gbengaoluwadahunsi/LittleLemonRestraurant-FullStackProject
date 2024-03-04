import Imageo from "/src/Images/Rectangle40.png"

const PopularCategories = () => {
    
  return (
    <div
      style={{
        color: "black"
      }}
      className="bg-green-700 py-10 px-4 md:px-10"
    >
      <h3>Check out our menu</h3>
      <p>The best taste in town, an experience of a lifetime.</p>
      <div>
        <div>BREAKFAST</div>
        <div>LUNCH</div>
        <div>DINNER</div>
        <div>STARTERS</div>
        <div>BEVERAGES</div>
      </div>
      <section>
        <div><img src={Imageo} alt="" style={{objectFit: "contain"}} />
        <span>view all menu</span>
        </div>
        <div>
            <div>
                <h4>popcorn</h4>
                <span>the most delicious</span>
                <span>$4.2</span>
            </div>
            <div>
                <h4>popcorn</h4>
                <span>the most delicious</span>
                <span>$4.2</span>
            </div>
            <div>
                <h4>popcorn</h4>
                <span>the most delicious</span>
                <span>$4.2</span>
            </div>
            <div>
                <h4>popcorn</h4>
                <span>the most delicious</span>
                <span>$4.2</span>
            </div>
            <div>
                <h4>popcorn</h4>
                <span>the most delicious</span>
                <span>$4.2</span>
            </div>

        </div>
      </section>
    </div>
  );
};

export default PopularCategories;
