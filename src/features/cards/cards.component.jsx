import Product from "./card.component";

function Cards() {
  const productsData = [
    {
      name: "Product one",
      description: "Product one descriptino",
      img: "assets/imgs/one.jfif",
    },
    {
      name: "Product two",
      description: "Product two descriptino",
      img: "assets/imgs/two.jfif",
    },
    {
      name: "Product three",
      description: "Product three descriptino",
      img: "assets/imgs/four.jfif",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "1rem",
        marginTop: "3rem",
        background: "#f1f1f1",
        padding: "5rem 1rem",
      }}
    >
      {productsData.map((ele, index) => {
        return <Product product={ele} id={index} />;
      })}
    </div>
  );
}

export default Cards;
