# nft-app
   A page to display NFTs on solana

![image](https://github.com/halochg/nft-app/assets/2626025/34970e62-c158-42b2-b50c-93d8d52afc5f)

1. How to run and test the app,

   npm i; npm start; go to http://localhost:3000/

   (my node version is v16.13.0)

2. Description

   a. Installed the third party library infinite-scroll-component to virtualize the grid with infinite scroll
      (https://www.npmjs.com/package/react-infinite-scroll-component).
       Scrolling down to the bottem of the page will load another 20 NFTs.

   b. The default collectionName of the NFT is "okay_bears", it can search other collectionNames by changing the default collectionName.

   c. The page is responsive on PC and mobile. The number of columns will change from 4 to 1 as the sceen size reduces.

   d. Search NFT's name in the search bar, filter down the matched NFTs.
      
        for example, enter "11"

![image](https://github.com/halochg/nft-app/assets/2626025/7e0a3215-7a08-4753-aec4-824797e4633d)


3. Dockernize and deploy react app

   docker build -t nft-app . 

   docker run -d --name nft-app  -p 3000:3000 nft-app

   go to http://localhost:3000/


