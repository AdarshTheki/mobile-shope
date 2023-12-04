import { createContext, useContext } from 'react';

const TabContext = createContext();

// eslint-disable-next-line react/prop-types
const Tab = ({ children, currentTab, onChange }) => {
  return (
    <div className='w-full'>
      <TabContext.Provider value={{ currentTab, onChange }}>{children}</TabContext.Provider>
    </div>
  );
};
export default Tab;

// eslint-disable-next-line react/display-name, react/prop-types
Tab.HeaderContainer = ({ children }) => {
  return (
    <div className='flex w-8/12 py-6 flex-wrap justify-between items-center mx-auto'>
      {children}
    </div>
  );
};

// eslint-disable-next-line react/display-name, react/prop-types
Tab.Item = ({ label, index }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentTab, onChange } = useContext(TabContext);
  const handleClick = () => {
    onChange(index);
  };
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer block text-center flex-grow py-1 uppercase hover:opacity-80 rounded-2xl duration-300 ${
        currentTab === index
          ? 'bg-gray-800 text-white shadow-lg'
          : 'text-gray-900 hover:bg-gray-300'
      }`}>
      {label}
    </div>
  );
};

// eslint-disable-next-line react/display-name, react/prop-types
Tab.ContentContainer = ({ children }) => {
  return <div>{children}</div>;
};

// eslint-disable-next-line react/display-name, react/prop-types
Tab.ContentItem = ({ index, children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentTab } = useContext(TabContext);
  return currentTab === index ? <div className='flex gap-2 flex-wrap'>{children}</div> : null;
};
