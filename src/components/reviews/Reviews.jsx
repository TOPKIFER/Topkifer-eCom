import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {categoriesProductsReviews, defaultIconSize, WHITE} from "utilities/constant";
import reviewsWhiteClasses from "./reviewsWhite.module.scss";
import reviewsBlackClasses from "./reviewsBlack.module.scss";
import Icon from "components/icon/Icon";
import userIcon from "assets/icons/user.svg"
import {makeIndex, multipleClasses} from "utilities/utilities";
import starIcon from "assets/icons/starNotChecked.svg";

/**
 * Reviews component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} product the selected product
 * @param {Object} rest the others useful props
 * @author Arnaud LITAABA
 */
const Reviews = ({actualTheme, product, ...rest}) => {

    const {
        reviewsClass, review,
        avatar, content, title, message,
        ownerAndDate, stars, starClass, starClassChecked
    } = actualTheme === WHITE ? reviewsWhiteClasses : reviewsBlackClasses;

    const {id} = rest;

    const [state, setState] = useState({
        reviews: {},
        stars: [...Array(5).keys()].map(v => v + 1)
    });

    const fetchReviews = () => {
        let reviews = categoriesProductsReviews.find(review => review.idProduct === +id);
        if (reviews) {
            setState({...state, reviews});
        } else {
            setState({...state, reviews: {}})
        }
    }

    useEffect(fetchReviews, [actualTheme, id]);

    const defineReviews = (data) => {
        return data && data.content.map((r, index) => {
            return <div key={makeIndex(r.id, "reviews", index)} className={review}>
                <div className={avatar}>
                    <Icon
                        src={userIcon}
                        size="30px"
                    />
                </div>
                <div className={content}>
                    <div className={title}>
                        <div className={ownerAndDate}>
                            <u style={{marginRight: "1rem"}}>Test</u>
                            {r.createdAt}
                        </div>
                        <div className={stars}>
                            {allStars.map((value, index) => {

                                return <Icon
                                    className={multipleClasses(starClass, r.stars >= value ? starClassChecked : "_")}
                                    key={makeIndex(value, "stars-reviews", index)}
                                    src={starIcon}
                                    size={defaultIconSize}
                                />
                            })}
                        </div>
                    </div>
                    <div className={message}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores, ducimus eius
                        exercitationem facilis harum impedit neque ratione recusandae! Dolorem.
                    </div>
                </div>
            </div>
        })

    }
    const {reviews, stars: allStars} = state;
    const {data} = reviews;
    const {veryPoor, poor, fair, good, veryGood} = data || {}
    return Object.keys(state.reviews).length > 1 ? <div className={reviewsClass}>
        {defineReviews(veryGood)}
        {defineReviews(good)}
        {defineReviews(fair)}
        {defineReviews(poor)}
        {defineReviews(veryPoor)}
    </div> : " no reviews"
}

/**
 * connect the reviews Component to the whole store
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
 * connect the reviews component to the whole store
 * @description Extract the theme value
 * bind theme value to product props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(Reviews)