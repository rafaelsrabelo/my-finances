import styled from "styled-components";

export const Container = styled.header `
  background: var(--green-100);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--green-300);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;
    :hover {
      filter: brightness(0.9);
    }
  }
`
export const Logo = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    margin-left: 0.5rem;
    text-decoration: none;
  }
`