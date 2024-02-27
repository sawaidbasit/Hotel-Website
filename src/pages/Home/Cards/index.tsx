import { Box, Flex, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import classes from './style.module.css';

export function Cards() {
  return (
    <Box className={classes.cardContainer}>
      <Flex justify={"space-between"} className={classes.CardGrid}>
        <Box className={classes.cardBox}>
          <Flex gap={'10px'}>
            <Text className={classes.Text}>Luxury</Text>
            <Text className={classes.LightText}>Unparalleled comfort awaits.
</Text>
          </Flex>
        </Box>
        <Box className={classes.cardBox}>
          <Flex gap={'10px'}>
            <Text className={classes.Text}>Adventure</Text>
            <Text className={classes.LightText}>Thrills beyond compare.
</Text>
          </Flex>
        </Box>
        <Box className={classes.cardBox}>
          <Flex gap={'10px'}>
            <Text className={classes.Text}>Serenity</Text>
            <Text className={classes.LightText}>Peaceful oasis found.
</Text>
          </Flex>
        </Box>
        <Box className={classes.cardBox}>
          <Flex gap={'10px'}>
            <Text className={classes.Text}>Indulgence</Text>
            <Text className={classes.LightText}>Decadence redefined here.
</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
