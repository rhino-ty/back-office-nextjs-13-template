'use client';
// mui 모달 만들기
// TODO: MUI 사용하여 모달에 모달을 넣을 수 있는지 확인

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState, Fragment } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function GrandChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button onClick={handleOpen}>Open Grandchild Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box sx={{ ...style, width: 350 }}>
          <h2 className='font-bold text-2xl my-6'>Grandchild modal</h2>
          <p className='mb-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <Button onClick={handleClose}>Close GrandChild Modal</Button>
        </Box>
      </Modal>
    </Fragment>
  );
}

function ChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box sx={{ ...style, width: 350 }}>
          <h2 className='font-bold text-2xl my-6'>Text in a child modal</h2>
          <p className='mb-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='flex justify-between'>
            <GrandChildModal />
            <Button onClick={handleClose}>Close Child Modal</Button>
          </div>
        </Box>
      </Modal>
    </Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 className='font-bold text-2xl my-6'>Text in a modal</h2>
          <p className='mb-4'>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
