import { useState } from "react";

type TabContentProps = {
    item: {
        summary: string;
        details: string;
    };
};

export default function TabContent({ item }: TabContentProps) {
    const [showDetails, setShowDetails] = useState(true);
    const [likes, setLikes] = useState(0);

    function handleInc() {
        setLikes((likes) => likes + 1);
    }

    function handleTripleInc() {
        setLikes((likes) => likes + 3);
    }

    function handleUndo() {
        setShowDetails(true);
        setLikes(0);
    }

    function handleUndoLater() {
        setTimeout(handleUndo, 2000);
    }

    return (
        <div className="tab-content">
            <h4>{item.summary}</h4>
            {showDetails && <p>{item.details}</p>}

            <div className="tab-actions">
                <button onClick={() => setShowDetails((h) => !h)}>
                    {showDetails ? "Hide" : "Show"} details
                </button>

                <div className="hearts-counter">
                    <span>{likes} ❤️</span>
                    <button onClick={handleInc}>+</button>
                    <button onClick={handleTripleInc}>+++</button>
                </div>
            </div>

            <div className="tab-undo">
                <button onClick={handleUndo}>Undo</button>
                <button onClick={handleUndoLater}>Undo in 2s</button>
            </div>
        </div>
    );
}
