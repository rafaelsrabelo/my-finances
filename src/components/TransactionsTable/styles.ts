import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 4rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: #7c7171;
      border-radius: 0.25rem;

      &:first-child {
        color: #000000;
      }

      &.deposit {
        color: #2fbc38;
      }
      &.withdraw {
        color: #ee5353;
      }
    }
  }

  .title {
    font-weight: 700;
  }
`