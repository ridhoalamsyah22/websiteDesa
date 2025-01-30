import { useState } from 'react';
import {
  Box,
  Grid,
  Heading,
  Text,
  Image,
  Button,
  Icon
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import potensiData from '../data/potensiData.json';

// Import images
import pakcoyImage from '../assets/potensi/pakcoy.jpg';
import kerupukImage from '../assets/potensi/kerupuk.jpg';
import mangroveImage from '../assets/potensi/mangrove.jpeg';
import sedariImage from '../assets/potensi/sedari.jpg';
import bazarImage from '../assets/potensi/bazar.jpg';
import majunImage from '../assets/potensi/majun.jpg';
import kueBasahImage from '../assets/potensi/kue-basah.jpg';
import mochiImage from '../assets/potensi/mochi.jpg';
import keripikImage from '../assets/potensi/kripik.jpg';
import jajananImage from '../assets/potensi/jajanan.jpg';

// Map images to their paths
const imageMap = {
  './assets/potensi/pakcoy.jpg': pakcoyImage,
  './assets/potensi/kerupuk.jpg': kerupukImage,
  './assets/potensi/mangrove.jpeg': mangroveImage,
  './assets/potensi/sedari.jpg': sedariImage,
  './assets/potensi/bazar.jpg': bazarImage,
  './assets/potensi/majun.jpg': majunImage,
  './assets/potensi/kue-basah.jpg': kueBasahImage,
  './assets/potensi/mochi.jpg': mochiImage,
  './assets/potensi/kripik.jpg': keripikImage,
  './assets/potensi/jajanan.jpg': jajananImage,
};

const PotensiDesa = () => {
  const [selectedCategory, setSelectedCategory] = useState('UMKM');

  // Get unique categories
  const categories = [...new Set(potensiData.map(item => item.kategori))];
  const filteredData = potensiData.filter(item => item.kategori === selectedCategory);

  // Style variables
  const cardBgColor = 'whitesmoke';
  const cardBorderColor = '#12372A';
  const textColor = '#12372A';
  const contentTextColor = '#12372A';

  const isEmpty = filteredData.length === 0;

  return (
    <section id="potensi" className="py-16">
      <div className="container mx-auto px-4">
        <Heading as="h2" size="xl" mb={8} textAlign="center" color={textColor}>
          Potensi Desa Bayur Lor
        </Heading>

        <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={4} mb={8}>
          {categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'solid' : 'outline'}
              colorScheme="teal"
              borderColor={textColor}
              color={selectedCategory === category ? 'white' : textColor}
              bg={selectedCategory === category ? textColor : 'transparent'}
              _hover={{ bg: textColor, color: 'white' }}
              _focus={{ boxShadow: 'none' }}
            >
              {category}
            </Button>
          ))}
        </Grid>

        {isEmpty ? (
          <Box textAlign="center" p={5} borderWidth="1px" borderRadius="lg" bg={cardBgColor} borderColor={cardBorderColor}>
            <Icon as={InfoOutlineIcon} boxSize={10} color="gray.400" mb={4} />
            <Text fontSize="lg" color={textColor}>
              Potensi desa di bidang <strong>{selectedCategory}</strong> belum tersedia.
            </Text>
          </Box>
        ) : (
          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
            {filteredData.map(item => (
              <Box
                key={item.id}
                bg={cardBgColor}
                border="1px"
                borderColor={cardBorderColor}
                borderRadius="lg"
                shadow="lg"
                overflow="hidden"
                p={5}
              >
                <Box w="100%" h="200px" overflow="hidden" mb={4}>
                  <Image src={imageMap[item.gambar]} alt={item.judul} w="100%" h="100%" objectFit="cover" className='rounded-s' />
                </Box>
                <Heading as="h5" size="md" mb={2} fontWeight="bold" color={textColor}>
                  {item.judul}
                </Heading>
                <Text color={contentTextColor} textAlign="justify">
                  {item.deskripsi}
                </Text>
              </Box>
            ))}
          </Grid>
        )}
      </div>
    </section>
  );
};

export default PotensiDesa;
