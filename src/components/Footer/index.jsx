import {
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    Stack,
    Text,
    Image,
    Box
  } from '@chakra-ui/react'
  import * as React from 'react'
  import logo from '../../assets/logo.jpeg'
  import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

  
  export const Footer = () => (
    <Container as="footer" role="contentinfo">
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

          <Image src={logo} boxSize='150px' alt='logo'/>
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
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Dirección
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Text variant="link">Magnasco N° 000</Text>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Telefonos
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
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="2rem" />}
          />
          <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook fontSize="2rem" />} />
          <IconButton as="a" href="#" aria-label="YouTube" icon={<FaYoutube fontSize="2rem" />} />
        </ButtonGroup>
      </Stack>
    </Container>
  )