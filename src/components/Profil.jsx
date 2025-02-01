import { Box, Heading, Grid } from "@chakra-ui/react";

const Profil = () => {
  const textColor = "#12372A";

  return (
    <Box as="section" py={16} className="rounded-md">
      <div className="container mx-auto px-4">
        <Grid
          templateColumns={{ base: "1fr", md: "auto auto" }}
          gap={20}
          alignItems="center"
        >
          <Box
            display="flex"
            justifyContent={{ base: "center", md: "flex-end" }}
            textAlign={{ base: "center", md: "right" }}
            className="flex-col"
          >
            <Heading as="h2" size="lg" color={textColor} mb={2}>
              Profil Desa
            </Heading>
            <Heading as="h2" size="lg" color={textColor}>
              Bayur Lor Karawang
            </Heading>
          </Box>
          <Box
            display="flex"
            justifyContent="left"
            maxW={{ base: "100%", md: "420px" }}
          >
            <iframe
              width="100%"
              height="236.25"
              src="https://www.youtube.com/embed/cPUk2Agay94"
              title="DOKUMENTASI PROFILE DESA BAYUR LOR KECAMATAN CILAMAYA KULON KABUPATEN KARAWANG | KKN UNSIKA 2025"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Box>
        </Grid>
      </div>
    </Box>
  );
};

export default Profil;
