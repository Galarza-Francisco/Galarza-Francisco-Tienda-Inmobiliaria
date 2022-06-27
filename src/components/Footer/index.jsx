import {
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    Stack,
    Text,
    Image,
    Box,
    Icon
  } from '@chakra-ui/react'
  import * as React from 'react'
  import logo from '../../assets/logoColor.png'
  import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
  import {GrMap,GrPhone} from 'react-icons/gr'

  
  export const Footer = () => (
    <Container as="footer" role="contentinfo" >
      <Stack
        spacing="8"
        direction={{
          base: 'column',
          md: 'row',
        }}
        justify="space-between"
        py={{
          base: '12',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '6',
            md: '8',
          }}
          align="start"
        >
            <Box>

          <Image display={{ base: "none", md: "block" }}  src={logo} boxSize='80px' alt='logo'/>
            </Box>
        </Stack>
        <Stack
          direction={{
            base: 'column-reverse',
            md: 'column',
            lg: 'row',
          }}
          spacing={{
            base: '12',
            md: '8',
          }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1" >
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                <Icon as={GrMap}></Icon> Dirección
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Text variant="link">Magnasco N° 157</Text>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                <Icon as={GrPhone}></Icon> Teléfonos
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Text variant="link">+54 3446-587272</Text>
                <Text variant="link">+54 3446-587272</Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} DLT PROPIEDADES.Todos los derechos reservados.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.instagram.com/dltpropiedades/"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="2rem" />}
          />
          <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook fontSize="2rem" />} />
          <IconButton as="a" href="#" aria-label="YouTube" icon={<FaYoutube fontSize="2rem" />} />
        </ButtonGroup>
      </Stack>
    </Container>
  )