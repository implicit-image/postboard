(() => {

  let post_button = document.querySelector("#post-button")
  let textbox       = document.querySelector("#text-box")
  let board         = document.querySelector("#postboard")



  //TODO: implement async
  const loadPosts = (event) => {
    const posts = fetchPosts() //this fetches correctly
    // TODO: sort posts by date
    for (post of posts) {
      addPost(post)
    }
  }

  //dummy function
  // TODO: implement proper fetching
  const fetchPosts = () => {
    return [
      {
        author: "ann1",
        content: "fasgfhhhhhhhhhhhhhhhhhhhhhh",
        submitDate: "date"
      },
      {
        author: "ann1",
        content: "fasgfhhhhhhhhhhhhhhhhhhhhhh",
        submitDate: "date"
      },
      {
        author: "ann1",
        content: "fasgfhhhhhhhhhhhhhhhhhhhhhh",
        submitDate: "date"
      },
      {
        author: "ann1",
        content: "fasgfhhhhhhhhhhhhhhhhhhhhhh",
        submitDate: "date"
      },
      {
        author: "ann1",
        content: "fasgfhhhhhhhhhhhhhhhhhhhhhh",
        submitDate: "date"
      },
      {
        author: "ann1",
        content: "fasgfhhhhhhhhhhhhhhhhhhhhhh",
        submitDate: "date"
      },
      {
        author: "ann1",
        content: "fasgfhhhhhhhhhhhhhhhhhhhhhh",
        submitDate: "date"
      },
      {
        author: "ann1",
        content: "fasgfhhhhhhhhhhhhhhhhhhhhhh",
        submitDate: "date"
      }
    ]
  }

  const createPost = (author, content, date) => {
    let post         = document.createElement("div")
    let dateField    = document.createElement("div")
    let contentField = document.createElement("div")
    let authorField  = document.createElement("div")
    // setup post style
    post.classList.add("post")
    // setup content style
    contentField.classList.add("post-content")
    contentField.innerText = content
    //setup author style
    authorField.classList.add("post-author")
    authorField.innerText = author
    //setup date style
    authorField.classList.add("post-date")
    authorField.innerText = date

    // assemble post

    post.appendChild(authorField)
    post.appendChild(contentField)
    post.appendChild(dateField)

    return post
  }


  const addPost = (post) => {
    const author  = post.author
    const content = post.content
    const submitDate    = post.submitDate
    let postEl = createPost(author, content, submitDate)
    //get node top insert into
    board.prepend(postEl)
  }

  const submitPost = (event) => {
    addPost({
      author: "weaea",
      content: "GHSMDS  ",
      date: "aghhd"
    })
    textbox.value = ""
  }

  // const handleKeyDown = (event) => {
  //   if (event.code == "Enter") {
  //     console.log(event.code)
  //     submitPost(event)
  //   }
  // }


  // textbox.addEventListener("keydown", handleKeyDown)
  post_button.onclick = submitPost
  //init board with dummy posts
  window.onload = event => loadPosts(event)




})()
