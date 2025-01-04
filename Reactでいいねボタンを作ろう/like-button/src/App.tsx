import "./App.css";

function App() {
    return (
        <>
            <LikeButton />
        </>
    );
}

function LikeButton() {
    const count = 999;
    return <span>♥ {count}</span>;
}

export default App;
