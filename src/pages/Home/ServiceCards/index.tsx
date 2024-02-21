import { Box, Flex, Title, Image, SimpleGrid, Space } from '@mantine/core';
import React from 'react';
import classes from './style.module.css';
import { Link } from 'react-router-dom';
import {
  IconCarCrane,
  IconCarGarage,
  IconChairDirector,
  IconContainer,
  IconHomeBolt,
  IconPaint,
  IconPaintOff,
  IconShoppingBag,
} from '@tabler/icons-react';

export function ServiceCards() {
  return (
    <Box>
      <Flex justify={'space-between'} align={'flex-end'}>
        <Title className={classes.title}>Lorem</Title>
        <Link to={''} color="blue" className={classes.Anchortitle}>
          LoremLipsum
        </Link>
      </Flex>

      <SimpleGrid cols={{ base: 1, sm: 3, md: 4, lg: 5 }} mt={20}>
        <Box className={classes.Cards} bg={'#EAEBEF'}>
          <Title className={classes.CardText}>LoremLipsum</Title>
          <Space h={100} />
          <Box className={classes.cardFlex}>
            <Title className={classes.innerText}>DummyText</Title>
            <IconChairDirector className={classes.Icon} />
          </Box>
        </Box>

        <Box className={classes.Cards} bg={'#E6EDFF'}>
          <Title className={classes.CardText}>LoremLipsum</Title>
          <Space h={100} />
          <Box className={classes.cardFlex}>
            <Title className={classes.innerText}>DummyText</Title>
            <IconPaint className={classes.Icon} />
          </Box>
        </Box>

        <Box className={classes.Cards} bg={'#F8DEDF'}>
          <Title className={classes.CardText}>LoremLipsum</Title>
          <Space h={100} />
          <Box className={classes.cardFlex}>
            <Title className={classes.innerText}>DummyText</Title>
            <IconShoppingBag className={classes.Icon} />
          </Box>
        </Box>
        <Box className={classes.Cards} bg={'#F4F5F9'}>
          <Title className={classes.CardText}>LoremLipsum</Title>
          <Space h={100} />
          <Box className={classes.cardFlex}>
            <Title className={classes.innerText}>DummyText</Title>
            <IconCarCrane className={classes.Icon} />
          </Box>
        </Box>
        <Box className={classes.Cards} bg={'#D5FCC3'}>
          <Title className={classes.CardText}>LoremLipsum</Title>
          <Space h={100} />
          <Box className={classes.cardFlex}>
            <Title className={classes.innerText}>DummyText</Title>
            <IconHomeBolt className={classes.Icon} />
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
