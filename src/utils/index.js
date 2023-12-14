import Button from './Button';
import AddressDisplay from './AddressDisplay';
import AddressForm from './AddressForm';
import Dropdown from './Dropdown';
import SocialIcons from './SocialIcons';
import LoadingSpinner from './LoadingSpinner';
import Stars from './Stars';
import SelectOptions from './SelectOptions';
import Inputs from './Inputs';
import Logo from './Logo';
import ScrollToTop from './ScrollToTop';

const formatePrice = (number, type = 'INR') => {
  const tempNumber = type === 'USD' ? number / 80 : number;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: type,
    minimumFractionDigits: 0,
  }).format(tempNumber);
};

const formattedDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

const getUniqueValues = (data, type) => {
  let unique = data?.map((item) => item[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};

const getUnique = (data, type) => {
  const unique = data?.map((item) => item[type]);
  return [...new Set(unique)];
};

export {
  formatePrice,
  formattedDate,
  getUnique,
  getUniqueValues,
  ScrollToTop,
  Logo,
  Dropdown,
  SocialIcons,
  AddressDisplay,
  AddressForm,
  Inputs,
  Button,
  LoadingSpinner,
  Stars,
  SelectOptions,
};
