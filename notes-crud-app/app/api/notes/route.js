import { notes } from "@/data/notes";
export async function GET() {
    return Response.json(notes)
}

export async function POST(req) {
    const newNote = await req.json();
    newNote.id = Date.now();
    notes.push(newNote);
    return Response.json({ message: "Note Created", note: newNote })
}

export async function PUT(req) {
    const updatedNote = await req.json();
    const index = notes.findIndex(note => note.id === updatedNote.id)

    if (index !== -1) {
        notes[index] = {
            ...notes[index], ...updatedNote
        }

        return Response.json({ message: 'Note Updated', note: updatedNote })
    }

    return new Response("Note Not Found", { status: 404 })
}

export async function DELETE(req) {
    const { id } = await req.json();
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1)
        return Response.json({ message: "Note Deleted!" })
    }
    return new Response("Note Not Found", { status: 404 })
}