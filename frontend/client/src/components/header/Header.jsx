import React from 'react'
import { Input, Badge } from 'antd';
import { SearchOutlined, 
    HomeOutlined, 
    ShoppingCartOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined,
    CopyOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// rfce
function Header() {

  const dispatch = useDispatch();
  const {cartItems} = useSelector((state)=>state.cart);

  return (
    <div className='border-b mb-6'>
       <header className='py-3 ml-5 mr-5 flex items-center justify-between gap-10'>
       <div className='logo'>
        <Link to='/'>
            <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
        </Link>
       </div>
        <div className='header-search flex-1  flex justify-center'>
        <Input size="large" placeholder="Search..." className="rounded-full max-w-[800px]" prefix={<SearchOutlined />} />

        </div>
        <div className='menu-links flex justify-between items-center gap-8
         md:static fixed z-40 bottom-0 md:w-auto w-screen md:bg-transparent
          bg-white md:border-t-0 border-t md:px-0 px-10 md:pt-0 pt-2'>
           <Link to="/" className='flex flex-col hover:text-[#40a9ff]'>
           <span><HomeOutlined className='md:text-2xl text-xl'/></span>
           <span className='md:text-xs text-[10px]'>Home</span>
           </Link>
           
           {/* Buyuk ekranlarda flex iken küçük ekranlarda gizlenir */}
           <Link to="/cart" className='menu-link md:flex hidden flex-col hover:text-[#40a9ff] '>
           <Badge count={cartItems.length}> 
           <span><ShoppingCartOutlined className='md:text-2xl text-xl'/></span>
           </Badge>
           
           <span className='md:text-xs text-[10px]'>Basket</span>
           </Link>

           <Link to="/invoice" className='flex flex-col hover:text-[#40a9ff]'>
           <span><CopyOutlined className='md:text-2xl text-xl'/></span>
           <span className='md:text-xs text-[10px]'>Invoice</span>
           </Link>
         
           <Link to="/customer" className='flex flex-col hover:text-[#40a9ff]'>
           <span><UserOutlined className='md:text-2xl text-xl'/></span>
           <span className='md:text-xs text-[10px]'>User</span>
           </Link>

           
           <Link to="/statistic" className='flex flex-col hover:text-[#40a9ff]'>
           <span><BarChartOutlined className='md:text-2xl text-xl'/></span>
           <span className='md:text-xs text-[10px]'>Statistic</span>
           </Link>
       
           <Link to="/" className='flex flex-col hover:text-[#40a9ff]'>
           <span><LogoutOutlined className='md:text-2xl text-xl'/></span>
           <span className='md:text-xs text-[10px]'>Exit</span>
           </Link>
        
        
        </div>

        {/* menu links ten farklı olarak fazladan eklendi ekran küçüldüğünde ortaya çıkar */}
        <Link to="/" className='menu-link flex flex-col hover:text-[#40a9ff] md:hidden'>
           <Badge count={5}> 
           <span><ShoppingCartOutlined className='md:text-2xl text-xl'/></span>
           </Badge>
           
           <span className='md:text-xs text-[10px]'>Basket</span>
           </Link>
       </header>
    </div>
    
  )
}

export default Header
