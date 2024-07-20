import { Heading, HStack, Image, Text, VStack, Card, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

const CardComponent = ({ title, description, imageSrc }) => {
    // Implement the UI for the CardComponent component according to the instructions.

    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        // <Card>
        //     <VStack className="position-relative">
        //         <Image className="rounded" src={imageSrc} />
        //         <Box ps="3" pe="8" pt="3" pb="10">
        //             <Heading size="md">{title}</Heading>
        //             <Text>{description}</Text>
        //             <HStack className="position-absolute bottom-0 pb-3">
        //                 <a p="2">See more</a>
        //                 <FontAwesomeIcon icon={faArrowRight} size="1x" />
        //             </HStack>
        //         </Box>

        //     </VStack>
        // </Card >
        <VStack
            color="black"
            backgroundColor="white"
            cursor="pointer"
            borderRadius="xl"
        >
            <Image borderRadius="xl" src={imageSrc} alt={title} />
            <VStack spacing={4} p={4} alignItems="flex-start">
                <HStack justifyContent="space-between" alignItems="center">
                    <Heading as="h3" size="md">
                        {title}
                    </Heading>
                </HStack>
                <Text color="#64748b" fontSize="lg">
                    {description}
                </Text>
                <HStack spacing={2} alignItems="center">
                    <p>See more</p>
                    <FontAwesomeIcon icon={faArrowRight} size="1x" />
                </HStack>
            </VStack>
        </VStack>
    )
};

export default CardComponent;
