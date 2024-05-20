import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const CustomDatePicker = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Datepicker
        value={value}
        onChange={handleValueChange}
        showFooter
        separator="-"
        inputClassName={
          'relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-background focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20'
        }
        containerClassName={
          'border border-default-200 rounded-lg pr-0 relative bg-background [&>*:nth-child(3)>*]:bg-background'
        }
      />
    </div>
  );
};

export default CustomDatePicker;
