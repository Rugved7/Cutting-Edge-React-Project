import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'
const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button pos={'fixed'}  zIndex={'overlay'} top={'4'} left={'4'} colorScheme='teal' p={'0'} w={'10'} h={'10'} >
        <BiMenuAltLeft size={'20'} onClick={onOpen} />
      </Button>

      {/* Drawer on clicking menu button */}

      <Drawer isOpen={isOpen} placement='start' onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Cutting-Edge...</DrawerHeader>
          <DrawerBody>
            <VStack>
              <Button onClick={onClose} variant={'ghost'} colorScheme='teal'>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme='teal'>
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme='teal'>
                <Link to={'/?videos?category=free'}>Stream Free</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme='teal'>
                <Link to={'/upload'}>Your Videos</Link>
              </Button>
            </VStack>

            <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justify ={'space-evenly'}>
              <Button onClick={onClose}  variant={'solid'} colorScheme='teal'>
                <Link to={'/login'}>Log In</Link>
              </Button>

              <Button onClick={onClose}  variant={'outline'} colorScheme='teal'>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>


          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header