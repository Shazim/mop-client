import SelectOptions from 'components/atoms/form/SelectOptions';
import TextArea from 'components/atoms/form/TextArea';
import TextField from 'components/atoms/form/TextField';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import SubHeader from 'components/molecules/header/SubHeader';
import StepBar from 'components/stepbar/StepBar';
import React from 'react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
export default function Detail({ addItem }) {
  const onDrop = useCallback((acceptedFiles) => {
    console.log('Files : ', acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-80%">
      <SubHeader
        handler={addItem}
        title="add new artwork"
        subtitle="artwork details"
        buttonText="ADD NEW ITEM"
        button={true}
      />
      <div className="px-43 pt-32">
        <div className="w-57% m-auto">
          <StepBar />
        </div>
        <div className="w-65% mx-auto mt-97 items-center">
          <TextField
            classes="w-100%"
            label="artwork name"
            placeholder="max 100 characters"
          />
          <div className="border-border border-t-2 my-25"></div>
          <TextArea
            label="artwork notes"
            classes="h-113 w-100%"
            placeholder="max 500 characters"
          />
          <div className="border-border border-t-2 my-25"></div>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
