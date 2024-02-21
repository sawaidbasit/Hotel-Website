import { Box, SimpleGrid, Tabs, Title, rem,Text,Image, ScrollArea } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons-react";
import React from "react";
import buildingImage from "../../../assets/04700240ecc55df10c26b5a5a8b2d2ce.jpg";
import classes from "./style.module.css"

export function TabCard() {

    const iconStyle = { width: rem(12), height: rem(12) };


    return(
        <Box>
            <Title className={classes.Maintitle}>Lorem</Title>
            <Tabs defaultValue="gallery" mt={20}>
      <Tabs.List className={classes.TabsList} >
        <Tabs.Tab value="gallery" className={classes.Tab}>
          Lorem
        </Tabs.Tab>
        <Tabs.Tab value="messages" className={classes.Tab}>
          lipsum
        </Tabs.Tab>
        <Tabs.Tab value="settings" className={classes.Tab}>
          Dummy
        </Tabs.Tab>
        <Tabs.Tab value="content"className={classes.Tab}>
          Content
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        <SimpleGrid cols={{lg:4, md:3, sm:2, xs:1}} mt={20}>
            <Box className={classes.Card}>
                <Image src={buildingImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nam?</Text>
                <Text className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nisi? Expedita vero repellendus nam alias, reiciendis, totam ad quidem minus ducimus....</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={buildingImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nam?</Text>
                <Text className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nisi? Expedita vero repellendus nam alias, reiciendis, totam ad quidem minus ducimus....</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={buildingImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nam?</Text>
                <Text className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nisi? Expedita vero repellendus nam alias, reiciendis, totam ad quidem minus ducimus....</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={buildingImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nam?</Text>
                <Text className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nisi? Expedita vero repellendus nam alias, reiciendis, totam ad quidem minus ducimus....</Text>
                </Box>
            </Box>   
            
        </SimpleGrid>
      </Tabs.Panel>
    </Tabs>
        </Box>
    )
}