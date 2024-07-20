import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            type: "",
            comment: "",
        },
        onSubmit: (values) => {
            submit('https://example.com/contactme', values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required"),
            email: Yup.string().email("Invalid email format").required("Email is required"),
            type: Yup.string().required("Please select an enquiry type"),
            comment: Yup.string().required("Please enter your message"),
        }),
    });
    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if (response.type === 'success') {
                formik.resetForm();
            }
        }
    }, [response]);

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#512DA8"
            py={16}
            spacing={8}
        >
            <VStack w="1024px" p={32} alignItems="flex-start" id="contactme-section">
                <Heading as="h1" >
                    Contact me
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                                <FormLabel htmlFor="firstName">Name</FormLabel>
                                <Input
                                    {...formik.getFieldProps("firstName")}
                                    id="firstName"
                                    name="firstName"
                                />
                                <FormErrorMessage>{formik.touched.firstName && formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input
                                    {...formik.getFieldProps("email")}
                                    id="email"
                                    name="email"
                                    type="email"
                                />
                                <FormErrorMessage>{formik.touched.email && formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                                    <option value="hireMe">Freelance project proposal</option>
                                    <option value="openSource">Open source consultancy session</option>
                                    <option value="other">Other</option>
                                </Select>
                                <FormErrorMessage>{formik.touched.type && formik.errors.type}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                                <FormLabel htmlFor="comment">Your message</FormLabel>
                                <Textarea
                                    {...formik.getFieldProps("comment")}
                                    id="comment"
                                    name="comment"
                                    height={250}
                                />
                                <FormErrorMessage>{formik.touched.comment && formik.errors.comment}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default LandingSection;
