import React from 'react';
import styled from 'styled-components';

const SocialButton = ({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
}) => {
  return (
    <StyledWrapper>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button>
          <Icon className="w-4 h-4 lg:w-8 lg:h-6" />
          <span className="text-xs">{label}</span>
        </button>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a {
    text-decoration: none;
  }

  button {
    background: transparent;
    position: relative;
    margin: 11px 0px;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid rgb(0, 119, 181);
    border-radius: 25px;
    outline: none;
    overflow: hidden;
    color: rgb(0, 119, 181);
    transition: color 0.3s 0.1s ease-out;
    text-align: center;
  }

  button span {
    margin: 10px;
  }

  button::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: "";
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    text-align: center;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }

  button:hover {
    color: #fff;
    border: 1px solid rgb(0, 119, 181);
  }

  button:hover::before {
    box-shadow: inset 0 0 0 10em rgb(0, 119, 181);
  }
`;

export default SocialButton;
