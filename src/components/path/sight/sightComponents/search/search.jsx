import React from "react";
function Search({ onSearchChange, onSortChange, onFilterChange }) {
    const handleSetSearch = (e) => {
        onSearchChange(e.target.value)
    }
    const handleSetSort = (e) => {    
        onSortChange(e.target.value)
    }
    const handleSetFilter = (e) => {
        onFilterChange(e.target.value)
    }

    return (
        <section class="search">
            <div class="container">
                <div class="search__box">
                    <div class="search__search-wrap">
                        <input onChange={handleSetSearch} class="search__search-wrap_search" type="text" id="searchInput" placeholder="Поиск..." />
                    </div>
                    <select onChange={handleSetFilter} class="search__filter-buttons" id="filter">
                        <option class="search__filter-button" value="all">Все</option>
                        <option class="search__filter-button" value="mountains">Горы</option>
                        <option class="search__filter-button" value="trails">Тропы</option>
                        <option class="search__filter-button" value="museums">Музеи</option>
                    </select>
                    <select onChange={handleSetSort} class="search__sort-buttons" id="sort">
                        <option class="search__sort-button" selected="selected" disabled value="all">Sort</option>
                        <option class="search__sort-button" value="rewiews_rare">Сортировка по рейтенгу</option>
                        <option class="search__sort-button" value="rewiews_sum">Сортировка по количеству отзывов</option>
                    </select>
                    {/* <button type="reset" id="reset-all">Сбросить все</button> */}
                    <a id="reset-all" href="">Сбросить все</a>
                </div>

            </div>
        </section>
    );
};

export default Search;