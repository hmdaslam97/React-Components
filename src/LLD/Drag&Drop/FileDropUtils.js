import axios from "axios";

export default async function uploadFileInChunks(input, setUploading){
  const chunkSize = 5 * 1024 * 1024; // 5MB per chunk
  const totalChunks = Math.ceil(input.size/chunkSize)
  const promiseArr = []
  const fileId = input.lastModified+input.name;

  for(let i=0; i<totalChunks; i++){
    const start = i * chunkSize;
    const end = Math.min(start + chunkSize, input.size); // Calculate the end position of the current chunk, if file size is less than chunk size, then directly take the file size as end.
    const chunk = input.slice(start, end);
    //console.log("file chunk ", await chunk.text()) //shows file chunks in text format

    const formData = new FormData();
    formData.append('chunk', chunk);
    formData.append('fileId', fileId);
    formData.append('fileName', input.name);
    formData.append('chunkIndex', i);
    formData.append('totalChunks', totalChunks);



    let url, hasError = false;
    //if(i === 2) {
    //  url = "http://localhost:3003/upload"
    //} else {
      url = "http://localhost:3001/chunk-uploader/upload"
    //}

    await axios.post(url, formData)
            .then((res)=>{
              if(res?.data?.uploadSuccess) {
                promiseArr.push(Promise.resolve({status: true, message: res.data?.message, formData}))
                setUploading(Math.floor(((Number(formData.get("chunkIndex")) + 1) / Number(formData.get("totalChunks"))) * 100))
              } else {
                promiseArr.push(Promise.resolve({status: false, message: "Failed to Upload", formData}))
                hasError = true;
              }
            }).catch((error)=>{
              promiseArr.push(Promise.resolve({status: false, message: error.message, formData})) //Since rejecting promise will throw an error in UI which is not a good practice so resolving with error.
              hasError = true;
            })

    if(hasError) {
      break;
      setUploading(0)
    }
  }

  Promise.all(promiseArr)
    .then(async (val)=>{
      console.log("Val arr ",val)
      await axios.post("http://localhost:3001/chunk-uploader/merge",
                       {fileId:fileId, fileName: input.name, totalChunks: totalChunks})
        .then(res=>{
          if(res?.data?.mergeSuccess){
            console.log("merge success", res)
            setUploading(100)
          } else {
            console.log("merge Error", res)
            setUploading(0)
          }
        })
    }).catch(err=>{
      console.log("Error: ", err)
      setUploading(0)
    })
}