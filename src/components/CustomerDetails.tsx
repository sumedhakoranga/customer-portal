import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CustomerDetailsProps {
  customer: { name: string; title: string; address: string };
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [images, setImages] = useState<string[]>([]);
  const imageWidth = 1060;
  const imageHeight = 1000;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list', {
          params: { limit: 9 }
        });
        const imageUrls = response.data.map((img: any) => `https://picsum.photos/${imageWidth}/${imageHeight}?random=${img.id}`);
        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="customer-details">
      <h3>{customer.name} details here</h3>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <div className="photo-grid">
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Placeholder ${index}`} width={imageWidth} height={imageHeight} style={{ objectFit: 'cover' }} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
