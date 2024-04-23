import React, { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { getColor } from "../../utils/imagesAction";

const EditorDesc = ({ value, onChange, options = { height: "50vh" } }) => {
  const editorRef = useRef(null);

  const handleEditorFocus = () => {
    const editorContainer = editorRef.current?.editorContainer;
    editorContainer?.classList.add("editor-focused");
  };

  const handleEditorBlur = () => {
    const editorContainer = editorRef.current?.editorContainer;
    editorContainer?.classList.remove("editor-focused");
  };

  const handleEditorStyle = () => {
    if (editorRef.current) {
      editorRef.current.dom.addStyle(
        `.mce-content-body{
          color: ${getColor("emphasis-color")} !important;
          background-color: ${getColor("tinymce-bg")} !important;
        }
        `
      );
    }
  };

  useEffect(() => {
    handleEditorStyle();
  }, []);

  const testOnChange = () => {
    console.log(editorRef.current.getContent());
  };

  return (
    <Editor
      apiKey="wan6ciqqgyzqt9youhvptxtc3e05iuidbrcs3a550srd6ali"
      onFocus={handleEditorFocus}
      onBlur={handleEditorBlur}
      onInit={(evt, editor) => (editorRef.current = editor)}
      value={value}
      onEditorChange={onChange}
      //apiKey="wan6ciqqgyzqt9youhvptxtc3e05iuidbrcs3a550srd6ali"
      init={{
        skin: "oxide",
        menubar: false,

        statusbar: false,
        plugins: ["link", "image", "lists", "table", "media"],
        theme_advanced_toolbar_align: "center",
        toolbar: [
          { name: "history", items: ["undo", "redo"] },
          {
            name: "formatting",
            items: ["bold", "italic", "underline", "strikethrough"],
          },
          {
            name: "alignment",
            items: ["alignleft", "aligncenter", "alignright", "alignjustify"],
          },
          { name: "list", items: ["numlist", "bullist"] },
          { name: "link", items: ["link"] },
        ],
        options,
      }}
    />
  );
};

export default EditorDesc;
