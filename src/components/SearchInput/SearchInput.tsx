import React from "react";
import "./searchInput.css";
import SearchIcon from "./SearchIcon";
import LoadingIcon from "./LoadingIcon";

const SearchInput = ({
  dataList,
  onListClick,
  onButtonClick,
  loading,
  ...inputProps
}: SearchInputProps) => {
  const Icon = () =>
    loading ? (
      <LoadingIcon width="16px" height="16px" className="search-icon" />
    ) : (
      <SearchIcon width="16px" height="16px" className="search-icon" />
    );

  return (
    <div id="search_input">
      <div className="search_input_container">
        <input
          {...inputProps}
          className={`search_input ${inputProps.className}`}
          type="search"
        />
        {dataList && (
          <div className="search_input_list">
            {dataList.map((dl) => (
              <button
                className="list_link"
                onClick={() => onListClick(dl.value, dl.name)}
                key={dl.value}
              >
                <div className="list_name">{dl.name}</div>
              </button>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => {
          if (onButtonClick) onButtonClick(inputProps.value as string);
        }}
        type="button"
        className="search_input_icon_container"
      >
        <Icon />
      </button>
    </div>
  );
};

export default SearchInput;
