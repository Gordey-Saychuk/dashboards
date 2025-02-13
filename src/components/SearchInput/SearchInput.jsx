import styles from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" className={styles.searchInput} placeholder="Search..." />
    </div>
  );
};

export default SearchInput;
