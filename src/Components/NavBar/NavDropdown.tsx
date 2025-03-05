import React from 'react';
// import { DownOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

// const items: MenuProps['items'] = [
//   {
//     label: (
//       <a href="e-commerce" target="_blank" rel="noopener noreferrer">
//         E-commerce
//       </a>
//     ),
//     key: '0',
//   },
//   {
//     label: (
//       <a href="training" target="_blank" rel="noopener noreferrer">
//         Training
//       </a>
//     ),
//     key: '1',
//   },
//   {
//     type: 'divider',
//   },
//   {
//       label: (
//           <a href="media" target='_blank' rel='noopener noreferrer'>
//               Media
//           </a>
//     ),
//     key: '3',
//   },
// ];
const DropDownItem = () => {
    return (
        <ul className='bg-[whitesmoke] p-4 rounded-b-md border-2 shadow-lg'>
            <li className='text-lg border-b-2 py-2'><Link to="http://localhost:3000/">E-commerce</Link></li>
            <li className='text-lg border-b-2 py-2'><Link to={"training"}>Training</Link></li>
            <li className='text-lg py-2'><Link to={"media"}>Media</Link></li>
        </ul>
               
              
    )
}


const App: React.FC = () => (
  <Dropdown dropdownRender={()=>(<DropDownItem/>)} className='cursor-pointer'  trigger={['hover']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space className='text-lg tracking-widest max-lg:pb-3'>
        Services
        <IoIosArrowDown />
      </Space>
    </a>
  </Dropdown>
);

export default App;