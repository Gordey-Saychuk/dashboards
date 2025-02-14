import styles from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" className={styles.searchInput} placeholder="Enter VIN number" />
    </div>
  ); 
};

export default SearchInput;
