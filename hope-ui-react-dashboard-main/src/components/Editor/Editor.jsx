import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import './Editor.css';
const Editor = ({ setValue, value }) => {
  return (
    <div className="editor">
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell your story..."
        className={'textArea'}
      />
    </div>
  );
};

export default Editor;
