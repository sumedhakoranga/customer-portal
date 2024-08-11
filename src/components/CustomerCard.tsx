import React from 'react';

interface CustomerCardProps {
  customer: { id: number; name: string; title: string };
  onSelect: (id: number) => void;
  isSelected: boolean;
}

class CustomerCard extends React.Component<CustomerCardProps> {
  truncate(str: string): string {
    return str.length > 20 ? str.substring(0, 36) + "..." : str;
  }

  render() {
    const { customer, onSelect, isSelected } = this.props;

    return (
      <div
        className={`customer-card ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelect(customer.id)}
        style={{
          border: '1px solid #ddd',
          padding: '16px',
          margin: '8px',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          backgroundColor: isSelected ? '#e0e0e0' : 'white'
        }}
      >
        <h3>{customer.name}</h3>
        <span
          style={{
            display: 'inline-block',
            textOverflow: 'ellipsis',
            maxWidth: '500px'
          }}
        >
          {this.truncate(customer.title)}
        </span>
      </div>
    );
  }
}

export default CustomerCard;