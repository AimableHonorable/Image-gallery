import React, { useState } from 'react'

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  // declare allowed file types 
  const types = ['image/jpeg', 'image/png']

  const handleChange = (e) => {
    
    let selected = e.target.files[0]

    // check if we have the file and the file is the allowed type of file
    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError(null) //reset the error message to null when there is user select a correct file
    } else {
      setFile(null)

      // set error when the user tries to upload a file other than image file
      setError('Please select an image file (png or jpeg)')
    }
  }
  return (
    <form>
      <label title="Add Image">
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div> }
        { file && <div>{ file.name }</div> }
      </div>
    </form>
  )
}

export default UploadForm
