import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyMce1 = ({title}) => {

  const editorRef = useRef(null);
  
  return <div>
    <Editor
      onInit={(editor) => editorRef.current = editor}
      initialValue={title}
      init={{
        height: 180,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
    />
  </div>
}
export default TinyMce1;