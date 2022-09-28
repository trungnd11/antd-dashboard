import styled from "styled-components";
import { MainColor, White } from "../../components/variable/Variable";

export const LayoutStyle = styled.div`
  height: 100vh;

  .ant-layout {
    height: 100%;

    .ant-layout-header {
      background: url(https://10.101.242.210/content/ftu/layout/img/bg-left.png);
      border-bottom: 1px solid ${MainColor};
    }

    .ant-layout-sider {
      border-right: 1px solid ${MainColor};
      overflow-y: scroll;
      overflow-x: hidden;
      height: 100%;

      .ant-layout-sider-children {
        span.trigger {
          padding: 0.5rem;
          display: block;
          text-align: right;
          background: ${MainColor};
          color: ${White};

          svg {
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        span.text-center {
          text-align: center;
        }
      }
    }

    .ant-layout-footer {
      background: transparent;
      border-top: 1px solid ${MainColor};
    }
  }
`;