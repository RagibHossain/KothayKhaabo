import React, { useState, SyntheticEvent, useContext } from "react";
import { Modal } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { IUser } from "../Common/Models/User";
import { IReview } from "../Common/Models/Restaurant";
import { rootStoreContext } from "../Common/Stores/rootStore";
import { observer } from "mobx-react-lite";
interface IProps {
  modal: boolean;
  showModal: (value: boolean) => void;
  user: IUser;
  id: string;
}
const ReviewModal: React.FC<IProps> = ({ modal, showModal, user, id }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [error, setError] = useState(false);
  const rootStore = useContext(rootStoreContext);
  const { uploadReview } = rootStore.restaurantStore;
  const handleChange = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    setReview(event.currentTarget.value);
  };
  let formReview: IReview = {
    restaurantId: "",
    displayName: "",
    username: "",
    rating: 0,
    review: "",
    timePosted: undefined,
  };
  const handleSubmit = () => {
    console.log(`${rating}, ${review}`);
    formReview.restaurantId = id;
    formReview.displayName = user.displayName;
    formReview.username = user.username;
    formReview.rating = rating;
    formReview.review = review;
    if (rating) {
      uploadReview(formReview);
      console.log(formReview);
      showModal(false);
    } else setError(true);
    setRating(0);
    setReview("");
  };
  return (
    <div className="bg-dark rounded-top">
      <Modal
        dialogClassName="reviewModal"
        show={modal}
        className="h-100"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div
          className="modal-header"
          style={{ width: "100%", backgroundColor: "#1b1b1b", color: "white" }}
        >
          <h2 className="mx-auto modalHeader">GIVE YOUR RATING</h2>
        </div>
        <div className="modal-body mt-4">
          <StarRatings
            rating={rating}
            starRatedColor="#FEBD11"
            starHoverColor="#FEBD11"
            changeRating={setRating}
            numberOfStars={5}
            name="rating"
          />
          {error && (
            <label
              className="ml-5"
              style={{ color: "#c70909", fontSize: "24px" }}
            >
              Please give a rating
            </label>
          )}
          <textarea
            className="modal-header mt-5"
            style={{
              height: "300px",
              width: "100%",
              fontSize: "24px",
              border: "solid 2px #1b1b1b",
            }}
            name="review"
            value={review}
            onChange={handleChange}
            placeholder="How was your experience ? (Optional)"
          ></textarea>
        </div>
        <div
          className="modal-footer d-flex"
          style={{ width: "100%", backgroundColor: "#1b1b1b", color: "white" }}
        >
          <button
            className="submitButton mr-auto"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
          <button className="dangerButton" onClick={() => showModal(false)}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default observer(ReviewModal);
