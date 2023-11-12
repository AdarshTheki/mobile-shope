import React from 'react';
import useProductContext from '../../../context/useProductContext';
import SelectOptions from '../../../utils/SelectOptions';

export default function BatteryFilter() {
  const { updateCheckbox, allProducts, filters } = useProductContext();
  const { battery } = filters;
  // console.log(battery);

  const uniqueBattery = [3300, 3700, 4270, 4300, 4400, 4500, 4600, 4926, 4980, 5000, 6000];
  const uniqueCamera = ['8MP', '12MP', '48MP', '50MP', '64MP', '100MP', '108MP'];
  const uniqueProcessor = ['snapdragon', 'bionic', 'helio', 'exynos', 'tensor', 'kirin'];

  return (
    <div>
      <SelectOptions option={uniqueCamera} name={'camera'} label={'Camera: '} />
      <SelectOptions option={uniqueProcessor} name={'processor'} label={'Processor: '} />
      <SelectOptions option={uniqueBattery} name={'battery'} label={'Battery: '} />
    </div>
  );
}
