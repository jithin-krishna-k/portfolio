import React from 'react';
import styled from 'styled-components';
import { Github, Linkedin, Mail, Download } from "lucide-react"

type SocialIconButtonProps = {
  icon: React.ReactNode;
  name: string;
  link: string;
  socialKey: string;
};

const SocialIconButton = ({ icon, name, link, socialKey }: SocialIconButtonProps) => {
  return (
    <li className="icon-content">
      <a href={link} aria-label={name} data-social={socialKey} target="_blank" rel="noopener noreferrer">
        <div className="filled" />
        {icon}
      </a>
      <div className="tooltip">{name}</div>
    </li>
  );
};

const FooterButton = () => {
  return (
    <StyledWrapper>
      <ul className="example-2">
        <SocialIconButton icon={<Github />} name="GitHub" link="https://github.com/" socialKey="spotify" />
        <SocialIconButton icon={<Linkedin />} name="LinkedIn" link="https://linkedin.com/" socialKey="pinterest" />
        <SocialIconButton icon={<Mail />} name="Mail" link="mailto:you@example.com" socialKey="dribbble" />
        <SocialIconButton icon={<Download />} name="Download" link="/resume.pdf" socialKey="telegram" />
      </ul>
      <div className="text-center mt-4 pb-10">
        <p className="text-gray-600 mb-10 dark:text-gray-400">
          © {new Date().getFullYear()} Jithin Krishna K. All rights reserved.
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:30px
  }
  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 15px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 20%;
    color: #4d4d4d;
    background-color: #ffff;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 50%);
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .example-2 .icon-content a:hover {
    color: white;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }
  .example-2 .icon-content a[data-social="spotify"] .filled,
  .example-2 .icon-content a[data-social="spotify"] ~ .tooltip {
    background-color: #1db954;
  }
  .example-2 .icon-content a[data-social="pinterest"] .filled,
  .example-2 .icon-content a[data-social="pinterest"] ~ .tooltip {
    background-color: #bd081c;
  }
  .example-2 .icon-content a[data-social="dribbble"] .filled,
  .example-2 .icon-content a[data-social="dribbble"] ~ .tooltip {
    background-color: #ea4c89;
  }
  .example-2 .icon-content a[data-social="telegram"] .filled,
  .example-2 .icon-content a[data-social="telegram"] ~ .tooltip {
    background-color: #0088cc;
  }`;

export default FooterButton;
