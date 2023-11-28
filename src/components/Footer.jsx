import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedium,
  faTwitter,
  faTelegram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

function Socials() {
    return (   
      <div className ="social-wrapper" style={{display: "flex", justifyContent: "center"}}>
        <a style={{margin: "1em"}}
         href ="https://github.com/RegionX-Labs" className ="youtube social"
         >
         <FontAwesomeIcon icon = {faGithub} size="2x" />
        </a>
  
        <a style={{margin: "1em"}}
         href ="https://twitter.com/RegionXLabs" className ="twitter social"
         >
         <FontAwesomeIcon icon = {faTwitter} size="2x" />
        </a>
  
        <a style={{margin: "1em"}}
         href ="/" className ="instagram social"
         >
         <FontAwesomeIcon icon = {faMedium} size="2x" />
        </a>
  
        <a style={{margin: "1em"}}
         href ="/" className ="github social"
         >
         <FontAwesomeIcon icon = {faTelegram} size="2x" />
        </a>
      </div>
    )
  }

const Footer = () => {
    return (
        <>
            <footer>
                <br/>
                <Socials />
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Master Union
                    </HashLink>. All rights reserved.
                    </div>
                </div> 
                <br/>
            </footer>
        </>
    )
}
export default Footer;
