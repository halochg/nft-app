import React, { useEffect, useState, useRef} from "react";
import BoxListing from "./boxListing";
import GetNFTListing from "../api/ajax";
import { boxProps } from "../types/globalTypes";
import InfiniteScroll from "react-infinite-scroll-component";
import "../App.css";

const PAGE_SIZE = 20;
const SEARCH_PLACEHOLDER = "Search NFT name";
const COLLECTION_SYMBOL = "okay_bears";

function SearchNFT() {
  const [page, setPage] = useState(0);
  const [boxListing, setBoxListing] = useState([]);
  const [matchedListing, setMatchedListing] = useState([]);
  const [myInput, setMyInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const calledRef = useRef(false);

  const handleInputChange = (event: any) => {
    setMyInput(event.target.value);
    let matched_list = boxListing.filter((item: boxProps) =>
      item.title.includes(event.target.value)
    );
    setMatchedListing(matched_list);
  };

  const fetchMoreData = () => {
    setPage(page + 1);
    fetchNFT(page);
  };

  const fetchNFT = async (page: number, name?: string) => {
    const offset = page * PAGE_SIZE;
    const collectionSymbol = name || COLLECTION_SYMBOL;
    const resData = await GetNFTListing(collectionSymbol, offset);
    if (resData.error) {
      setErrorMessage(resData.error + " Status code: " + resData.status);
    } else {
      setErrorMessage("");
      setBoxListing((pre) => pre.concat(resData.data));
      setMatchedListing((pre) => pre.concat(resData.data));
    }
  };

  useEffect(() => {
    !calledRef.current && fetchNFT(page);
    calledRef.current = true; // on page loadding, only call once.
  }, [page]);

  return (
    <div className="App">
      <div className="searchBar">
        <input
          className="searchINput"
          placeholder={SEARCH_PLACEHOLDER}
          value={myInput}
          id="myInput"
          name="myInput"
          onChange={handleInputChange}
        />
      </div>
      <div className="errorMessage">{errorMessage}</div>
      <InfiniteScroll
        dataLength={boxListing.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>.........</h4>}
        scrollableTarget="scrollableDiv"
        scrollThreshold="10px"
      >
        <BoxListing resultList={matchedListing} />
      </InfiniteScroll>
    </div>
  );
}

export default SearchNFT;
