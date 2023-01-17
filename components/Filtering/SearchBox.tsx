import { useRouter } from "next/router";
import React, { useState } from "react";

const SearchBox = ({
  divClasses,
  placeholderValue,
  inputClasses,
  children,
}: {
  divClasses: string;
  placeholderValue: string;
  inputClasses: string;
  children: any;
}) => {
  const router = useRouter();
  const [searchWord, setSearchWord] = useState("");
  const handleSearch = (e: any) => {
    if (searchWord != "") {
      if (e.keyCode == 13) {
        router.push(`/courses?search=${searchWord}`);
      }
    }
  };

  return (
    <div className={divClasses}>
      <input
        type="text"
        placeholder={placeholderValue}
        className={inputClasses}
        value={searchWord}
        onChange={(e: any) => {
          setSearchWord(e.target.value);
        }}
        onKeyDown={handleSearch}
      />
      {children}
    </div>
  );
};

export default SearchBox;
