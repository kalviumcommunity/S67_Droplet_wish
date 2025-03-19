import { useState, useEffect } from "react";

const EntityList = () => {
    const [entities, setEntities] = useState([]);

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

    return (
        <div className="p-4 border rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Entities List</h3>
            {entities.length === 0 ? (
                <p>No entities added yet.</p>
            ) : (
                <ul className="list-disc pl-5">
                    {entities.map((entity) => (
                        <li key={entity._id} className="p-2 border-b">
                            {entity.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EntityList;
