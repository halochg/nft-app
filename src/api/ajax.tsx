async function GetNFTListing(name: string, offset: number) {
  const fetchURL = `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=${name}&limit=20&offset=${offset}`;
  const res = await fetch(fetchURL);
  if (res.status !== 200) {
    return { status: res.status, error: "Sorry, API error! Please try again later." };
  } else {
    const resData = await res.json();
    if(resData.results.length > 0){
        return { status: res.status, data: resData.results };
    }else {
        return { status: res.status, error: "No Results for '" + name + "'. " };
    }
  }
}

export default GetNFTListing;
