import { RefObject, useCallback, useState } from "react";
import Dropzone from "react-dropzone";
import "./App.css";

function App() {
  const [files, setFiles] = useState<string[]>([]);
  const handleDrop = useCallback(
    (files: File[]) => {
      setFiles(files.map(({ name }) => name));
    },
    [setFiles]
  );
  return (
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps, getInputProps, rootRef, inputRef, open }) => (
        <div
          className="App"
          {...getRootProps()}
          ref={rootRef as RefObject<HTMLDivElement>}
        >
          <input id="file-upload" {...getInputProps()} ref={inputRef} />
          <div>
            <div>
              <label htmlFor="file-upload" className="button" onClick={open}>
                Choose Files
              </label>
            </div>
          </div>
          <pre>
            {files.map((file) => {
              return <div>{file}</div>;
            })}
          </pre>
        </div>
      )}
    </Dropzone>
  );
}

export default App;
