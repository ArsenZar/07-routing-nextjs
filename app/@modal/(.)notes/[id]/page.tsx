import { getSingleNote } from "@/lib/api";

type Props = {
    params: Promise<{ id: string }>;
}

const NotePreview = async ({ params }: Props) => {
    const { id } = await params;
    const note = await getSingleNote(id);

    return (
        <>
            <h2>{ note.title}</h2>
        </>
    )
}

export default NotePreview;