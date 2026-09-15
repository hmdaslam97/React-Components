import axios from "axios";

// For backend logic check https://github.com/hmdaslam97/GraphQL-Backend-Books-Store.git
export async function getBooks() {
  try {
    const response = await axios.post(
      "http://localhost:5000/graphql", 
      {
        query: `query {
          books {
            id
            name
            author {
              id
              name
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("GraphQL request failed:", error.response?.data || error.message);
    throw error;
  }
}

export async function getBooksByAuthor(authorId) {
  try {
    const response = await axios.post(
      "http://localhost:5000/graphql",
      {
        query: `query GetBooksByAuthor($authorId: Int!) {
                  author(id:$authorId) {
                    id
                    name
                    books {
                      id
                      name
                    }
                  }          
                }`,
        variables: { authorId },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    return response.data.data.author.books;
  } catch (error) {
    console.error("GraphQL author books request failed:", error.response?.data || error.message);
    throw error;
  }
}