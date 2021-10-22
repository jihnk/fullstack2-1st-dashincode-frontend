import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faShareAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import QuantityCounter from '../../../components/QuantityCounter/QuantityCounter';
import kakaostory from './ico_sns_kakaostory.gif';
import facebook from './ico_sns_facebook.gif';
import twitter from './ico_sns_twitter.gif';
import { API_ENDPOINT } from '../../../api';
import './ProductInfo.scss';

const cookie = new Cookies();

class ProductInfo extends Component {
  constructor() {
    super();
    this.state = {
      thumbnail: {},
      thumbnails: [],
      info: {},
      shipment: [],
      isLiked: false,
      isSharable: false,
      productQuantity: 1,
    };
  }

  addToStorage = () => {
    const { id } = this.props.match.params;
    let loadedProduct = JSON.parse(localStorage.getItem('loadedProduct'));
    if (!loadedProduct) {
      loadedProduct = [];
      loadedProduct.unshift({
        productId: +id,
        imageUrl: this.state.thumbnail.image_url,
      });
      localStorage.setItem('loadedProduct', JSON.stringify(loadedProduct));
    } else if (loadedProduct?.length > 15) {
      loadedProduct.pop();
      const filteredProduct = loadedProduct.filter(
        item => item.productId !== +id
      );
      filteredProduct.unshift({
        productId: +id,
        imageUrl: this.state.thumbnail.image_url,
      });
      localStorage.setItem('loadedProduct', JSON.stringify(filteredProduct));
    } else {
      const filteredProduct = loadedProduct.filter(
        item => item.productId !== +id
      );
      filteredProduct.unshift({
        productId: +id,
        imageUrl: this.state.thumbnail.image_url,
      });
      localStorage.setItem('loadedProduct', JSON.stringify(filteredProduct));
    }
  };

