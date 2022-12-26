// import { useEffect, useState } from "react";
// import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

// export default function useVideoList() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     async function fetchVideos() {
//       const db = getDatabase();
//       const videoRef = ref(db, "videos");
//       const videoQuery = query(videoRef, orderByKey());
//       try {
//         setError("");
//         setLoading(true);
//         const snapshot = await get(videoQuery);
//         setLoading(false);
//         if (snapshot.exists()) {
//           setVideos((prevVideos) => {
//             return [...prevVideos, ...Object.values(snapshot.val())];
//           });
//         } else {
//           console.log("no data found");
//         }
//       } catch (err) {
//         console.log(err);
//         setLoading(false);
//         setError(true);
//       }
//     }
//     fetchVideos();
//   }, []);
//   return {
//     loading,
//     error,
//     videos,
//   };
// }



import {
    get,
    getDatabase,
    limitToFirst,
    orderByKey,
    query,
    ref,
    startAt,
  } from "firebase/database";
  import { useEffect, useState } from "react";
  
  export default function useVideoList(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);
  
    useEffect(() => {
      async function fetchVideos() {
        // database related works
        const db = getDatabase();
        const videosRef = ref(db, "videos");
        const videoQuery = query(
          videosRef,
          orderByKey(),
          startAt("" + page),
          limitToFirst(8)
        );
  
        try {
          setError(false);
          setLoading(true);
          // request firebase database
          const snapshot = await get(videoQuery);
          setLoading(false);
          if (snapshot.exists()) {
            setVideos((prevVideos) => {
              return [...prevVideos, ...Object.values(snapshot.val())];
            });
          } else {
            setHasMore(false);
          }
        } catch (err) {
          console.log(err);
          setLoading(false);
          setError(true);
        }
      }
  
      fetchVideos();
    }, [page]);
  
    return {
      loading,
      error,
      videos,
      hasMore,
    };
  }