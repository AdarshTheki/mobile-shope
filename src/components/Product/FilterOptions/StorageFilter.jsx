import React from 'react';
import SelectOptions from '../../../utils/SelectOptions';
import useProductContext from '../../../context/useProductContext';

export default function StorageFilter() {
  const { filters, clearAllFilter } = useProductContext();
  const { storage } = filters;

  const ramStorage = ['2 GB RAM', '4 GB RAM', '6 GB RAM', '8 GB RAM', '12 GB RAM'];
  const romStorage = ['32 GB ROM', '64 GB ROM', '128 GB ROM', '256 GB ROM'];
  const expandStorage = ['', '512 GB', '1 TB', '2 TB'];

  return (
    <div>
      <h2 className='font-medium'>
        Storage : <span className='text-red-500 text-xs '>{storage}</span>
      </h2>
      {storage && (
        <p
          onClick={clearAllFilter}
          className='text-blue-500 text-sm m-2 uppercase font-semibold cursor-pointer'>
          clear All
        </p>
      )}
      <SelectOptions option={ramStorage} label={'RAM: '} name={'storage'} />
      <SelectOptions option={romStorage} label={'ROM: '} name={'storage'} />
      <SelectOptions option={expandStorage} label={'Expand: '} name={'storage'} />
    </div>
  );
}
