import React, {useState, useEffect} from "react";
import { Card } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Homes() {
  
  let navigate = useNavigate();

  const changeRoute = (path) => {
      navigate(path)
  }

  const [posts, setPosts] = useState()
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
      )
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
      <>
      <h1>My spaces</h1>

    <div className="row">
      {posts.map((post, index) => (
        <div className="col" key={index} onClick={changeRoute(`rooms/${index}`)}>
          <Card style={{ width: "18rem", padding: "5px" }}>
            <Card.Img variant="top" src={(post.name).includes("Casa") ? "https://clipart.info/images/ccovers/1495751364House-PNG-Clip-Art2210.png": "https://images.vexels.com/media/users/3/137213/isolated/preview/26974c1d3b83470d74a16b1dc4c9c8de-edificio-de-apartamentos-casa-de-la-ciudad.png"} alt={post.name} />
            <Card.Body>
              <Card.Title>{post.name}</Card.Title>
              <Card.Text>
                {post.address}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </>
  );
}

export default Homes;
