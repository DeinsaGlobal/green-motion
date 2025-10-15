import React from "react";
import Avatar from "../atoms/avatar";
import Heading from "../atoms/heading";
import Text from "../atoms/text";

interface ProfileCardProps {
  imageSrc: string;
  alt: string;
  name: string;
  role: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  alt,
  name,
  role,
  description,
}) => {
  return (
    <div className="group text-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-900/70 transition-all duration-300 border border-transparent hover:border-[#00764e]/30">
      
      <div className="flex justify-center mb-6">
        <div className="relative">
          <Avatar src={imageSrc} alt={alt} />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00764e] to-[#47ba41] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
        </div>
      </div>

      <Heading 
        level="h3" 
        variant="modern"
        className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300"
      >
        {name}
      </Heading>

      <Text variant="small" className="text-[#47ba41] font-semibold mb-4 uppercase tracking-wide">
        {role}
      </Text>

      <Text variant="body" className="text-gray-300 leading-relaxed">
        {description}
      </Text>

      <div className="mt-6 h-1 w-16 mx-auto bg-gradient-to-r from-[#00764e] to-[#47ba41] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ProfileCard;