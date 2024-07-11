import styled from 'styled-components';

// export const CardDescription = styled.div`
//   display: none;
//   /* font-size: 1rem; */
//   transition: display 1s ease;
// `;

export const CardContainer = styled.div`
  border: 1px solid ${(props) => props.theme.lightness};
  border-radius: 8px;
  padding: 2rem;
  width: 500px;
  height: fit-content;

  & h2 {
    color: ${(props) => props.theme.lightness};
    transition: color 0.5s ease;
  }

  & div {
    & p {
      font-size: 0px;
      width: 0%;
      transition:
        font-size 0.5s ease,
        width 0.5s ease;
    }
  }

  &:hover {
    & div {
      & p {
        font-size: 1.5rem;
        width: 100%;
      }
    }

    & h2 {
      color: ${(props) => props.theme.primary};
    }
  }
`;