  autoChangeImage = () => {
    const { thumbnails } = this.state;
    let thumbnailNum = Math.round(Math.random() * 4);
    const changedMainImage = thumbnails[thumbnailNum];
    this.setState({
      thumbnail: changedMainImage,
    });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${API_ENDPOINT}/product/${id}/info`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          info: res,
          shipment: res.shipment,
        })
      );

    fetch(`${API_ENDPOINT}/product/${id}/thumbnail`)
      .then(res => res.json())
      .then(res => {
        const [mainImage] = res.filter(thumbnail => thumbnail.is_main === 1);
        this.setState(
          {
            thumbnail: mainImage,
            thumbnails: res,
          },
          () => this.addToStorage()
        );
      })
      .then((this.interval = setInterval(this.autoChangeImage, 3000)));

    fetch(`${API_ENDPOINT}/product/${id}/like`)
      .then(res => res.json())
      .then(res => {
        this.setState({ isLiked: res.data });
      });
  }

  changeImage = url => {
    clearInterval(this.interval);
    this.setState({
      thumbnail: { image_url: url },
    });
    setTimeout((this.interval = setInterval(this.autoChangeImage, 3000)), 3000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleHeart = () => {
    const { id } = this.props.match.params;
    const { isLiked } = this.state;
    if (cookie.get('user')) {
      const method = !isLiked ? 'POST' : 'DELETE';
      fetch(`${API_ENDPOINT}/product/${id}/like`, {
        method: method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(res => {
          if (res.data) {
            this.setState({
              isLiked: res.data,
            });
            alert('찜한 상품에 저장되었습니다.');
          } else {
            this.setState({
              isLiked: res.data,
            });
            alert('취소되었습니다.');
          }
        });
    } else {
      alert('로그인 후 이용 가능한 서비스입니다');
    }
  };

  toggleShare = () => {
    const { isSharable } = this.state;
    this.setState({ isSharable: !isSharable });
  };

  setQuantity = quantity => {
    this.setState({ productQuantity: quantity });
  };

  addToCart = () => {
    if (cookie.get('user')) {
      fetch(`${API_ENDPOINT}/cart`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: this.props.match.params.id,
          productQuantity: this.state.productQuantity,
        }),
      })
        .then(res => res.json())
        .then(alert('장바구니에 담겼습니다'))
        .then(window.location.reload());
    } else {
      alert('로그인 후 이용 가능한 서비스입니다');
    }
  };

  render() {
    const { changeImage, toggleHeart, toggleShare, setQuantity, addToCart } =
      this;
    const {
      thumbnail,
      thumbnails,
      shipment,
      isLiked,
      isSharable,
      productQuantity,
    } = this.state;
    const { name, price, discounted_price, description, storage } =
      this.state.info;

    return (
      <main className="ProductInfo">
        <aside>
          <img
            className="productThumbnail"
            alt="Product Thumbnail"
            src={thumbnail.image_url}
          />
          <div className="thumbnailContainer">
            {thumbnails.map((thumbnail, id) => {
              return (
                <img
                  key={id}
                  className="productThumbnails"
                  alt="Product Thumbnail"
                  src={thumbnail.image_url}
                  onMouseOver={() => changeImage(thumbnail.image_url)}
                />
              );
            })}
          </div>

          <div className="iconContainer">
            <FontAwesomeIcon
              className={isLiked ? 'fas fa-heart active' : 'fas fa-heart'}
              icon={faHeart}
              onClick={toggleHeart}
            />
            <FontAwesomeIcon
              className="fas fa-share-alt"
              icon={faShareAlt}
              onClick={toggleShare}
            />
          </div>
          <div
            className={isSharable ? 'shareContainer active' : 'shareContainer'}
          >
            <FontAwesomeIcon
              className="fas fa-times"
              icon={faTimes}
              onClick={toggleShare}
            />
            <p>공유하기</p>
            <div>
              <Link to="#">
                <img alt="Share with KakaoStory" src={kakaostory} />
              </Link>
              <Link to="#">
                <img alt="Share with Facebook" src={facebook} />
              </Link>
              <Link to="#">
                <img alt="Share with Twitter" src={twitter} />
              </Link>
            </div>
          </div>
        </aside>

        <section>
          {shipment.length !== 0 && (
            <h2>
              {shipment[0]}
              <span>{'>'}</span>
            </h2>
          )}
          <h1>{name}</h1>
          <p>{description}</p>
          <dl>
            <dt>판매가격</dt>
            {price === discounted_price ? (
              <dd>
                <em>{(price * 1).toLocaleString()}</em>원
              </dd>
            ) : (
              <dd>
                <em>{(discounted_price * 1).toLocaleString()}</em>원
                <em className="originalPrice">
                  {(price * 1).toLocaleString()}
                </em>
              </dd>
            )}
            <dt>적립금</dt>
            {price === discounted_price ? (
              <dd>
                {(price * 0.01).toLocaleString()}원 적립 (실 결제금액의 1%)
              </dd>
            ) : (
              <dd>
                {(discounted_price * 0.01).toLocaleString()}원 적립 (실
                결제금액의 1%)
              </dd>
            )}
          </dl>
          <dl>
            <dt>보관방법</dt>
            <dd>{storage}</dd>
            <dt>배송비</dt>
            <dd>
              {shipment.length !== 0 && shipment[0]}
              {!shipment.includes('무료배송') && (
                <span>
                  <strong> 30,000원</strong> 이상 구매 시{' '}
                  <strong>무료배송</strong>
                </span>
              )}
            </dd>
            <dt>배송방법</dt>
            <dd>다신샵에서 직접배송</dd>
            <dt>택배사</dt>
            <dd>다코택배</dd>
          </dl>

          <div className="orderContainer">
            <QuantityCounter
              quantity={productQuantity}
              setQuantity={setQuantity}
            />
            <p>
              총 상품금액{' '}
              {price === discounted_price ? (
                <span>
                  <em>{(price * productQuantity).toLocaleString()}</em>원
                </span>
              ) : (
                <span>
                  <em>
                    {(discounted_price * productQuantity).toLocaleString()}
                  </em>
                  원
                </span>
              )}
            </p>
            <button className="buy">구매하기</button>
            <button className="cart" onClick={addToCart}>
              장바구니
            </button>
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(ProductInfo);
