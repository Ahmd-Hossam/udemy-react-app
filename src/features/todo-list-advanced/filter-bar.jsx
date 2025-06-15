function FilterBar({ filter, setFilter }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div style={{ marginTop: "20px" }}>
      {filters.map((ele) => {
        return (
          <button
            key={ele}
            style={{
              marginRight: "8px",
              fontWeight: filter === ele ? "bold" : "normal",
            }}
            onClick={() => setFilter(ele)}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
}

export default FilterBar;
