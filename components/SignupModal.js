import { useState } from 'react';
import {
  Flex,
  useColorMode,
  IconButton,
  Button,
  ModalOverlay,
  ModalContent,
  Modal,
  ModalCloseButton,
  useDisclosure,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Box,
  Text,
} from '@chakra-ui/react';
import { RiGithubFill } from 'react-icons/ri';

const SignupModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg='gray.400'>
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Flex bg='white' align='center' p={4} borderRadius='md'>
                <RiGithubFill size='24' />
                <Text ml={4}>Sign up with github</Text>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SignupModal;
