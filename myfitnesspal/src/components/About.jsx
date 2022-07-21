import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <Box className="box1">
        <Flex justifyContent="center">
          <Box className="box2">
            <Box className="box3">
              <Text size="xl">
                Lose Weight with MyFitnessPal.com — for FREE!
              </Text>
            </Box>
            <br />
            <hr />
            <br />
            <Box className="box4">
              <Text>
                Losing Weight isn't easy -we know but with a Membership to
                MyFitnesspal.com, you'll get the tools you need to successfully
                take weight off - and keep it off. And best of all, you can
                signup for free, no strings attached. So put away your credit
                card - you'll never have to pay a cent. <br /> Study after study has
                confirmed the benefits of keeping track of the food you eat and
                the activity you do. It's simple - the more consistently you
                track your food intake, the more likely you are to lose weight.
                That's why every successful weight management program suggests
                that you keep a food diary and/or an activity log. But recording
                everything you eat without the right tools can be tedious at
                best, or simply impossible at worst. <br/> At MyFitnessPal.com, we
                focus on making sure you can log your meals as quickly and
                easily as possible. Because the easier we make it for you, the
                more likely you are to stay on track, and the more likely you
                are to succeed in your weight loss goals.
              </Text>
            </Box>
            <Box className="box5">
              <img src="/aboutpagepic1.png" alt="" srcset="" />
            </Box>
            <Box className="box6">
            <Text size="xl">
                Lose Weight with MyFitnessPal.com — for FREE!
              </Text>
            </Box>
            <br />
            <Box className="box7">
              <Text><b>✅The easiest to use food diary on the web -</b>Track what you eat with just a few clicks from anywhere with an internet connection - at home or at work</Text>
              <Text><b>✅A searchable food database of over 300,000,000 items -</b>and it's growing every day!</Text>
              <Text><b>✅Your own personal food database -</b>add your own foods and recipes at any time and access them from anywhere with an internet connection</Text>
              <Text><b>✅Free mobile apps for iPhone and Android - </b>so you can log your meals and exercise even when you are on the go</Text>
              <Text><b>✅Support and motivation</b>from people just like you - Our discussion forums let you learn from others, share your own tips, receive and give encouragement, and make friends.</Text>
              <Text><b>✅A personalized diet profile</b>- customized to your unique weight loss goals.</Text>
              <Text><b>✅Flexibility </b>our system can support any diet like Atkins, the South Beach Diet, the Zone, and more. No matter what diet you're on, we can help.</Text>
            </Box>
            <br />
            <Box className="box8">
            <Text size="xl">
                Lose Weight with MyFitnessPal.com — for FREE!
              </Text>
            </Box>
            <br />
            <Box className="box9">
              <img src="/aboutpagepic2.png" alt="" srcset="" />
            </Box>
          </Box>
          <Box className="sidebox1">
              <Box>Member Login</Box>
              <br />
              <Box >
                <a href="https://www.facebook.com/">
                <Button colorScheme="blue" >Login with facebook</Button>
                </a>
              </Box>
              
              or
              <br />
              <label>UserName:</label>
              <br />
              <Input width="200px" height="30px" />
              <br />
              <label>Password:</label>
              <br />
              <Input width="200px" height="30px" />
              <br />
              <input type="checkbox" />
              Remember me next time
              <br />
              <Button width="200px">Login</Button>
          </Box>
          
        </Flex>
      </Box>
    </div>
  );
};

export default About;
