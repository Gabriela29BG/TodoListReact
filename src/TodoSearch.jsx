
import './TodoSearch.css';

function TodoSearch({
  // eslint-disable-next-line react/prop-types
  searchValue,
  // eslint-disable-next-line react/prop-types
  setSearchValue,
}) {
  return (
    <input 
    className='TodoSearch' 
    value={searchValue}
    placeholder='laaal' 
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}/>
  );
}
export {TodoSearch};