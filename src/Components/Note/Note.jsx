import "./Note.css";

const Note = () => {
  return (
    <>
      <div className="note">
        <h1>Title</h1>
        <p>Content</p>
        <button>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </>
  );
};

export { Note };
