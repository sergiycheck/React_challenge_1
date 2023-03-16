import React from "react";
import axios from "axios";

import Tweets from "../Tweets";
import { Tweet, tweetsArrSchema } from "./types";

const axiosInstance = axios.create({
  baseURL: "https://app.codescreen.com/api/",
  headers: { Authorization: `Bearer 8c5996d5-fb89-46c9-8821-7063cfbc18b1` },
});

import "./style.css";

const tweetsEndpointURL = "/assessments/tweets";

function App() {
  const [userName, setUserName] = React.useState<string>("");
  const [tweets, setTweets] = React.useState<{ [key: string]: Tweet }>();

  const formSummitHandler = async () => {
    const params = new URLSearchParams({ userName });

    let { data } = await axiosInstance.get<Tweet[]>(
      `${tweetsEndpointURL}?${params.toString()}`
    );

    data = data?.map((item) => ({
      ...item,
      createdAt: `${item.createdAt}Z`,
    }));

    const validatedTweets = await tweetsArrSchema.safeParseAsync(data);

    if (validatedTweets.success) {
      const tweetsLookUp = {};
      validatedTweets.data.forEach((item) => {
        tweetsLookUp[item.id] = item;
      });

      setTweets(() => tweetsLookUp);
    }

    setUserName(() => "");
  };

  return (
    <div className="App">
      <p className="tweets-analysis-service">Tweets Analysis Service </p>
      <form
        id="input-form"
        className="input-form"
        onSubmit={(e) => {
          e.preventDefault();
          formSummitHandler();
        }}
      >
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          id="input-box"
          className="username-input-box enter-user-name"
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      <Tweets tweets={tweets ? Object.values(tweets) : []} />
    </div>
  );
}

export default App;
