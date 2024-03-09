import React from 'react';
import {useDropzone} from 'react-dropzone';
import { FaFileUpload } from "react-icons/fa";

export const Uploader = () => {
    const {getRootProps,getInputProps} = useDropzone({
        multiple:false,
        maxSize: 10000,
        onDrop:(acceptedFiles) => {
            alert(acceptedFiles[0].name);
        }
    })
  return (
    <div className='w-100 text-center'>
        <div {...getRootProps()} className='py-3 rounded-3 dotted-border'>
            <input {...getInputProps()} />
            <span className='text-danger fs-3'>
                <FaFileUpload />
            </span>
            <p className='mb-0'>Drag  and drop or click to upload</p>
            <em className='text-secondary'>(only .jpg and .png files will be accepted)</em>
        </div>
    </div>
  )
}
