import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`;
const KEY = '34548907-58c893b07f211f7edddaeb88e';

const PixabayApi = ({ artName = '', page = 1 })=>  {
return  axios
.get(
  `${BASE_URL}?q=${artName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  // `${BASE_URL}?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
)
.then(({ data }) => data.hits);
}

export default PixabayApi;




// return await axios
// .get(
//   `${BASE_URL}?q=${artName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
// )
// .then(({ data }) => data.hits);
// import { Component } from 'react';

// export default class PaxabayAPI extends Component {
//   state = {
//     image : null,
//   }
//   async componentDidMount(value) {
//     fetch(
//       `https://pixabay.com/api/?q=cat&page=1&key=34548907-58c893b07f211f7edddaeb88e&q=yellow+flowers&image_type=photo&orientation=horizontal&per_page=12`
//     )
//       .then(res => res.json())
//       .then(image=>this.setState({ image}));
//   }

//   // componentDidUpdate(prevProps, prevState){
//   //   if(prevProps.)
//   //   console.log('зміна стейту')
//   // }
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }
