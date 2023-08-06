import "./FilterBar.css";

const filters = [
  { id: 0, name: "all" },
  { id: 1, name: "men's clothing" },
  { id: 2, name: "women's clothing" },
  { id: 3, name: "jewelery" },
  { id: 4, name: "electronics" },
];

const FilterBar = ({ activeFilter, onFilterChange }) => {
  const filtersBtns = filters.map(({ id, name }) => (
    <li key={id}>
      <button
        className={`${activeFilter === id ? "active" : ""}`}
        onClick={() => onFilterChange({ id, name })}
      >
        {name}
      </button>
    </li>
  ));

  return (
    <section className="filler-sec">
      <ul>{filtersBtns}</ul>
    </section>
  );
};

export default FilterBar;
