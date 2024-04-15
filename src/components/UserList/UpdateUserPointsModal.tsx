import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import moment from 'moment';
import * as React from 'react';

import { IUserData } from '.';

interface IProps {
  handleClose: () => void;
  userData: IUserData;
}

export default function UpdateUserPointsModal(props: IProps) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  return (
    <Dialog
      open={true}
      onClose={props.handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setSuccess(true);
          }, 500);
        },
      }}
    >
      <DialogTitle>Tích điểm</DialogTitle>
      <DialogContent style={{ minWidth: '320px' }}>
        <DialogContentText>
          {success ? (
            <div className='justify-center text-center'>
              <CheckCircleIcon className='text-green-600 h-[100px] w-[100px]'></CheckCircleIcon>
              <Typography variant='body1' gutterBottom>
                Tích điểm thành công! Số điểm{' '}
                <strong>{props?.userData?.name}</strong> hiện tại là{' '}
                {props?.userData?.points + 10} điểm
              </Typography>
              <Typography variant='body2' gutterBottom>
                Ngày cập nhật {moment(new Date()).format('DD-MM-YYYY')}
              </Typography>
            </div>
          ) : (
            <>
              <Typography variant='body1'>
                Xác nhận cập nhật{' '}
                <span className='text-green-600'>+10 điểm</span> cho{' '}
                <strong>{props?.userData?.name}</strong>?
              </Typography>

              <Typography variant='body2' className='mt-3'>
                Ngày cập nhật: {moment(new Date()).format('DD-MM-YYYY')}
              </Typography>
            </>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {success ? (
          <>
            <Button
              onClick={props.handleClose}
              variant='contained'
              size='small'
              startIcon={<CloseIcon />}
            >
              Thoát
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={props.handleClose}
              variant='outlined'
              size='small'
              startIcon={<CloseIcon />}
            >
              Hủy bỏ
            </Button>
            <Button
              type='submit'
              variant='contained'
              size='small'
              disabled={loading}
              startIcon={<SaveIcon />}
            >
              Cập nhật
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
