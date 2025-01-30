import { Box, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const Location = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17982.457390972882!2d107.51992382676504!3d-6.247616380568272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6965a71879a615%3A0x9e80040d5009e8c8!2sBayur%20Lor%2C%20Kec.%20Cilamaya%20Kulon%2C%20Karawang%2C%20Jawa%20Barat!5e1!3m2!1sid!2sid!4v1737207434698!5m2!1sid!2sid";

  const bgColor = useColorModeValue('whitesmoke', 'gray.800');
  const textColor = useColorModeValue('#12372A');

  return (
    <section id="location" className="py-16" style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto px-4">
        <Heading as="h2" size="xl" mb={8} textAlign="center" color={textColor}>
          Lokasi Desa Bayur Lor
        </Heading>

        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
          {/* Google Maps Embed */}
          <Box>
            <iframe
              src={mapUrl}
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </Box>
          {/* Description and Contact Information */}
          <Box>
            <Heading as="h3" size="lg" mb={4} color={textColor}>
              Sistem Informasi Geospasial
            </Heading>
            <Text mb={6} color={textColor} textAlign={'justify'}>
              Peta Digital memuat segala informasi berbasis lokasi. Peta Digital dapat digunakan sebagai alat bantu dalam perumusan kebijakan serta mendukung pelaksanaan kegiatan yang berkaitan dengan tata ruang kebumian. Kemudian dari ketersediaan data geospasial desa akan dapat dibangun analisis data spasial yang akan menghasilkan informasi.
            </Text>
            <Heading as="h4" size="md" mb={2} color={textColor}>
              Informasi Geografis dan Batas Wilayah
            </Heading>
            <Text color={textColor}>
            <div style={{ display: "grid", gridTemplateColumns: "125px 20px auto", gap: "6px 1px 3px" }}>
              <span>Sebelah Utara</span>
              <span>:</span>
              <span>Desa SUKAMULYA</span> 
              <span>Sebelah Selatan</span>
              <span>:</span>
              <span>Desa BAYUR KIDUL</span>
              <span>Sebelah Timur</span>
              <span>:</span>
              <span>Desa CIKARANG</span>
              <span>Sebelah Barat</span>
              <span>:</span>
              <span>Desa LANGENSARI</span>
            </div>
            </Text>
          </Box>
        </Grid>
      </div>
    </section>
  );
};

export default Location;
