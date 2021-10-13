import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
import './ProductInfo.scss';
import ProductDescription from '../ProductDescription/ProductDescription';
class ProductInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLiked: false,
      isSharable: false,
      productQuantity: 1,
      img: [],
      images: [],
    };
  }

  componentDidMount() {
    // const { id } = this.props.match.params;
    // fetch(`http://localhost:3000/product/${id}`)
    //   .then(res => res.json())
    //   .then(res =>
    //     this.setState({
    //       data: res,
    //     })
    //   );
    // fetch(`http://localhost:8000/like/${id}`)
    //   .then(res => res.json())
    //   .then(res =>
    //     this.setState({
    //       isLiked: res.DATA,
    //     })
    //   );
    fetch('http://localhost:3000/data/detail.json')
      .then(res => res.json())
      .then(res =>
        this.setState(
          {
            data: res.DATA,
            isLiked: res.DATA.isLiked,
            img: res.DATA.mainImage,
            images: res.DATA.extraImages,
          },
          () => this.addToStorage()
        )
      );
    this.interval = setInterval(this.autoChangeImage, 3000);
  }

  addToStorage = () => {
    const { id } = this.props.match.params;

    let loadedProduct = JSON.parse(localStorage.getItem('loadedProduct'));
    if (!loadedProduct) {
      loadedProduct = [];
      loadedProduct.unshift({
        productId: +id,
        imageUrl: this.state.img.image_url,
      });
      localStorage.setItem('loadedProduct', JSON.stringify(loadedProduct));
    } else if (loadedProduct?.length > 15) {
      loadedProduct.pop();
      loadedProduct.unshift({
        productId: +id,
        imageUrl: this.state.img.image_url,
      });
      localStorage.setItem('loadedProduct', JSON.stringify(loadedProduct));
    } else {
      loadedProduct.unshift({
        productId: +id,
        imageUrl: this.state.img.image_url,
      });
      localStorage.setItem('loadedProduct', JSON.stringify(loadedProduct));
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
    const { isLiked } = this.state;
    this.setState({ isLiked: !isLiked });
    !isLiked
      ? window.alert('찜한 상품에 저장되었습니다.')
      : window.alert('취소되었습니다.');
  };

  toggleShare = () => {
    const { isSharable } = this.state;
    this.setState({ isSharable: !isSharable });
  };

  setQuantity = quantity => {
    this.setState({ productQuantity: quantity });
  };

  addToCart = () => {
    fetch('장바구니API', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Test',
        productId: this.props.match.params.id,
        productQuantity: this.state.productQuantity,
      }),
    })
      .then(res => res.json())
      .then(alert('장바구니에 담겼습니다'));
  };

  imageChange = url => {
    const { img } = this.state;
    img.image_url = url;
    this.setState({
      img: img,
    });
  };

  render() {
    const { img, images, data, isLiked, isSharable, productQuantity } =
      this.state;
    const { toggleHeart, toggleShare, setQuantity } = this;

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
            {data.isDashin === 1 && (
              <h2>
                <Link to="/list/dashindelivery">다신배송</Link>
                <span>{'>'}</span>
              </h2>
            )}
            {data.isCool === 1 && (
              <h2>
                <Link to="/list/dashincooldelivery">다신쿨배송</Link>
                <span>{'>'}</span>
              </h2>
            )}
            <h1>{data.name}</h1>
            <p>{data.description}</p>

            <dl>
              <dt>판매가격</dt>
              {!data.discountedPrice ? (
                <dd>
                  <em>{(data.price * 1).toLocaleString()}</em>원
                </dd>
              ) : (
                <dd>
                  <em>{(data.discountedPrice * 1).toLocaleString()}</em>원
                  <em className="originalPrice">
                    {(data.price * 1).toLocaleString()}
                  </em>
                </dd>
              )}
              <dt>적립금</dt>
              <dd>
                {(data.price * 0.01).toLocaleString()}원 적립 (실 결제금액의 1%)
              </dd>
            </dl>
            <dl>
              <dt>보관방법</dt>
              <dd>{data.storage}</dd>
              <dt>배송비</dt>
              <dd>
                <span>{data.isFree === 1 && '[무료배송] '}</span>
                <span>{data.isDashin === 1 && '[다신배송] '}</span>
                <span>{data.isCool === 1 && '[다신쿨배송] '}</span>
                <span>{data.isBasic === 1 && '[기본배송] '}</span>
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
                  <em>{(data.price * productQuantity).toLocaleString()}</em>원
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

export default withRouter(ProductInfo);