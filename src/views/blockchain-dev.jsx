import React, { useEffect } from 'react';
import Banner from '../components/banner';
import { Col2Cards } from '../components/cards';
import {
    web_dev_banner,
    horse_icon,
    exchange_icon,
    wallet_icon,
    hyperledger_icon,
    contract_icon,
    blockchain_icon

} from '../assets/img';
import HelpYou from '../components/help-you';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BlockChainDevPage() {
    useEffect(() => {
        document.title = "BlockChain Development | DiscoverItech"
    }, []);

    const cards = [
        { hd: 'Cryptographically Secure', para: 'A lot of people use cryptography on a daily basis without realizing it as many popular messaging apps use encryption. It is also one of the core aspects of blockchain technology.' },
        { hd: 'Shared', para: 'Shared Services is a great place to experiment with blockchain. To test it requires real technical skills so Innovation Centers are increasingly partnering with Shared Services for use cases.' },
        { hd: 'Decentralized Ledger', para: 'Transactions typically involve various participants like buyers, sellers, and intermediaries (such as banks, auditors, or notaries) whose business agreements and contracts are recorded in ledgers.' },
        { hd: 'Distributed', para: 'Each of these concepts requires decentralization and consensus among nodes. However, the blockchain organizes data in blocks, and updates the entries using an append-only structure.' },
    ];

    const cards2 = [
        { img: horse_icon, hd: 'Strategic Consultancy', para: 'Your data is valuable and must be secure. A Blockchain is a growing list of records which are linked using cryptography.' },
        { img: exchange_icon, hd: 'Smart Contract Development', para: 'Smart contracts development lets you replace traditional contracts and can save time and money for your business.' },
        { img: wallet_icon, hd: 'Custom Blockchain Development', para: 'Our custom blockchain development company delivers blockchain services and solutions that transform your industry.' },
        { img: hyperledger_icon, hd: 'Wallet Development', para: 'Blockchain Wallet Development Services to the businesses of every size and help them to safely manage their crypto-assets.' },
        { img: contract_icon, hd: 'Hyperledger Development', para: 'Hyperledger is an open source collaborative effort created to advance cross-industry blockchain technologies.' },
        { img: blockchain_icon, hd: 'Crypto Exchange', para: 'A cryptocurrency exchange is any system that operates on the basis of trading cryptocurrencies with other assets.' },
    ];

    const Contactbtn = <Link to="/contact-us" className="common_btn btn_hover txt_white bg_red">Contact Us</Link>;

    return (
        <>
            <Banner
                bannerImg={web_dev_banner}
                bannerHd=" Blockchain"
                bannerhdSpan="Development"
                bannerCaps="Blockchain based ledgers, Smart Contracts, Identity solution and a lot more. Develop decentralized blockchain apps for your enterprise."
                bannerBtn={Contactbtn}
            />
            <section className="intro_sec">
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                Blockchain Development <font className='fw-bold txt_red'>Services</font>
                            </h2>
                            <p className="desc text-center mxwidth_75 mx-auto mt-3">
                                We provide cross-industry blockchain development services to streamline your business operations with improved interoperability, increased security, and transparency. Blockchain provides alternative options for digital security, using familiar cryptography but with unchangeable data. Work with Toptal developers to understand how your company can use blockchain as a means to secure data and enhance the trust verification processes.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='expertise_sec sec_pad'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal mb-5">
                                Why <font className='fw-bold txt_red'>Blockchain?</font>
                            </h2>
                            <div className="flex_wrapper">
                                <Col2Cards
                                    cards={cards}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
            <section className='expertise_sec we_do_sec sec_pad bg_white'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                What do <font className='fw-bold txt_red'>we do?</font>
                            </h2>
                            <p className="desc text-center mxwidth_75 mx-auto mt-3 mb-5">
                                Let’s get on the same page before we dive into the advantages of blockchain and why its impact on the world is significant. Blockchain technology offers new tools for authentication and authorization in the digital world that preclude the need for many centralized administrators. As a result, it enables the creation of new digital relationships.
                            </p>
                            <div className="flex_wrapper text-center">
                                <Col2Cards
                                    cards={cards2}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <HelpYou />
        </>
    );
}

export default BlockChainDevPage;