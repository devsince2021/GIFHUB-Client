import React from 'react';
import { Wrapper, StyledForm } from './styled';

export default function FileTrimContent({ uploadedFile }) {
  return (
    <>
      <Wrapper>
        <video
          width="268px"
          controls
          autoPlay
        >
          <source src={`http://localhost:4000/mediaFile?id=${uploadedFile._id}`} />
        </video>

      </Wrapper>
      <StyledForm>
        <label htmlFor='startTime'>start time</label>
        <input type='text' name='startTime'/>
        <label htmlFor='duration'>duration</label>
        <input type='text' name='duration'/>
        <button>submit</button>
      </StyledForm>
    </>
  );
};
