import { Box, Flex, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import classes from './style.module.css';

export function Cards() {
  return (
    <Box className={classes.cardContainer}>
      <SimpleGrid cols={{ lg: 4, md: 4, sm: 3, xs: 3, base: 2 }}>
        <Box className={classes.cardBox}>
          <Flex gap={'10px'}>
            <Text className={classes.Text}>Lorem</Text>
            <Text className={classes.LightText}>Loremlipsum</Text>
          </Flex>
        </Box>
        <Box className={classes.cardBox}>
          <Flex gap={'10px'}>
            <Text className={classes.Text}>Lorem</Text>
            <Text className={classes.LightText}>Loremlipsum</Text>
          </Flex>
        </Box>
        <Box className={classes.cardBox}>
          <Flex gap={'10px'}>
            <Text className={classes.Text}>Lorem</Text>
            <Text className={classes.LightText}>Loremlipsum</Text>
          </Flex>
        </Box>
        <Box className={classes.cardBox}>
          <Flex gap={'10px'}>
            <Text className={classes.Text}>Lorem</Text>
            <Text className={classes.LightText}>Loremlipsum</Text>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
