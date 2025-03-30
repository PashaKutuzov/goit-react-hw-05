import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "kOGLsRrYB_xiUtd4ymh3pRN4KYURpWeLW4qQxGnBPA4"; 

export const fetchPhotosWithTopic = async (topic, currentPage = 1) => {
    try {
        const response = await axios.get(`/search/photos/`, {
            params: {
                 query: topic, 
                client_id: ACCESS_KEY,
                page: currentPage,
                per_page: 12
            }
        });

        
       
        return response.data.results;
    } catch (error) {
        console.error("Error fetching photos:", error);
        return [];
    }
};




































// export const fetchPhotosWithTopic = async (topic) => {
//     const response = await axios.get(`/search/photos`, {
//         params: { query: topic, client_id: ACCESS_KEY }
//     });
//     return response.data.results; 
// };



// try {
//     setPhotos([]);
//     setError(false);
//     setLoading(true);
//     const data = await fetchPhotosWithTopic(topic);
//     setPhotos(data);
//     setPage(page + 1)
//     setSearch(topic)
//     setPage(1)
//   } catch  {
   
//     setError(true);
    
//   } finally {
//     setLoading(false);
//   }