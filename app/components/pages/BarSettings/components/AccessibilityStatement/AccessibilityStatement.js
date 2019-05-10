import React, { useState } from "react";
import PropTypes from "prop-types";

import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";

const AccessibilityStatement = ({ data, saveChanges }) => {
  const content = data && data.accStatement ? data.accStatement : "";
  const contentBlock = htmlToDraft(content);
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );

  const [accessibility, setAccessibility] = useState(
    EditorState.createWithContent(contentState)
  );

  const handleSaveChanges = () => {
    const accessibilityToSave = draftToHtml(
      convertToRaw(accessibility.getCurrentContent())
    );

    saveChanges({ accStatement: accessibilityToSave });
  };

  const updateAccessibility = accessibility => {
    setAccessibility(accessibility);
  };

  const toolbar = {
    options: ["inline", "fontSize"],
    inline: {
      inDropdown: false,
      options: ["bold"]
    },
    fontSize: {
      options: ["small", "medium", "large"]
    }
  };

  return (
    <div className="bg-white shadow-sm p-4 h-100">
      <form>
        <div className="form-group">
          <label htmlFor="a11yStatement">Accessibility Statement</label>
          <Editor
            editorState={accessibility}
            wrapperClassName="wrapper-class bar-settings-container"
            editorClassName="editor-class bar-settings-editor"
            toolbarClassName="toolbar-class"
            toolbar={toolbar}
            onEditorStateChange={updateAccessibility}
          />
        </div>
        <div className="d-flex align-items-end flex-column">
          <button
            type="button"
            className="btn btn-primary ml-auto btn-save"
            onClick={handleSaveChanges}
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

AccessibilityStatement.propTypes = {
  data: PropTypes.object,
  saveChanges: PropTypes.func
};

export default React.memo(AccessibilityStatement);
