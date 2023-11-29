import React from 'react';
import { useFilter } from '../../../context/Filter_Context';
import SelectOptions from '../../../utils/SelectOptions';
import { getUniqueValues } from '../../../utils/helpers';

export default function BatteryFilter() {
  const { all_products } = useFilter();

  const batteries = getUniqueValues(all_products, 'battery');
  const cameras = getUniqueValues(all_products, 'camera');
  const Ram = getUniqueValues(all_products, 'ram');
  const Rom = getUniqueValues(all_products, 'rom');
  const display = getUniqueValues(all_products, 'display');

  return (
    <div>
      <SelectOptions option={batteries} name={'battery'} label={'Battery: '} />
      <SelectOptions option={cameras} name={'camera'} label={'Camera: '} />
      <SelectOptions option={Ram} name={'ram'} label={'RAM: '} />
      <SelectOptions option={Rom} name={'rom'} label={'ROM: '} />
      <SelectOptions option={display} name={'display'} label={'Display: '} />
    </div>
  );
}
