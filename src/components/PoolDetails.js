import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button } from "@material-ui/core/";
import SingleNftCard from "./SingleNftCard";
import { getPoolDetails, getTotalParticipants } from "../actions/smartActions";
import pools from "../data/poolsData";

import { useParams } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    maxWidth: 1000,
    minHeight: 600,
    borderRadius: 30,
    backgroundColor: "rgba(41, 42, 66, 0.01)",

    filter: "drop-shadow(0 0 0.5rem #212121)",

    paddingBottom: 15,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },

  avatar: {
    height: "35px",
  },

  tokenTitle: {
    fontWeight: 500,
    padding: 0,
    paddingLeft: 10,
    fontSize: 14,
    paddingBottom: 3,
    color: "#e5e5e5",
  },

  tokenAmount: {
    fontWeight: 700,
    padding: 0,
    paddingLeft: 10,
    fontSize: 16,
    color: "#C80C81",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  earn: {
    textAlign: "center",
    color: "#bdbdbd",
    fontSize: 10,
  },
  desktop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  description: {
    fontWeight: 500,
    padding: 0,
    paddingTop: 10,

    fontSize: 15,
    paddingBottom: 3,
    color: "#e5e5e5",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
    },
  },
  joinButton: {
    background: `#E0247D`,
    color: "white",
    width: "fit-content",
    height: 40,
    textTransform: "none",
    borderRadius: 30,
    fontSize: 15,
    marginRight: 5,
    marginLeft: 5,
    border: "1px solid rgba(224, 7, 125, 0.3)",
    padding: "5px 20px 5px 20px",
    "&:hover": {
      background: "rgba(224, 7, 125, 0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "fit-content",
      fontSize: 13,
    },
  },
  box: {
    paddingLeft: 20,
  },
  links: {
    fontWeight: 500,
    padding: 0,
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 15,
    color: "#af8b9c",
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
    },
  },
  logo: {
    height: 80,
    [theme.breakpoints.down("sm")]: {
      height: 60,
    },
  },
  poolTitle: {
    color: "#f9f9f9",
    fontWeight: 700,
    fontSize: 28,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
  },
}));

const PoolDetails = () => {
  const classes = useStyles();

  const { id } = useParams();

  const [poolDetail, setPoolDetail] = useState(null);
  const [poolDetailLocal, setPoolDetailLocal] = useState(null);
  const { active, account, chainId } = useWeb3React();

  useEffect(async () => {
    let poolDataId = id;
    let poolDataObj = pools[parseInt(poolDataId) - 1];

    setPoolDetailLocal(poolDataObj);
    let result = await getPoolDetails(poolDataObj.id, poolDataObj.chainId);

    setPoolDetail(result);
  }, []);

  return (
    <div
      className="container d-flex justify-content-center mt-5"
      style={{ paddingTop: 60 }}
    >
      <Card elevation={10} className={classes.card}>
        <div style={{ width: "100%" }}>
          <div className="text-center">
            <img className={classes.logo} src={pools[id - 1].image} />
            {console.log(pools[id - 1])}
          </div>
          <div className={classes.poolTitle}>{pools[id - 1].title}</div>
          <div className="d-flex justify-content-center">
            <a href={pools[id - 1].whitepaper} target="_blank">
              <h4 className={classes.links}>Whitepaper</h4>
            </a>
            <a href={pools[id - 1].website} target="_blank">
              <h4 className={classes.links}>Website</h4>
            </a>
            <a href={pools[id - 1].twitter} target="_blank">
              <h4 className={classes.links}>Twitter</h4>
            </a>
            <a href={pools[id - 1].telegram} target="_blank">
              <h4 className={classes.links}>Telegram</h4>
            </a>
          </div>
          <div className={classes.box}>
            <div className={classes.description}>
              {pools[id - 1].description}
            </div>

            <div className="row">
              <div className="col-md-6">
                {" "}
                <h4
                  style={{
                    color: "#DF097C",
                    marginLeft: 10,
                    fontSize: 18,
                    marginTop: 20,
                  }}
                >
                  RULES
                </h4>
                <div className="mt-2 mb-2">
                  <li
                    style={{
                      color: "#f9f9f9",
                      marginLeft: 10,
                      fontSize: 13,
                      lineHeight: 2.5,
                    }}
                  >
                    For participate in {pools[id - 1].title} sale , you will pay {pools[id - 1].price} {pools[id - 1].currency} for 1 item. The sale will take place on {pools[id - 1].network} chain
                  </li>
                  <li
                    style={{
                      color: "#f9f9f9",
                      marginLeft: 10,
                      fontSize: 13,
                      lineHeight: 2.5,
                    }}
                  >
                    Once NFTs listed on offcial platform, you can trade/transfer. You can read more details about the item in the utilities section
                  </li>
                  <li
                    style={{
                      color: "#f9f9f9",
                      marginLeft: 10,
                      fontSize: 13,
                      lineHeight: 2.5,
                    }}
                  >
                    For more information visit <a href="https://t.me/polkabridgegroup">our Telegram group</a>
                  </li>
                  <li
                    style={{
                      color: "#f9f9f9",
                      marginLeft: 10,
                      fontSize: 13,
                      lineHeight: 2.5,
                    }}
                  >
                    The {pools[id - 1].title} item will be on the Immutable X (IMX) chain. The {pools[id - 1].title} NFT will be sent directly to your wallet on the IMX network upon mint and you will be able to view it then. Read more at <a href="https://tatsumeeko.com/community?post=general-aethereal-parcel-mint-guide" target={"_blank"}>https://tatsumeeko.com/community?post=general-aethereal-parcel-mint-guide</a>
                  </li>
                </div>
              </div>
              <div className="col-md-6">
                {" "}
                <h4
                  style={{
                    color: "#DF097C",

                    fontSize: 18,
                    marginTop: 20,
                  }}
                >
                  UTILITIES
                </h4>
                <div className="mt-2 mb-2">
                  <p style={{ color: "white" }}>
                    Why you should hold these NFTs ?
                  </p>
                  {pools[id - 1].utilities &&
                    pools[id - 1].utilities.map((singleUtility, index) => {
                      return (
                        <li
                          style={{
                            color: "#f9f9f9",
                            marginLeft: 10,
                            fontSize: 13,
                            lineHeight: 2.5,
                          }}
                        >
                          {singleUtility}
                        </li>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>

          <div className="px-3">
            <h4
              style={{
                color: "#f9f9f9",
                marginLeft: 10,
                fontSize: 18,
                marginTop: 30,
              }}
            >
              NFT Packages on Sale
            </h4>

            <div className="row  mt-4">
              {poolDetail !== null &&
                poolDetail.PackageIds.map((packageId, index) => {
                  return (
                    <div className="col-12 col-md-4 mb-5" key={index}>
                      <SingleNftCard
                        poolDetailLocal={poolDetailLocal}
                        packageId={packageId}
                        endTime={poolDetail.End}
                        itemId={packageId}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PoolDetails;
