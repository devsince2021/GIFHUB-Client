import React, { useState, useRef } from 'react';
import {
  ResizingBoard,
  ImageHolder,
  NorthWestPoint,
  NorthEastPoint,
  SouthWestPoint,
  SouthEastPoint,
} from './styled';

export default function ImageResizer() {
  const imageHolder = useRef(null);

  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const [newX, setNewX] = useState(0);
  const [newY, setNewY] = useState(0);

  const [isUp, setIsUp] = useState(true);
  const [currentResizer, setCurrentResizer] = useState();
  const [isResizing, setIsResizing] = useState(false);

  function togetherMouseDown(e) {
    if (e.target.classList.contains('resizer')) {
      setIsResizing(true);
      setCurrentResizer(e.target);
    }

    setPrevX(e.screenX);
    setPrevY(e.screenY);
    setIsUp(!isUp);
  }

  function togetherMouseMove(e) {
    if(isUp) return;
    setNewX(prevX - e.screenX);
    setNewY(prevY - e.screenY);
    const rect = imageHolder.current.getBoundingClientRect();
    if (!isResizing) {
      imageHolder.current.style.left = (rect.left + window.scrollX) - newX + 'px';
      imageHolder.current.style.top = (rect.top + window.scrollY) - newY + 'px';
    } else {
      if (currentResizer?.classList.contains('se')) {
        imageHolder.current.style.width = rect.width - newX + 'px';
        imageHolder.current.style.height = rect.height - newY + 'px';
      } else if (currentResizer?.classList.contains('sw')) {
        imageHolder.current.style.width = rect.width + newX + 'px';
        imageHolder.current.style.height = rect.height - newY + 'px';
        imageHolder.current.style.left = (rect.left + window.scrollX) - newX + 'px';
      } else if (currentResizer?.classList.contains('ne')) {
        imageHolder.current.style.width = rect.width - newX + 'px';
        imageHolder.current.style.height = rect.height + newY + 'px';
        imageHolder.current.style.top = (rect.top + window.scrollY) - newY + 'px';
      } else {
        imageHolder.current.style.width = rect.width + newX + 'px';
        imageHolder.current.style.height = rect.height + newY + 'px';
        imageHolder.current.style.top = (rect.top + window.scrollY) - newY + 'px';
        imageHolder.current.style.left = (rect.left + window.scrollX) - newX + 'px';
      }
    }

    setPrevX(e.screenX);
    setPrevY(e.screenY);
  }

  function togetherMouseUp(e) {
    setIsUp(true);
    isResizing && setIsResizing(false);
  }

  return(
    <ResizingBoard
      onMouseUp={togetherMouseUp}
      onMouseMove={togetherMouseMove}
    >
      <ImageHolder
        ref={imageHolder}
        onMouseDown={togetherMouseDown}
      >
        <NorthWestPoint className='resizer nw' />
        <NorthEastPoint className='resizer ne' />
        <SouthWestPoint className='resizer sw' />
        <SouthEastPoint className='resizer se' />
      </ImageHolder>
    </ResizingBoard>
  );
}
