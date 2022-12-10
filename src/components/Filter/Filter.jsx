import React from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import styles from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();
  const filteredComments = (evt) => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          onChange={filteredComments}
          className={styles.searchInput}
          type="text"
          id="search"
          placeholder="Search something.."
        />
      </div>
    </div>
  );
};
