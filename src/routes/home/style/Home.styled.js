import styled from "styled-components";

export const TableWrapper = styled.div`
    margin-top: 10px;
    padding: 50px;
    .empty-box{
        padding: 50px 0;

        .text{
            display: flex;
            align-items: center;
            justify-content: center;
            .accent{
                font-weight: 600;
                color: var(--mainColor)
            }
            .icon-figure{
                margin: 0 5px;
                width:20px;
                height: 20px;
            }
        }
    }
`;

export const WindowingBox = styled.div`
    margin-bottom: 30px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    background:#fcfcfc;
`;

export const TableBox = styled.div`
    overflow: auto;
    min-height: 300px;
    max-height: 300px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    background:#fcfcfc;

    &::-webkit-scrollbar{
        background: #e1e1e130;
        height:5px;
        width: 5px;
    }

    &::-webkit-scrollbar-track{
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #00000010;
        border-radius: 10px;
    }

    table{
        position:relative;
        text-align: center;
        width: fit-content;
        table-layout: fixed;
        border: none;
    }

    table thead{
        
    }

    table thead th {
        height: 35px;

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
        
        .control-button-item{
            width:20px;
            height: 20px;
            margin:0;
            padding:0;
            margin-left: 3px;
            background: none;
            border-radius: 50%;
            border: none;
            .icon-figure{
                width:80%;
                height: 80%;
            }
        }
    }

    table tbody tr{
        &:hover{
            background:#f8f8f8;

            .fixed-col-left {
                background:#f8f8f8;
            }
        }
    }

    table tbody td{
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
        
        .input-item{
            background: none;
            text-align: center;
            padding: 0 10px;
            box-sizing: border-box;
            width: 100%;
            height: 44px;
            border: none;
            outline:none;
            cursor: pointer;
            border-radius: 5px;
            font-size: 12px;

            word-break: keep-all;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;

            &:focus{
                border: 1.5px solid var(--defaultBlueColor);
                box-shadow: var(--defaultBoxShadow);
                background: var(--defaultBlueColorOpacity100);
                cursor: text;
            }
        }

        .div-item{
            background: none;
            text-align: center;
            padding: 10px;
            box-sizing: border-box;
            width: 100%;
            border: none;
            font-size: 12px;
            color: #404040;
            font-weight: 400;

            word-break: keep-all;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }

        .button-item{
            margin:0;
            background: none;
            text-align: center;
            padding: 0 10px;
            box-sizing: border-box;
            width: 100%;
            height: 44px;
            border: none;
            outline:none;
            cursor: pointer;
            border-radius: 5px;
            font-size: 12px;

            word-break: keep-all;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }
    }

    .optionCodeTd{
        background: var(--mainColorOpacity100);
    }

    table .fixed-col-left {
        position: sticky;
        background: white;
        left: 0;
        z-index:10;
        border-right: 1px solid #e0e0e060;
        box-shadow: 6px 0 5px -7px #e0e0e0;
    }

    .status-button{
        height: 30px;
        width: 150px;
        padding:0;
        margin: auto;
        font-size: 12px;
    }

    .delete-button-item{
        width:30px;
        height: 30px;
        margin:0;
        padding:0;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;

        .icon-figure{
            width:70%;
            height: 70%;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;