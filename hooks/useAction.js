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
      return {
            handleLikeClick,
            handleDislikeClick,
            handleFollow,
            handleUnFollow,
            handleSubscription
      }
}


export default useAction;
