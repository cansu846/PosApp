import { Button, Table, Input, Space } from 'antd';
import React, { useState,useRef } from 'react'
import CreateInvoice from '../components/cart/CreateInvoice';
import CartSummary from '../components/cart/CartSummary';
import { useDispatch, useSelector } from 'react-redux';
import ProductQuantity from '../components/cart/ProductQuantity';
import { reset } from '../redux/cartSlice';
import { SearchOutlined } from '@ant-design/icons';
// import Highlighter from 'react-highlight-words';

function CartPage() {
    const [isModalOpen, setIsModelOpen] = useState(false);

    const {cartItems} = useSelector((state)=>state.cart)
    const dispatch = useDispatch();
    
    const showModal = () => {
        setIsModelOpen(!isModalOpen);
    }

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
          <div
            style={{
              padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{
                marginBottom: 8,
                display: 'block',
              }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Search
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({
                    closeDropdown: false,
                  });
                  setSearchText(selectedKeys[0]);
                  setSearchedColumn(dataIndex);
                }}
              >
                Filter
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  close();
                }}
              >
                close
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? '#1677ff' : undefined,
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        filterDropdownProps: {
          onOpenChange(open) {
            if (open) {
              setTimeout(() => searchInput.current?.select(), 100);
            }
          },
        },
        // render: (text) =>
        //   searchedColumn === dataIndex ? (
        //     <Highlighter
        //       highlightStyle={{
        //         backgroundColor: '#ffc069',
        //         padding: 0,
        //       }}
        //       searchWords={[searchText]}
        //       autoEscape
        //       textToHighlight={text ? text.toString() : ''}
        //     />
        //   ) : (
        //     text
        //   ),
      });


    const columns = [
        {
            title: "Product Image",
            dataIndex: "img",
            width: '2%',
            render: (_, record) => {
                return (
                    <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                        alt="" className="w-full h-20 object-cover" />
                );
            },
        },
        {
            title: "Product Name",
            dataIndex: "title",
            width: "4%",
            // render: (_, record) => {
            //     return <p>{record.title}</p>;
            // },
            ...getColumnSearchProps('title'),

        },
      
        {
            title: "Product Price",
            dataIndex: "price",
            width: "4%",
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: "Category",
            dataIndex: "category",
            width: "4%",
            ...getColumnSearchProps('category'),
        },
        {
            title: "Product Quantity",
            dataIndex: "quantity",
            width: "4%",
            render: (_, record)=>{
                return(
                    <ProductQuantity item={record} />
                );
            }

        },
        {
            title: "Total Amount",
            dataIndex: "total",
            width: "4%",

        },
        {
            title: "Action",
            dataIndex: "action",
            width: "8%",
            render: (_, record) => {
                return (
                    <div>
                        <Button
                            type="link"
                            danger
                           onClick={()=>{
                            if(window.confirm("Do you want to delete products ?")){
                                dispatch(reset(record));
                            }
                           }}
                        >
                            Delete
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className='mx-4'>
            <div className=''>
                <Table dataSource={cartItems} columns={columns} className='rounded-md' pagination={false} />
            </div>

            <div className='cart-total flex justify-end mt-4'>
               
                <CartSummary showModal={showModal} />
                {/* acılacak modal bu componentte */}
                <CreateInvoice isModalOpen={isModalOpen} showModal={showModal}/>
                
            </div>
        </div>
    )
}

export default CartPage
