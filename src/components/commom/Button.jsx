import React from 'react';

const Button = ({ 
  children, // Nội dung bên trong nút 
  icon: Icon, // Biểu tượng được truyền dưới dạng component 
  bgGradient = 'from-[#00D1B2] to-[#4CAF50]', // Màu nền gradient tùy chọn 
  onClick, // Hàm xử lý sự kiện click 
  className = '' // Thêm className tùy chỉnh 
}) => {
  return (
    <button 
      className={`bg-gradient-to-r ${bgGradient} text-white text-sm font-bold 
                  flex items-center gap-2 px-2 py-3
                  rounded-full 
                  shadow-[0_4px_0_rgba(0,0,0,0.2)] 
                  hover:translate-y-[2px] hover:shadow-[0_6px_0_rgba(0,0,0,0.2)] 
                  active:translate-y-[8px] active:shadow-none 
                  transition-all duration-150 
                  ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className="text-2xl" />}
      {children}
    </button>
  );
};

export default Button;
