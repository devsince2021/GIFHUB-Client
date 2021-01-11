import React, { useState, useEffect, useRef } from 'react';
import {
  ResizingBoard,
  ImageHolder,
  NorthWestPoint,
  NorthEastPoint,
  SouthWestPoint,
  SouthEastPoint,
} from './styled';
import { imageSizeAndPositionHandler } from '../../utils';

 const ImageResizer = ({
  onMouseUp,
  imageFile,
  onToggleResizer,
}) => {
  const imageHolder = useRef(null);

  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const [newX, setNewX] = useState(0);
  const [newY, setNewY] = useState(0);

  const [isMouseUp, setIsMouseUp] = useState(true);
  const [currentResizer, setCurrentResizer] = useState();
  const [isResizing, setIsResizing] = useState(false);

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (!imageFile?.type.includes('image')) return;
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      setImageUrl(reader.result);
    }, false);

    reader.readAsDataURL(imageFile);
  }, [imageFile]);

  const handleMouseDown = event => {
    if (!onToggleResizer()) return;
    if (event.target.classList.contains('resizer')) {
      setIsResizing(true);
      setCurrentResizer(event.target);
    }
    setPrevX(event.clientX);
    setPrevY(event.clientY);
    setIsMouseUp(!isMouseUp);
  };

  const handleMouseMove = event => {
    if (!onToggleResizer()) return;
    if(isMouseUp) return;
    setNewX(prevX - event.clientX);
    setNewY(prevY - event.clientY);

    const rect = imageHolder.current.getBoundingClientRect();

    !isResizing
      ? imageSizeAndPositionHandler.move(imageHolder, rect, newX, newY)
      : imageSizeAndPositionHandler.resize(currentResizer, imageHolder, rect, newX, newY);

    setPrevX(event.clientX);
    setPrevY(event.clientY);
  };

  const handleMouseUp = () => {
    if (!onToggleResizer()) return;
    setIsMouseUp(true);

    onMouseUp({
      left: `${imageHolder.current.style.left.split('px')[0] - 250}`,
      top: `${imageHolder.current.style.top.split('px')[0] - 128}`,
      width: imageHolder.current.style.width.split('px')[0] || '50',
      height: imageHolder.current.style.height.split('px')[0] || '50',
    });
    isResizing && setIsResizing(false);
  };

  return(
    <ResizingBoard
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <ImageHolder
        ref={imageHolder}
        url={imageUrl}
        onMouseDown={handleMouseDown}
      >
        {
          onToggleResizer() &&
          <>
            <NorthWestPoint className='resizer nw' />
            <NorthEastPoint className='resizer ne' />
            <SouthWestPoint className='resizer sw' />
            <SouthEastPoint className='resizer se' />
          </>
        }
      </ImageHolder>
    </ResizingBoard>
  );
};

export default ImageResizer;
