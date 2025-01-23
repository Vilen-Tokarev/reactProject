import React from "react";
import { fetchReviews, deleteReview } from "../../../../../service/service";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CreateReviews from "./reviewsComponents/createReviews";
import "./reviews.scss";


function Rewiews() {
    const { id } = useParams();
    const queryClient = useQueryClient();

    const { data, isLoading, error } = useQuery({
        queryKey: ["reviews"],
        queryFn: () => fetchReviews(id),
    });

    const delRev = useMutation({
        mutationFn: deleteReview,
        onSuccess: () => {
            queryClient.invalidateQueries(["reviews"]);
            window.location.reload();
        },onError: (error) => { alert("Ошибка при удалении отзыва"); }
    });

    const handleDelete = (userId, rewId) => {
        delRev.mutate({ userId, rewId });
    };

    if (isLoading) return <span className="loader"></span>;
    if (!data || data.length === 0) return <div className="reviewsNon">Отзывов нет</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <section className="reviews">
            <div className="container">
                <CreateReviews delRev={handleDelete} reviews={data} />
            </div>
        </section>
    );
}

export default Rewiews;