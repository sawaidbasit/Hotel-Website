import { Box, SimpleGrid, Tabs, Title, rem,Text,Image, ScrollArea } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons-react";
import React from "react";
import buildingImage from "../../../assets/04700240ecc55df10c26b5a5a8b2d2ce.jpg";
import classes from "./style.module.css"
import TouristImage from "../../../assets/Tourist.jpg"
import ChefImage from "../../../assets/chef-5993951_1280.jpg"
import PeopleEnjoying from "../../../assets/people-3614311_1280.jpg";
import PaintImage from "../../../assets/baby-2353363_1280.jpg";
import MountainImage from "../../../assets/mountains-1587287_1280.jpg";
import SwimingPool from "../../../assets/bora-bora-3023437_1280.jpg";
import ZipLine from "../../../assets/zip-line-7608197_1280.jpg";
import SafariTour from "../../../assets/elephant-2729413_1280.jpg";
import MeetingsRoom from "../../../assets/chairs-2181960_1280.jpg";
import ConferenceHoll from "../../../assets/meeting-83519_960_720.jpg";
import ComputerImage from "../../../assets/apple-1868496_1280.jpg";
import NetWorkImage from "../../../assets/teamwork-3213924_1280.jpg";
import SpaTherapist from "../../../assets/spa-therapist-cosmetologist-making-relaxing-260nw-1855045330.jpg";
import YogaImage from "../../../assets/yoga-3991323_1280.jpg";
import GymImage from "../../../assets/gym-91849_1280.jpg";
import RelaxImage from "../../../assets/lake-5488121_1280.jpg"

export function TabCard() {

    const iconStyle = { width: rem(12), height: rem(12) };

    return(
        <Box>
            <Title className={classes.Maintitle}>Explore Our Offerings</Title>
            <Tabs defaultValue="Experience" mt={20}>
          <ScrollArea w={'100%'} scrollbarSize={5}>
      <Tabs.List className={classes.TabsList} >
        <Tabs.Tab value="Experience" className={classes.Tab}>
        Experience
        </Tabs.Tab>
        <Tabs.Tab value="Adventure" className={classes.Tab}>
        Adventure
        </Tabs.Tab>
        <Tabs.Tab value="Business" className={classes.Tab}>
        Business
        </Tabs.Tab>
        <Tabs.Tab value="Wellness"className={classes.Tab}>
        Wellness
        </Tabs.Tab>
      </Tabs.List>
</ScrollArea>
      <Tabs.Panel value="Experience">
        <SimpleGrid cols={{lg:4, md:3, sm:2, xs:1}} mt={20}>
            <Box className={classes.Card}>
                <Image src={TouristImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Cultural Tours</Text>
                <Text className={classes.text}>Immerse yourself in rich cultural experiences with guided tours to historical landmarks and cultural sites.	</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={ChefImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Culinary Experiences</Text>
                <Text className={classes.text}>Delight your palate with culinary adventures, from cooking classes to food tours showcasing local flavors and ingredients.	</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={PeopleEnjoying} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Local Festivals</Text>
                <Text className={classes.text}>Celebrate local traditions and culture at vibrant festivals and events, featuring music, dance, and traditional performances.</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={PaintImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Artisan Workshops</Text>
                <Text className={classes.text}>Get hands-on experience with local artisans and craftsmen, learning traditional techniques and creating your own unique souvenirs.</Text>
                </Box>
            </Box>   
            
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="Adventure">
        <SimpleGrid cols={{lg:4, md:3, sm:2, xs:1}} mt={20}>
            <Box className={classes.Card}>
                <Image src={MountainImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Hiking & Trekking	</Text>
                <Text className={classes.text}>Embark on thrilling hiking and trekking adventures through scenic trails and breathtaking landscapes.</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={SwimingPool} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Water Sports</Text>
                <Text className={classes.text}>Dive into exhilarating water sports activities such as snorkeling, scuba diving, and jet skiing, perfect for adrenaline junkies.</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={ZipLine} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Zip-lining</Text>
                <Text className={classes.text}>Experience the rush of zip-lining through lush forests and across stunning valleys, offering panoramic views from above.</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={SafariTour} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Safari Tours</Text>
                <Text className={classes.text}>Discover the wonders of wildlife with safari tours, where you can encounter majestic animals in their natural habitats and capture unforgettable moments.</Text>
                </Box>
            </Box>   
            
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="Business">
        <SimpleGrid cols={{lg:4, md:3, sm:2, xs:1}} mt={20}>
            <Box className={classes.Card}>
                <Image src={MeetingsRoom} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Meeting Rooms</Text>
                <Text className={classes.text}>Conduct productive meetings and presentations in our well-equipped meeting rooms, designed for efficiency and comfort.</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={ConferenceHoll} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Conference Facilities</Text>
                <Text className={classes.text}>Host successful conferences and events in our state-of-the-art facilities, supported by professional staff and modern technology.</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={ComputerImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Business Center</Text>
                <Text className={classes.text}>Stay connected and productive with our fully-equipped business center, offering amenities such as printing, copying, and high-speed internet access.</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={NetWorkImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Networking Events</Text>
                <Text className={classes.text}>Expand your professional network and forge valuable connections at our networking events and business gatherings, fostering collaboration and growth.</Text>
                </Box>
            </Box>   
            
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="Wellness">
        <SimpleGrid cols={{lg:4, md:3, sm:2, xs:1}} mt={20}>
            <Box className={classes.Card}>
                <Image src={SpaTherapist} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Spa & Massage	</Text>
                <Text className={classes.text}>Rejuvenate your body and mind with indulgent spa treatments and massages, tailored to your needs for ultimate relaxation.</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={YogaImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Yoga & Meditation</Text>
                <Text className={classes.text}>Find inner peace and harmony with our yoga and meditation sessions, led by experienced instructors in serene surroundings.</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={GymImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Fitness Center</Text>
                <Text className={classes.text}>Stay active and energized in our modern fitness center, equipped with state-of-the-art equipment and expert trainers.</Text>
                </Box>
            </Box>   
            <Box className={classes.Card}>
                <Image src={RelaxImage} alt="image" className={classes.CardImage}/>
                <Box className={classes.contentBox}>
                <Text className={classes.title}>Wellness Retreats</Text>
                <Text className={classes.text}>Escape to our wellness retreats, offering holistic experiences to restore balance and promote overall well-being through mindfulness and self-care practices.</Text>
                </Box>
            </Box>   
            
        </SimpleGrid>
      </Tabs.Panel>

    </Tabs>
        </Box>
    )
}