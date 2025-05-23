//using destructuring
function SinglePizza({ item }) {
  const pizzaStyle = {
    border: "1px solid #999",
    borderRadius: "5px",
    padding: "5px",
    width: "300px",
  };

  const imageContainrStyle = {
    width: "100%",
    height: "200px",
  };

  if (item.name === "Potato Crunch") return null;
  return (
    <div className="single" style={pizzaStyle}>
      <div className="image-container" style={imageContainrStyle}>
        <img
          src={item.img}
          alt={item.name}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="info">
        <p style={{ fontSize: "25px", marginBottom: "0" }}>{item.name}</p>
        <p style={{ marginTop: "0" }}>{item.description}</p>
        <h4 style={{ marginBottom: "0", marginTop: "0" }}>
          Price: {+item.price + 30} ${" "}
        </h4>
        <h4 style={{ marginTop: "0", marginBottom: "0" }}>
          Rating: {item.rating}{" "}
        </h4>
        <h4 style={{ marginBottom: "0", marginTop: "0" }}>size: {item.size}</h4>

        <h4 style={{ marginBottom: "0", marginTop: "0" }}>
          Available: {item.isAvailable ? "In Stock" : "Out of Stock"}
        </h4>

        <div
          className="ingredients"
          style={{ display: "flex", marginTop: "0" }}
        >
          <h4 style={{ marginTop: "0" }}>Ingredients: </h4>
          &nbsp;
          <div>
            {item.ingredients.map((ele, index) => {
              return (
                <span key={index}>
                  {ele} {index < item.ingredients.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePizza;
