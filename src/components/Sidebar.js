import React from 'react';
import { FaTachometerAlt, FaRegSun, FaChevronRight, FaWrench, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronLeft, FaBolt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className='bg-[#4E73DF] h-screen px-[25px]'>
            <div className='px-[15px] py-[30px] flex justify-center items-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin Panel</h1>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <FaTachometerAlt className='text-white'></FaTachometerAlt>
                <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegSun className='text-white'></FaRegSun>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Components</p>
                    </div>
                    <FaChevronRight className='text-white'></FaChevronRight>
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaWrench className='text-white'></FaWrench>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Utilities</p>
                    </div>
                    <FaChevronRight className='text-white'></FaChevronRight>
                </div>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>ADDONS</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote className='text-white'></FaStickyNote>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Pages</p>
                    </div>
                    <FaChevronRight className='text-white'></FaChevronRight>
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegChartBar className='text-white'></FaRegChartBar>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Charts</p>
                    </div>
                    <FaChevronRight className='text-white'></FaChevronRight>
                </div>
                <div className='flex items-center gap-[10px] py-[15px]'>
                    <FaRegCalendarAlt className='text-white'></FaRegCalendarAlt>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>
                </div>
            </div>

            <div className='flex items-center justify-center pt-[15px]'>
                <div className='w-[40px] h-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer'>
                    <FaChevronLeft className='text-white'></FaChevronLeft>
                 </div>
            </div>

            <div className='bg-[#395CBF] mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]'>
                <FaBolt className='text-white'></FaBolt>
                <p className='text-[12px] leading-[18px] font-normal text-white/[0.4] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, expedita.</p>
                <button className='bg-[#17A673] text-white flex items-center justify-center h-[30px] w-full rounded-[3px] text-[14px] leading-[21px] font-normal'>Upgrade to Pro!</button>
            </div>
            
        </div>
    );
};

export default Sidebar;