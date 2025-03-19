import { useState, useEffect } from "react";

const AddEntity = () => {
    const [name, setName] = useState("");
    const [entities, setEntities] = useState([]);

    // Fetch existing entities from the server
    useEffect(() => {
        fetchEntities();
    }, []);

    const fetchEntities = async () => {
        try {
            const response = await fetch("http://localhost:5000/entities"); // Update with actual backend URL
            const data = await response.json();
            setEntities(data);
        } catch (error) {
            console.error("Error fetching entities:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        try {
            const response = await fetch("http://localhost:5000/entities", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name }),
            });

            if (response.ok) {
                setName(""); // Clear input field
                fetchEntities(); // Refresh list after adding
            }
        } catch (error) {
            console.error("Error adding entity:", error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Add Entity</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    placeholder="Enter entity name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Add
                </button>
            </form>

            <h3 className="text-xl font-semibold">Entities List:</h3>
            <ul>
                {entities.map((entity) => (
                    <li key={entity._id} className="border-b p-2">
                        {entity.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddEntity;
