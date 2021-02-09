import React, {useState} from "react";
import {connect} from "react-redux";
import productMoreInfoWhiteClasses from "views/pages/product/productMoreInfo/productMoreInfoWhite.module.scss";
import productMoreInfoBlackClasses from "views/pages/product/productMoreInfo/productMoreInfoBlack.module.scss";
import {WHITE} from "utilities/constant";
import {getMessage} from "utilities/i18n";
import {multipleClasses} from "utilities/utilities";
import shortArrowLeftIcon from "assets/icons/shortArrowLeft.svg"
import shortArrowWhiteLeftIcon from "assets/icons/shortArrowWhiteLeft.svg"
import Icon from "components/icon/Icon";
import Reviews from "components/reviews/Reviews";


/**
 * Product more info component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} product the selected product
 * @author Arnaud LITAABA
 */
const ProductMoreInfo = ({actualTheme, product}) => {

    const {
        productMoreInfoDesktop,
        productMoreInfoMobile,
        tabTitles,
        tabTitle,
        tabTitleHighlighted,
        tabContent,
        tabHighlighted
    } = actualTheme === WHITE ? productMoreInfoWhiteClasses : productMoreInfoBlackClasses;


    const DESCRIPTION = "description"
    const ADDITIONAL_INFO = "additionalInformation"
    const REVIEWS = "reviews"

    const [state, setState] = useState({
        currentTab: REVIEWS
    });


    const {currentTab, collapsed} = state;

    const {description, moreInfo, reviews} = product;

    const setContent = (target) => {
        const toCheck = state[target];
        switch (true) {
            case toCheck === DESCRIPTION:
                return <p>{description}</p>
            case toCheck === ADDITIONAL_INFO:
                return <p>"additionalInformation"</p>
            case toCheck === REVIEWS:
                return <Reviews product={product}/>
            default:
                return "...."
        }
    }


    return <>
        <div className={productMoreInfoDesktop}>
            <div className={tabTitles}>
                <div
                    onClick={() => setState({...state, currentTab: DESCRIPTION})}
                    className={multipleClasses(tabTitle, currentTab === DESCRIPTION ? tabTitleHighlighted : "_")}>{getMessage(DESCRIPTION)}</div>
                <div
                    onClick={() => setState({...state, currentTab: ADDITIONAL_INFO})}
                    className={multipleClasses(tabTitle, currentTab === ADDITIONAL_INFO ? tabTitleHighlighted : "_")}>{getMessage(ADDITIONAL_INFO)}</div>
                <div
                    onClick={() => setState({...state, currentTab: REVIEWS})}
                    className={multipleClasses(tabTitle, currentTab === REVIEWS ? tabTitleHighlighted : "_")}>{getMessage(REVIEWS)}</div>

            </div>
            <div className={tabContent}>
                {setContent("currentTab")}
            </div>
        </div>
        <div className={productMoreInfoMobile}>
            <div className={tabTitles}>
                <div
                    className={collapsed === DESCRIPTION ? tabHighlighted : ""}
                    onClick={() => setState({...state, collapsed: collapsed === DESCRIPTION ? "" : DESCRIPTION})}>
                    <div className={multipleClasses(tabTitle, collapsed === DESCRIPTION ? tabTitleHighlighted : "_")}>
                        <span>{getMessage(DESCRIPTION)}</span>
                        <Icon
                            src={actualTheme === WHITE ? shortArrowLeftIcon : shortArrowWhiteLeftIcon}
                            size="12px"
                        />
                    </div>
                    {collapsed === DESCRIPTION && <div className={tabContent}>
                        {setContent("collapsed")}
                    </div>}
                </div>

                <div className={collapsed === ADDITIONAL_INFO ? tabHighlighted : ""}
                     onClick={() => setState({
                         ...state,
                         collapsed: collapsed === ADDITIONAL_INFO ? "" : ADDITIONAL_INFO
                     })}
                >
                    <div
                        className={multipleClasses(tabTitle, collapsed === ADDITIONAL_INFO ? tabTitleHighlighted : "_")}>
                        <span>{getMessage(ADDITIONAL_INFO)}</span>
                        <Icon
                            src={actualTheme === WHITE ? shortArrowLeftIcon : shortArrowWhiteLeftIcon}
                            size="12px"
                        />
                    </div>
                    {collapsed === ADDITIONAL_INFO && <div className={tabContent}>
                        {setContent("collapsed")}
                    </div>}
                </div>

                <div className={collapsed === REVIEWS ? tabHighlighted : ""}
                     onClick={() => setState({...state, collapsed: collapsed === REVIEWS ? "" : REVIEWS})}
                >
                    <div className={multipleClasses(tabTitle, collapsed === REVIEWS ? tabTitleHighlighted : "_")}>
                        <span>{getMessage(REVIEWS)}</span>
                        <Icon
                            src={actualTheme === WHITE ? shortArrowLeftIcon : shortArrowWhiteLeftIcon}
                            size="12px"
                        />
                    </div>
                    {collapsed === REVIEWS && <div className={tabContent}>
                        {setContent("collapsed")}
                    </div>}
                </div>

            </div>
        </div>
    </>
}

/**
 * connect the product more info Component to the whole store
 * Extract the theme value
 * @param {Object} state the whole state managed by redux
 * @return {Object} all desired value from redux
 * @author Arnaud LITAABA
 */
const mapStateToProps = state => {
    return {
        actualTheme: state.themeState.actualTheme
    }
}

/**
 * connect the product more info component to the whole store
 * @description Extract the theme value
 * bind theme value to product props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(ProductMoreInfo)