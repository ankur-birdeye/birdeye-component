import styled from "styled-components";

export default styled.div`
  width:${({ width = 100 }) => width + "%"};
  display:inline-block;
  border: 0;
  border-radius: 0;
  position:relative;
 .target{ 
    z-index: 2;
    position:relative;
  }
  .click-overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
   button{  
    cursor:pointer;     
    background: white;
    outline:none;
    border: none;
    width: 100%;
    text-align: left;
    span{
      padding-left: 0;
      padding-right: 15px;
    }
  }
  .icon{
    position:absolute;
    transition:.5s;
    &.down{
      transform: rotateX(180deg);
    }
  }
  .ms-drop{
    box-shadow: 0 4px 5px rgba(0,0,0,.15);
    border-radius: 0;
    border: 0 solid #ccc;
    color: #434343;
    margin-top: 1px;
    background-color:white;
    width:100%;
    position:absolute;
    transition:.4s;
    max-height:250px;
    overflow:hidden;
    &.hide{
      max-height:0px;
    }
  }
  input{
    width:100%;
  }
  .ms-search{
    padding: 4px;
    position:relative;
    input{
      background: 0 0;
      border: 1px solid #B0B1B1;
      color: #434343;
      width: 100%;
      transition: border-color .2s linear 0s;
      padding: 0 20px 0 5px;
      outline: none;
      min-height: 24px;
    }
    .icon-search{
      right: 9px;
      top: 8px; 
      position:absolute;
    }
  }
  ul{
    overflow-y: auto;
    max-height: 218px;
  }
  li{
    font-size:12px;
    border-bottom: 1px solid #f4f4f4;
    :hover{
      color:#1976d2;
    }
    input{
      display:none;
    }
     &.ms-no-results{
      width: 100%;
      padding: 6px 8px;
      display: inline-block;
      position:relative;
    }
    label{
      cursor:pointer;
      width: 100%;
      padding: 6px 8px;
      display: inline-block;
      position:relative;
    }
    span{
      vertical-align: middle;
    }
  }
`;
