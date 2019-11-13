import React from 'react';
import PhotoGalleryCards from './PhotoGalleryCards';
import { transform } from "@babel/core";

function PhotoGallery(props){
  return(
    <div dangerouslySetInnerHTML={CreateGrid(props.arrayObjectsToDisplay)}></div>
  );
}


function CreateGrid(arrayOfObjects) {
  let arrayOutput = [];
  const originalCount = arrayOfObjects.length;
  const rowCount = Math.ceil(originalCount / 3);
  let maxCount = rowCount * 3;

  for (let i = 0; i < maxCount; i + 3) {
    let subArray = [];
    subArray.push([arrayOfObjects[i]]);
    if ((i + 1) < originalCount) {
      subArray.push([arrayOfObjects[i + 1]])
    } else {
      subArray.push(null);
    }
    if ((i + 2) < originalCount) {
      subArray.push([arrayOfObjects[i + 2]]);
    } else {
      subArray.push(null);
    }
    arrayOutput.push(subArray);
  }

  let output = "";
  for(let i = 0; i<arrayOutput.length;i++)
  {
    const subArray = arrayOutput[i];
    const first = subArray[0];
    const second = subArray[1];
    const third = subArray[2];
    output += `<row><div className='col-4'><PhotoGalleryCards url=${first.url} likes=${first.likes} comments=${first.comments} />`;
    output += `<div className='col-4'><PhotoGalleryCards url=${second.url} likes=${second.likes} comments=${second.comments} />`;
    output += `<div className='col-4'><PhotoGalleryCards url=${third.url} likes=${third.likes} comments=${third.comments} /> </row>`;
  }
  return {__html: output};
}
export default PhotoGallery;
