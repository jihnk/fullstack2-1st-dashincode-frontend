import React from 'react';
import { withRouter } from 'react-router-dom';
import './ProductDescription.scss';
import detail from './detail.jpg';

class ProductNav extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl: '',
      reviewCount: 0,
      descriptionClicked: false,
      informationClicked: false,
      reviewClicked: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://localhost:3000/product/description/${id}`)
      .then(res => res.json())
      .then(res =>
        this.setState({ imageUrl: res.IMAGE, reviewCount: res.REVIEW })
      );
  }

  moveToDescription = () => {
    this.setState({
      descriptionClicked: true,
      informationClicked: false,
      reviewClicked: false,
    });
  };

  moveToInformation = () => {
    this.setState({
      descriptionClicked: false,
      informationClicked: true,
      reviewClicked: false,
    });
  };

  moveToReview = () => {
    this.setState({
      descriptionClicked: false,
      informationClicked: false,
      reviewClicked: true,
    });
  };
  render() {
    const {
      imageUrl,
      reviewCount,
      descriptionClicked,
      informationClicked,
      reviewClicked,
    } = this.state;
    return (
      <div className="ProductDescription">
        <div className="productDescriptionWrap">
          <section className="description">
            <ul>
              <li
                className={descriptionClicked && 'watched'}
                onClick={this.moveToDescription}
              >
                상세설명
              </li>
              <li
                className={informationClicked && 'watched'}
                onClick={this.moveToInformation}
              >
                구매정보
              </li>
              <li
                className={reviewClicked && 'watched'}
                onClick={this.moveToReview}
              >
                상품후기({reviewCount})
              </li>
            </ul>
            <img className="descriptionImage" src={detail} alt="description" />
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductNav);
