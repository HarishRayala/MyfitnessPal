import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Apps.css";

const Featuredapps = () => {
  const [featapps, setFeatapps] = useState([]);

  const getfeatapps = () => {
    axios
      .get(" http://localhost:3004/featuredapps")
      .then((res) => {
        console.log(res.data);
        setFeatapps(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getfeatapps();
  }, []);
  return (
    <div className="apps">
      {featapps.map((el, id) => {
        return (
          <div key={id}>
            <div  >
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
  );
};

export default Featuredapps;
