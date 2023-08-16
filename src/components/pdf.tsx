import { useState } from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useFormContext } from '@/Global-State/Contexts/context'
import { FormContext } from '@/Global-State/Contexts/constext'
import { useRouter } from 'next/navigation';

const ImageUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <VStack spacing={4} >
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
            border: '2px dashed gray',
            borderRadius: '8px',
            width: '120px',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          ) : (
            <Text fontSize={"10px"} textAlign={"center"}> Drop logo Here</Text>
          )}
        </motion.div>
      </label>
      <Box>
        {selectedImage && (
          <VStack spacing={2}>
            <Text>
              Selected Image: {selectedImage.name} ({Math.round(selectedImage.size / 1024)} KB)
            </Text>
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