import {Component} from 'react'
import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

const listLength = reviewsList.length - 1

class ReviewsCarousel extends Component {
  state = {count: 0}

  leftButtonClicked = () => {
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count - 1}))
    console.log(count)
  }

  rightButtonClicked = () => {
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count + 1}))
    console.log(count)
  }

  profileReview = () => {
    const {count} = this.state
    if (count < 0) {
      return (
        <div className="profile-container">
          <img
            className="profile-image"
            alt={reviewsList[0].username}
            src={reviewsList[0].imgUrl}
          />
          <p className="profile-name">{reviewsList[0].username}</p>
          <p className="text">{reviewsList[0].companyName}</p>
          <p className="text">{reviewsList[0].description}</p>
        </div>
      )
    }
    if (count > listLength) {
      return (
        <div className="profile-container">
          <img
            className="profile-image"
            alt={reviewsList[listLength].username}
            src={reviewsList[listLength].imgUrl}
          />
          <p className="profile-name">{reviewsList[listLength].username}</p>
          <p className="text">{reviewsList[listLength].companyName}</p>
          <p className="text">{reviewsList[listLength].description}</p>
        </div>
      )
    }
    return (
      <div className="profile-container">
        <img
          className="profile-image"
          alt={reviewsList[count].username}
          src={reviewsList[count].imgUrl}
        />
        <p className="profile-name">{reviewsList[count].username}</p>
        <p className="text">{reviewsList[count].companyName}</p>
        <p className="text">{reviewsList[count].description}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            className="button"
            onClick={this.leftButtonClicked}
            data-testid="leftArrow"
          >
            <img
              className="arrow-image"
              alt=" left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          {this.profileReview()}
          <button
            type="button"
            className="button"
            onClick={this.rightButtonClicked}
            data-testid="rightArrow"
          >
            <img
              className="arrow-image"
              alt=" Right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
