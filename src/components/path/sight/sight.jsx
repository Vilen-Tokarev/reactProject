import React, { useState } from "react";
import Search from "./sightComponents/search/search";
import Main from "./sightComponents/main/main";

function Sight() {
    const [searchInput, setSearchInput] = useState('')
    const [sort, setSort] = useState('')
    const [filter, setFilter] = useState('')
    return (
        <>
            <Search onSearchChange={setSearchInput} onSortChange={setSort} onFilterChange={setFilter} />
            <Main search={searchInput} sort={sort} filter={filter} />
        </>
    )
}


export default Sight;