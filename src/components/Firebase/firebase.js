
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
var config = {
          apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: "https://goalcoach-d4343.firebaseio.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      };

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db=app.database()
  }
    getGoalData=()=>{

         this.db.ref('goals').on('value',(snap)=>{
            console.log(snap.val())
            return(snap.val())
        })
}
 // writeUserData(userId, name, email, imageUrl) {
 //  app.database().ref('users/' + userId).set({
 //    username: name,
 //    email: email,
 //    profile_picture : imageUrl
 //  });
// }

}



export default Firebase;
