import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AppPageSlider from "./AppPageSlider";
import Navbar from "./Navbar";
import "./Apps.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Featuredapps from "./Featuredapps";

const Apps = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(" https://project-myfitnesspal.herokuapp.com/Allapps")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Box marginLeft="100px">
        <Flex>
          <Box>
            <AppPageSlider />
          </Box>
          <Box>
            <Box display="flex" width="300px">
              <Button size="md" bg="white">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
              </Button>
              <Input type="search" placeholder="Search" />
            </Box>
            <br />
            <Box className="box2" width="240px" marginLeft="60px">
              <Text>Categories</Text>
              <hr />
              <Box className="box3buttons">
                <button>All</button>
                <hr />
                <button>Activity Trackers</button>
                <hr />
                <button>Step Trackers</button>
                <hr />
                <button>Scales</button>
                <hr />
                <button>LifeStyle</button>
                <hr />
                <button>Wearables</button>
                <hr />
                <button>Fitness Apps</button>
                <hr />
                <button>Exercise Equipment</button>
                <hr />
                <button>Fertility</button>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Box color="blue">
          <Text fontSize="xl"><b>Featured Apps</b></Text>
        </Box>
        <hr />
        <br />
        <Featuredapps />
        <br />
        <Box color="blue">
          <Text fontSize="xl"><b>App MarketPlace</b></Text>
        </Box>
        <hr />
        <br />
        <div className="apps">
          {data.map((el, id) => {
            return (
              <div key={id}>
                <div>
                  <div className="featuredapps">
                    <img src={el.img} alt="appimage" />
                    <div>
                      <p>{el.name}</p>
                      <p>{el.type}</p>
                      <a href={el.link}>
                        <Button>Get</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Box>
    </div>
  );
};

export default Apps;
