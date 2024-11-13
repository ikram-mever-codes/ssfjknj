"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
} from "@chakra-ui/react";
import { editPmProfile } from "api/pm";
import { RootState } from "app/Redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, FormEvent } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdAddAPhoto, MdSave } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";

interface EditPmProfileInterface {
  firstName: string;
  lastName: string;
  city: string;
  linkedinUrl: string;
  avatar?: File | null;
}
const EditProfile: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [linkedinUrl, setLinkedinUrl] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dispatch = useDispatch<Dispatch>();
  const { propertyManager } = useSelector(
    (state: RootState) => state.propertyManagerReducer
  );
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpdate = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const updatedData: EditPmProfileInterface = {
      firstName,
      lastName,
      city,
      linkedinUrl,
      avatar: selectedFile,
    };

    await editPmProfile(updatedData, dispatch);
    setLoading(false);
  };

  useEffect(() => {
    if (propertyManager === null) {
      router.push("/login");
      return;
    }
    setFirstName(propertyManager.firstName || "");
    setLastName(propertyManager.lastName || "");
    setCity(propertyManager.city || "");
    setLinkedinUrl(propertyManager.linkedinUrl || "");
    setAvatar(propertyManager.avatar || "");
  }, [propertyManager, router]);

  return (
    <Box className="w-full flex justify-center items-center py-8">
      <form
        className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleProfileUpdate}
      >
        <Box className="relative w-max h-max mx-auto mb-6">
          <Box
            className="absolute top-[10px] right-[-10px] bg-primary p-2 rounded-full cursor-pointer hover:bg-hoverPrimary"
            style={{ border: "2px solid white" }}
            onClick={() => {
              document
                .querySelector<HTMLInputElement>("#avatar-input")
                ?.click();
            }}
          >
            <MdAddAPhoto className="text-white text-xl" />
          </Box>
          {avatar !== "" ? (
            <Image
              className="object-cover object-center rounded-full w-[150px] h-[150px] border-2 border-primary"
              src={avatar}
              priority
              loading="eager"
              alt="Profile Picture"
              width={150}
              height={150}
            />
          ) : (
            <FaUserCircle className="text-[150px] text-primary" />
          )}
          <input
            id="avatar-input"
            className="hidden edit-input"
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleFileChange}
          />
        </Box>
        <Box className="flex flex-wrap gap-4 mb-6">
          <FormControl isRequired className="flex-1">
            <FormLabel>First Name</FormLabel>
            <Input
              borderColor="gray.300"
              _hover={{ borderColor: "gray.400" }}
              placeholder="First name"
              height="3rem"
              borderRadius="md"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired className="flex-1">
            <FormLabel>Last Name</FormLabel>
            <Input
              borderColor="gray.300"
              _hover={{ borderColor: "gray.400" }}
              placeholder="Last name"
              height="3rem"
              borderRadius="md"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box className="flex flex-wrap gap-4 mb-6">
          <FormControl isRequired className="flex-1">
            <FormLabel>City</FormLabel>
            <Input
              borderColor="gray.300"
              _hover={{ borderColor: "gray.400" }}
              placeholder="City"
              height="3rem"
              borderRadius="md"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired className="flex-1">
            <FormLabel>Linkedin Profile</FormLabel>
            <Input
              borderColor="gray.300"
              _hover={{ borderColor: "gray.400" }}
              placeholder="LinkedIn URL"
              height="3rem"
              borderRadius="md"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
            />
          </FormControl>
        </Box>
        <button
          disabled={loading}
          type="submit"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            width: "100%",
            fontWeight: "500",
            fontSize: "1.125rem",
            height: "3.5rem",
            borderRadius: "0.375rem",
            transition: "300ms ease-in-out",
            border: "none",
          }}
          className="bg-[#2E83AD] hover:bg-[#1A5D8C] active:bg-[#2C5282] disabled:cursor-not-allowed disabled:bg-[#0C3A55]"
        >
          <MdSave className="text-lg" style={{ marginRight: "0.5rem" }} />
          Save
        </button>
      </form>
    </Box>
  );
};

export default EditProfile;
