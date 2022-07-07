import Pagination from "react-bootstrap/Pagination";
import React, { useState, useEffect } from "react";
function PaginationPage({ pageNum, pagesNumber, setPageNum }) {
  let active = 1;

  const [arrNum, setArrNum] = useState("");
  useEffect(() => {
    if (pageNum < 18 && pageNum > 2) {
      setArrNum([pageNum - 2, pageNum - 1, pageNum, pageNum + 1, pageNum + 2]);
    } else if (pageNum < 2) {
      setArrNum([1, 2, 3, 4, 5]);
    } else if (pageNum > pagesNumber-2) {
      setArrNum([pagesNumber-4, pagesNumber-3, pagesNumber-2, pagesNumber-1, pagesNumber]);
    }
  }, [pageNum]);
  const numClick = (val) => {
    
    setPageNum(val);
  };
  return (
    <Pagination size="lg">
      <Pagination.First
        onClick={() => {
          setPageNum(1);
        }}
      />
      <Pagination.Prev
        onClick={() => {
          if (pageNum > 1) {
            setPageNum(pageNum - 1);
          }
        }}
      />

      {arrNum &&
        arrNum.map((element, index) => {
          return (
            <Pagination.Item
            key={index}
              active={pageNum == element}
              onClick={(e) => {
                numClick(element);
              }}
            >
              {element}
            </Pagination.Item>
          );
        })}

      <Pagination.Next
        onClick={() => {
          if (pageNum < pagesNumber) {
            setPageNum(pageNum + 1);
          }
        }}
      />
      <Pagination.Last
        onClick={() => {
          setPageNum(pagesNumber);
        }}
      />
    </Pagination>
  );
}
export default PaginationPage;
