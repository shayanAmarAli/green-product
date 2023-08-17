"use client"
import { useState, useEffect } from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const router = useRouter();
  if (imageUrl) {
    // Call the callback function to handle the uploaded image URL
    onImageUpload(imageUrl);
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImageUrl(null);
  };

  return (
    <VStack spacing={4}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="image-upload"
      />
      <label htmlFor="image-upload">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: '120px',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {selectedImage ? (
            <Image src={URL.createObjectURL(selectedImage)} className='shadow-md rounded' alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
          ) : (
            <Text fontSize={'10px'} textAlign={'center'}>
              {' '}
              Drop logo Here
            </Text>
          )}
        </motion.div>
      </label>
      <Box>
        {selectedImage && (
          <VStack spacing={2}>
            <Button colorScheme="red" onClick={handleRemoveImage}>
              Remove Image
            </Button>
          </VStack>
        )}
      </Box>
    </VStack>
  );
};

export default ImageUpload;
