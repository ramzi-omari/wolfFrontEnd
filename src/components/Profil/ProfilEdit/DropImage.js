import React, { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

const DropImage = ({ setImageLink }) => {
  const [baseImage, setBaseImage] = useState("")

  const uploadImage = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    setBaseImage(base64)
    setImageLink(base64)
    console.log("photo", base64)
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e)
        }}
      />
      <br></br>
      {baseImage ? <img src={baseImage} height="150px" /> : null}
    </div>
  )
}

export default DropImage
