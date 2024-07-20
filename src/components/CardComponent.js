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
        <Card>
            <VStack className="position-relative">
                <Image className="rounded" src={imageSrc} />
                <Box ps="3" pe="8" pt="3" pb="10">
                    <Heading size="md">{title}</Heading>
                    <Text>{description}</Text>
                    <HStack className="position-absolute bottom-0 pb-3">
                        <a p="2">See more</a>
                        <FontAwesomeIcon icon={faArrowRight} size="1x" />
                    </HStack>
                </Box>

            </VStack>
        </Card >
    )
};

export default CardComponent;
