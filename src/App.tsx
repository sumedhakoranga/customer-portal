import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import './App.css';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

const App: React.FC = () => {
  const [customers] = useState<Customer[]>([
    { id: 1, name: 'Customer 01', title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting", address: '123 Street, City' },
    { id: 2, name: 'Customer 02', title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting", address: '456 Avenue, City' },
    { id: 3, name: 'Customer 03', title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting", address: '789 Boulevard, City' },
    { id: 4, name: 'Customer 04', title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting", address: '101 Road, City' },
    { id: 5, name: 'Customer 04', title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting", address: '101 Road, City' },
    { id: 6, name: 'Customer 04', title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting", address: '101 Road, City' },
    { id: 7, name: 'Customer 04', title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting", address: '101 Road, City' },
  ]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(1);

  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId);

  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}>Our Customers Details</h1>
      <div className="customer-portal">
        <CustomerList customers={customers} onSelect={setSelectedCustomerId} selectedCustomerId={selectedCustomerId} />
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

export default App;
