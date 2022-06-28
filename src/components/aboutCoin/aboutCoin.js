import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './aboutCoin.scss';



function AboutCoin(props) {
    return (
        <div className='about-coin'>
            <Container>
                <Row>
                    <Col md={8}>
                        <h1>About Bitcoin</h1>
                        <p>Bitcoin price today is $16,322.66 USD with a 24-hour trading volume of $37,159,833,940 USD. Bitcoin is up 3.16% in the last 24 hours. The current CoinMarketCap ranking is #1, with a market cap of $302,595,476,474 USD. It has a circulating supply of 18,538,368 BTC coins and a max. supply of 21,000,000 BTC coins. The top exchanges for trading in Bitcoin are currently Binance, Huobi Global, CITEX, ZG.com, and Binance.KR. You can find others listed on our crypto exchanges </p>
                        <h1>What is Bitcoin?</h1>
                        <p>Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009.Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto’s own words, to allow “online payments to be sent directly from one party to another without going through a financial institution.”Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being the first-ever cryptocurrency to come into actual use.</p>
                        <h1>Who Are the Founders of Bitcoin?</h1>
                        <p> Bitcoin’s original inventor is known under a pseudonym, Satoshi Nakamoto. As of 2020, the true identity of the person — or organization — that is behind the alias remains unknown.On October 31, 2008, Nakamoto published Bitcoin’s whitepaper, which described in detail how a peer-to-peer, online currency could be implemented. They proposed to use a decentralized ledger of transactions packaged in batches (called “blocks”) and secured by cryptographic algorithms — the whole system would later be dubbed “blockchain.”Just two months later, on January 3, 2009, Nakamoto mined the first block on the Bitcoin network, known as the genesis block, thus launching the world’s first cryptocurrency.However, while Nakamoto was the original inventor of Bitcoin, as well as the author of its very first implementation, over the years a large number of people have contributed to improving the cryptocurrency’s software by patching vulnerabilities and adding new features.Bitcoin’s source code repository on GitHub lists more than 750 contributors, with some of the key ones being Wladimir J. van der Laan, Marco Falke, Pieter Wuille, Gavin Andresen, Jonas Schnelli </p>
                        <h1>What Makes Bitcoin Unique?</h1>
                        <p> Bitcoin’s most unique advantage comes from the fact that it was the very first cryptocurrency to appear on the market.It has managed to create a global community and give birth to an entirely new industry of millions of enthusiasts who create, invest in, trade and use Bitcoin and other cryptocurrencies in their everyday lives. The emergence of the first cryptocurrency has created a conceptual and technological basis that subsequently inspired the development of thousands of competing projects.The entire cryptocurrency market — now worth more than $300 billion — is based on the idea realized by Bitcoin: money that can be sent and received by anyone, anywhere in the world without reliance on trusted intermediaries, such as banks and financial services companies.Thanks to its pioneering nature, BTC remains at the top of this energetic market after over a decade of existence. Even after Bitcoin has lost its undisputed dominance, it remains the largest cryptocurrency, with a market capitalization that fluctuated between $100-$200 billion in 2020, owing in large part to the ubiquitousness of platforms that provide use-cases for BTC: wallets,</p>
                        <h1> How Much Bitcoin Is in Circulation?</h1>
                        <p>Bitcoin’s total supply is limited by its software and will never exceed 21,000,000 coins. New coins are created during the process known as “mining”: as transactions are relayed across the network, they get picked up by miners and packaged into blocks, which are in turn protected by complex cryptographic calculations.As compensation for spending their computational resources, the miners receive rewards for every block that they successfully add to the blockchain. At the moment of Bitcoin’s launch, the reward was 50 bitcoins per block: this number gets halved with every 210,000 new blocks mined — which takes the network roughly four years. As of 2020, the block reward has been halved three times and comprises 6.25 bitcoins.Bitcoin has not been premined, meaning that no coins have been mined and/or distributed between the founders before it became available to the public. However, during the first few years of BTC’s existence, the competition between miners was relatively low, allowing the earliest network </p>
                        <h1>How Is the Bitcoin Network Secured?</h1>
                        <p>Bitcoin is secured with the SHA-256 algorithm, which belongs to the SHA-2 family of hashing algorithms, which is also used by its fork Bitcoin Cash (BCH), as well as several other</p>
                        <h1>Where Can You Buy [Bitcoin] ([BTC])?</h1>
                    </Col>
                    <Col md={4}>
                        <h2>Bitcoin Price Today</h2>
                        <div className='mb-4 mt-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span> Bitcoin Price Today</span>
                            <span>$16,242.06 USD</span>
                        </div>
                        <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span> 24 Hour High / Low</span>
                            <span> $16,463.18 USD</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>24 Hour Volume</span>
                            <span>$32,030,084,496 USD</span>
                        </div>
                        <h2>Yesterday's Bitcoin Price</h2>
                        <div className='mb-4 mt-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span> Yesterday's High Low </span>
                            <span>$16,242.06 USD</span>
                        </div>
                        <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span> Yesterday's High Low </span>
                            <span>$16,242.06 USD</span>
                        </div>
                        <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span> Yesterday's High Low </span>
                            <span>$16,242.06 USD</span>
                        </div>
                        <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span> Yesterday's High Low </span>
                            <span>$16,242.06 USD</span>
                        </div>
                        <h2>Historic Bitcoin Price</h2>
                        <div className='mb-4 mt-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span> Bitcoin Price Today</span>
                            <span>$16,242.06 USD</span>
                        </div>
                       
                    <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span> Yesterday's High Low </span>
                        <span>$16,242.06 USD</span>
                    </div>
                        <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span> Yesterday's High Low </span>
                            <span>$16,242.06 USD</span>
                        </div>
                        <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span> Yesterday's High Low </span>
                            <span>$16,242.06 USD</span>
                        </div>
                        <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span> Yesterday's High Low </span>
                            <span>$16,242.06 USD</span>
                        </div>
                    <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span> Yesterday's High Low </span>
                        <span>$16,242.06 USD</span>
                    </div>
                    <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span> Yesterday's High Low </span>
                        <span>$16,242.06 USD</span>
                    </div>
                    <h2>Bitcoin Supply Details</h2>
                    <div className='mb-4 mt-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span> Yesterday's High Low </span>
                        <span>$16,242.06 USD</span>
                    </div>
                    <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span> Yesterday's High Low </span>
                        <span>$16,242.06 USD</span>
                    </div>
                    <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span> Yesterday's High Low </span>
                        <span>$16,242.06 USD</span>
                    </div>
                        <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span> Yesterday's High Low </span>
                            <span>$16,242.06 USD</span>
                        </div>
                        <div className='mb-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span> Yesterday's High Low </span>
                            <span>$16,242.06 USD</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AboutCoin;