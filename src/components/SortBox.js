const SortBox = (props) => {
  return (
    <div>
    <select className="sortBox" defaultValue={'DEFAULT'} onChange={(e) => props.setSortState(e.target.value)}>
        <option value="DEFAULT" disabled>Sort By...</option>
        <option value="ByYear">ByYear</option>
        <option value="ById">ById</option>
      </select>
    </div>
  );
};
export default SortBox;
