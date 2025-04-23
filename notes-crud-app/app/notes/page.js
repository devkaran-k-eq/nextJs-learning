"use client"
import { useEffect, useState } from "react";

export default function NotePage() {

    const [notes, setNotes] = useState([]);
    const [form, setForm] = useState({ title: "", content: "", id: null })

    useEffect(
        () => {
            fetch("/api/notes")
                .then(res => res.json())
                .then(data => setNotes(data))
        }, []
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = form.id ? 'PUT' : 'POST';
        const url = '/api/notes';
        const postData = await fetch(url, {
            method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(form)
        });

        const result = await postData.json();
        console.log(result.message);
        console.log(result.note);
        setForm({ id: null, title: "", content: "" });
        const res = await fetch('/api/notes');
        const data = await res.json();
        setNotes(data)
    }

    const handleEdit = (note) => {  
        setForm(note)
    }

    const handleDelete = async (id) => {
        await fetch('/api/notes', {
            method: 'DELETE',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({id})
        })

        const res = await fetch('/api/notes');
        const data = await res.json();
        setNotes(data)
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Notes</h1>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    className="w-full border p-2"
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                <textarea
                    className="w-full border p-2"
                    placeholder="Content"
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    {form.id ? 'Update' : 'Add'} Note
                </button>
            </form>

            <ul className="mt-6 space-y-4">
                {notes.map((note) => (
                    <li key={note.id} className="border p-4 rounded shadow">
                        <h2 className="font-bold">{note.title}</h2>
                        <p>{note.content}</p>
                        <div className="mt-2 space-x-2">
                            <button onClick={() => handleEdit(note)} className="text-blue-500">Edit</button>
                            <button onClick={() => handleDelete(note.id)} className="text-red-500">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
} 