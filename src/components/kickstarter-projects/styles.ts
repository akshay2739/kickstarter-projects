import styled from "styled-components";
import { COLORS } from "theme";

export const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${COLORS.BG_GREY};
  height: 100vh;
`;

export const Table = styled.table`
  text-align: center;
  border-collapse: collapse;

  tr {
    &:nth-child(odd) {
      background-color: ${COLORS.TABLE_ROW_ODD};
    }
    &:nth-child(even) {
      background-color: ${COLORS.TABLE_ROW_EVEN};
    }
  }

  th {
    background-color: ${COLORS.TABLE_HEADER};
    color: ${COLORS.TABLE_HEADER_TEXT};
  }

  td,
  th {
    border: solid black 1px;
    padding: 4px 8px;
  }
`;
