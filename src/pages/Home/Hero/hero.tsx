import { Welcome } from '../../../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../../../components/ColorSchemeToggle/ColorSchemeToggle';
import {
  Box,
  Button,
  CloseButton,
  Input,
  Text,
  ScrollArea,
  Select,
  SimpleGrid,
  Space,
  Tabs,
  TextInput,
  Title,
  rem,
  Group,
} from '@mantine/core';
import { Container } from '@mantine/core';
import classes from './style.module.css';
import {
  IconBurger,
  IconCar,
  IconHome,
  IconHotelService,
  IconLocation,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconShoppingBag,
} from '@tabler/icons-react';
import { DatePicker, DatePickerInput } from '@mantine/dates';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import '@mantine/dates/styles.css';
export function Hero() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const smallScreen = useMediaQuery('(min-width: 768px)');
  const [date, setdate] = useState<[Date | null, Date | null]>([null, null]);


  return (
    <Container size="xl" className={classes.Parent}>
      {smallScreen ? <Space h={200} /> : <Space h={50} />}
      <Box className={classes.ContentBox}>
        <Title className={classes.HeaderText}>Discover Luxury and Comfort at Peral Concious</Title>

        <Tabs defaultValue="Hotel" mt={20}>
          <ScrollArea w={'100%'} scrollbarSize={5}>
            <Tabs.List className={classes.tabList}>
              <Tabs.Tab value="Hotel" leftSection={<IconHome style={iconStyle} />}>
                Hotel
              </Tabs.Tab>
              <Tabs.Tab value="car" leftSection={<IconCar style={iconStyle} />}>
               Car
              </Tabs.Tab>
             
            </Tabs.List>
          </ScrollArea>

          <Tabs.Panel value="Hotel">
            <Box>
              <SimpleGrid
                cols={{ base: 1, xs: 2, sm: 3, md: 4, lg: 4 }}
                className={classes.TabPanel}
              >
                <DatePickerInput
      placeholder="Pick date"
      type='multiple'
    />
                <Select
      placeholder="Room"
      data={['1', '2', '3', '4','5','6','7','8','9','10']}
    />
                      <Input placeholder="Search" rightSection={<IconSearch size={16} />} />
                    <Button variant='outline' leftSection={<IconLocation size={15}/>}>Location</Button>

              </SimpleGrid>
            </Box>
          </Tabs.Panel>

          <Tabs.Panel value="Dining Options">
            <SimpleGrid cols={{ lg: 5, md: 4, sm: 3, base: 2 }} className={classes.TabPanel}>
              <Box className={classes.decriptionBox} bg={'#FFD700'}>
                <Text className={classes.HotelTitle}>Fine Dining: Culinary Delights</Text>
                <Text className={classes.HotelText}>
                  Experience gourmet cuisine in an elegant setting.
                </Text>
              </Box>

              <Box className={classes.decriptionBox}>
                <Text className={classes.HotelTitle}>Casual Dining: Relaxed Atmosphere</Text>
                <Text className={classes.HotelText}>
                  Enjoy comfort food in a laid-back ambiance.
                </Text>
              </Box>

              <Box className={classes.decriptionBox}>
                <Text className={classes.HotelTitle}>Poolside Bar: Refreshing Drinks</Text>
                <Text className={classes.HotelText}>
                  Sip on cocktails and enjoy grilled specialties by the pool.
                </Text>
              </Box>

              <Box className={classes.decriptionBox}>
                <Text className={classes.HotelTitle}>Room Service: Gourmet Meals, Delivered</Text>
                <Text className={classes.HotelText}>
                  Indulge in gourmet dishes from the comfort of your room.
                </Text>
              </Box>

              <Box className={classes.decriptionBox}>
                <Text className={classes.HotelTitle}>Private Dining: Intimate Gatherings</Text>
                <Text className={classes.HotelText}>
                  Create memorable moments with personalized dining experiences.
                </Text>
              </Box>
            </SimpleGrid>
          </Tabs.Panel>

          <Tabs.Panel value="Amenities and Services">
            <SimpleGrid cols={{ lg: 5, md: 4, sm: 3, base: 2 }} className={classes.TabPanel}>
              <Box className={classes.decriptionBox}>
                <Text className={classes.HotelTitle}>Swimming Pool: Relaxation Oasis</Text>
                <Text className={classes.HotelText}>
                  Dive into serenity and unwind by the poolside.
                </Text>
              </Box>

              <Box className={classes.decriptionBox}>
                <Text className={classes.HotelTitle}>Fitness Center: Stay Active</Text>
                <Text className={classes.HotelText}>
                  Energize your body and mind with our state-of-the-art gym.
                </Text>
              </Box>

              <Box className={classes.decriptionBox}>
                <Text className={classes.HotelTitle}>Business Center: Professional Solutions</Text>
                <Text className={classes.HotelText}>
                  Stay productive with our comprehensive business facilities.
                </Text>
              </Box>

              <Box className={classes.decriptionBox}>
                <Text className={classes.HotelTitle}>Concierge Services: Local Expertise</Text>
                <Text className={classes.HotelText}>
                  Let our concierge enhance your stay with personalized recommendations.
                </Text>
              </Box>

              <Box className={classes.decriptionBox}>
                <Text className={classes.HotelTitle}>Kids Club: Fun for Little Ones</Text>
                <Text className={classes.HotelText}>
                  {' '}
                  Keep children entertained with a range of exciting activities.
                </Text>
              </Box>
            </SimpleGrid>
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Container>
  );
}
