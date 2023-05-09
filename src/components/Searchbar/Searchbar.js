// import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState } from 'react';
// import { ImSearch } from 'react-icons/im';
import {SearchFormInput,SearchFormButtonLabel, SearchFormButton, SearchForm, Searchbars } from './Searchbar.styled'

//  class Searchbar extends Component {
//   state = {
//     artName: '',
//   };
//   handleNameChange = event => {
//     this.setState({ artName: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.artName.trim() === '') {
//       return toast('Enter a name');
//     }
//     this.props.onSubmit(this.state.artName);
//     this.setState({ artName: '' });
//   };

//   render() {
//     return (
//       <Searchbars>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchFormButton type="submit">
//             <SearchFormButtonLabel></SearchFormButtonLabel>
//           </SearchFormButton>

//           <SearchFormInput
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.artName}
//             onChange={this.handleNameChange}
//           />
//         </SearchForm>
//       </Searchbars>
//     );
//   }
// }

export default function Searchbar({onSubmit}){
const [artName, setArtName] = useState('');
const handleNameChange = event => {
    setArtName( event.currentTarget.value.toLowerCase() );
  };
const   handleSubmit = event => {
    event.preventDefault();

    if (artName.trim() === '') {
      return toast('Enter a name');
    }
    onSubmit(artName);
    setArtName( '' );
  };



return (
      <Searchbars>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel></SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={artName}
            onChange={handleNameChange}
          />
        </SearchForm>
      </Searchbars>
    );

}











Searchbar.protoType = {
  artName: PropTypes.string,
};

