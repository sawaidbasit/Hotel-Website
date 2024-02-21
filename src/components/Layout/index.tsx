import {
  AppShell,
  Text,
  Avatar,
  Box,
  Burger,
  Container,
  Flex,
  Group,
  Indicator,
  Menu,
  NavLink,
  Stack,
  Title,
  Tooltip,
  UnstyledButton,
  Image,
  Button,
  Drawer,
  SimpleGrid,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';
import classes from './style.module.css';
import {
  IconClick,
  IconHotelService,
  IconClock,
  IconHeart,
  IconHome,
  IconMessage,
  IconMessage2,
  IconStatusChange,
  IconUser,
} from '@tabler/icons-react';

const links = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Rooms',
    link: '/Rooms',
  },
  {
    label: 'Dining',
    link: '/Dining',
  },
  {
    label: 'Amenities',
    link: '/Amenities',
  },
  {
    label: 'Gallery',
    link: '/Gallery',
  },
  {
    label: 'Offers',
    link: '/Offers',
  },
  
];

export default function Layout() {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(links[0].link);


  const items:any = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  const ResponsiveMatches = useMediaQuery('(min-width: 992px)');

  return (
    <AppShell
      // header={{ height: 60 }}
      navbar={{ width: 80, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Box p={'md'}>
          <Flex justify={'space-between'} align={"flex-end"}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
            <Group h="100%">
              <Image src={logo} className={classes.logo} />
            </Group>
            {ResponsiveMatches ? <Flex mt={20} className={classes.HeaderFlex}>
            <Flex className={classes.Headers}>
              {links.map((navbar, Ind) => {
                return (
                  <Text key={Ind} component={Link} to={navbar.link} className={classes.navbar}>
                    {navbar.label}
                  </Text>
                );
              })}
            </Flex>
            
          </Flex> : null}
            <Button leftSection={<IconMessage2 size={14} />}>Contact Us</Button>
          </Flex>
        </Box>
        <Drawer opened={opened} onClose={toggle} title="Menu">
        {items}
      </Drawer>
      </AppShell.Header>

      <AppShell.Main p={ResponsiveMatches ? '50px 0px 0px 0px' : '50px 0px 0px 0px'}>
        {/* <Container size={'xl'} className={classes.ParentContainer}> */}
        <Container size={'xl'}>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
