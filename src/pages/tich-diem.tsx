import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Button, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Head from 'next/head';
import { useRef, useState } from 'react';

import { Header } from '../components';
import { CONTACT } from '../utils/constants';

export default function LinkPointHistory() {
  const phoneRef = useRef<HTMLInputElement>(null);
  const [isValidUser, setIsValidUser] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const checkUser = () => {
    console.log(phoneRef.current?.value);
    if (phoneRef?.current?.value) {
      setIsValidUser(true);
      setSubmitted(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e?.key === 'Enter') {
      if (phoneRef?.current?.value) {
        checkUser();
        setSubmitted(true);
      }
    }
  };

  return (
    <>
      <Head>
        <title>ROY Barber Shop - Tích điểm</title>
        <meta
          name='description'
          content={`
          ROY Barber shop - Kiểm tra lịch sử cắt tóc và điểm tích lũy
        `}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {submitted ? (
        isValidUser ? (
          <AddNewUser />
        ) : (
          <HairCutTimeline />
        )
      ) : (
        <div
          className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
          style={{
            background: 'url("/img/slide-1.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className='min-w-[400px] px-3 md:px-5 md:py-24 mx-auto flex text-gray-600 body-font relative'
            id='booking-box'
          >
            <div className=' max-w-md bg-white rounded-lg p-8 md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md mx-auto'>
              <h2 className='text-gray-900 text-xl font-semibold title-font text-center'>
                KIỂM TRA ĐIỂM TÍCH LŨY
              </h2>

              <div>
                <p className='text-slate-500 text-lg leading-relaxed mb-4'>
                  Chúng tôi mang đến gói cưới 10+2 cùng với điểm tích lũy qua
                  mỗi lần cắt. Nhập SĐT để kiểm tra ngay.
                </p>
                <div className='relative mb-4'>
                  <input
                    type='number'
                    required
                    ref={phoneRef}
                    onKeyDown={handleKeyDown}
                    maxLength={10}
                    placeholder='Nhập SĐT để kiểm tra'
                    name='phone'
                    className='w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
                <button
                  onClick={() => checkUser()}
                  className='text-white w-full border-0 py-2 px-6 focus:outline-none rounded text-lg bg-[#9f6e0dd4]'
                >
                  KIỂM TRA
                </button>
                <p className=' text-gray-500 mt-3 text-md'>
                  Hỗ trợ trực tiếp{' '}
                  <span className='font-medium text-[#9f6e0dd4]'>
                    <a href={`tel:${CONTACT.phoneVal}`}>{CONTACT.phoneText}</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function AddNewUser() {
  return (
    <div className='ml-auto mr-auto mt-[100px] text-center max-w-sm min-h-[80vh]'>
      <Typography variant='h5' gutterBottom className='mb-3'>
        Thêm mới khách hàng và tích điểm
      </Typography>

      <TextField
        id='outlined-basic'
        label='Tên khách hàng'
        variant='outlined'
        className='w-full mb-3'
        required
      />
      <TextField
        id='outlined-basic'
        label='Số điện thoại'
        variant='outlined'
        className='w-full mb-3'
        type='number'
        required
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className='w-full mb-3' />
      </LocalizationProvider>
      <TextField
        id='outlined-basic'
        label='Email (Nếu có)'
        variant='outlined'
        className='w-full mb-3'
        type='email'
      />
      <Button variant='contained' className='w-100' size='large'>
        Thêm mới
      </Button>
    </div>
  );
}

function HairCutTimeline() {
  return (
    <div className='mt-[100px] text-center'>
      <h2 className='text-gray-900 text-xl font-semibold title-font text-center'>
        KIỂM TRA ĐIỂM TÍCH LŨY
      </h2>
      <Typography variant='body1' gutterBottom>
        Tổng số lần đã cắt: 4, bạn cần cắt thêm 6 lần nữa để có 2 lần cắt miễn
        phí.
      </Typography>
      <Typography variant='body1' gutterBottom className='italic'>
        (Quý khách hiện đang sử dụng gói cước 10+2)
      </Typography>
      <Timeline position='alternate-reverse'>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            20-03-2021
            <br />
            <span>Lần 1</span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            04-02-2022
            <br />
            <span>Lần 2</span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            02-01-2023
            <br />
            <span>Lần 3</span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            20-03-2021
            <br />
            <span>Lần 4</span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            20-03-2021
            <br />
            <span>Lần 5</span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            20-03-2021
            <br />
            <span>Lần 6</span>
          </TimelineContent>
        </TimelineItem>{' '}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            20-03-2021
            <br />
            <span>Lần 7</span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            20-03-2021
            <br />
            <span>Lần 8</span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            20-03-2021
            <br />
            <span>Lần 9</span>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
          </TimelineSeparator>
          <TimelineContent>
            09-02-2024
            <br />
            <span>Lần 10</span>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}