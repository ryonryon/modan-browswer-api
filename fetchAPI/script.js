window.addEventListener("load", async () => {
  // GET
  const res = await fetch("https://httpbin.org/json");
  console.log(res);
  console.log(`content-type: ${res.headers.get("Content-Type")}`);
  console.log(`Redirects: ${res.redirected}`);
  console.log(`Status: ${res.status}`);
  console.log(`Status-Text: ${res.statusText}`);
  console.log(`Response type: ${res.type}`);
  console.log(`Response url: ${res.url}`);

  if (res.status === 200) {
    const text = await res.text();
    const jsonText = JSON.parse(text);
    console.log(jsonText);
  }

  // POST
  const postRes = await fetch("https://httpbin.org/post", {
    method: "post",
    body: "ryotogashi",
    headers: {
      "x-custom-header": "my custom value"
    }
  });

  console.log(postRes);
  console.log(`content-type: ${postRes.headers.get("Content-Type")}`);
  console.log(`Redirects: ${postRes.redirected}`);
  console.log(`Status: ${postRes.status}`);
  console.log(`Status-Text: ${postRes.statusText}`);
  console.log(`postResponse type: ${postRes.type}`);
  console.log(`postResponse url: ${postRes.url}`);

  if (postRes.status === 200) {
    const text = await postRes.text();
    const jsonText = JSON.parse(text);
    console.log(jsonText);
  }
});
