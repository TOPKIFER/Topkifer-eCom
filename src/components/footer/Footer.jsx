import React from "react";
import footerClasses from "./footer.module.scss"
import facebookIcon from "assets/icons/facebook.svg"
import instagramIcon from "assets/icons/instagram.svg"
import whatsappIcon from "assets/icons/whatsapp.svg"
import linkedinIcon from "assets/icons/linkedin.svg"
import visaIcon from "assets/icons/visa.svg"
import paypalIcon from "assets/icons/paypal.svg"
import mastercardIcon from "assets/icons/mastercard.svg"
import arrowRightIcon from "assets/icons/arrowRight.svg"
import Icon from "../icon/Icon";
import {makeIndex} from "../../utilities/utilities";

/**
 * Footer component
 * @description The Footer component
 * @author Arnaud LITAABA
 */
const Footer = () => {
    const {
        footerContent,
        footerWrapper,
        content,
        section,
        header,
        footerFooter,
        callToAction,
        footerInput,
        addonAfter,
        paymentIconsClass
    } = footerClasses;

    const socialIcons = [
        {
            src: facebookIcon,
            alt: "facebook icon",
        },
        {
            src: instagramIcon,
            alt: "instagram icon",
        },
        {
            src: whatsappIcon,
            alt: "whatsapp icon",
        },
        {
            src: linkedinIcon,
            alt: "linkedin icon",
        },
    ]

    const paymentIcons = [
        {
            src: visaIcon,
            alt: "visa icon",
            height: "50px"
        },
        {
            src: paypalIcon,
            alt: "paypal icon",
            height: "30px"
        },
        {
            src: mastercardIcon,
            alt: "mastercard icon",
            height: "40px",
            marginTop: ".6rem"
        }
    ]

    const date = () => {
        const year = new Date().getFullYear();
        if (year === 2021) {
            return `©${year}`
        }
        return `©2021 - ${new Date().getFullYear()}`
    }

    return <div className={footerWrapper}>
        <div className={footerContent}>
            <div className={section}>
                <div className={header}>
                    Help
                    <span/>
                </div>
                <div className={content}>
                    <div>FAQ</div>
                    <div>Site Guide</div>
                    <div>Email: contact@topkifer.com</div>
                    <div>Phone: 000 000 000</div>
                </div>
            </div>
            <div className={section}>
                <div className={header}>
                    Shop
                    <span/>
                </div>
                <div className={content}>
                    <div>Fashiom</div>
                    <div>Electronics</div>
                    <div>
                        <span className={callToAction}>Become a seller</span>
                    </div>
                </div>
            </div>
            <div className={section}>
                <div className={header}>
                    About
                    <span/>
                </div>
                <div className={content}>
                    <div>About us</div>
                    <div>Policies</div>
                    <div>Investors</div>
                    <div>
                        {
                            socialIcons.map(icon => {
                                const {src, alt} = icon;
                                return <Icon
                                    key={makeIndex(alt, "social")}
                                    src={src}
                                    className="mr-4"
                                    style={{
                                        height: "20px"
                                    }}
                                    alt={alt}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={section}>
                <div className={header}>
                    Offers
                    <span/>
                </div>
                <div className={content}>
                    <div>Referals</div>
                    <div>Sales</div>
                    <div>Receives offers and update</div>
                    <div className={footerInput}>
                        <input type="email" placeholder="Email"/>
                        <div className={addonAfter}>
                            <Icon
                                src={arrowRightIcon}
                                alt="arrow-right-icon"
                                style={{
                                    height: "30px"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={footerFooter}>
            <span>
                {date()} Topkifer. All rights reserved
            </span>
            <div className={paymentIconsClass}>
                {
                    paymentIcons.map(icon => {
                        const {src, alt, height, marginTop} = icon;
                        return <Icon
                            key={makeIndex(alt, "payement")}
                            src={src}
                            className="mr-4"
                            style={{
                                height,
                                marginTop
                            }}
                            alt={alt}
                        />
                    })
                }
            </div>
        </div>
    </div>

}
export default Footer