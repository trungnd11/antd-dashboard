import styled from "styled-components";
import { MainColor, SubColor, White } from "../../components/variable/Variable";

export const SliderStyle = styled.div`
  height: 100%;
  .ant-menu {
     li.ant-menu-item-selected {
      background-color: ${SubColor};
      margin: 0;

      &::after {
        border-right-color: ${MainColor};
      }
    }
  }
`;