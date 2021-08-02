import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = () => {
  const [progress, setProgress] = useState(0) //setting the progress bar of uploading status
  const [error, setError] = useState(null) //setting error message
  const [url, setUrl] = useState(null) //setting image url for uploaded images

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file)
    const 
  }, [file])
}