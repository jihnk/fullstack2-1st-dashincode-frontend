import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Cookies, { Cookie } from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faShareAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import QuantityCounter from '../QuantityCounter/QuantityCounter';
import facebook from './ico_sns_facebook.gif';
import kakaostory from './ico_sns_kakaostory.gif';
import twitter from './ico_sns_twitter.gif';
import ProductDescription from '../ProductDescription/ProductDescription';
import './ProductInfo.scss';

const cookie = new Cookies();
class productInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      detail: {},
      isLiked: false,
      isSharable: false,
      productQuantity: 1,
      img: {},
      images: [],
      shipment: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/like/${id}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          isLiked: res.DATA,
        })
      );

    fetch(`/product/${id}/detail`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          detail: res,
          shipment: res.shipment,
        })
      );

    fetch(`/product/${id}/thumbnail`)
      .then(res => res.json())
      .then(res =>
        this.setState(
          {
            img: res[0],
            images: res,
          },
          () => this.addToStorage()
        )
      );
    this.interval = setInterval(this.autoChangeImage, 2000);
  }

  addToStorage = () => {
    const { id } = this.props.match.params;

    let loadeddetail = JSON.parse(localStorage.getItem('loadeddetail'));
    if (!loadeddetail) {
      loadeddetail = [];
      loadeddetail.unshift({
        detailId: +id,
        imageUrl: this.state.img.image_url,
      });
      localStorage.setItem('loadeddetail', JSON.stringify(loadeddetail));
    } else if (loadeddetail?.length > 15) {
      loadeddetail.pop();
      loadeddetail.unshift({
        detailId: +id,
        imageUrl: this.state.img.image_url,
      });
      localStorage.setItem('loadeddetail', JSON.stringify(loadeddetail));
    } else {
      loadeddetail.unshift({
        detailId: +id,
        imageUrl: this.state.img.image_url,
      });
      localStorage.setItem('loadeddetail', JSON.stringify(loadeddetail));
    }
  };

  autoChangeImage = () => {
    let imgNum = Math.round(Math.random() * 2);
    const { img, images } = this.state;
    img.image_url = images[imgNum].image_url;
    this.setState({
      img: img,
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleHeart = () => {
    const { id } = this.props.match.params;
    if (cookie.get('user')) {
      fetch(`/like/${id}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          this.setState({ isLiked: data.DATA }, () => {
            this.state.isLiked
              ? alert('찜한 상품에 저장되었습니다.')
              : alert('취소되었습니다.');
          });
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
      fetch('/cart', {
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
        .then(
          this.setState({
            productQuantity: 1,
          })
        );
    } else {
      alert('로그인 후 이용 가능한 서비스입니다');
    }
  };

  imageChange = url => {
    const { img } = this.state;
    img.image_url = url;
    this.setState({
      img: img,
    });
  };

  render() {
    const {
      img,
      images,
      detail,
      isLiked,
      isSharable,
      productQuantity,
      shipment,
    } = this.state;
    const { toggleHeart, toggleShare, setQuantity } = this;
    console.log(this.state);
    return (
      <div>
        <main className="ProductInfo">
          <aside>
            <img
              className="productThumbnail"
              alt="Hand-made Greek Yogurt"
              src={img.image_url}
            />
            <div className="thumbnailContainer">
              {images.map((img, id) => {
                return (
                  <img
                    key={id}
                    className="littleThumbnails"
                    alt="Hand-made Greek Yogurt"
                    src={img.image_url}
                    onMouseOver={() => this.imageChange(img.image_url)}
                  />
                );
              })}
            </div>
            <div className="iconContainer">
              <FontAwesomeIcon
                className={isLiked ? 'fas fa-heart active' : 'fas fa-heart'}
                onClick={toggleHeart}
                icon={faHeart}
              />
              <FontAwesomeIcon
                className="fas fa-share-alt"
                onClick={toggleShare}
                icon={faShareAlt}
              />
            </div>
            <div
              className={
                isSharable ? 'shareContainer active' : 'shareContainer'
              }
            >
              <FontAwesomeIcon
                className="fas fa-times"
                onClick={toggleShare}
                icon={faTimes}
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
            {shipment.length === 0 && (
              <h2>
                기본배송
                <span>{'>'}</span>
              </h2>
            )}
            {/* {shipment &&
              shipment.map((shipment, id) => {
                return (
                  <h2 key={id}>
                    {shipment === 'isCool'
                      ? '다신쿨배송'
                      : shipment === 'isFree'
                      ? '무료배송'
                      : shipment === 'isDashin'
                      ? '다신배송'
                      : shipment === 'isBasic'
                      ? '기본배송'
                      : shipment}
                    <span>{'>'}</span>
                  </h2>
                );
              })} */}
            <h1>{detail.name}</h1>
            <p>{detail.description}</p>

            <dl>
              <dt>판매가격</dt>
              {!detail.discountedPrice ? (
                <dd>
                  <em>{(detail.price * 1).toLocaleString()}</em>원
                </dd>
              ) : (
                <dd>
                  <em>{(detail.discountedPrice * 1).toLocaleString()}</em>원
                  <em className="originalPrice">
                    {(detail.price * 1).toLocaleString()}
                  </em>
                </dd>
              )}
              <dt>적립금</dt>
              <dd>
                {(detail.price * 0.01).toLocaleString()}원 적립 (실 결제금액의
                1%)
              </dd>
            </dl>
            <dl>
              <dt>보관방법</dt>
              <dd>{detail.storage}</dd>
              <dt>배송비</dt>
              <dd>
                {shipment &&
                  shipment.map((shipment, id) => {
                    return (
                      <span key={id}>
                        {shipment === 'isCool'
                          ? '[다신쿨배송]'
                          : shipment === 'isFree'
                          ? '[무료배송]'
                          : shipment === 'isDashin'
                          ? '[다신배송]'
                          : shipment === 'isBasic'
                          ? '[기본배송]'
                          : shipment}
                      </span>
                    );
                  })}
                <strong> 30,000원</strong> 이상 구매 시{' '}
                <strong>무료배송</strong>
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
                <span>
                  <em>{(detail.price * productQuantity).toLocaleString()}</em>원
                </span>
              </p>
              <button className="buy">구매하기</button>
              <button className="cart" onClick={this.addToCart}>
                장바구니
              </button>
            </div>
          </section>
        </main>
        <ProductDescription />
      </div>
    );
  }
}

export default withRouter(productInfo);
