import React from 'react';
import styled from 'styled-components';

const DownloadButton = ({ name }: { name: string }) => {
  return (
    <StyledWrapper>
      <a href="/resume/jithinkrishna.pdf" download>
        <button className="button">
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            height={40}
            width={40}
            className="button__icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z" stroke="none" />
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
            <path d="M7 11l5 5l5 -5" />
            <path d="M12 4l0 12" />
          </svg>
          <span className="button__text">{name}</span>
        </button>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    line-height: 1;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.35em;
    padding: 0.75em 1em;
    padding-right: 1.25em;
    color: #fff;
    border: 1px solid transparent;
    font-weight: 700;
    border-radius: 2em;
    font-size: 1rem;
    box-shadow: 0 0.7em 1.5em -0.5em hsla(249, 62%, 51%, 0.745);
    transition: transform 0.3s;

    background: linear-gradient(
      90deg,
      rgba(77, 54, 208, 1) 0%,
      rgba(132, 116, 254, 1) 100%
    );
  }

  .button__icon {
    width: 1.5em;
    height: 1.5em;
  }

  .button:hover {
    border-color: #f4f5f2;
  }

  .button:active {
    transform: scale(0.98);
    box-shadow: 0 0.5em 1.5em -0.5em hsla(249, 62%, 51%, 0.745);
  }`;


export default DownloadButton;
