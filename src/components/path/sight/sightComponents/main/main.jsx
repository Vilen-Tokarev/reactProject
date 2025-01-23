import React, { useState } from "react";
import { fetchUsers } from "../../../../../service/service";
import { useQuery } from "@tanstack/react-query";
import UserList from "./mainComponents/userList";
import './style/main.scss'

function Main({ search, sort, filter }) {

    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    
    const { data, isLoading, error } = useQuery({
        queryKey: ['users', { page, limit, sort, search, filter}],
        queryFn: () => fetchUsers({ page, limit, sort, search, filter})
    });

    if (isLoading) return <span class="loader"></span>
    if (error) return <div>{error.message}</div>

    return (
        <section class="main">
            <div class="container">
                <p class="main__title">достопримечательности</p>
                <UserList users={data} />
                <div class="pag">
                    <button onClick={() => {setPage(prev => prev - 1 ); setLimit(10)}} class="pagination__button" disabled={page===1} id="prevPage">Предыдущая страница</button>
                    <span class="pagination__page-number" id="num">{page}</span>
                    <button onClick={() => {setPage(prev => prev + 1 ); setLimit(10)}} disabled={page===5} class="pagination__button" id="nextPage">Следующая страница</button>
                    <button onClick={() => {setLimit(prev => prev + 10 ); setPage(1)}} disabled={page>1} id="more">Показать еще</button>
                </div>
            </div>
        </section>
    )
}

export default Main;