"use client";

import React, { useState, useEffect } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { verifPmACcount } from "api/pm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "app/Redux/store";

const VerificationPage: React.FC = () => {
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { propertyManager } = useSelector(
    (state: RootState) => state.propertyManagerReducer
  );

  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6 || !email) {
      setErrorMessage("Incomplete Code!");
      return;
    }
    setIsSubmitting(true);
    await verifPmACcount({ email, code, dispatch, setErrorMessage });
    setIsSubmitting(false);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("signUpData");

    if (!storedData) {
      router.push("/login");
      return;
    }

    try {
      const { email } = JSON.parse(storedData);
      setEmail(email);
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    if (propertyManager !== null) {
      return router.push("/");
    }
  }, [propertyManager, router]);

  return (
    <Flex
      w="full"
      minH="100vh"
      className="bg-background"
      alignItems="center"
      justifyContent="center"
      p={6}
    >
      <Box
        bg="white"
        rounded="xl"
        shadow="md"
        p={{ base: 6, md: 8 }}
        maxW="md"
        w="full"
        border="1px"
        borderColor="border"
      >
        <Flex justify="center" mb={6}>
          <FaCheckCircle size="60" color="#4CAF50" />
        </Flex>
        <Heading
          as="h1"
          textAlign="center"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="primary.700"
          mb={4}
        >
          Verify Your Account
        </Heading>
        <Text textAlign="center" fontSize="lg" color="text" mb={6}>
          Please enter the 6-digit verification code sent to{" "}
          <span className="font-semibold ">{email}</span>.
        </Text>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} mb={6}>
            <HStack spacing={4} justify="center">
              <PinInput
                onChange={(value) => setCode(value)}
                otp
                size="lg"
                _focus={{
                  borderColor: "primary.500",
                  boxShadow: "0 0 0 1px primary.500",
                }}
                isInvalid={code.length !== 6}
              >
                <PinInputField
                  borderColor="gray.500"
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "0 0 0 1px primary.500",
                  }}
                  _invalid={{
                    borderColor: "gray.500",
                  }}
                />
                <PinInputField
                  borderColor="gray.500"
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "0 0 0 1px primary.500",
                  }}
                  _invalid={{
                    borderColor: "gray.500",
                  }}
                />
                <PinInputField
                  borderColor="gray.500"
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "0 0 0 1px primary.500",
                  }}
                  _invalid={{
                    borderColor: "gray.500",
                  }}
                />
                <PinInputField
                  borderColor="gray.500"
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "0 0 0 1px primary.500",
                  }}
                  _invalid={{
                    borderColor: "gray.500",
                  }}
                />
                <PinInputField
                  borderColor="gray.500"
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "0 0 0 1px primary.500",
                  }}
                  _invalid={{
                    borderColor: "gray.500",
                  }}
                />
                <PinInputField
                  borderColor="gray.500"
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "0 0 0 1px primary.500",
                  }}
                  _invalid={{
                    borderColor: "gray.500",
                  }}
                />
              </PinInput>
            </HStack>
            {errorMessage !== "" && (
              <Alert status="error">
                <AlertIcon />
                <AlertDescription fontSize={"14px"} textAlign="center">
                  {errorMessage}
                </AlertDescription>
              </Alert>
            )}
            <Button
              isDisabled={isSubmitting}
              type="submit"
              colorScheme="primary"
              width="full"
              fontSize="lg"
              h="3rem"
              borderRadius="md"
              isLoading={isSubmitting}
              _hover={{ bg: "primary.600" }}
              _active={{ bg: "primary.700" }}
              leftIcon={<FaCheckCircle />}
            >
              Verify
            </Button>
          </Stack>
        </form>
        <Flex mt={6} justify="center">
          <Button
            variant="link"
            color="primary.500"
            className="font-secondary"
            _hover={{ textDecoration: "underline", color: "primary.600" }}
            onClick={() => {}}
          >
            Resend Code
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default VerificationPage;
