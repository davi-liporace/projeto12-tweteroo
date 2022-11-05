import express from "express";
import cors from "cors";
let avatarPerfil = "";
let usuarioPerfil = "";


const app=express();

app.use(cors());
app.use(express.json());
const tweets = [
	{
		username: "bobesponja",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "eu amo o hub"
	}
]
const usuarios = [{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}]
const postTweets = [{
  username: "bobesponja", tweet: "eu amo o hub" 
}]

app.get("/tweets", (req,res )=> {res.send(tweets.slice(0,10))})
app.post("/sign-up", (req, res) =>{

  const {username, avatar} = req.body
  const signup = {
    username, avatar
  }
  avatarPerfil = avatar
  
  
  usuarios.push(signup)
  res.status(200).send("OK")

})

app.post("/tweets", (req, res) =>{

  const {username, tweet} = req.body
  const novoTweet= {
    username, tweet, avatar:avatarPerfil
  }
  console.log(novoTweet)
  
  
  tweets.unshift(novoTweet)
  res.status(200).send("OK")

})





app.listen(5000, () => {
    console.log(`Server running in port: ${5000}`);
  });