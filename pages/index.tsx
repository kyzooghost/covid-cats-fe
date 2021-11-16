import { useWeb3React } from "@web3-react/core";
import { Container, Flex, Spacer } from "@chakra-ui/react"
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>Covid Cats NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Container bg="teal.100" maxW="90%" marginTop="3" >
          <nav>
            <Flex>
              <Spacer />
              <Account triedToEagerConnect={triedToEagerConnect} />
            </Flex>
          </nav>
        </Container>
      </header>

      <main>

      </main>

    </div>
  );
}

export default Home;
