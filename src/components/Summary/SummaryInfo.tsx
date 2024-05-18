/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBooking } from '../BookingEntrance/types';

type TSummaryInfo = {
  bookings: IBooking[];
};

const SummaryInfo = (props: TSummaryInfo) => {
  const servicesCounter: any = {};
  const barberCounter: any = {};

  props.bookings.map((item) => {
    if (item.services) {
      item.services.forEach((sItem) => {
        if (sItem.name in servicesCounter) {
          servicesCounter[sItem.name] = servicesCounter[sItem.name] + 1;
        } else {
          servicesCounter[sItem.name] = 1;
        }
      });
    }
    if (item.barber) {
      if (item.barber.name in barberCounter) {
        barberCounter[item.barber.name] = barberCounter[item.barber.name] + 1;
      } else {
        barberCounter[item.barber.name] = 1;
      }
    }
  });

  return (
    <div className='rounded p-3 bg-white ml-2 w-full text-black'>
      <div className='border-b-2 p-2'>
        <div className='flex space-x-10'>
          <div>
            Tổng số đơn đặt:{' '}
            <span className='text-black text-medium'>
              {props.bookings.length}
            </span>
          </div>
          <div>
            Thành tiền:{' '}
            <span className='text-black text-medium'>
              {props.bookings.length}
            </span>
          </div>
        </div>
      </div>
      <div className='border-b-2 p-2'>
        <p>Theo dịch vụ</p>

        <table className='w-full border-collapse border border-slate-400'>
          {Object.keys(servicesCounter).map((key) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{servicesCounter[key]}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className='border-b-2 p-2'>
        <p>Theo Barber</p>
        <table className='w-full border-collapse border border-slate-400'>
          {Object.keys(barberCounter).map((key) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{barberCounter[key]}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default SummaryInfo;
