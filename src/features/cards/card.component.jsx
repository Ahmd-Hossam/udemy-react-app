function Product({ img, name, description, id }) {
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
        src={img}
        alt="product image"
      />
      <div style={{ padding: "1rem" }}>
        <h2>
          {name} {id + 1}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Product;
