export default function SearchForm({
  searchText,
  setSearchText
}) {

  return (
    <form onSubmit={e => {
      e.preventDefault();
    }} action="#" className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value = {searchText}
        onChange={e => {
          console.log(e.target.value);
          fetch(e.target.value);
        }}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
