// app/notes/[id]/NoteDetails.client.tsx
"use client";

import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import css from "./NoteDetails.module.css";


export default function NoteDetailsClient() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["note", id],
        queryFn: () => getSingleNote(id),
        refetchOnMount: false,
        enabled: Boolean(id)
    });

    const handleGoBack = () => {
        const isSure = confirm('Are you sure?');
        if (isSure) {
            router.back();
        }
    };

    return (
        <>
            {(isLoading) && <p>Loading...</p>}
            {isError && <p>Error... { error.message }</p>}
            
            <div className={css.container}>
                <button onClick={handleGoBack}>Back</button>
                <div className={css.item}>
                    <div className={css.header}>
                        <h2>{ data?.title }</h2>
                    </div>
                    <p className={css.content}>{data?.content }</p>
                    <p className={css.date}>{ data?.createdAt }</p>
                </div>
            </div>
        </>
    );
}
