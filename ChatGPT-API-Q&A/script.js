
//gpt-3.5-turbo
//text-davinci-003
//text-davinci-002
function sendToChatGPT() {
  let value = document.getElementById("word-input").value;

  let body = {
    prompt: value,
    temperature: 1,
    max_tokens: 50,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: "\n",
    model: "davinci-003"
  };

  let headers = {
    Authorization: "Bearer 'add your secret Api key here'",
  };

  axios
    .post("https://api.openai.com/v1/engines/davinci-003/completions", body, {
      headers: headers,
    })
    .then((response) => {
      console.log(response.data.choices);
      let reply = response.data.choices[0].text;
      console.log(reply);
      document.getElementById("reply-content").textContent = reply;
    });
}

