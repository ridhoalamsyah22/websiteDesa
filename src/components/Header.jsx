import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  IconButton,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`p-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary text-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <Box as="a" href="/" display="flex" alignItems="center">
          <Heading as="h1" fontSize="2xl" className="md:block text-white">
            Desa Bayur Lor
          </Heading>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              aria-label="Toggle Menu"
              icon={<HamburgerIcon w={9} h={9} />}
              onClick={onOpen}
              variant="unstyled"
              className={` ${isScrolled ? 'text-black' : 'text-white'}`}
            />
            <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="full">
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <Box as="nav" display="flex" flexDirection="column" alignItems="center">
                    <Link href="/" className="block py-2 px-4 hover:underline" onClick={onClose}>
                      Beranda
                    </Link>
                    <Link href="#about" className="block py-2 px-4 hover:underline" onClick={onClose}>
                      Tentang
                    </Link>
                    <Link href="#news" className="block py-2 px-4 hover:underline" onClick={onClose}>
                      Berita
                    </Link>
                    <Link href="#gallery" className="block py-2 px-4 hover:underline" onClick={onClose}>
                      Galeri
                    </Link>
                    <Link href="#location" className="block py-2 px-4 hover:underline" onClick={onClose}>
                      Peta
                    </Link>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Box display="flex" alignItems="center" className="font-semibold text-white">
            <Link href="/" className="mx-4 hover:underline">
              Beranda
            </Link>
            <Link href="#about" className="mx-4 hover:underline">
              Tentang
            </Link>
            <Link href="#news" className="mx-4 hover:underline">
              Berita
            </Link>
            <Link href="#gallery" className="mx-4 hover:underline">
              Galeri
            </Link>
            <Link href="#location" className="mx-4 hover:underline">
              Peta
            </Link>
          </Box>
        )}
      </div>
    </header>
  );
};

export default Header;
