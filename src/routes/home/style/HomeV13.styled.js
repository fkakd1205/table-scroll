import styled from 'styled-components';

export const TableFieldWrapper = styled.div`
    padding: 20px;
    position:relative;
    margin-bottom: 100px;
    
    @media all and (max-width: 992px){
        padding: 0 10px;
    }
    
    .table-box{
        position:relative;
        height: 300px;
        overflow: auto;
        border: 1px solid #e0e0e0;
        border-radius: 15px;
        background: #fff;
        box-shadow: var(--defaultBoxShadow);

        @media only screen and (max-width:768px){
            font-size: 10px;
        }
    }

    table {
        position:relative;
        width: fit-content;
        table-layout: fixed;
        text-align: center;
        border: none;
        border-collapse: collapse;
        border-spacing: 0;
    }

    tbody::before {
        display: block;
        padding-top: var(--virtuosoPaddingTop);
        content: "";
    }

    tbody::after {
        display: block;
        padding-bottom: var(--virtuosoPaddingBottom);
        content: "";
    }

    table .col-5-3 {
        width:50px;

        @media all and (max-width:992px){
            width:30px;
        }
    }

    table .col-15-13{
        width:150px;

        @media all and (max-width:992px){
            width:130px;
        }
    }

    table thead tr th{
        height: 43px;

        box-sizing: border-box;
        padding:10px 5px;

        background:#f7f7f7;
        color: #333;
        font-weight: 600;
        position: sticky;
        top:0;
        border-bottom: 1px solid #e0e0e0;
        border-right: 1px solid #f0f0f0;

        line-height: 1.5;
        word-break: keep-all;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-size: 12px;
    }

    table tbody tr{
        &:hover{
            /* background: #0000000a; */
        }
    }

    table tbody .tr-active{
        background: #2C73D230 !important;
    }

    table tbody .tr-highlight{
        background: var(--defaultRedColorOpacity30);
    }

    table tbody tr td{
        height: 35px;
        box-sizing: border-box;
        border-bottom: 1px solid #e0e0e0;
        line-height: 1.5;
        word-break: keep-all;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-size: 12px;
        color: #333;

        @media all and (max-width: 992px){
            font-size: 10px;
        }
    }

    table tbody tr .td-highlight {
        background: #2c73d224;
        font-weight: 600;

        &:hover{
            background: #2C73D260;
            color: white;
            font-weight: 600;
            cursor: pointer;
        }

        
    }

    table tbody tr .user-duplication {
        color: #ff0000;
    }

    .option-code-item{
        cursor: pointer;
    }

    .table-box .fixed-header {
        position: sticky;
        top: 0;
        box-shadow: 0 -0.5px 0 0 #e0e0e0 inset;
    }

    .table-box .fixed-col-left {
        display: inline-block;
        position: sticky;
        background: white;
        left: 0;
        z-index:10;
        box-shadow: -0.5px 0 0 0 #e0e0e0 inset;
    }

    .table-box .fixed-col-right {
        display: inline-block;
        position: sticky;
        background: white;
        right: 0;
        z-index:10;
        box-shadow: 0.5px 0 0 0 #e0e0e0 inset;
    }

    .table-box::-webkit-scrollbar{
        background: #e1e1e130;
        height:7px;
        width: 5px;
    }

    .table-box::-webkit-scrollbar-track{
        border-radius: 10px;
    }
    .table-box::-webkit-scrollbar-thumb{
        background-color: #00000010;
        border-radius: 10px;
    }

    .fix-button-el{
        user-select: none;
        -webkit-tap-highlight-color: #000000;
        width: 25px;
        height: 25px;
        position: relative;
        outline: none;

        padding: 0; 

        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 3px;

        cursor: pointer;

        &:hover{
            background: #f0f0f0;
        }

        @media all and (max-width: 992px){
            width: 18px;
            height: 18px;
        }
    }

    .view-sameReceiver-button-item{
        user-select: none;
        -webkit-tap-highlight-color: #00000000;
        cursor: pointer;
        outline: none;
        font-size: 11px;
        margin-left: 3px;
        background: #f7f7f7;
        border-radius: 3px;
        border: 1px solid #e0e0e0;
        color: #606060;
    }
`;