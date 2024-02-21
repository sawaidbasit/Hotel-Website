import { Welcome } from '../../../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../../../components/ColorSchemeToggle/ColorSchemeToggle';
import { Box, Button, CloseButton, Input,Text, ScrollArea, Select, SimpleGrid, Space, Tabs, TextInput, Title, rem } from '@mantine/core';
import { Container } from '@mantine/core';
import classes from "./style.module.css"
import { IconBurger, IconCar, IconHome, IconHotelService, IconLocation, IconMessageCircle, IconPhoto, IconSettings, IconShoppingBag } from '@tabler/icons-react';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
export function Hero() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const [value, setValue] = useState('Clear me');
  const smallScreen = useMediaQuery('(min-width: 768px)');

  return (
    <Container size="xl" className={classes.Parent}>
      {smallScreen ? <Space h={100}/> : <Space h={50}/>}
        <Box className={classes.ContentBox} >
      <Title className={classes.HeaderText}>Discover Luxury and Comfort at Peral Concious</Title>
      
      <Tabs defaultValue="Exciting Stays" mt={20}>
      <ScrollArea w={"100%"} scrollbarSize={5}>
      <Tabs.List  className={classes.tabList}>
        <Tabs.Tab className={classes.Tabs_tab} value="Exciting Stays" leftSection={<IconHome style={iconStyle} />}>
        Exciting Stays
        </Tabs.Tab>
        <Tabs.Tab value="Dining Options" leftSection={<IconBurger style={iconStyle} />}>
        Dining Options
        </Tabs.Tab>
        <Tabs.Tab value="Amenities and Services" leftSection={<IconHotelService style={iconStyle} />}>
        Amenities and Services
        </Tabs.Tab>
      </Tabs.List>
      </ScrollArea>

      <Tabs.Panel value="Exciting Stays">
        <Box >
          <SimpleGrid cols={{base:1,xs:2,sm:3,md:4,lg:5}}
            className={classes.TabPanel}>
              <Box className={classes.decriptionBox} bg={"#FFD700"}>
                <Text className={classes.HotelTitle}>Deluxe Rooms: Luxury Redefined</Text>
                <Text className={classes.HotelText}>Experience opulence with modern comforts.</Text>
              </Box>

              <Box className={classes.decriptionBox} bg={"#800000"}>
                <Text className={classes.HotelTitle}>Suites: Unmatched Elegance</Text>
                <Text className={classes.HotelText}>Indulge in spacious luxury and breathtaking views.</Text>
              </Box>

              <Box className={classes.decriptionBox} bg={"#F5F5DC"}>
                <Text className={classes.HotelTitle}>Family Rooms: Spacious Comfort</Text>
                <Text className={classes.HotelText}>Perfect for creating cherished family memories.</Text>
              </Box>

              <Box className={classes.decriptionBox} bg={"#87CEEB"}>
                <Text className={classes.HotelTitle}>Accessible Rooms: Inclusive Comfort</Text>
                <Text className={classes.HotelText}>Ensuring comfort for all guests.</Text>
              </Box>
              
              <Box className={classes.decriptionBox} bg={"#008000"}>
                <Text className={classes.HotelTitle}>Penthouse: The Height of Luxury</Text>
                <Text className={classes.HotelText}>Exquisite living with unparalleled views.</Text>
              </Box>
        </SimpleGrid>
        </Box>
      </Tabs.Panel>

      <Tabs.Panel value="Dining Options">
      <SimpleGrid cols={{lg:5, md:4, sm:3, base:2}}
            className={classes.TabPanel}>
              <Box className={classes.decriptionBox} bg={"#FFD700"}>
                <Text className={classes.HotelTitle}>Fine Dining: Culinary Delights</Text>
                <Text className={classes.HotelText}>Experience gourmet cuisine in an elegant setting.</Text>
              </Box>

              <Box className={classes.decriptionBox} >
                <Text className={classes.HotelTitle}>Casual Dining: Relaxed Atmosphere</Text>
                <Text className={classes.HotelText}>Enjoy comfort food in a laid-back ambiance.
</Text>
              </Box>

              <Box className={classes.decriptionBox} >
                <Text className={classes.HotelTitle}>Poolside Bar: Refreshing Drinks</Text>
                <Text className={classes.HotelText}>Sip on cocktails and enjoy grilled specialties by the pool.</Text>
              </Box>

              <Box className={classes.decriptionBox} >
                <Text className={classes.HotelTitle}>Room Service: Gourmet Meals, Delivered</Text>
                <Text className={classes.HotelText}>Indulge in gourmet dishes from the comfort of your room.</Text>
              </Box>
              
              <Box className={classes.decriptionBox} >
                <Text className={classes.HotelTitle}>Private Dining: Intimate Gatherings</Text>
                <Text className={classes.HotelText}>Create memorable moments with personalized dining experiences.</Text>
              </Box>
       
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="Amenities and Services">
      <SimpleGrid cols={{lg:5, md:4, sm:3, base:2}}
            className={classes.TabPanel}>
              <Box className={classes.decriptionBox} >
                <Text className={classes.HotelTitle}>Swimming Pool: Relaxation Oasis</Text>
                <Text className={classes.HotelText}>Dive into serenity and unwind by the poolside.</Text>
              </Box>

              <Box className={classes.decriptionBox} >
                <Text className={classes.HotelTitle}>Fitness Center: Stay Active</Text>
                <Text className={classes.HotelText}>Energize your body and mind with our state-of-the-art gym.</Text>
              </Box>

              <Box className={classes.decriptionBox} >
                <Text className={classes.HotelTitle}>Business Center: Professional Solutions</Text>
                <Text className={classes.HotelText}>Stay productive with our comprehensive business facilities.</Text>
              </Box>

              <Box className={classes.decriptionBox} >
                <Text className={classes.HotelTitle}>Concierge Services: Local Expertise</Text>
                <Text className={classes.HotelText}>Let our concierge enhance your stay with personalized recommendations.</Text>
              </Box>
              
              <Box className={classes.decriptionBox} >
                <Text className={classes.HotelTitle}>Kids Club: Fun for Little Ones</Text>
                <Text className={classes.HotelText}> Keep children entertained with a range of exciting activities.</Text>
              </Box>
        </SimpleGrid>
      </Tabs.Panel>
    </Tabs>

        </Box>
    </Container>
  );
}
