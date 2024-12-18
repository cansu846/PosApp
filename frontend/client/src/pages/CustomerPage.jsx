import React, { useRef, useState } from 'react'
import { Button, Card, Input, Space, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
// import Highlighter from 'react-highlight-words';

function CustomerPage() {

    const [bills, setBills] = useState([]);

    const getBills = async () => {

        try {

            const response = await fetch(process.env.REACT_APP_SERVER_URL + "/api/bill/get-all");
            const json = await response.json();
            setBills(json);

        } catch (error) {
            console.log(error);
        }

    }

    useState(() => {
        getBills();
    });


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


    const columns = [
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
            ...getColumnSearchProps('customerName'),

        },
        {
            title: 'Customer Phone',
            dataIndex: 'customerPhoneNumber',
            key: 'customerPhoneNumber',
            ...getColumnSearchProps('customerPhoneNumber'),

        },
        {
            title: 'Created Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render:(text)=>{
                return text.substring(0,10);
            }
        },
    ]

    return (
        <div className='mx-4'>
            <h1 className='flex justify-center font-bold text-lg pb-4' >Customers</h1>
            <div className=''>
                <Table rounded dataSource={bills} columns={columns} className='rounded-md' pagination={false} scroll={{ x: 1000, y: 600 }} />
            </div>

        </div>


    )
}
export default CustomerPage
