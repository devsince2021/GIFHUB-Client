import React from 'react';
import Modal from '..';
import { Title, Description } from './styled';

export default function FileCreateModal({
  title,
}) {
  return(
    <Modal
      isOpen={true}
      width='40%'
      height='50%'
      top='27%'
      left='28%'
    >
      <Title>
        {title}
      </Title>
      <Description>
        We are creating your own file!!
      </Description>
    </Modal>
  );
}
