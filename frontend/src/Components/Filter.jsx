import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Checkbox,
    Stack,
} from "@chakra-ui/react";

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialState = searchParams.getAll("category");
    const [category, setCategory] = useState(initialState || []);
    const navigate = useNavigate();
    const handleChange = (e) => {
        let newCategory = [...category];
        let value = e.target.value;

        if (newCategory.includes(value)) {
            newCategory.splice(newCategory.indexOf(value), 1);
        } else {
            newCategory.push(value);
        }
        setCategory(newCategory);
    };

    useEffect(() => {
        let params = {
            category,
        };
        setSearchParams(params);
    }, [category]);
    console.log(category);

    return (
        <div
            style={{
                border: ".5px solid #ccc",
                borderRadius: "10px",
                margin: "8px",
            }}>
            <Accordion allowToggle defaultIndex={[0]}>
                <AccordionItem>
                    <h2>
                        <AccordionButton
                            _expanded={{
                                rounded: "lg",
                            }}>
                            <Box as="span" flex="1" textAlign="left">
                                Filter by Category
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <Stack spacing={5}>
                            <Checkbox
                                value="RedWine"
                                isChecked={category.includes("RedWine")}
                                onChange={handleChange}>
                                Red Wine
                            </Checkbox>

                            <Checkbox
                                value="WhiteWine"
                                isChecked={category.includes("WhiteWine")}
                                onChange={handleChange}>
                                White Wine
                            </Checkbox>

                            <Checkbox
                                value="SparklingWine"
                                isChecked={category.includes("SparklingWine")}
                                onChange={handleChange}>
                                Sparkling Wine
                            </Checkbox>

                            <Checkbox
                                value="Champagne"
                                isChecked={category.includes("Champagne")}
                                onChange={handleChange}>
                                Champagne
                            </Checkbox>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Filter;
