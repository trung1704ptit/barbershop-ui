import { Button, Typography } from '@mui/material';

import { IService } from './types';

interface IProps {
  serviceSelected: IService[];
  data: IService;
  handleSelect: (data: IService) => void;
}

const ServiceItem = (props: IProps) => {
  const isSelected = props.serviceSelected.find(
    (item) => item.id === props.data.id
  );

  const handleSelect = (data: IService) => {
    props.handleSelect(data);
  };

  return (
    <div className='w-1/2 md:w-1/4 p-2 items-stretch h-auto'>
      <div className='rounded-lg border border-gray-300 flex flex-col relative overflow-hidden h-100'>
        <div className='p-3 flex flex-col justify-between h-100'>
          <div>
            <Typography variant='h6' className='mb-2'>
              {props.data.name}
            </Typography>
            {props?.data?.todos?.map((todo: string) => (
              <p className='flex items-baseline mb-2 text-gray-600' key={todo}>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#9f6e0dd4] text-white rounded-full flex-shrink-0 fill-blue-500'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-2.5 h-2.5'
                    viewBox='0 0 22 22'
                  >
                    <path d='M20 6L9 17l-5-5' />
                  </svg>
                </span>
                {todo}
              </p>
            ))}
          </div>
          <div>
            <p className='font-semibold text-black'>{props.data.price_text}</p>
            <Button
              className='w-full'
              variant={isSelected ? 'contained' : 'outlined'}
              onClick={() => handleSelect(props.data)}
            >
              {isSelected ? 'Đã chọn' : 'Chọn'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
