// app/notes/filter/[...slug]/page.tsx

import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';


type Props = {
    params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
    const { slug } = await params;

    const tag = slug[0] === "all" ? undefined : slug[0];

    const response = await fetchNotes(1, undefined, tag);
    // const category = slug[0] === 'all' ? undefined : slug[0];

    console.log(await response);
    

    return (
        <div>
            <h1>Notes List</h1>
            {response.notes.length > 0 && <NoteList notes={response.notes} />}
        </div>
    );
};

export default NotesByCategory;
