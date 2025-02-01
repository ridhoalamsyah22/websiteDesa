import { useState, useRef } from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import newsData from '../data/newsData.json';

import posyanduImage from '../assets/news/posyandu.jpg';
import ecoImage from '../assets/news/eco.jpg'
import tpsImage from '../assets/news/tps.jpg';
import digitalImage from '../assets/news/digital.jpg';
// import umkmImage from '../assets/news/umkm.jpg';
import dtaImage from '../assets/news/dta.jpg';
import ngajarImage from '../assets/news/ngajar.jpg';
import dumkmImage from '../assets/news/dumkm.jpg';
import senamImage from '../assets/news/senam.jpg';
import pepdImage from '../assets/news/pepd.jpg';
import pojokImage from '../assets/news/pojok.jpg';
import sosialImage from '../assets/news/sosial.jpg';
import kerjaImage from '../assets/news/kerja.jpg';

const imageMap = {
  './assets/news/digital.jpg': digitalImage, //-> Digitalisasi
  './assets/news/posyandu.jpg': posyanduImage, //-> posyandu
  // './assets/news/umkm.jpg': umkmImage, -> opak
  './assets/news/tps.jpg': tpsImage, //-> bak sampah
  './assets/news/eco.jpg': ecoImage, //-> ecobrick
  './assets/news/dta.jpg': dtaImage, //-> DTA
  './assets/news/ngajar.jpg': ngajarImage, //-> mengajar SD
  './assets/news/pojok.jpg': pojokImage, //-> pojok literasi
  './assets/news/senam.jpg': senamImage, //-> senam
  './assets/news/dumkm.jpg': dumkmImage, //-> digitalisasi umkm
  './assets/news/pepd.jpg': pepdImage,
  './assets/news/sosial.jpg': sosialImage, //-> pengelolaan sampah
  './assets/news/kerja.jpg': kerjaImage, //-> pengelolaan sampah
};

const News = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const containerRef = useRef(null);

  const [newsItems] = useState(newsData);

  const bgColor = useColorModeValue('whitesmoke', 'gray.800');
  const cardBgColor = 'whitesmoke';
  const cardShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  const textColor = '#12372A';
  const contentTextColor = '#12372A';

  const handleCardClick = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.firstChild.offsetWidth;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="news" className="py-16" style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto px-4">
        <Heading as="h2" size="xl" mb={8} textAlign="center" color={textColor}>
          Kegiatan Terbaru
        </Heading>
        <Box position="relative">
          <IconButton
            aria-label="Previous"
            icon={<ChevronLeftIcon boxSize={8} />} // Increase icon size
            size="lg" // Increase button size
            bg="rgba(18, 55, 42, 0.5)" // Make background more transparent
            color="whitesmoke"
            position="absolute"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            zIndex="10"
            onClick={() => scroll('left')}
            _hover={{ bg: 'emerald-900' }} // Change hover color
          />
          <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon boxSize={8} />} // Increase icon size
            size="lg" // Increase button size
            bg="rgba(18, 55, 42, 0.5)" // Make background more transparent
            color="whitesmoke"
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            zIndex="10"
            onClick={() => scroll('right')}
            _hover={{ bg: 'emerald-900' }} // Change hover color
          />
          <Box
            ref={containerRef}
            id="news-container"
            display="flex"
            overflowX="auto"
            padding="0 10px"
            scrollBehavior="smooth"
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {newsItems.map((item, index) => (
              <Box
                key={index}
                maxW="sm"
                bg={cardBgColor}
                shadow={cardShadow}
                overflow="hidden"
                margin="10px"
                flex="0 0 auto"
                cursor="pointer"
                onClick={() => handleCardClick(item)}
              >
                <Link>
                  <Image
                    src={imageMap[item.image]}
                    alt={item.title}
                    borderTopRadius="lg"
                    height="200px" // Set a fixed height for all images
                    width="100%" // Ensure images fill the card width
                    objectFit="cover" // Ensure images maintain aspect ratio and fill the height
                  />
                </Link>
                <Box p={5}>
                  <Link>
                    <Heading as="h5" size="md" mb={2} fontWeight="bold" color={textColor}>
                      {item.title}
                    </Heading>
                  </Link>
                  <Text fontSize="sm" color={contentTextColor} mb={2}>
                    {item.date}
                  </Text>
                  <Text mb={3} color={contentTextColor} textAlign="justify">
                    {item.content.substring(0, 100)}...
                  </Text>
                  <Button
                    as="a"
                    size="sm"
                    colorScheme="teal"
                    bg="#12372A"
                    color="whitesmoke"
                    rightIcon={
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    }
                  >
                    Selengkapnya
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Modal Component */}
        <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xs', md: 'lg', lg: '2xl' }}>
          <ModalOverlay />
          <ModalContent bg={cardBgColor} color={textColor}>
            <ModalHeader>{selectedItem?.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody overflowY="auto" textAlign="justify">
              <Box display="flex" justifyContent="center" mb={4}>
                <Image
                  src={imageMap[selectedItem?.image]}
                  alt={selectedItem?.title}
                  borderRadius="md"
                  maxW="100%" // Gambar memenuhi lebar modal
                  maxH="300px" // Membatasi tinggi gambar
                  objectFit="cover" // Memastikan gambar mempertahankan rasio aspek
                />
              </Box>
              <Text fontSize="lg" color={contentTextColor}>
                {selectedItem?.content}
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" bg="#12372A" color="whitesmoke" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};

export default News;
