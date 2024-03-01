import { useAuth } from "./useAuth";
import Share from 'react-native-share';

const useAction = () => {


      const handleLikeClick = (liked, signalId, likerId, disliked, setLiked, likeCount, setLikeCount, setDisliked, dislikeCount, setDislikeCount) => {
            if (!liked) {
                  var myHeaders = new Headers();
                  myHeaders.append("a", "dni");
                  myHeaders.append("Content-Type", "application/json");

                  var raw = JSON.stringify({
                        signalId,
                        likerId
                  });

                  var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                  };
                  fetch("https://signal-hub.vercel.app/api/likescount", requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));

                  setLikeCount(likeCount + 1);
                  if (disliked) {
                        var myHeaders = new Headers();
                        myHeaders.append("a", "dni");
                        myHeaders.append("Content-Type", "application/json");

                        var raw = JSON.stringify({
                              signalId,
                              likerId
                        });

                        var requestOptions = {
                              method: 'POST',
                              headers: myHeaders,
                              body: raw,
                              redirect: 'follow'
                        };
                        fetch("https://signal-hub.vercel.app/api/dislikesdiscount", requestOptions)
                              .then(response => response.text())
                              .then(result => console.log(result))
                              .catch(error => console.log('error', error));

                        setDislikeCount(disliked ? dislikeCount - 1 : dislikeCount);

                  }
            }
            else {
                  setLikeCount(likeCount - 1);
                  var myHeaders = new Headers();
                  myHeaders.append("a", "dni");
                  myHeaders.append("Content-Type", "application/json");

                  var raw = JSON.stringify({
                        signalId,
                        likerId
                  });

                  var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                  };
                  fetch("https://signal-hub.vercel.app/api/likesdiscount", requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));
            }
            setLiked(!liked);
            setDisliked(false);
      };

      const handleDislikeClick = (liked, signalId, likerId, disliked, setLiked, likeCount, setLikeCount, setDisliked, dislikeCount, setDislikeCount) => {
            if (!disliked) {

                  var myHeaders = new Headers();
                  myHeaders.append("a", "dni");
                  myHeaders.append("Content-Type", "application/json");

                  var raw = JSON.stringify({
                        signalId,
                        likerId
                  });

                  var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                  };
                  fetch("https://signal-hub.vercel.app/api/disLikesCount", requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));
                  setDislikeCount(dislikeCount + 1);
                  if (liked) {
                        var myHeaders = new Headers();
                        myHeaders.append("a", "dni");
                        myHeaders.append("Content-Type", "application/json");

                        var raw = JSON.stringify({
                              signalId,
                              likerId
                        });

                        var requestOptions = {
                              method: 'POST',
                              headers: myHeaders,
                              body: raw,
                              redirect: 'follow'
                        };
                        fetch("https://signal-hub.vercel.app/api/likesdiscount", requestOptions)
                              .then(response => response.text())
                              .then(result => console.log(result))
                              .catch(error => console.log('error', error));
                        setLikeCount(liked ? likeCount - 1 : likeCount);

                  }
            }
            else {
                  setDislikeCount(dislikeCount - 1);
                  var myHeaders = new Headers();
                  myHeaders.append("a", "dni");
                  myHeaders.append("Content-Type", "application/json");

                  var raw = JSON.stringify({
                        signalId,
                        likerId
                  });

                  var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                  };
                  fetch("https://signal-hub.vercel.app/api/dislikesdiscount", requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));

            }
            setDisliked(!disliked);
            setLiked(false);
      };

      const handleFollow = (setIsLoading, signalId, followerId, setFollowing) => {
            setIsLoading(true)
            var myHeaders = new Headers();
            myHeaders.append("a", "dni");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                  signalId,
                  followerId
            });

            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
            };
            fetch("https://signal-hub.vercel.app/api/add-follower", requestOptions)
                  .then(response => response.text())
                  .then(result => {
                        setFollowing(true)

                        setIsLoading(false)
                  })
                  .catch(error => console.log('error', error));
      };
      const handleUnFollow = (setIsLoading, signalId, followerId, setFollowing) => {
            setIsLoading(true)

            var myHeaders = new Headers();
            myHeaders.append("a", "dni");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                  signalId,
                  followerId
            });

            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
            };
            fetch("https://signal-hub.vercel.app/api/remove-follower", requestOptions)
                  .then(response => response.text())
                  .then(result => {
                        setFollowing(false)
                        setIsLoading(false)
                  })
                  .catch(error => console.log('error', error));
      };

      async function handleSubscription(action, setIsLoading, user_id, targetUser_id, userFcmToken, setSubscribed) {
            setIsLoading(true)
            try {
                  const apiUrl = 'https://signal-hub.vercel.app/api/subscribe'; // Adjust the URL to match your API route

                  // Create a request object with the appropriate method, headers, and body
                  const request = {
                        method: 'POST',
                        body: JSON.stringify({
                              userId: user_id,
                              userFcm: userFcmToken,
                              targetUserId: targetUser_id,
                              action: action, // 'subscribe' or 'unsubscribe'
                        }),
                  };

                  // Send the request to your API
                  const response = await fetch(apiUrl, request);

                  if (response.ok) {
                        const data = await response.json();
                        console.log(data.message); // Log the success message
                        if (data.message === 'Subscription subscribed successfully') {
                              setSubscribed(true)
                        }
                        else if (data.message === 'Subscription unsubscribed successfully') {
                              setSubscribed(false)
                        }
                        setIsLoading(false)

                        // You can update your UI or take other actions as needed
                  } else {
                        const errorData = await response.json();
                        console.error(errorData.error); // Log the error message
                        // Handle the error in your application, e.g., show a notification to the user
                  }
            } catch (error) {

                  console.error('Errorz subscribing:', error);
                  // Handle any unexpected errors, e.g., network issues
            }
      }

      async function sendNotification(signalId, commentData) {
            try {
                  const response = await fetch('https://signal-hub.vercel.app/api/comment-notification', {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ commentData, signalId }),
                  });

                  if (response.ok) {
                        const result = await response.json();
                        console.log(result);
                  } else {
                        console.error('Error:', response.statusText);
                  }
            } catch (error) {
                  console.error('Error:', error);
            }
      }
      const handleCommentSubmit = async (setLoading, user, newComment, imageUrl, signalId, setComments, comments, setNewComment, setImageUrl) => {
         

            setLoading(true)
            // Implement your comment submission logic here

            const commentData = {
                  cFireBaseUid: user.fireBaseUid,
                  text: newComment,
                  image: imageUrl, // You can send the image data or URL here
                  cDisplayName: user.displayName,
                  cProfilePicture: user.profilePicture,
                  createdAt: new Date(),
            };

            // Add the new comment to your signal.comments array or send it to the backend
            // Replace with the actual signalId
            const requestBody = { commentData, signalId };


            try {
                  const response = await fetch('https://signal-hub.vercel.app/api/comment', {
                        method: 'PUT',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestBody),
                  });

                  if (response.ok) {
                        console.log('Comment submitted successfully');
                        setLoading(false)
                        sendNotification(signalId, commentData)
                        setComments([...comments, commentData])
                  } else {
                        console.error('Error submitting comment:', response.statusText);
                  }
            } catch (error) {

            }

            // Clear the comment input and image after submission
            setNewComment('');
            setImageUrl(undefined);
            console.log(commentData);
      };

      async function sendReviewNotification(providerId, reviewData) {
            try {
                  const response = await fetch('https://signal-hub.vercel.app/api/review-notification', {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ reviewData, providerId }),
                  });

                  if (response.ok) {
                        const result = await response.json();
                        console.log(result);
                  } else {
                        console.error('Error:', response.statusText);
                  }
            } catch (error) {
                  console.error('Error:', error);
            }
      }
      const handleReviewSubmit = async (setLoading, user, newReview, imageUrl, targetUser_id, setReviews, reviews, setNewReview, setImageUrl) => {
            setLoading(true);

            const reviewData = {
                  rFireBaseUid: user.fireBaseUid,
                  text: newReview,
                  image: imageUrl,
                  rDisplayName: user.displayName,
                  rProfilePicture: user.profilePicture,
                  createdAt: new Date(),
            };

            // Assume you have an API endpoint to handle reviews similar to the comment section
            const apiUrl = 'https://signal-hub.vercel.app/api/review';
            const requestBody = { reviewData, providerId: targetUser_id };

            try {
                  const response = await fetch(apiUrl, {
                        method: 'PUT',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestBody),
                  });

                  if (response.ok) {
                        setReviews([...reviews, reviewData]); // Update reviews state
                        setLoading(false);
                        console.log('submitted');
                        sendReviewNotification(targetUser_id, reviewData)
                        // Add any additional logic you need here, e.g., sending notifications
                  } else {
                        console.error('Error submitting review:', response.statusText);
                  }
            } catch (error) {
                  console.error('Error submitting review:', error.message);
            }

            setNewReview('');
            setImageUrl(undefined);
      };

      const handleSignalSubmit = async (signalData, setIsSignalPosting) => {
            setIsSignalPosting(true)
            try {
                  // Send the form data to the server
                  const response = await fetch('https://signal-hub.vercel.app/api/create-signal', {
                        method: 'POST',
                        body: JSON.stringify(signalData),
                  });

                  if (response.ok) {
                        // Handle successful response (e.g., show a success message)
                        const signal = await response.json()
                        console.log('Signal created successfully!', signal);
                        setIsSignalPosting(false)
                        return signal
                  } else {
                        // Handle error response (e.g., show an error message)
                        console.error('Error creating signal:', response);
                        setIsSignalPosting(false)

                  }
            } catch (error) {
                  // Handle network or other errors
                  console.error('Error creating signal:', error.message);
                  setIsSignalPosting(false)

            }
      };

      

      function addNeutral(signalId, userId,  ) {
            var myHeaders = new Headers();
            myHeaders.append("a", "dni");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                  "signalId": signalId,
                  'neutralId': userId
            });

            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
            };
            fetch("https://signal-hub.vercel.app/api/neutral-count", requestOptions)
                  .then(response => response.text())
                  .then(result => {
                        console.log(result)
                  })
                  .catch(error => console.log('error', error));

            return "Neutral counted"
      }
      function addGood(signalId, userId,  ) {
            var myHeaders = new Headers();
            myHeaders.append("a", "dni");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                  "signalId": signalId,
                  'goodcounterId': userId
            });

            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
            };
            fetch("https://signal-hub.vercel.app/api/good-count", requestOptions)
                  .then(response => response.text())
                  .then(result => {

                        console.log(result)
                  })
                  .catch(error => console.log('error', error));

            return "Good counted"

      }
      function badCount(signalId, userId,) {

            var myHeaders = new Headers();
            myHeaders.append("a", "dni");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                  "signalId": signalId,
                  'badCounterId': userId
            });

            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
            };
            fetch("https://signal-hub.vercel.app/api/bad-count", requestOptions)
                  .then(response => response.text())
                  .then(result => {
                        console.log(result)
                  })
                  .catch(error => console.log('error', error));
      }

      function goodDiscount(signalId, userId,) {
            var myHeaders = new Headers();
            myHeaders.append("a", "dni");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                  "signalId": signalId,
                  'goodDiscounterId': userId
            });

            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
            };
            fetch("https://signal-hub.vercel.app/api/good-discount", requestOptions)
                  .then(response => response.text())
                  .then(result => console.log(result))
                  .catch(error => console.log('error', error));

      }
      function badDiscount(signalId, userId,) {
            var myHeaders = new Headers();
            myHeaders.append("a", "dni");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                  "signalId": signalId,
                  'badCounterId': userId
            });

            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
            };
            fetch("https://signal-hub.vercel.app/api/bad-discount", requestOptions)
                  .then(response => response.text())
                  .then(result => console.log(result))
                  .catch(error => console.log('error', error));

      }
      function neutralDiscount(signalId, userId,) {
            var myHeaders = new Headers();
            myHeaders.append("a", "dni");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                  "signalId": signalId,
                  'counterId': userId
            });

            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
            };
            fetch("https://signal-hub.vercel.app/api/neutral-discount", requestOptions)
                  .then(response => response.text())
                  .then(result => {
                        console.log(result)
                  })
                  .catch(error => console.log('error', error));
      }

      const handleGoodClick = (signalId, userId, setCurrentVote, currentVote) => {

            if (currentVote !== 'good') {
                  addGood(signalId, userId)
                  setCurrentVote('good')
                  if (currentVote === 'bad') {

                        badDiscount(signalId, userId)

                  }
                  if (currentVote === 'neutral') {

                        neutralDiscount(signalId, userId)

                  }

            }
            else {
                  goodDiscount(signalId, userId)
                  setCurrentVote(null)

            }
      }
      const handleNeutralClick = (signalId, userId, setCurrentVote, currentVote) => {
            if (currentVote !== 'neutral') {
                  addNeutral(signalId, userId,)
                  setCurrentVote('neutral')

                  if (currentVote === 'bad') {

                        badDiscount(signalId, userId)

                  }
                  if (currentVote === 'good') {

                        goodDiscount(signalId, userId)

                  }
            }
            else {
                  neutralDiscount(signalId, userId)
                  setCurrentVote('none')

            }


      };

      const handleBadClick = (signalId, userId, setCurrentVote, currentVote) => {
            if (currentVote !== 'bad') {

                  badCount(signalId, userId)
                  setCurrentVote('bad')

                  if (currentVote === 'neutral') {

                        neutralDiscount(signalId, userId)

                  }
                  if (currentVote === 'good') {

                        goodDiscount(signalId, userId)

                  }
            }
            else {
                  badDiscount(signalId, userId)
                  setCurrentVote('none')
            }


      };
      const handleShare = async ( url, type ) => {
            try {
              const shareOptions = {
                title: type + ' Sharing',
                message: `Check out this ${type}: ${url}`,
              };
        
              await Share.open(shareOptions);
            } catch (error) {
            }
          };
      return {
            handleShare,
            handleLikeClick,
            handleDislikeClick,
            handleFollow,
            handleUnFollow,
            handleSubscription,
            handleCommentSubmit,
            handleReviewSubmit,
            handleSignalSubmit,
            handleGoodClick, handleNeutralClick, handleBadClick

      }
}


export default useAction;
