// app/profile/[id]/page.tsx

import { log } from "console";
import { notFound } from "next/navigation";

export default async function ProfilePage({ params }: { params: { id: string } }) {
    console.log(params.id);
     

    // if (!user) {
    //     notFound(); // Показує /profile/not-found.tsx
    // }

    return <div>{}</div>;
}
