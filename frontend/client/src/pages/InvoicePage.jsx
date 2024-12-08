import React, { useRef, useState } from 'react'
import PrintInvoice from '../components/invoice/PrintInvoice';
import { Button, Card, Input, Space, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
// import Highlighter from 'react-highlight-words';

function InvoicePage() {

    const [isModalOpen, setIsModelOpen] = useState(false);
    const [bills, setBills] = useState([]);
    const [customer, setCustomer] = useState({});

    const showModal = () => {
        setIsModelOpen(!isModalOpen);
    }

    const getBills = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/bill/get-all")
            const json = await response.json()
            setBills(json);
            //console.log("get bills:"+ json)
        } catch (error) {
            console.log(error)
        }
    }

    useState(() => {
        getBills();
    }, []);

    //for search
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
    //search end

    // console.log("get bills:" + bills)

    const columns = [
        {
            title: "Customer Name",
            dataIndex: "customerName",
            key: "customerName",
            ...getColumnSearchProps('customerName'),
        },
        {
            title: "Phone Number",
            dataIndex: "customerPhoneNumber",
            key: "customerPhoneNumber",
            ...getColumnSearchProps('customerPhoneNumber'),

        },
        {
            title: "CreateAt ",
            dataIndex: "createdAt",
            key: "createdAt",
            //record, o satırın tamamına erişim sağlar. Yani, dataSource içindeki bir nesnedir.
            //dataIndex ile eşlesen hücreye ait değerdir.
            render: (text) => {
                return <span>{text.substring(0, 10)}</span>
            }
        },
        {
            title: "Payment Mode",
            dataIndex: "paymentMode",
            key: "paymentMode",
        },
        {
            title: "Total Amount",
            dataIndex: "totalAmount",
            key: "totalAmount",
            // render: (text)=>{
            //   return <span>{text}₺</span>
            // }
            sorter: (a, b) => a.totalAmount - b.totalAmount,
        },
        {
            title: "Actions",
            dataIndex: "action",
            key: "action",
            //record, o satırın tamamına erişim sağlar. Yani, dataSource içindeki bir nesnedir.
            render: (text, record) => {
                return <Button
                    type="link"
                    className="pl-0"
                    onClick={() => {
                        showModal();
                        setCustomer(record);
                        console.log("record:", record);
                        console.log("customer:", customer);
                    }}
                >
                    Print
                </Button>
            }
        },
    ]

    return (
        <div className='mx-4'>
            <h1 className='flex justify-center font-bold text-lg pb-4' >Invoce</h1>
            <div className=''>
                {/* Eğer tablo sütunları toplamda belirlenen piksel genişliğinden büyükse, kaydırma çubukları aktif olur. */}
                <Table dataSource={bills} columns={columns} className='rounded-md' pagination={false} scroll={{ x: 1000, y: 300 }} />
            </div>

            {/* <div className='cart-total flex justify-end mt-4'>

                <Card className="w-72">
                    <Button
                        className="mt-4 w-full"
                        type="primary"
                        size="large"
                        onClick={showModal}
                    >
                        Print
                    </Button>
                </Card>
            </div> */}

            <PrintInvoice isModalOpen={isModalOpen} showModal={showModal} customer={customer} />

        </div>


    )
}

export default InvoicePage
