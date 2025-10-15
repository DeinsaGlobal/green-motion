// components/molecules/FeatureCard.tsx
import React from 'react';
import IconCircle from '../atoms/iconCircle';
import Heading from '../atoms/heading';    
import Text from '../atoms/text';           

interface FeatureCardProps {
  icon: React.ReactNode; 
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6">
      
      <div className="mb-4">
        <IconCircle>
          {icon} 
        </IconCircle>
      </div>
      
      <Heading level="h3" className="text-xl font-bold text-white mb-3">
        {title}
      </Heading>
      
      <Text variant="body" className="text-gray-300">
        {description}
      </Text>
    </div>
  );
};

export default FeatureCard;