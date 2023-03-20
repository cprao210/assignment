import styled from "styled-components";
import Styled from "styled-components";

const StyledModel = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  box-sizing: border-box;

  .coin_wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    justify-content: space-around;
    gap: 20px 0;
    box-sizing: border-box;
  }
  h3 {
    max-width: 92px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .search_Wrapper {
    width: 80%;
    margin: 0 auto;
  }
  .search_bar {
    width: 100%;
    margin: 20px auto;
    padding: 6px;
    border-radius: 4px;
    border: none;
    font-size: 1rem;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s;

    &:focus {
      outline: none;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
  }
  .coin_box {
    display: flex;
    width: 180px;
    gap: 20px;
    padding: 10px;
    background-color: lightgreen;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;

    box-sizing: border-box;
  }
`;

export { StyledModel };
