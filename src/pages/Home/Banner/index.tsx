import React from 'react';
import { Box, Title, Image, Flex } from '@mantine/core';
import classes from './style.module.css';
import QrCode from '../../../assets/Qr code.png';
import AppStore from '../../../assets/App Store Download.png';
import GoogleStore from '../../../assets/Google Store Download.png';
import { IconQrcode } from '@tabler/icons-react';
import MobileImage from '../../../assets/Mobile Image.png';
import { Container } from '@mantine/core';

export function Banner() {
  return (
    <Box className={classes.banner}>
      <Container size={'lg'}>
        <Flex className={classes.flexBox}>
          <Box className={classes.firstBox}>
            <Image src={QrCode} alt="Qr code" className={classes.QrCode} />
            <Box>
              <Title className={classes.bannerTitle}>Lorem ipsum dolor sit amet consectetur.</Title>
              <Flex mt={10} gap={'md'} w={'100px'} className={classes.ImageFlex}>
                <Image src={AppStore} className={classes.AppStore} />
                <Image src={GoogleStore} className={classes.GoogleStore} />
              </Flex>
            </Box>
          </Box>
          <Box className={classes.SecondBox}>
            <Box className={classes.ImageParent}>
              <Image src={MobileImage} className={classes.MobileImage} />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
