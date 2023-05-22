import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Checkbox,
    Select,
    Stack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

 const Sidebar = () => {
     const [searchParams, setSearchParams] = useSearchParams();
     const initialState = searchParams.getAll("category");
     const [category, setCategory] = useState(initialState || []);
     const initialOrder = searchParams.get("order");
     const [order, setOrder] = useState(initialOrder || "");

    //  const handleSort = (e) => {
    //      console.log(e.target.value);
    //      setOrder(e.target.value);
    //  };
     const handleSort = (e) => {
         const selectedValue = e.target.selectedOptions[0].value;
         setOrder(selectedValue);
     };



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

    //  useEffect(() => {
    //      let params = {
    //          category,
    //      };
    //      order && (params.order = order);
    //      setSearchParams(params);
    //  }, [category, order]);
     useEffect(() => {
         const params = { category };
         if (order) {
             params.order = order;
         }
         setSearchParams(params);
     }, [category, order]);


     return (
         <div
             style={{
                 border: ".5px solid #ccc",
                 borderRadius: "10px",
                 margin: "8px",
             }}>
             <Accordion allowToggle defaultIndex={[0]}>
                 <AccordionItem style={{ border: "none" }}>
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
             <Select
                 _focusVisible={{ outline: "none" }}
                 icon={<ChevronDownIcon />}
                 onChange={handleSort}>
                 <option value="">Relevance</option>
                 <option value="asc">Low to High</option>
                 <option value="desc">High to low</option>
             </Select>
         </div>
     );
 };

export default Sidebar;
