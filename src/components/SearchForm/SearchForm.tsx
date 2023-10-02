import React, { useEffect, useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import { useDebounce } from "../../utils/hooks/useDebounce";
import axios from "../../utils/axios";

interface Props {
  onSearchSubmit: (name: string) => void;
}
function SearchForm({ onSearchSubmit }: Props) {
  const [city, setValue] = useState<TdataList>({ name: "", value: "" });
  const [dataList, setDataList] = useState<TdataList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { debouncedValue } = useDebounce<string>(city.name, 1000);

  // will fetch according to the debounced value
  useEffect(() => {
    fetchList(debouncedValue);
  }, [debouncedValue]);

  // function fetch Data for the Auto complete Search
  const fetchList = async (val: string) => {
    if (!val) return setDataList([]);
    setLoading(true);
    await axios
      .get("/search.json", {
        params: {
          q: val,
        },
      })
      .then((res) => {
        const dataList = res.data.map((d: TSearchResponse) => ({
          name: `${d.name} - ${d.country} - ${d.region}`,
          value: `${d.url}`,
        }));
        let checkDataExist = dataList.find(
          (d: TdataList) => d.value === city.value
        );
        if (checkDataExist && dataList.length >= 1) setDataList([]);
        else setDataList(dataList);
      });
    setLoading(false);
  };

  // function to handle click on the list
  function onListClick(val: string, name: string) {
    onSearchSubmit(val);
    setValue({ name, value: val });
    setDataList([]);
  }

  // function to handle Input change
  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue({ name: e.target.value, value: "" });
    setDataList([]);
  }

  // function to handle button click
  function onButtonClick() {
    onSearchSubmit(debouncedValue);
    setDataList([]);
  }

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearchSubmit(debouncedValue);
    setDataList([]);
  }
  return (
    <form onSubmit={onFormSubmit}>
      <SearchInput
        dataList={dataList}
        loading={loading}
        value={city.name}
        placeholder="Search Location"
        autoFocus={true}
        onListClick={onListClick}
        onChange={onInputChange}
        onButtonClick={onButtonClick}
      />
    </form>
  );
}

export default SearchForm;
