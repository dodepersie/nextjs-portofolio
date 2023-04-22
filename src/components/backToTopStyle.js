import styled from "styled-components";

export const ButtonToTop = styled.button`
    background: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 8px;
    color: rgba(13, 173, 142, 1);
    position: fixed;
    bottom: 12px; 
    right: 12px;
    padding: .5rem;
    cursor: pointer;
    transition: opacity .5s, visibility .5s;
    opacity: 1;
    visibility: visible;
    z-index: 1000;
    overflow-x: hidden;
`;