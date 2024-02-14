import { useAuth } from "./useAuth";

const useUpdate = () => {
      const { getUser } = useAuth()

      const updateProfile = async (user) => {
            try {
                  // Define the user ID and personalInformation object (adjust this based on your actual data structure)


                  // Send a PUT request to your API route
                  const response = await fetch('https://signal-hub.vercel.app/api/update-full-user', {
                        method: 'PUT',
                        body: JSON.stringify({
                              user,
                        }),
                  });

                  const data = await response.json();
                  console.log('Response:', data);
                  await getUser()
                  return data


            } catch (error) {
                  alert("Error saving personal information")
            }
      }



      return {
            updateProfile
      }
}


export default useUpdate;
