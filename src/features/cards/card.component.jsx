function Product(props) {
  return (
    <div
      style={{
        border: "1px solid #999",
        overflow: "hidden",
        borderRadius: "7px",
      }}
    >
      <img
        style={{ height: "200px", width: "100%" }}
        src={props.product.img}
        alt="product image"
      />
      <div style={{ padding: "1rem" }}>
        <h2>
          {props.product.name} {props.id + 1}
        </h2>
        <p>{props.product.description}</p>
      </div>
    </div>
  );
}

export default Product;
