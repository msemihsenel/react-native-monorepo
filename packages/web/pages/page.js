

// export default class Page extends Component {
//   getInitialProps({pathname, query}) {        
//     return {custom: 'custom'}; // pass some custom props to component
//   }
//   render() {
//     return (
//       <div>
//         <div>Prop from getInitialProps {this.props.custom}</div>
//       </div>
//     )
//   }
// }
// OR in functional style
const Page = (props) => (
  <div>
    <div>Prop from getInitialProps {props.custom}</div>
  </div>
);
Page.getInitialProps = ({ pathname, query }) => ({
  custom: 'custom' // pass some custom props to component
});
export default Page;
