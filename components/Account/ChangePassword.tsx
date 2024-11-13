"use client";
import React from "react";
import { Button, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import { MdPassword } from "react-icons/md";

const ChangePassword: React.FC = () => {
  return (
    <Box className="w-full flex justify-center items-center min-h-[60vh] py-8">
      <Box
        as="form"
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
        border="1px solid"
        borderColor="gray.200"
      >
        <FormControl isRequired mb={4}>
          <FormLabel>Current Password</FormLabel>
          <Input
            type="password"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
            placeholder="Current Password"
            height="3.5rem"
            borderRadius="md"
          />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>New Password</FormLabel>
          <Input
            type="password"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
            placeholder="New Password"
            height="3.5rem"
            borderRadius="md"
          />
        </FormControl>
        <FormControl isRequired mb={6}>
          <FormLabel>Confirm New Password</FormLabel>
          <Input
            type="password"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
            placeholder="Confirm New Password"
            height="3.5rem"
            borderRadius="md"
          />
        </FormControl>
        <Button
          leftIcon={<MdPassword className="text-lg" />}
          width="full"
          fontWeight="medium"
          fontSize="lg"
          height="3.5rem"
          borderRadius="md"
          _hover={{ bg: "primary.600" }}
          _active={{ bg: "primary.700" }}
          transition="300ms ease-in-out"
          className="bg-button"
        >
          Change
        </Button>
      </Box>
    </Box>
  );
};

export default ChangePassword;
