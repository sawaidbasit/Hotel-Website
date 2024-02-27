import { Box, Flex, Title, Image, SimpleGrid, Space } from '@mantine/core';
import React from 'react';
import classes from './style.module.css';
import { Link } from 'react-router-dom';
import {
  IconCarCrane,
  IconCarGarage,
  IconChairDirector,
  IconChefHat,
  IconContainer,
  IconDeviceGamepad,
  IconDeviceGamepad2,
  IconDeviceGamepad3,
  IconGlassCocktail,
  IconGoGame,
  IconHighlight,
  IconHomeBolt,
  IconLeaf,
  IconPaint,
  IconPaintOff,
  IconPlayerPlay,
  IconShoppingBag,
  IconSofa,
  IconSofaOff,
} from '@tabler/icons-react';

export function ServiceCards() {
  return (
    <Box>
      {/* <Flex justify={'space-between'} align={'flex-end'}> */}
        <Title className={classes.title}>Book Now! </Title>
        {/* <Link to={''} color="blue" className={classes.Anchortitle}>
          LoremLipsum
        </Link> */}
      {/* </Flex> */}

      <SimpleGrid cols={{ base: 1, sm: 3, md: 4, lg: 5 }} mt={20}>
        <Box className={classes.Cards} bg={'#EAEBEF'}>
          <Title className={classes.CardText}>Comfort</Title>
          <Space h={100} />
          <Box className={classes.cardFlex}>
            <Title className={classes.innerText}>Cozy Retreat</Title>
            <IconSofa className={classes.Icon} />
          </Box>
        </Box>

        <Box className={classes.Cards} bg={'#E6EDFF'}>
          <Title className={classes.CardText}>Adventure</Title>
          <Space h={100} />
          <Box className={classes.cardFlex}>
            <Title className={classes.innerText}>Dynamic Social Scene</Title>
            <IconGlassCocktail className={classes.Icon} />
          </Box>
        </Box>

        <Box className={classes.Cards} bg={'#F8DEDF'}>
          <Title className={classes.CardText}>Cuisine</Title>
          <Space h={100} />
          <Box className={classes.cardFlex}>
            <Title className={classes.innerText}>Fine Dining Experience</Title>
            <IconChefHat className={classes.Icon} />
          </Box>
        </Box>
        <Box className={classes.Cards} bg={'#F4F5F9'}>
          <Title className={classes.CardText}>Entertainment</Title>
          <Space h={100} />
          <Box className={classes.cardFlex}>
            <Title className={classes.innerText}>Exciting Evenings






</Title>
            <IconDeviceGamepad2 className={classes.Icon} />
          </Box>
        </Box>
        <Box className={classes.Cards} bg={'#D5FCC3'}>
          <Title className={classes.CardText}>Wellness

</Title>
          <Space h={100} />
          <Box className={classes.cardFlex}>
            <Title className={classes.innerText}>Relaxation Haven
</Title>
            <IconLeaf className={classes.Icon} />
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
